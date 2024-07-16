import React from "react";
import * as Storage from "@spica-devkit/storage";
import useErrorHandler from "./useErrorHandler";

export default function useStorage() {
  const withErrorHandler = useErrorHandler();

  const jwt = localStorage.getItem("token") || "";

  Storage.initialize({
    identity: jwt,
    publicUrl: process.env.REACT_APP_API_URL,
  });

  const insertData = async (data: File, name?: string) => {
    const res = await Storage.insert(data, (progress) => {
      const loadedPercentage = (progress.loaded / progress.total) * 100;
      // console.log(`Upload progress: %${loadedPercentage}`);
      sessionStorage.setItem("percentage-" + name, loadedPercentage.toString());
    });
    console.log("complete storage insert data: ", res);
    return res;
  };

  const getData = async (dataId: string) => {
    return await Storage.get(dataId);
  };

  const getAll = async () => {
    return await Storage.getAll();
  };

  const download = async (dataId: string): Promise<Blob> => {
    const blob = (await Storage.download(dataId, {
      onDownloadProgress: (progress) => {
        const loadedPercentage = (progress.loaded / progress.total) * 100;
        // console.log(`Download progress: %${loadedPercentage}`);
        sessionStorage.setItem("download-percentage", loadedPercentage.toString());
      },
    })) as Promise<Blob>;
    return blob;
  };

  const remove = async (dataId: string) => {
    return await Storage.remove(dataId);
  };

  return {
    insertData: withErrorHandler(insertData),
    getData: withErrorHandler(getData),
    getAll: withErrorHandler(getAll),
    download: withErrorHandler(download),
    remove: withErrorHandler(remove),
  };
}
