import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { CircularProgress, Input } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./FileInput.module.scss";
import MainButton from "../../buttons/MainButton/MainButton";
import LineProgress from "../../progress/LineProgress/LineProgress";
import BackupIcon from "@mui/icons-material/Backup";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import PersonIcon from "@mui/icons-material/Person";
import CloudIcon from "@mui/icons-material/Cloud";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadButton from "components/buttons/DownloadButton/DownloadButton";
import OpenFileInNewButton from "components/buttons/OpenFileInNewButton/OpenFileInNewButton";

export type fileInBucket = {
  deleted: boolean;
  storage: string;
};

export default function FileInput({
  name,
  value,
  files,
  transferFiles,
  percentage,
  multiple,
  label,
  fileExist,
  deleteFile,
  error,
  hide = false,
  accept,
  disabled,
  type = "normal",
  contentSize = 100,
}: {
  name: string;
  value: fileInBucket[];
  files: File[];
  transferFiles: (files: File[]) => void;
  percentage: number;
  multiple: boolean;
  label: string;
  fileExist: boolean | undefined;
  deleteFile: () => void;
  error?: boolean;
  hide?: boolean;
  accept?: "img";
  disabled?: boolean;
  type?: "mini" | "normal" | "visible";
  contentSize?: number;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const lastFile = fileExist ? value?.at(-1)?.storage : undefined;

  const fileName = files[0]?.name;

  const getText = () => {
    if (!fileExist) {
      return accept === "img" ? "" : "Dosya seçili değil";
    }

    if (files.length > 1) {
      return `${files.length} adet dosya`;
    }
    if (files.length === 1) {
      return fileName;
    }

    return accept === "img" ? "Fotoğraf mevcut" : "Kayıtlı dosya mevcut";
  };

  const handleSubmitAttachments = (e: any) => {
    const files: File[] = Array.from(e.target.files);
    transferFiles(files);
    setIsLoading(true);
  };

  useEffect(() => {
    if (percentage > 0 && percentage < 100) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [percentage]);

  return type === "normal" ? (
    <div style={{ display: hide ? "none" : "initial" }}>
      <label className={styles["label"]}>{label}</label>
      {isLoading ? (
        <div style={{ marginBottom: "11px" }}>
          <LineProgress percentage={percentage} />
        </div>
      ) : (
        <div className={styles[error ? "container-error" : "container"]}>
          <div className={styles["input-box"]}>
            <label
              htmlFor={name}
              className={styles[accept === "img" ? "input-button-img" : "input-button"]}
              style={disabled ? { pointerEvents: "none", opacity: 0.6 } : {}}
            >
              {accept === "img" ? "Fotoğraf yüklemek için tıklayınız" : disabled ? "Dosya seçilemez" : "Dosya seçin"}
            </label>
            <Input
              name={name}
              type="file"
              inputProps={{ multiple: multiple, accept: accept === "img" ? "image/*" : "*/*" }}
              id={name}
              className={styles["input"]}
              onChange={handleSubmitAttachments}
              disabled={disabled}
            />
            <p className={styles["file-text"]}>{getText()}</p>
          </div>
          <div className={styles["buttons"]}>
            <OpenFileInNewButton fileObj={value?.at(-1)} />
            <DownloadButton fileUrlArray={value ?? []} single />
            <MainButton
              variant="outlined"
              color="danger"
              disabled={!fileExist || disabled}
              onClick={deleteFile}
              icon={<DeleteForeverIcon style={{ width: "20px", height: "20px" }} />}
              style={{
                height: "30px",
                width: "30px",
              }}
            ></MainButton>
          </div>
        </div>
      )}
    </div>
  ) : type === "mini" ? (
    <div style={{ display: hide ? "none" : "initial" }}>
      {isLoading ? (
        <div className={styles["input-box-mini"]}>
          <label htmlFor={name} className={styles["input-button-mini"]} style={disabled ? { pointerEvents: "none", opacity: 0.2 } : {}}>
            <CircularProgress
              className={styles["circular-progress"]}
              variant="determinate"
              value={percentage}
              style={{
                width: "30px",
                height: "30px",
                transition: "0.1s ease",
              }}
            />
          </label>
        </div>
      ) : (
        <div className={styles["input-box-mini"]}>
          <label htmlFor={name} className={styles["input-button-mini"]} style={disabled ? { pointerEvents: "none", opacity: 0.2 } : {}}>
            {fileExist ? (
              <CloudDoneIcon style={{ width: "100%", color: "#fff", paddingTop: "2px" }} />
            ) : (
              <BackupIcon style={{ width: "100%", color: "#fff", paddingTop: "2px" }} />
            )}
          </label>
          <Input
            name={name}
            type="file"
            inputProps={{ multiple: multiple, accept: accept === "img" ? "image/*" : "*/*" }}
            id={name}
            className={styles["input"]}
            onChange={handleSubmitAttachments}
            disabled={disabled}
          />
        </div>
      )}
    </div>
  ) : (
    <div className={styles["visible-box"]}>
      <Input
        name={name}
        type="file"
        inputProps={{ accept: "image/*" }}
        id={name}
        className={styles["input"]}
        onChange={handleSubmitAttachments}
        disabled={disabled}
      />
      <div className={styles["visible-content"]} style={{ width: `${contentSize}px`, height: `${contentSize}px` }}>
        {fileExist ? (
          <img src={lastFile} style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
        ) : (
          <PersonIcon style={{ width: "100%", height: "100%" }} />
        )}
      </div>
      <div className={styles["visible-buttons"]}>
        <div className={styles["visible-input"]}>
          <label htmlFor={name} style={{ cursor: "pointer" }}>
            {isLoading ? (
              <CloudIcon className={styles["visible-loading-cloud"]} />
            ) : fileExist ? (
              <CloudDoneIcon style={{ width: "20px", height: "20px" }} />
            ) : (
              <BackupIcon style={{ width: "20px", height: "20px" }} />
            )}
          </label>
        </div>
        <MainButton
          variant="outlined"
          color="danger"
          disabled={!fileExist || disabled}
          onClick={deleteFile}
          icon={<DeleteForeverIcon style={{ width: "20px", height: "20px" }} />}
          style={{
            height: "30px",
            width: "30px",
          }}
        ></MainButton>
      </div>
    </div>
  );
}
