import React, { useEffect, useRef, useState } from "react";
import styles from "./FieldControlForm.module.scss";
import logo from "assets/schindler-logo.png";
import { TFile, useNewDataModalStore } from "../../../newDataModalStore";
import InputLine from "./components/InputLine/InputLine";
import Radio from "./components/Radio/Radio";
import PhotoInput from "../general/PhotoInput/PhotoInput";
import { useModulePageStore } from "../../../../../modulePageStore";
import { pageIds } from "../../../../../../../consts/config/pages/pages";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import DateInput from "./components/DateInput/DateInput";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";
import { useInstantStore } from "store/instantStore";
import { isoToDate } from "services/functions/helpers/dateHelpers";
import MainButton from "components/buttons/MainButton/MainButton";
import MailIcon from "@mui/icons-material/Mail";
import MailPopup from "./components/MailPopup/MailPopup";
import { TMialBlob } from "services/functions/Mail/sendMail";
import { Tuser } from "pages/Home/types";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import useData from "services/api/useData";

const fieldFormRequiredProps = [
  "date",
  "next_date",
  "control_type",
  "diger_1",
  "diger_2",
  "diger_3",
  "kuyu_1",
  "kuyu_2",
  "kuyu_3",
  "kuyu_4",
  "kuyu_5",
  "kuyu_6",
  "kuyu_7",
  "kuyu_8",
  "kuyu_9",
  "kuyu_10",
  "kuyu_11",
  "kuyu_12",
  "kuyu_13",
  "kuyu_14",
  "kuyu_15",
  "kuyu_16",
  "kuyu_17",
  "kuyu_18",
  "kuyu_19",
  "makine_1",
  "makine_2",
  "makine_3",
  "makine_4",
  "makine_5",
  "makine_6",
  "checkbox",
];

const dataArray = [
  [
    ["kuyu_1", "1 Bitmiş döşemeden kuyu dibi ölçüsü uygun (projeye göre)", "BİTMİŞ DÖŞEMEDEN KUYU DİBİ ÖLÇÜSÜ 150 CM OLACAK"],
    ["kuyu_2", "2 Kuyu ölçüleri uygun (projeye göre)"],
    ["kuyu_3", "3 Seyir mesafesi uygun (projeye göre)"],
    ["kuyu_4", "4 Tüm katlarda bitmiş döşemeden 1m yükseklikte işaret", "BİTMİŞ DÖŞEME KODU BELİRLENECEK VEYA TÜM KATLARDA 1M YÜKSEKLİKTE KONACAK"],
    ["kuyu_5", "5 Kuyu önlerinde bariyer ve uyarı levhaları var", "KUYU ÖNLERİNE BARİYER VE TEKMELİK KONMALI"],
    ["kuyu_6", "6 Kuyu dibinde su yok"],
    ["kuyu_7", "7 Çelik konstrüksiyon, projeye uygun ve boyalı (statik onaylı)", "KAPI ÜSTÜ LENTOLAR BOYANACAK"],
    ["kuyu_8", "8 Kapı boşukları D-planına uygun (kenar ve üst boşluklar)"],
    ["kuyu_9", "9 Makina dairesi ve Kuyu içinde asansöre ait olmayan malzeme yok"],
    ["kuyu_10", "10 Kuyuda ve makine dairesinde havalandırma menfezi açılmış", "SON KAT ÜSTÜNDE 40 X 40 EBATINDA MENFEZ AÇILACAK"],
    ["kuyu_11", "11 Kuyuda ve makine dairesinde havalandırma menfez panjuru var", "45 DERECE SABİT KANATLI ALÜMİNYUM VEYA DEMİR PANJUR TAKILAKACAK"],
    ["kuyu_12", "12 Kuyu hava şartlarından etkilenmeyecek şekilde korunuyor(yağmur, kar, vb)"],
    ["kuyu_13", "13 Kuyu dibi temiz", "KUYU DİBİ TEMİZLENECEK"],
    ["kuyu_14", "14 Kuyu yüzeyleri temiz ve Beyaz boya ile boyanmış", "KUYU YÜZEYLERİ VE KAT DEMİRLERİ TEMİZLENECEK ( RAŞOLA, KALAS, TAHTA)"],
    ["kuyu_15", "15 Kapı bağlantı elemanları hazır ve uygun"],
    ["kuyu_16", "16 Kat kapı ön bölümleri temizlenmiş"],
    ["kuyu_17", "17 Kat butonu için boşluk açılmış"],
    ["kuyu_18", "18 Projeye göre kuyu üstündeki kaldırma noktaları hazır(Kanca, putrel)"],
    ["kuyu_19", "19 Son katın bitmiş döşeme üstünden kuyu tavanına olan yükseklik uygun"],
  ],
  [
    ["makine_1", "1 Enerji temini 3 FAZ/N/PE olarak yeterli güçte temin edilmiş", "3 FAZ ŞANTİYE ELK. VEYA JENARATÖR TEMİN EDİLECEK"],
    [
      "makine_2",
      "2 Son katta kumanda pan. için boşluk (zeminden 180 cm. yükseklikte )",
      "SON KATTA KAPI GÖREN NOKTADA KUMANDA PANOSU ALT KISMI 180 CM DE OLACAK",
    ],
    ["makine_3", "3 Son katta kumanda panosunun iç tesisatı hazır"],
  ],
  [
    ["makine_4", "4 Ana şalter ve kuyu aydınlatma için güç kablosu", "VERİLEN ELK ŞEMASINA UYGUN GÜÇ KABLOSU ÇEKİLECEK"],
    ["makine_5", "5 Kaldırma kancası ya da rayı (projeye göre doğru kaldırma kapasitesinde)"],
    ["makine_6", "6 Makine dairesi ölçüleri"],
  ],
  [
    ["diger_1", "1 Kamyon ve boşaltma alanı geçiş imkanı"],
    ["diger_2", "2 Kilitlenebilir bir depolama alanı"],
    ["diger_3", "3 Vinç, forklift vs. kaldırıcıların temini"],
  ],
];

export default function FieldControlForm({
  handleInputChange,
  files,
  setFiles,
}: {
  handleInputChange: (e: any, parent: string, arrayIndex: number) => void;
  files: TFile;
  setFiles: (state: TFile) => void;
}) {
  const instantStore = useInstantStore();

  const dataService = useData();

  const { formData, setFormData, setIsFieldFormFilled } = useNewDataModalStore();

  const { selectedArrayIndex } = useModulePageStore();

  const { getPageDocument } = useGetStoredPageData();

  const currentDocument = getPageDocument({ pageId: "current", documentId: formData._id });
  const savedCurrentForm = currentDocument?.information?.[selectedArrayIndex];

  const controlDate = isoToDate(formData.information?.[selectedArrayIndex]?.date);
  const nextControlDate = isoToDate(formData.information?.[selectedArrayIndex]?.next_date);

  const projectId = getIdValueFromObject(formData.unit?.project);
  const project = getPageDocument({ pageId: pageIds.Projects, documentId: projectId });
  const customerName = getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(project?.customer) })?.name;
  const serialNumber = formData.unit?.serial_number;
  const projectName = project?.name;

  const [senderData, setSenderData] = useState<Tuser>({});

  const [openMailPopup, setOpenMailPopup] = useState(false);

  const [inPrintMode, setInPrintMode] = useState<"download" | "mail" | false>(false);

  const [formBlob, setFormBlob] = useState<TMialBlob | undefined>(undefined);

  const firstDivRef = useRef<HTMLDivElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);

  async function printDocument(download?: boolean): Promise<Blob | undefined> {
    const firstPage = firstDivRef.current;
    const secondPage = secondDivRef.current;

    if (!firstPage || !secondPage) return;

    const margin = 50;
    const getWidth = (canvas: HTMLCanvasElement) => canvas.width - margin * 2;
    const getHeight = (canvas: HTMLCanvasElement) => canvas.height - margin * 2;

    const firstCanvas = await html2canvas(firstPage);
    const firstImage = firstCanvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "p",
      unit: "px",
      format: [firstCanvas.width, firstCanvas.height],
    });
    pdf.addImage(firstImage, "PNG", margin, margin, getWidth(firstCanvas), getHeight(firstCanvas));

    const secondCanvas = await html2canvas(secondPage);
    const secondImage = secondCanvas.toDataURL("image/png");

    pdf.addPage();
    pdf.addImage(secondImage, "PNG", margin, margin, getWidth(secondCanvas), getHeight(secondCanvas));

    if (download) pdf.save("formDownload.pdf");

    const blob = pdf.output("blob");
    return blob;
  }

  function resetPrintMode() {
    setInPrintMode(false);
    instantStore.setIsLoading(false);
  }

  function ifPrintMode() {
    if (inPrintMode === "download") {
      printDocument(true).then(resetPrintMode);
    } else if (inPrintMode === "mail") {
      printDocument().then((blob) => {
        if (!blob) return;
        setFormBlob({ blobName: `field_control_forms/${controlDate}-${projectName}-${serialNumber}-Saha Kontrol Formu.pdf`, blob });
        setOpenMailPopup(true);
        resetPrintMode();
      });
    }
  }

  useEffect(ifPrintMode, [inPrintMode]);

  function isFormValid() {
    const form = formData.information[selectedArrayIndex];
    const areValuesNull = Object.values(form).some((v) => v === "0");
    return fieldFormRequiredProps.every((prop) => Object.keys(form).includes(prop) && !areValuesNull);
  }

  useEffect(() => {
    setIsFieldFormFilled(isFormValid());
  }, [formData]);

  const getSenderIdentifier = () => {
    const senderIdentifier = getPageDocument({ pageId: pageIds.FieldInspections, documentId: formData._id })?.information?.[selectedArrayIndex]
      ?.sender_identifier;
    return senderIdentifier;
  };

  const getSenderData = async () => {
    const senderIdentifier = getSenderIdentifier();
    const userBucketId = "6527f268ffa6b3002d10cc50";

    const users = senderIdentifier ? await dataService.getBucketDataAll(userBucketId, { additionalFilter: { identifier: senderIdentifier } }) : undefined;

    const userData = users ? users[0] : {};

    return userData;
  };

  useEffect(() => {
    getSenderData().then((userData) => setSenderData(userData));
  }, [openMailPopup]);

  // JSX //
  const inputLine = (name: string, props?: { width?: number; style?: { [key: string]: any } }) => (
    <InputLine
      name={name}
      value={formData.information?.[selectedArrayIndex]?.[name]}
      onChange={(e) => handleInputChange(e, "information", selectedArrayIndex)}
      style={props?.style}
      disabled={!!savedCurrentForm}
    />
  );
  const radio = (name: string, props?: { variant?: "square" | "bold" | "double"; style?: { [key: string]: any } }) => (
    <Radio
      name={name}
      value={formData.information?.[selectedArrayIndex]?.[name]}
      onChange={(e) => handleInputChange(e, "information", selectedArrayIndex)}
      style={props?.style}
      variant={props?.variant}
      disabled={!!savedCurrentForm}
    />
  );
  const datePicker = (name: string) => (
    <DateInput
      name={name}
      value={formData.information?.[selectedArrayIndex]?.[name]}
      onChange={(e) => handleInputChange(e, "information", selectedArrayIndex)}
      disabled={!!savedCurrentForm}
    />
  );
  const photo = (name: string, props?: { style?: { [key: string]: any } }) => (
    <PhotoInput
      name={name}
      files={files}
      setFiles={setFiles}
      fileUrlArray={formData.information?.[selectedArrayIndex]?.[name]}
      fileExist={Boolean(formData.information?.[selectedArrayIndex]?.[name]?.at(-1)?.deleted === false)}
      deleteFile={() => {
        const updatedInformation = formData.information?.map((infoItem: any, index: number) =>
          index === selectedArrayIndex
            ? {
                ...infoItem,
                [name]: infoItem[name]?.map((innerItem: any) => ({ ...innerItem, deleted: true })),
              }
            : infoItem
        );

        const updatedData = {
          ...formData,
          information: updatedInformation,
        };

        setFormData(updatedData);
      }}
      parent={"information"}
      arrayIndex={selectedArrayIndex}
      menuLocation="left"
      disabled={!!savedCurrentForm}
    />
  );

  const symbolBoxElement = () => (
    <div className={styles["symbol-box"]}>
      <div className={styles["symbol-box-2"]}>
        <div className={styles["checkmark-symbol"]}></div>
        <div>=</div>
        <div>OK</div>
      </div>
      <div className={styles["symbol-box-2"]}>
        <div>O</div>
        <div>=</div>
        <div>Montaj öncesi tamamlanmalı</div>
      </div>
      <div className={styles["symbol-box-2"]}>
        <div>X</div>
        <div>=</div>
        <div>Devreye alınana kadar tamamlanmalı</div>
      </div>
      <div className={styles["symbol-box-2"]}>
        <div>N/A</div>
        <div>=</div>
        <div>Uygulanabilir değil</div>
      </div>
    </div>
  );

  const symbolsElement = (title: string) => (
    <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "46px", marginBottom: "10px", marginTop: "20px" }}>
      <div style={{ fontSize: "12px", fontWeight: "900", marginTop: "8px" }}>{title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", fontWeight: "600", width: "150px", marginTop: "8px" }}>
        <div className={styles["checkmark-symbol"]}></div>
        <div>O</div>
        <div>X</div>
        <div>N/A</div>
      </div>
    </div>
  );

  const radioElement = (name: string, title: string, subtitle?: string) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "20px", marginTop: "20px" }}>
        <div style={{ fontSize: "10px", fontWeight: "900", marginLeft: "6px" }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {radio(name, { variant: "square", style: { marginRight: "14px" } })}
          {inPrintMode ? <div style={{ width: "15px" }}></div> : photo(`${name}_photo`)}
        </div>
      </div>
      {subtitle && <div style={{ fontSize: "10px", fontWeight: "700", color: "red" }}>{subtitle}</div>}
    </>
  );

  return (
    <>
      <div className={styles["container"]}>
        <div ref={firstDivRef}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "100%" }}>
              <div className={styles["part-1"]}>
                <div className={styles["part-1-left"]}>
                  <div className={styles["title-box"]}>
                    <div className={styles["title"]}>
                      ASANSÖR ŞAFTI <span style={{ color: "red" }}>KONTROL - TESLİM FORMU</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                      <div className={styles["subtitle"]}>KONTROL TARİHİ: </div>
                      <div>
                        {inPrintMode ? (
                          <div className={styles["subtitle"]} style={{ marginLeft: "10px" }}>
                            {controlDate}
                          </div>
                        ) : (
                          datePicker("date")
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.8rem", marginTop: "10px", fontWeight: "900" }}>F_4.01</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "block", marginTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <div style={{ fontSize: "0.8rem" }}>MÜŞTERİ ADI</div>
                    <div style={{ marginLeft: "30px" }}>:</div>
                    <div style={{ marginLeft: "5px", fontSize: "0.7rem", maxWidth: "160px" }}>{customerName}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "end", margin: "4px 0" }}>
                    <div style={{ fontSize: "0.8rem" }}>TESİSAT NO</div>
                    <div style={{ marginLeft: "37px" }}>:</div>
                    <div style={{ marginLeft: "5px", fontSize: "0.7rem", maxWidth: "160px" }}>{serialNumber}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <div style={{ fontSize: "0.8rem" }}>PROJE BİLGİLERİ</div>
                    <div style={{ marginLeft: "9px" }}>:</div>
                    <div style={{ marginLeft: "5px", fontSize: "0.7rem", maxWidth: "160px" }}>{projectName}</div>
                  </div>
                </div>
                <div style={{ marginRight: "20px" }}>{radio("control_type", { variant: "bold" })}</div>
              </div>
            </div>
            <div className={styles["logo"]}>
              <img width={95} src={logo} alt="" />
            </div>
          </div>
          {symbolBoxElement()}

          {symbolsElement("KUYU")}
          {dataArray[0].map((item: string[], i) => (
            <div key={i}>{radioElement(item[0], item[1], item[2])}</div>
          ))}
          <div style={{ fontSize: "10px", fontWeight: "700", marginLeft: "20px" }}>(yerel standartlara göre min:3800)</div>
        </div>
        <div ref={secondDivRef}>
          {symbolBoxElement()}

          {symbolsElement("MAKİNE DAİRESİ ve SON KAT")}
          {dataArray[1].map((item: string[], i) => (
            <div key={i}>{radioElement(item[0], item[1], item[2])}</div>
          ))}
          <div style={{ fontSize: "10px", fontWeight: "700" }}>(Schindler tarafından verilen projeye uygun)</div>
          <div style={{ fontSize: "10px", fontWeight: "700", color: "red" }}>VERİLEN ELK ŞEMASINA UYGUN PANO İÇ TESİSAT DÖŞENECEK</div>
          {dataArray[2].map((item: string[], i) => (
            <div key={i}>{radioElement(item[0], item[1], item[2])}</div>
          ))}

          {symbolsElement("DİĞER")}
          {dataArray[3].map((item: string[], i) => (
            <div key={i}>{radioElement(item[0], item[1], item[2])}</div>
          ))}

          <div style={{ display: "flex", alignItems: "end", marginTop: "20px", fontSize: "0.7rem" }}>
            {radio("checkbox", { variant: "double" })}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles["date"]} style={{ marginLeft: "20px" }}>
                    işaretli eksikler
                  </div>
                  <div style={{ display: "flex", marginLeft: "5px" }}>
                    {inPrintMode ? (
                      <div className={styles["subtitle"]} style={{ marginLeft: "10px" }}>
                        {nextControlDate}
                      </div>
                    ) : (
                      datePicker("next_date")
                    )}
                  </div>
                  <div style={{ marginLeft: "10px" }}>tarihine kadar tamamlanacak,</div>
                </div>
                <div style={{ marginLeft: "20px" }}>Müşteri tarafından tamamlandığı bilgisi verilmesinin ardından yeniden kontrol edilecektir.</div>
              </div>
              <div>
                <div style={{ marginLeft: "20px" }}>herhangi bir eksikliğe rastlanmadığından asansör şaftı(ları) teslim alınmıştır.</div>
              </div>
            </div>
          </div>

          <div style={{ fontWeight: "900", fontSize: "0.9rem", marginTop: "15px" }}>NOTLAR:</div>
          {inputLine("form_notes")}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
            <div style={{ display: "block", textAlign: "center", fontSize: "0.7rem", fontWeight: "900" }}>
              <div>KUTAY MÜHENDİSLİK LTD.</div>
              <div>İMZA</div>
            </div>
            <div style={{ display: "block", textAlign: "center", fontSize: "0.7rem", fontWeight: "900", marginRight: "100px" }}>
              <div>MÜŞTERİ.</div>
              <div>İMZA</div>
            </div>
          </div>
        </div>
        {!inPrintMode && (
          <div style={{ display: "flex", marginTop: "50px", alignItems: "center" }}>
            <MainButton
              width="80px"
              color="success"
              onClick={() => {
                instantStore.setIsLoading(true);
                setInPrintMode("download");
              }}
            >
              <DownloadIcon style={{ width: "18px", height: "18px", marginRight: "4px" }} /> İndir
            </MainButton>
            <MainButton
              width="150px"
              color="secondary"
              onClick={() => {
                instantStore.setIsLoading(true);
                setInPrintMode("mail");
              }}
              disabled={!!getSenderIdentifier() || !savedCurrentForm}
            >
              <MailIcon style={{ width: "18px", height: "18px", marginRight: "6px" }} /> Eposta Gönder
            </MainButton>
            <div style={{ textAlign: "center", marginLeft: "10px", fontSize: "0.8rem" }}>
              {getSenderIdentifier() && (
                <div>
                  <b>
                    {senderData.name} {senderData.surname}
                  </b>{" "}
                  tarafından gönderildi
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <MailPopup open={openMailPopup} setOpen={setOpenMailPopup} formBlob={formBlob} />
    </>
  );
}
