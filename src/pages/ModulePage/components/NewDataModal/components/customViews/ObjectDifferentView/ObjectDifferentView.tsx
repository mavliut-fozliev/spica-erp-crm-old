import React, { ReactElement } from "react";
import { usePageStore } from "../../../../../../../store/pageStore";
import { useNewDataModalStore } from "../../../newDataModalStore";
import MainButton from "../../../../../../../components/buttons/MainButton/MainButton";
import { useInstantStore } from "../../../../../../../store/instantStore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { RiDeleteBinLine } from "react-icons/ri";
import StorageArrayTypeInput from "../../typeInputs/StorageArrayTypeInput/StorageArrayTypeInput";
import styles from "./ObjectDifferentView.module.scss";

export default function ObjectDifferentView({
  nativeElement,
  innerProperty,
  arrayIndex,
  setOpenPropoesedSolution,
  setProposedSolutionArrayIndex,
  files,
  setFiles,
}: {
  nativeElement: ReactElement;
  innerProperty: any;
  arrayIndex: number | undefined;
  setOpenPropoesedSolution: (state: boolean) => void;
  setProposedSolutionArrayIndex: (state: { productIndex: number; docxDataIndex: number }) => void;
  files: any;
  setFiles: any;
}) {
  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const { formData, setFormData } = useNewDataModalStore();

  const tableTitle = (props: { text: string }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className={styles["table-title"]}>{props.text}:</div>
      {nativeElement}
    </div>
  );

  const arrayObjectReturns: { [key: string]: { [key: string]: (arrayIndex: number) => JSX.Element } } = {
    "Offers": {
      "docx_data": (arrayIndex) => {
        const productsData = formData.products[arrayIndex]?.docx_data;

        const jsxElement = productsData?.map((_: string, index: number) => {
          const getTotalIndex = (arrayIndex: number, index: number) => {
            const prevTotal = formData.products
              ?.map((prod: any, i: number) => (i < arrayIndex ? prod.docx_data.length : 0))
              .reduce((sum: number, num: number) => sum + num, 0);
            return prevTotal + index;
          };

          const totalIndex = getTotalIndex(arrayIndex, index);

          const products = formData.products?.map((prod: any) => prod.docx_data)?.flat();
          const totalLength = products?.length;

          const handleOpenProposedSolution = () => {
            setProposedSolutionArrayIndex({ productIndex: arrayIndex, docxDataIndex: index });
            instantStore.setSelectedRow(formData);
            setOpenPropoesedSolution(true);
          };

          const handleDataCopying = () => {
            const products = formData.products?.map((product: any, currentIndex: number) =>
              currentIndex === arrayIndex ? { ...product, docx_data: [...product.docx_data, product.docx_data[index]] } : product
            );
            setFormData({
              ...formData,
              products,
            });
          };

          const handleDelete = () => {
            setFormData({
              ...formData,
              products: formData.products?.map((product: any, currentIndex: number) =>
                currentIndex === arrayIndex ? { ...product, docx_data: product.docx_data.filter((_: any, docx_I: number) => docx_I !== index) } : product
              ),
              [`draft_drawing_${totalIndex + 1}`]: formData[`draft_drawing_${totalIndex + 1}`]?.map((object: any) => ({
                ...object,
                deleted: true,
              })),
            });
            setFiles({ ...files, [`draft_drawing_${totalIndex + 1}`]: { content: [] } });

            instantStore.setShowToast({ clue: "Özellikler Silindi", type: "error" });
          };

          const productData = JSON.parse(formData.products?.[arrayIndex]?.docx_data?.[index] || "{}");

          return (
            <div key={index.toString()} style={{ display: "flex", marginBottom: "10px" }}>
              <MainButton width="30px" height="30px" onClick={handleOpenProposedSolution}>
                <EditNoteIcon />
              </MainButton>
              <MainButton width="30px" height="30px" disabled={Boolean(totalLength >= 10)} onClick={handleDataCopying}>
                <LibraryAddIcon fontSize="small" style={{ rotate: "90deg" }} />
              </MainButton>
              <div style={{ marginLeft: "2px", marginRight: "2px" }}>
                <StorageArrayTypeInput
                  property={{ title: `draft_drawing_${totalIndex + 1}`, description: "" }}
                  parent={undefined}
                  arrayIndex={undefined}
                  files={files}
                  setFiles={setFiles}
                  bucketId={pageStore.page._id}
                  requiredProperties={[]}
                  accept="img"
                  type="mini"
                />
              </div>
              <MainButton
                width="30px"
                height="30px"
                color="danger"
                variant="outlined"
                disabled={formData.products[arrayIndex]?.docx_data?.length === 1}
                onClick={handleDelete}
              >
                <RiDeleteBinLine fontSize="large" />
              </MainButton>
              <div style={{ height: "30px", display: "flex", alignItems: "center", fontSize: "0.9rem", marginLeft: "10px" }}>{productData.asansor_adi}</div>
            </div>
          );
        });
        return jsxElement;
      },
    },
    default: { default: () => <div>{nativeElement}</div> },
  };

  const singleObjectReturns: { [key: string]: { [key: string]: () => JSX.Element } } = {
    "MonthlyProgressPayments": {
      "total_payed_floor": () => tableTitle({ text: "Montaj Hakediş Toplamı" }),
      "total_payed_fuel": () => tableTitle({ text: "Yakıt Hakediş Toplamı" }),
      "total_additional_payments": () => tableTitle({ text: "Ek Ödemeler Toplamı" }),
      "progress_payment": () => tableTitle({ text: "Hakedişler Genel Toplamı" }),

      "previous_month_dept_tl": () => tableTitle({ text: "Önceki Aydan Devreden Avans Borcu (TL)" }),
      "total_advance_payment_and_other_tl": () => tableTitle({ text: "Bu Aydan Verilen Avans Ve Diğer Ödemeler Toplamı (TL)" }),
      "total_debt_tl": () => tableTitle({ text: "Toplam Borç (TL)" }),
      "cut_this_month_tl": () => tableTitle({ text: "Bu Ay Yapılan Kesinti (TL)" }),
      "next_month_dept_tl": () => tableTitle({ text: "Sonraki Aya Devreden Borç (TL)" }),

      "progress_payment_copy": () => tableTitle({ text: "Hakedişler Genel Toplamı" }),
      "total_cut": () => tableTitle({ text: "Toplam Kesintiler" }),
      "payed_progress_payment": () => tableTitle({ text: "Hakediş Ödeme Tutarı" }),

      "previous_month_dept_euro": () => tableTitle({ text: "Önceki Aydan Devreden Avans Borcu (€)" }),
      "total_advance_payment_and_other_euro": () => tableTitle({ text: "Bu Aydan Verilen Avans Ve Diğer Ödemeler Toplamı  (€)" }),
      "total_debt_euro": () => tableTitle({ text: "Toplam Borç (€)" }),
      "cut_this_month_euro": () => tableTitle({ text: "Bu Ay Yapılan Kesinti (€)" }),
      "next_month_dept_euro": () => tableTitle({ text: "Sonraki Aya Devreden Borç (€)" }),
      "euro_exchange_rate": () => tableTitle({ text: "Euro Döviz Kuru" }),
      "euro_equivalent_lira": () => tableTitle({ text: "TL Karşılığı" }),

      "previous_month_dept_dollar": () => tableTitle({ text: "Önceki Aydan Devreden Avans Borcu ($)" }),
      "total_advance_payment_and_other_dollar": () => tableTitle({ text: "Bu Aydan Verilen Avans Ve Diğer Ödemeler Toplamı  ($)" }),
      "total_debt_dollar": () => tableTitle({ text: "Toplam Borç ($)" }),
      "cut_this_month_dollar": () => tableTitle({ text: "Bu Ay Yapılan Kesinti ($)" }),
      "next_month_dept_dollar": () => tableTitle({ text: "Sonraki Aya Devreden Borç ($)" }),
      "dollar_exchange_rate": () => tableTitle({ text: "Dolar Döviz Kuru" }),
      "dollar_equivalent_lira": () => tableTitle({ text: "TL Karşılığı" }),

      "previous_month_dept_sterling": () => tableTitle({ text: "Önceki Aydan Devreden Avans Borcu (£)" }),
      "total_advance_payment_and_other_sterling": () => tableTitle({ text: "Bu Aydan Verilen Avans Ve Diğer Ödemeler Toplamı  (£)" }),
      "total_debt_sterling": () => tableTitle({ text: "Toplam Borç (£)" }),
      "cut_this_month_sterling": () => tableTitle({ text: "Bu Ay Yapılan Kesinti (£)" }),
      "next_month_dept_sterling": () => tableTitle({ text: "Sonraki Aya Devreden Borç (£)" }),
      "sterling_exchange_rate": () => tableTitle({ text: "Sterling Döviz Kuru" }),
      "sterling_equivalent_lira": () => tableTitle({ text: "TL Karşılığı" }),
    },
    default: { default: () => <div>{nativeElement}</div> },
  };

  return (
    <div>
      {arrayIndex !== undefined
        ? arrayObjectReturns[pageStore.page.title]?.[innerProperty.title]?.(arrayIndex) || arrayObjectReturns.default.default(arrayIndex)
        : singleObjectReturns[pageStore.page.title]?.[innerProperty.title]?.() || singleObjectReturns.default.default()}
    </div>
  );
}
