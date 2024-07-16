import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import MainButton from "../MainButton/MainButton";
import { CircularProgress } from "@mui/material";
import styles from "./DownloadButton.module.scss";
import { fileInBucket } from "components/inputs/FileInput/FileInput";
import useStorage from "services/api/useStorage";

export default function DownloadButton({ fileUrlArray, single, style }: { fileUrlArray: fileInBucket[]; single?: boolean; style?: object }) {
  const [progress, setProgress] = useState(100);

  const storageService = useStorage();

  const fileAmount = fileUrlArray.reduce((acc, object) => {
    if (!object["deleted"]) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const downloadFromLinkAndRename = (link?: string) => {
    if (link) {
      const id = link.match(/\/o\/([^?]+)/)?.[1] || null;
      if (id) {
        storageService.getData(id).then((file) => {
          const xhr = new XMLHttpRequest();

          xhr.open("GET", link, true);
          xhr.responseType = "blob";

          xhr.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
              const percentComplete = (event.loaded / event.total) * 100;
              // console.log(`Download Progress: ${percentComplete.toFixed(2)}%`);
              setProgress(Math.round(percentComplete));
            }
          });

          xhr.onload = function () {
            if (xhr.status === 200) {
              const blob = xhr.response;
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = file.name?.split("/")?.at(-1) || "noName";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
              // console.log("Download complete!");
              setProgress(100);
            }
          };

          xhr.onerror = function (error) {
            console.error("Error downloading file:", error);
          };

          xhr.send();
        });
      }
    }
  };

  const handleCLick = async (e: any) => {
    e.stopPropagation();
    setProgress(0);

    if (single) {
      downloadFromLinkAndRename(fileUrlArray?.at(-1)?.storage);
    } else {
      let interval = 0;
      for (let fileUrl of fileUrlArray) {
        if (!fileUrl.deleted) {
          setTimeout(() => {
            downloadFromLinkAndRename(fileUrl.storage);
          }, 500 * interval);
          interval += 1;
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
  };

  return (
    <div>
      {progress === 100 ? (
        fileAmount > 0 && !single ? (
          <MainButton
            onClick={handleCLick}
            icon={<FiDownload style={{ width: "20px", height: "20px" }} />}
            color="success"
            width={"50px"}
            height={"30px"}
            style={style}
          >
            {fileAmount && <p style={{ marginLeft: "5px" }}>{fileAmount}</p>}
          </MainButton>
        ) : fileAmount > 0 && single ? (
          <MainButton
            onClick={handleCLick}
            icon={<FiDownload style={{ width: "20px", height: "20px" }} />}
            color="success"
            width={"30px"}
            height={"30px"}
            style={style}
          ></MainButton>
        ) : (
          <MainButton
            onClick={handleCLick}
            icon={<FiDownload style={{ width: "20px", height: "20px" }} />}
            width={"30px"}
            height={"30px"}
            style={style}
            disabled={true}
          ></MainButton>
        )
      ) : (
        <div className={styles["progress-box"]} style={{ width: "30px", height: "30px", position: "relative", marginLeft: "2px", marginRight: "2px" }}>
          <CircularProgress
            className={styles["progress"]}
            variant="determinate"
            value={progress}
            style={{
              width: "30px",
              height: "30px",
              transition: "0.1s ease",
            }}
          />
          <p
            className={styles["progress-text"]}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30px",
              height: "30px",
              fontSize: "0.9rem",
              alignSelf: "center",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          >
            {progress}
          </p>
        </div>
      )}
    </div>
  );
}
