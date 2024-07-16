import React, { ReactNode } from "react";
import { usePageStore } from "../../store/pageStore";
import TableData from "./components/pageTypes/TableData/TableData";
import styles from "./ModulePage.module.scss";
import GanttChart from "./components/pageTypes/GanttChart/GanttChart";
import { TBucketProperty, TconfigPage, obj } from "types/types";
import NewDataModal from "./components/NewDataModal/NewDataModal";
import { useModulePageStore } from "./modulePageStore";
import CustomDataView from "./components/pageTypes/CustomDataView/CustomDataView";
import useGetProperties from "hooks/useGetProperties";

export default function ModulePage({ currentPage }: { currentPage: TconfigPage }) {
  const pageStore = usePageStore();

  const { presets } = useModulePageStore();

  const { getProperties, getFieldFeatures } = useGetProperties();

  const properties: TBucketProperty[] = getProperties(currentPage.title);
  const field_features_obj: obj = getFieldFeatures(currentPage.title);

  const field_features = currentPage.field_features || [];
  const requiredProperties = field_features.filter((field: any) => field.required).map((field: any) => field.field_name);

  const currentModule = pageStore.config.PageModules.find((module) => module.pages.find((p: string) => p === currentPage.title));

  const boundModules = currentModule?.bound_modules?.map((bm: string) => pageStore.config.PageModules?.find((module) => module.module_name === bm));

  const moduleDownloaded = currentModule?.pages
    ?.map((page: string) => {
      const modulePage = pageStore.config.Pages.find((p) => p.title === page);
      return modulePage ? pageStore.pagesData.hasOwnProperty(modulePage._id) : false;
    })
    .every((elem: boolean) => elem === true);

  const boundModuleDownloaded = boundModules?.length
    ? boundModules
        ?.map((boundModule: any) =>
          boundModule?.pages
            ?.map((page: string) => {
              const bModulePage = pageStore.config.Pages.find((p) => p.title === page);
              return bModulePage ? pageStore.pagesData.hasOwnProperty(bModulePage._id) : false;
            })
            .every((elem: boolean) => elem === true)
        )
        .every((elem: boolean) => elem === true)
    : true;

  const getPageSections = () => {
    const pageBucket = pageStore.pageBuckets[currentPage._id];
    const status = pageBucket?.properties?.status;
    const sections =
      status?.enum
        ?.filter((s: string) => s !== "deleted")
        ?.filter((s: string) => {
          const sectionFeatures = currentPage.section_features?.[s];
          return !sectionFeatures?.hide_from_page;
        }) || [];
    return sections;
  };

  const pageSectionLabels = getPageSections().map((s: string) => {
    const sectionFeatures = currentPage.section_features?.[s];
    return sectionFeatures?.label;
  });

  const pageTypes: { [key: string]: ReactNode } = {
    table: (
      <TableData
        currentPage={currentPage}
        properties={properties}
        field_features_obj={field_features_obj}
        pageSections={getPageSections()}
        pageSectionLabels={pageSectionLabels}
      />
    ),
    custom: <CustomDataView pageSections={getPageSections()} pageSectionLabels={pageSectionLabels} />,
    ganttChart: <GanttChart currentPage={currentPage} />,
    null: <div></div>,
  };

  return moduleDownloaded && boundModuleDownloaded ? (
    <div className={styles["page"]}>
      {pageTypes[currentPage.page_type || "null"]}
      <NewDataModal
        currentPage={currentPage}
        properties={properties}
        requiredProperties={requiredProperties}
        presets={presets}
        field_features_obj={field_features_obj}
        pageSections={getPageSections()}
        pageSectionLabels={pageSectionLabels}
      />
    </div>
  ) : (
    <div></div>
  );
}
