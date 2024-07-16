import React, { useEffect, useState } from "react";
import styles from "./OpenFileInNewButton.module.scss";
import MainButton from "../MainButton/MainButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useInstantStore } from "store/instantStore";
import CircularProgress from "components/progress/CircularProgress/CircularProgress";
import { fileInBucket } from "components/inputs/FileInput/FileInput";
import useStorage from "services/api/useStorage";

export default function OpenFileInNewButton({ fileObj }: { fileObj: fileInBucket | undefined }) {
  const instantStore = useInstantStore();

  const storageService = useStorage();

  const [openCircular, setOpenCircular] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handleClickOpenInNew = () => {
    instantStore.setIsLoading(true);
    if (!fileObj) return;

    const fileId = fileObj.storage.match(/\/o\/([^?]+)/)?.[1] ?? "";

    storageService.getData(fileId).then((file) => {
      const format = file.name.split(".")?.at(-1) || "";
      const src = fileObj.storage || "";

      const getViewElement = async () => {
        if (["gif", "jpg", "jpeg", "png", "svg", "webp"].includes(format)) {
          return `<div><img src="${src}"/></div>`;
        } else if (format === "docx" || format === "xlsx") {
          return `<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${src}" width="100%" height="100%" frameborder="0"></iframe>`;
        } else if (format === "pdf") {
          instantStore.setIsLoading(false);
          setOpenCircular(true);
          const blob = await storageService.download(fileId);
          const customSrc = URL.createObjectURL(blob);
          return `<iframe src="${customSrc}" width="100%" height="100%" frameborder="0"></iframe>`;
        } else {
          return '<div style="color: red; font-size: 2rem">UNKNOWN FILE FORMAT</div>';
        }
      };

      getViewElement().then((viewElement) => {
        const newTab = window.open("", "_blank");
        if (newTab) {
          newTab.document.body.innerHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>body {margin: 0}</style>
                  <title>${file.name.split("/")?.at(-1)}</title>
                </head>
                <body>
                  ${viewElement}
                </body>
                </html>
              `;
        }
        instantStore.setIsLoading(false);
      });
    });
  };

  function onCircularOpen() {
    if (openCircular) {
      let intervalId: NodeJS.Timer;
      intervalId = setInterval(() => setPercentage(Number(sessionStorage.getItem("download-percentage"))), 100);
      return intervalId;
    }
  }

  function onDownloadComplete(intervalId: NodeJS.Timer) {
    if (percentage >= 100) {
      setOpenCircular(false);
      clearInterval(intervalId);
      setPercentage(0);
      sessionStorage.removeItem("download-percentage");
    }
  }

  useEffect(() => {
    const intervalId = onCircularOpen();
    if (intervalId) {
      onDownloadComplete(intervalId);
    }
  }, [openCircular, percentage]);

  return (
    <div className={styles["box"]}>
      <MainButton width="30px" height="30px" onClick={() => handleClickOpenInNew()} disabled={!fileObj || fileObj.deleted}>
        <OpenInNewIcon style={{ width: "20px", height: "20px" }} />
      </MainButton>
      <CircularProgress open={openCircular} percentage={percentage} />
    </div>
  );
}
