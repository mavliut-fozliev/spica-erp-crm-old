import React from "react";
import { TSingleFile, useNewDataModalStore } from "../newDataModalStore";
import { useInstantStore } from "../../../../../store/instantStore";
import useStorage from "services/api/useStorage";
import useGetProperties from "hooks/useGetProperties";
import { obj } from "types/types";

export function useAddFileFromStorageToBucket() {
  const instantStore = useInstantStore();

  const storageService = useStorage();

  const { formData } = useNewDataModalStore();

  const { getFieldFeatures, getItemInternalFieldFeature } = useGetProperties();

  const renameFiles = (files: File[], path: string) => {
    return files.map((file: File) => {
      const newName = `${path}/${file.name}`;
      return new File([file], newName, { type: file.type });
    });
  };

  async function insertToStorage(files: File[], path: string) {
    const fileArray: File[] = renameFiles(files, path);
    return await Promise.all(fileArray.map(async (file: File) => await storageService.insertData(file, path.slice(1)).then((file) => file.url)));
  }

  async function patchBucket(name: string, files: TSingleFile, pageTitle: string, initialObject?: obj) {
    const fieldFeatures = getFieldFeatures(pageTitle);
    const currentFieldFeatures = fieldFeatures[name];

    let dataObject: obj = initialObject ? { ...initialObject } : { ...formData };
    try {
      await insertToStorage(files.content, `/${name}`).then((urlArrays) => {
        urlArrays?.forEach((urlArray) => {
          if (dataObject.hasOwnProperty(name)) {
            if (!currentFieldFeatures?.more_than_one_file) {
              dataObject[name] = dataObject[name].map((obj: object) => ({ ...obj, deleted: true }));
            }
            dataObject[name].push({ storage: urlArray, deleted: false });
          } else {
            if (files.parent && files.arrayIndex !== undefined) {
              const propName = name.split("~").at(-1) || "";

              const internalFieldFeature = getItemInternalFieldFeature(pageTitle, files.parent, propName);

              if (dataObject[files.parent]?.[files.arrayIndex]?.[propName!] !== undefined) {
                if (!internalFieldFeature?.more_than_one_file) {
                  dataObject[files.parent][files.arrayIndex][propName!] = dataObject[files.parent][files.arrayIndex][propName!].map((obj: object) => ({
                    ...obj,
                    deleted: true,
                  }));
                }
                dataObject[files.parent][files.arrayIndex][propName!].push({ storage: urlArray, deleted: false });
              } else {
                dataObject[files.parent][files.arrayIndex][propName!] = [{ storage: urlArray, deleted: false }];
              }
            } else {
              dataObject[name] = [{ storage: urlArray, deleted: false }];
            }
          }
        });
      });
    } catch (error) {
      console.error("Error when try to add file url from storage to bucket:", error);
      instantStore.setShowToast({ clue: "Dosya Yüklerken Hata Oluştu, Lütfen Sayfayı Yenileyin", type: "error" });
    } finally {
      return dataObject;
    }
  }

  return patchBucket;
}
