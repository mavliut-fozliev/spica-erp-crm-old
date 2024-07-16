import MainButton from "components/buttons/MainButton/MainButton";
import React, { useEffect, useState } from "react";
import styles from "./CreateDocxButton.module.scss";
import LineProgress from "components/progress/LineProgress/LineProgress";
import { useInstantStore } from "store/instantStore";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import { useAddFileFromStorageToBucket } from "pages/ModulePage/components/NewDataModal/hooks/useAddFileFromStorageToBucket";
import { obj } from "types/types";
import { RotatingLines } from "react-loader-spinner";
import useCreateDocxOffers from "./hooks/pageSpecificHooks/useCreateDocxOffers";
import { usePageStore } from "store/pageStore";
import useCreateDocxContracts from "./hooks/pageSpecificHooks/useCreateDocxContracts";
import useCreateDocxMaintenanceContract from "./hooks/pageSpecificHooks/useCreateDocxMaintenanceContract";
import DownloadButton from "components/buttons/DownloadButton/DownloadButton";

export type TCreateDocxFunction = () => Promise<File>;

type TPageSpecificData = {
  fileName: string;
  createFunctions: TCreateDocxFunction;
  buttonTitle: string;
  existInfo: string;
  notFoundInfo: string;
  singleFile?: boolean;
};

export default function CreateDocxButton({ pageTitle, handleBeforeSave, docxData }: { pageTitle: string; handleBeforeSave: () => void; docxData?: obj }) {
  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const { formData, setFormData, uploadingFiles, isDisableSaveButton } = useNewDataModalStore();

  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showElement, setShowElement] = useState<"button" | "circle" | "line">("button");

  const [fileLastLink, setFileLastLink] = useState(false);

  const pageSpecificData: { [key: string]: TPageSpecificData } = {
    "Offers": {
      fileName: "proposed_solution",
      createFunctions: useCreateDocxOffers(),
      buttonTitle: "Teklif Dosyası Oluştur ve Kaydet",
      existInfo: "Teklif Dosyası Mevcut",
      notFoundInfo: "Teklif Dosyası Mevcut Değil",
    },
    "Contracts": {
      fileName: "agreement",
      createFunctions: useCreateDocxContracts({ docxData: docxData || {} }),
      buttonTitle: "Sözleşme Dosyası Oluştur ve Kaydet",
      existInfo: "Sözleşme Dosyası Mevcut",
      notFoundInfo: "Sözleşme Dosyası Mevcut Değil",
      singleFile: true,
    },
    "MaintenanceContracts": {
      fileName: "maintenance_contract",
      createFunctions: useCreateDocxMaintenanceContract(),
      buttonTitle: "Sözleşme Dosyası Oluştur ve Kaydet",
      existInfo: "Sözleşme Dosyası Mevcut",
      notFoundInfo: "Sözleşme Dosyası Mevcut Değil",
    },
  };
  const pageData = pageSpecificData[pageTitle];

  const fileName = pageData.fileName;

  const existFile = formData[fileName]?.at(-1);

  const isThereFile = existFile?.deleted === false;

  const addFileFromStorageToBucket = useAddFileFromStorageToBucket();

  function handleClick() {
    instantStore.setDisableAnyAction(true);
    setIsButtonClicked(true);
    setShowElement("circle");

    pageData
      .createFunctions()
      .then((file: File) => {
        setShowElement("line");

        addFileFromStorageToBucket(fileName, { content: [file] }, pageStore.page.title, formData).then((newData: any) => {
          setFormData(newData);
          setFileLastLink(newData[fileName].at(-1).storage);
        });

        instantStore.setShowToast({ clue: "Dosya Oluşturuldu" });
      })
      .catch((error) => {
        console.error("Error when try to create docx file:", error);
        instantStore.setDisableAnyAction(false);
        setShowElement("button");
        instantStore.setShowToast({ clue: "Dosya Oluşturulurken Hata Oluştu", type: "error" });
      });
  }

  useEffect(() => {
    let intervalId;
    if (isButtonClicked) {
      intervalId = setInterval(() => {
        const percentage = Number(sessionStorage.getItem(`percentage-${fileName}`));
        setLoadingPercentage(percentage);
      }, 100);
    } else {
      sessionStorage.setItem(`percentage-${fileName}`, "0");
      setLoadingPercentage(0);
      clearInterval(intervalId);
    }
  }, [isButtonClicked]);

  useEffect(() => {
    if (loadingPercentage === 100) {
      setShowElement("button");
      instantStore.setDisableAnyAction(false);
      instantStore.setShowToast({ clue: "Dosya Yüklendi" });
    }
  }, [loadingPercentage]);

  useEffect(() => {
    if (existFile?.storage === fileLastLink) {
      handleBeforeSave();
    }
  }, [formData, fileLastLink]);

  const lineElement = (
    <div className={styles["line-box"]}>
      <LineProgress percentage={loadingPercentage} width="100%" />
    </div>
  );

  const circleElement = (
    <div className={styles["circle"]}>
      <RotatingLines strokeColor={"rgb(132, 90, 223)"} strokeWidth="3" width="34" />
    </div>
  );

  const buttonElement = (
    <div className={styles["button-box"]}>
      <div className={styles["button"]}>
        {pageData.singleFile && !!formData[fileName] ? (
          <div></div>
        ) : (
          <MainButton
            height="40px"
            width="fit-content"
            variant="outlined"
            color="success"
            onClick={handleClick}
            disabled={isButtonClicked || Boolean(uploadingFiles.length) || isDisableSaveButton}
          >
            {pageData.buttonTitle}
          </MainButton>
        )}
      </div>
      <div className={styles["text"]} style={{ color: isThereFile ? "green" : "red" }}>
        {isThereFile ? pageData.existInfo : pageData.notFoundInfo}
      </div>
      {isThereFile && <DownloadButton fileUrlArray={formData[fileName]} single />}
    </div>
  );

  switch (showElement) {
    case "button":
      return buttonElement;
    case "circle":
      return circleElement;
    case "line":
      return lineElement;
  }
}
