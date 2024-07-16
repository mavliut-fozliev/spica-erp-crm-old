import axios from "axios";
import { obj } from "types/types";

export type TMialBlob = { blobName: string; blob: Blob };

export async function sendMail(
  sendData: obj,
  files?: TMialBlob[] // for lightweight files
) {
  const formData = new FormData();

  if (files) {
    files.forEach((file, index) => {
      formData.append(`file${index}`, file.blob, file.blobName);
    });
  }

  Object.entries(sendData).forEach(([key, value]) => {
    formData.append(key, value?.toString("utf-8"));
  });

  const jwt = localStorage.getItem("token") || "";
  formData.append("identity", jwt);

  const publicUrl = process.env.REACT_APP_API_URL;

  const config: obj = {
    data: formData,
    method: "post",
    url: `${publicUrl}/fn-execute/send-mail`,
  };

  return axios.request(config);
}
