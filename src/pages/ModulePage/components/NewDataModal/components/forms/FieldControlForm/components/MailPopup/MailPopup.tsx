import MainButton from "components/buttons/MainButton/MainButton";
import Text from "components/inputs/Text/Text";
import TextArea from "components/inputs/TextArea/TextArea";
import ModalWindow from "components/modals/ModalWindow/ModalWindow";
import { pageIds } from "consts/config/pages/pages";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import { useModulePageStore } from "pages/ModulePage/modulePageStore";
import React, { useEffect, useState } from "react";
import { TMialBlob, sendMail } from "services/functions/Mail/sendMail";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { useInstantStore } from "store/instantStore";
import { useUserStore } from "store/userStore";
import { obj } from "types/types";
import styles from "./MailPopup.module.scss";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import useStorage from "services/api/useStorage";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function MailPopup({ open, setOpen, formBlob }: { open: boolean; setOpen: (open: boolean) => void; formBlob: TMialBlob | undefined }) {
  const instantStore = useInstantStore();
  const userStore = useUserStore();

  const storageService = useStorage();

  const { handleUpdateData } = useDataMethods();

  const { formData } = useNewDataModalStore();
  const { selectedArrayIndex } = useModulePageStore();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const [receiver, setReceiver] = useState(() => {
    const projectId = getIdValueFromObject(formData.unit?.project);
    const project = getPageDocument({ pageId: pageIds.Projects, documentId: projectId });
    const customerId = getIdValueFromObject(project?.customer);
    const customerPageData = getPageDocuments({ pageId: pageIds.Customers });
    const customerMail = customerPageData.find((customer: obj) => getIdValueFromObject(customer) === customerId)?.email;
    return customerMail;
  });

  const [ccReceivers, setCcReceivers] = useState<string[]>([]);

  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [title, setTitle] = useState("Saha Kontrol Formu");
  const [text, setText] = useState("şablon yazı");

  async function sendFieldControlFormMail() {
    if (!formBlob) return;
    instantStore.setIsLoading(true);

    const file = new File([formBlob.blob], formBlob.blobName, { type: formBlob.blob.type });
    const fileId = await storageService.insertData(file, file.name).then((res) => res._id);

    const data = {
      to: receiver,
      cc: ccReceivers.filter((cc) => cc !== ""),
      title: title,
      text: text,
      fileId,
    };

    sendMail(data)
      .then(() => {
        const updatedInformation = formData.information.map((info: obj, index: number) =>
          index === selectedArrayIndex ? { ...info, sender_identifier: userStore.identifier } : info
        );
        handleUpdateData({
          document: { ...formData, information: updatedInformation },
        });
        console.log("mail gönderildi!");
        instantStore.setShowToast({ clue: "Mail gönderildi" });
      })
      .catch((error) => {
        console.error("mail gönderilemedi:\n", error);
        instantStore.setShowToast({ clue: "Mail gönderilemedi", type: "error" });
      })
      .finally(() => {
        setOpen(false);
        instantStore.setIsLoading(false);
      });
  }

  useEffect(() => {
    const isValid = ccReceivers.every((cc) => emailRegex.test(cc));
    setIsValid(isValid);
  }, [ccReceivers]);

  return (
    <ModalWindow open={open} handleClose={() => setOpen(false)} handleSave={sendFieldControlFormMail} saveButtonText="Gönder" title="Mail" disabled={!isValid}>
      <Text label="Alıcı" name="receiver" value={receiver} onChange={(e: obj) => setReceiver(e.target.value)} />
      <div style={{ marginTop: "5px", marginBottom: "20px" }}>
        <div className={styles["title"]} style={{ marginBottom: "10px" }}>
          CC
        </div>
        {ccReceivers.map((ccReceiver, index) => (
          <Text
            key={index.toString()}
            name={`receiver${index}`}
            value={ccReceiver}
            onChange={(e: obj) => setCcReceivers(ccReceivers.map((cc, i) => (i === index ? e.target.value : cc)))}
            error={!emailRegex.test(ccReceiver)}
          />
        ))}
        <div style={{ display: "flex" }}>
          <MainButton width="30px" height="30px" onClick={() => setCcReceivers([...ccReceivers, ""])}>
            +
          </MainButton>
          <MainButton width="30px" height="30px" onClick={() => setCcReceivers(ccReceivers.slice(0, ccReceivers.length - 1))}>
            -
          </MainButton>
        </div>
      </div>
      <Text label="Konu" name="title" value={title} onChange={(e: obj) => setTitle(e.target.value)} />
      <label className={styles["title"]}>Mesaj</label>
      <TextArea name="text" value={text} onChange={(e: obj) => setText(e.target.value)} />
    </ModalWindow>
  );
}
