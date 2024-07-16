import React, { useRef, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./PhotoInput.module.scss";
import MainButton from "../../../../../../../../components/buttons/MainButton/MainButton";
import DownloadButton from "../../../../../../../../components/buttons/DownloadButton/DownloadButton";
import useClickOutside from "../../../../../../../../hooks/useClickOutside";
import StorageArrayTypeInput from "../../../typeInputs/StorageArrayTypeInput/StorageArrayTypeInput";
import { TFile } from "../../../../newDataModalStore";
import { usePageStore } from "../../../../../../../../store/pageStore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { fileInBucket } from "components/inputs/FileInput/FileInput";

export default function PhotoInput({
  name,
  files,
  setFiles,
  fileUrlArray,
  fileExist,
  deleteFile,
  parent,
  arrayIndex,
  menuLocation,
  style,
  disabled,
}: {
  name: string;
  files: TFile;
  setFiles: (state: TFile) => void;
  fileUrlArray: fileInBucket[];
  fileExist: boolean | undefined;
  deleteFile: () => void;
  parent?: string;
  arrayIndex?: number;
  menuLocation?: "left" | "right" | "middle";
  style?: { [key: string]: any };
  disabled?: boolean;
}) {
  const pageStore = usePageStore();
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);
  const boxRef = useRef(null);

  const handleClickOutside = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
  };

  useClickOutside([menuRef, boxRef], handleClickOutside);

  return (
    <div style={style}>
      <div className={styles["container"]}>
        <div
          className={styles[menuLocation === "left" ? "input-box-left" : menuLocation === "right" ? "input-box-right" : "input-box"]}
          ref={boxRef}
          style={{ display: openMenu ? "flex" : "none", translate: openMenu ? "0" : "0 5px" }}
        >
          <div style={{ marginLeft: "3px" }}>
            <StorageArrayTypeInput
              property={{ title: name }}
              parent={parent}
              arrayIndex={arrayIndex}
              files={files}
              setFiles={setFiles}
              bucketId={pageStore.page._id}
              requiredProperties={[]}
              accept="img"
              type={"mini"}
              disabled={disabled}
            />
          </div>
          <div style={{ marginLeft: "1px" }}>
            <MainButton
              variant="outlined"
              color="danger"
              disabled={!fileExist || disabled}
              onClick={deleteFile}
              icon={<RiDeleteBinLine style={{ width: "18px", height: "18px" }} />}
              width="30px"
              height="30px"
            ></MainButton>
          </div>
          <div>
            <DownloadButton fileUrlArray={fileUrlArray || []} single />
          </div>
          <div>
            <MainButton
              width="30px"
              height="30px"
              color="secondary"
              disabled={!fileExist}
              onClick={() => {
                const src = fileUrlArray?.at(-1)?.storage || "";
                const newTab = window.open("", "_blank");
                if (newTab) {
                  newTab.document.body.innerHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>New Tab</title>
                    </head>
                    <body>
                      <div><img src="${src}"/></div>
                    </body>
                    </html>
                  `;
                }
              }}
              icon={<OpenInNewIcon style={{ width: "18px", height: "18px" }} />}
            ></MainButton>
          </div>
        </div>
        <div className={styles["triangle"]} style={{ display: openMenu ? "flex" : "none" }}></div>
      </div>
      <div className={styles["menu-icon"]} onClick={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)} ref={menuRef}>
        {fileExist ? (
          <PhotoCameraIcon style={{ width: "100%", height: "100%", color: "green" }} />
        ) : (
          <AddAPhotoIcon style={{ width: "100%", height: "100%" }} />
        )}
      </div>
    </div>
  );
}
