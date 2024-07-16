import React from "react";
import useData from "services/api/useData";
import { useInstantStore } from "store/instantStore";
import { usePageStore } from "store/pageStore";
import { useModulePageStore } from "../modulePageStore";
import usePresets from "./usePresets";
import { TpagesData, TsinglePageData, obj } from "types/types";
import { convertObjectToString } from "../helpers/convertObjectToString";
import { TDataMethod, TDataMethodCallback, TDataMethodDelete, TDataMethodMultiple } from "../types";

export default function useDataMethods() {
  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const dataService = useData();

  const { setOpenModal, setRowForUpdate, setPresets } = useModulePageStore();

  const getPresets = usePresets();

  const currentPage = pageStore.page;

  const handleOpen = (props?: { isUpdate?: boolean; requiredData?: obj }) => {
    const { isUpdate, requiredData } = props || {};

    if (!isUpdate) {
      const presets = getPresets(requiredData);
      setPresets({ ...presets, status: "exist" });
    }
    setOpenModal(true);
  };

  const handleChangeButton = (row: any) => {
    setRowForUpdate(row);
    handleOpen({ isUpdate: true });
  };

  const handleClose = () => {
    setOpenModal(false);
    setRowForUpdate({});
    setPresets({});
  };

  const nextIteration = (callback: TDataMethodCallback | undefined, newPagesData: TpagesData) => {
    if (callback) {
      callback(newPagesData, {});
    } else {
      pageStore.setPagesData(newPagesData);
    }
  };

  const handleCreateNewData: TDataMethod = (params) => {
    const { document, callback } = params;

    const ObjectId = require("mongo-objectid");
    const objectId = new ObjectId();
    document._id = objectId.hex;

    const bucket = params.bucket || currentPage._id;
    const pagesData = params.pagesData || pageStore.pagesData;
    const section = (document.previous_offer ? "revised" : document.status) || "exist";

    const newPagesData = {
      ...pagesData,
      [bucket]: {
        ...pagesData[bucket],
        [section]: [document, ...pagesData[bucket][section]],
      },
    };

    const sendData: any = { _id: document._id };
    for (const prop in pageStore.pageBuckets[bucket].properties) {
      if (pageStore.pageBuckets[bucket].properties.hasOwnProperty(prop)) {
        sendData[prop] = document[prop];
      }
    }

    dataService.insertBucketData(bucket, convertObjectToString(sendData)).catch((e) => {
      console.log("error: ", e);
      instantStore.setShowToast({ clue: "Hata, lütfen sayfayı yenileyin", type: "error" });
    });

    nextIteration(callback, newPagesData);
  };

  const handleMultipleCreate: TDataMethodMultiple = (params) => {
    const { documents } = params;

    const lastCallback = params.callback;
    const bucket = params.bucket || currentPage._id;

    let pagesData = params.pagesData || pageStore.pagesData;

    if (!documents.length) {
      nextIteration(lastCallback, pagesData);
      return;
    }

    const recursiveCreate = (index: number, localPagesData: TpagesData) => {
      const newIndex = index + 1;
      const notLast = newIndex !== documents.length;

      handleCreateNewData({
        document: documents[index],
        pagesData: localPagesData,
        bucket,
        callback: notLast ? (newPagesData) => recursiveCreate(newIndex, newPagesData) : lastCallback,
      });
    };

    recursiveCreate(0, pagesData);
  };

  const handleUpdateData: TDataMethod = (params) => {
    const { document, callback } = params;
    const bucket = params.bucket || currentPage._id;
    const pagesData = params.pagesData || pageStore.pagesData;

    const oldSection = document.previous_offer
      ? "revised"
      : Object.values(pagesData[bucket])
          .flat()
          .find((row) => row._id === document._id)?.status;
    const newSection = document.previous_offer ? "revised" : document.status;
    let newPagesData;

    if (!newSection || oldSection === newSection || document.previous_offer) {
      newPagesData = {
        ...pagesData,
        [bucket]: {
          ...pagesData[bucket],
          [oldSection]: pagesData[bucket][oldSection].map((row) => (row._id === document._id ? document : row)),
        },
      };
    } else {
      if (oldSection) {
        const previousSectionData = pagesData[bucket][oldSection]?.filter((row) => row._id !== document._id);
        const nextSectionData = [document, ...pagesData[bucket][newSection]];

        newPagesData = {
          ...pagesData,
          [bucket]: {
            ...pagesData[bucket],
            [oldSection]: previousSectionData,
            [newSection]: nextSectionData,
          },
        };
      } else {
        newPagesData = {
          ...pagesData,
          [bucket]: {
            ...pagesData[bucket],
            [newSection]: [document, ...pagesData[bucket][newSection]],
          },
        };
      }
    }

    const sendData: any = {};
    for (const prop in pageStore.pageBuckets[bucket].properties) {
      if (pageStore.pageBuckets[bucket].properties.hasOwnProperty(prop)) {
        sendData[prop] = document[prop];
      }
    }

    dataService.patchBucketData(bucket, document._id!, convertObjectToString(sendData)).catch((e) => {
      console.log("error: ", e);
      instantStore.setShowToast({ clue: "Hata, lütfen sayfayı yenileyin", type: "error" });
    });

    nextIteration(callback, newPagesData);
  };

  const handleMultipleUpdate: TDataMethodMultiple = (params) => {
    const { documents } = params;

    const lastCallback = params.callback;
    const bucket = params.bucket || currentPage._id;

    let pagesData = params.pagesData || pageStore.pagesData;

    if (!documents.length) {
      nextIteration(lastCallback, pagesData);
      return;
    }

    const recursiveUpdate = (index: number, localPagesData: TpagesData) => {
      const newIndex = index + 1;
      const notLast = newIndex !== documents.length;

      handleUpdateData({
        document: documents[index],
        pagesData: localPagesData,
        bucket,
        callback: notLast ? (newPagesData) => recursiveUpdate(newIndex, newPagesData) : lastCallback,
      });
    };

    recursiveUpdate(0, pagesData);
  };

  const handleDeleteData: TDataMethodDelete = (params) => {
    const { dataIds, callback } = params;
    const bucket = params.bucket || currentPage._id;

    const pagesData = params.pagesData || pageStore.pagesData;

    let updatedSections: TsinglePageData = { exist: [] };
    for (const key in pagesData[bucket]) {
      if (pagesData[bucket].hasOwnProperty(key)) {
        updatedSections[key] = pagesData[bucket][key].filter((row) => !dataIds.includes(row._id));
      }
    }

    const newPagesData = {
      ...pagesData,
      [bucket]: updatedSections,
    };

    dataIds.forEach((dataId) => {
      if (dataId) {
        dataService.softDeleteBucketData(bucket, dataId).catch((e) => {
          console.log("error: ", e);
          instantStore.setShowToast({ clue: "Hata, lütfen sayfayı yenileyin", type: "error" });
        });
      }
    });
    instantStore.setShowToast({ clue: "Silindi", type: "alert" });

    nextIteration(callback, newPagesData);
  };

  return { handleOpen, handleChangeButton, handleClose, handleCreateNewData, handleMultipleCreate, handleUpdateData, handleMultipleUpdate, handleDeleteData };
}
