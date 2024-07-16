import { StorageObject } from "@spica-devkit/storage";
import React from "react";
import useStorage from "services/api/useStorage";
import DocxMerger from "docx-merger";
import { generateDocument } from "services/functions/createDocxFromTemplate/createDocxFromTemplate";
import { obj } from "types/types";
import { errorTemplate } from "../consts";

export default function useCreateDocxCommon() {
  const storageService = useStorage();

  const fetchAndCreateFile = async (url: string, filename: string) => {
    const blob = await fetch(url).then((res) => res.blob());
    return new File([blob], filename);
  };

  const fetchFiles = async (templates: StorageObject[], fileNames: string[]) => {
    const urls = templates.map((t) => t.url);

    const filePromises = urls.map((url, index) => fetchAndCreateFile(url, fileNames[index]));
    return Promise.all(filePromises);
  };

  const fetchTemplates = async (templateIds: (string | undefined)[], fileNames: string[]): Promise<File[]> => {
    const promises = templateIds.map((t) => storageService.getData(t || errorTemplate));

    return Promise.all(promises).then(async (templates) => fetchFiles(templates, fileNames));
  };

  const getFileDocxMerger = async (fileArray: File[]) => {
    function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    const arrayBuffers = await Promise.all(fileArray.map((file_1: any) => fileToArrayBuffer(file_1)));

    const mergedArrayBuffer = new DocxMerger({}, arrayBuffers);
    return mergedArrayBuffer;
  };

  const generateFile = (
    mergedArrayBuffer: DocxMerger,
    data: { insertData: obj; insertPhotos: obj; insertPhotoSizes: obj },
    finishFileName: string
  ): Promise<File> => {
    const resultFile = new Promise<File>((resolve, reject) => {
      mergedArrayBuffer.save("blob", async (mergedDocx) => {
        try {
          const finishFileUrl = URL.createObjectURL(mergedDocx);

          const finishFile = await generateDocument(
            finishFileUrl,
            {
              insertText: data.insertData,
              insertPhotos: data.insertPhotos,
              photoSizes: data.insertPhotoSizes,
            },
            finishFileName.replace("/", "_"),
            true
          );

          resolve(finishFile);
        } catch (error) {
          reject(error);
        }
      });
    });

    return resultFile;
  };

  const createDocx = async (props: {
    templateIds: (string | undefined)[];
    fileNames: string[];
    data: { insertData: obj; insertPhotos: obj; insertPhotoSizes: obj };
    finishFileName: string;
  }): Promise<File> => {
    const { templateIds, fileNames, data, finishFileName } = props;

    const templates = await fetchTemplates(templateIds, fileNames);
    const docxMerger = await getFileDocxMerger(templates);
    const finishFile = await generateFile(docxMerger, data, finishFileName);

    return finishFile;
  };

  return createDocx;
}
