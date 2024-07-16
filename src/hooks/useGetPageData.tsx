import React from "react";
import { usePageStore } from "../store/pageStore";
import { useInstantStore } from "../store/instantStore";
import { TDocument, TpagesData } from "../types/types";
import { useUserStore } from "../store/userStore";
import useData from "services/api/useData";

export default function useGetPageData() {
  const instantStore = useInstantStore();
  const pageStore = usePageStore();
  const userStore = useUserStore();

  const dataService = useData();

  const getSectionData = async (section_nameParam?: string, pageParam?: any) => {
    const page = pageParam || pageStore.config.Pages?.find((pg) => pg._id === pageStore.page._id);
    const section_name = section_nameParam || pageStore.section;

    const accessFilter = page.title === "SafetyWalk" ? { access_identifier: userStore.identifier } : {};

    const sectionData: Promise<TDocument[]> = dataService
      .getBucketDataAll(page._id, {
        additionalFilter: {
          status: { $eq: section_name },
          ...accessFilter,
        },
        additionalQueryParams: {
          sort: { _id: -1 },
        },
      })
      .then((data) =>
        page.page_type === "ganttChart"
          ? data.map((row) =>
              row.type === "project"
                ? {
                    ...row,
                    show: true,
                    expanded: false,
                  }
                : {
                    ...row,
                    show: false,
                  }
            )
          : data
      )
      .catch((e) => {
        console.error(`error loading ${section_name} section: `, e);
        instantStore.setShowToast({ clue: "İnternet Bağlantısında Sorun Yaşandı", type: "error" });
        return [];
      });

    return sectionData;
  };

  const getPageData = async (pageParam?: any) => {
    const singlePageData: { exist: any[]; [section: string]: any[] } = { exist: [] };
    const page = pageParam || pageStore.config.Pages.find((pg) => pg._id === pageStore.page._id);

    const sections = pageStore.pageBuckets[page._id]?.properties?.status?.enum?.filter((s: string) => s !== "deleted") || [];

    const sectionPromises = sections.map(async (section: string) => {
      singlePageData[section] = (await getSectionData(section, page)) || [];
    });

    await Promise.all(sectionPromises || []);

    return singlePageData;
  };

  const getModuleData = async (currentPageTitle: string) => {
    try {
      instantStore.setIsLoading(true);
      const currentModule = pageStore.config.PageModules.find((module) => module.pages.find((page: any) => page === currentPageTitle));

      if (!currentModule) return;

      const boundModules = currentModule.bound_modules?.map((bm: string) => pageStore.config.PageModules?.find((module) => module.module_name === bm)) || [];

      const pagesToDownload = [...currentModule?.pages, ...(boundModules?.map((m: any) => m.pages) || [])].flat();

      const pagesData: TpagesData = {};

      const pagePromises = pagesToDownload?.map(async (page: string) => {
        const currentPage = pageStore.config.Pages.find((p) => p.title === page);

        if (currentPage) {
          const pageId = currentPage._id as keyof TpagesData;
          pagesData[pageId] = await getPageData(currentPage);
        }
      });

      Promise.all(pagePromises)
        .then(() => {
          pageStore.setPagesData({ ...pageStore.pagesData, ...pagesData });
        })
        .then(() => instantStore.setIsLoading(false));
    } catch (error) {
      console.error(error);
      instantStore.setIsLoading(false);
    }
  };

  return { getSectionData, getPageData, getModuleData };
}
