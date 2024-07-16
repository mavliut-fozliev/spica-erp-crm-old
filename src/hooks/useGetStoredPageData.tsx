import React from "react";
import { usePageStore } from "store/pageStore";
import { TDocument, TsinglePageData } from "types/types";

export default function useGetStoredPageData() {
  const pageStore = usePageStore();

  const getSinglePageData = (pageId: string): TsinglePageData | undefined => {
    const resolvedPageId = pageId === "current" ? pageStore.page._id : pageId;

    const pageObj = pageStore.pagesData[resolvedPageId];

    if (!pageObj) {
      console.log(`%cpage with "${resolvedPageId}" id not found`, "color: red");
      return;
    }
    return pageObj;
  };

  function getPageDocuments(props: { pageId: "current" | string; section?: string }): TDocument[] {
    const { pageId, section } = props;

    const pageObj = getSinglePageData(pageId);
    if (!pageObj) return [];

    if (section) {
      if (!pageObj[section]) {
        console.log(`%csection "${section}" not found`, "color: red");
        return [];
      }
      return pageObj[section];
    }

    return Object.values(pageObj).flat();
  }

  function getPageDocument(props: { pageId: "current" | string; documentId: string }): TDocument | undefined {
    const { pageId, documentId } = props;

    const pageObj = getSinglePageData(pageId);
    if (!pageObj) return [];

    const pageData = Object.values(pageObj).flat();
    const document = pageData.find((row) => row._id === documentId);
    return document;
  }

  return { getPageDocuments, getPageDocument };
}
