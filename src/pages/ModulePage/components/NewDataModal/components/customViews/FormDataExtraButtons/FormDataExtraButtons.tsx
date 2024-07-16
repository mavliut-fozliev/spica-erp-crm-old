import React, { useEffect, useState } from "react";
import { usePageStore } from "../../../../../../../store/pageStore";
import RevisePageNumbers from "./components/RevisePageNumbers/RevisePageNumbers";
import { useNewDataModalStore } from "../../../newDataModalStore";
import ToggleButtons from "../../../../../../../components/buttons/ToggleButtons/ToggleButtons";
import styles from "./FormDataExtraButtons.module.scss";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import CreateDocxButton from "./components/CreateDocxButton/CreateDocxButton";
import { obj } from "types/types";

export default function FormDataExtraButtons({
  rowForUpdate,
  handleBeforeSave,
  handleInputChange,
  pageSections,
  pageSectionLabels,
}: {
  rowForUpdate: obj;
  handleBeforeSave: () => void;
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  pageSections: string[];
  pageSectionLabels: string[];
}) {
  const pageStore = usePageStore();
  const { formData } = useNewDataModalStore();

  const { getPageDocuments } = useGetStoredPageData();

  const returns: obj = {
    "Offers": () => {
      return (
        <div style={{ gridColumn: "span 6" }}>
          <CreateDocxButton pageTitle={"Offers"} handleBeforeSave={handleBeforeSave} />
          {Object.keys(rowForUpdate).length ? <RevisePageNumbers rowForUpdate={rowForUpdate} /> : <div></div>}
        </div>
      );
    },
    "Contracts": () => {
      const currentProjectOffers = getPageDocuments({ pageId: pageIds.Offers, section: "confirmed" })
        .filter((row) => row.project?._id === formData.project?._id)
        .map((row) =>
          row.confirmed_revise_index
            ? getPageDocuments({ pageId: pageIds.Offers, section: "revised" }).find(
                (revise) => revise.previous_offer._id === row._id && revise.reference_number.slice(14) === row.confirmed_revise_index
              )
            : row
        );
      const totalPriceWithoutKDV = currentProjectOffers
        .map((offer) => offer?.products?.map((product: any) => product.docx_data?.map((docx_data: string) => JSON.parse(docx_data || "{}").toplam_fiyat)))
        .flat()
        .flat()
        .reduce((acc, current) => acc + Number(current || 0), 0);
      const totalPrice = totalPriceWithoutKDV + (totalPriceWithoutKDV * Number(currentProjectOffers[0]?.kdv)) / 100;

      const totalInputPrice = formData.payment?.reduce((acc: number, current: any) => acc + Number(current.money_amount || 0), 0);
      const remainingPrice = totalPrice - totalInputPrice;
      sessionStorage.setItem("remainingPrice", remainingPrice.toString());

      return (
        <div style={{ gridColumn: "span 6" }}>
          <div style={{ display: "flex", paddingLeft: "10px", marginTop: "30px" }}>
            <div className={styles["info-text"]}>
              Toplam Fiayt (kdv dahil): <span style={{ fontWeight: 500 }}>{totalPrice || 0}</span>
            </div>
            <div className={styles["info-text"]}>
              Birim: <span style={{ fontWeight: 500, color: "green" }}>{currentProjectOffers[0]?.birim}</span>
            </div>
            <div className={styles["info-text"]}>
              Kalan Ödeme:{" "}
              <span style={{ color: remainingPrice === 0 ? "black" : remainingPrice < 0 ? "red" : "green", fontWeight: 500 }}>{remainingPrice || 0}</span>
            </div>
          </div>
          <CreateDocxButton pageTitle={"Contracts"} handleBeforeSave={handleBeforeSave} docxData={totalPriceWithoutKDV} />
        </div>
      );
    },
    "MaintenanceContracts": () => {
      return (
        <div style={{ gridColumn: "span 6" }}>
          <CreateDocxButton pageTitle={"MaintenanceContracts"} handleBeforeSave={handleBeforeSave} />
        </div>
      );
    },
  };

  const disabledSections =
    pageSections.filter(
      (pageSection: string) => pageStore.config.Pages.find((p) => p.title === pageStore.page.title)?.section_features?.[pageSection]?.disable
    ) || [];

  const isUpdate = Object.keys(rowForUpdate).length;

  const getAlignment = () => {
    if (formData.confirmed_revise_index && !formData.previous_offer) {
      return "";
    }

    const section_features = pageStore.config.Pages?.find((p) => p.title === pageStore.page.title)?.section_features || [];

    let joinSection = "";
    Object.entries(section_features).forEach(([key, value]) => {
      const haveSection = value.joint_sections?.some((section: string) => section === formData.status);
      if (haveSection) joinSection = key;
    });

    return joinSection || formData.status;
  };

  return (
    <>
      {returns[pageStore.page.title]?.() || <div></div>}

      {pageSections?.length > 1 && isUpdate ? (
        <div style={{ gridColumn: "span 12", marginTop: "30px" }}>
          <ToggleButtons
            alignment={getAlignment()}
            setAlignment={(alignment: string) => {
              handleInputChange({ target: { name: "status", value: alignment } });
            }}
            values={pageSections}
            labels={pageSectionLabels}
            color="blue"
            disabled={
              formData.status !== getAlignment() ||
              pageStore.config.Pages?.find((p) => p._id === pageStore.page._id)?.page_features?.includes("cancel_movement_between_sections") ||
              (pageStore.config.Pages?.find((p) => p._id === pageStore.page._id)?.page_features?.includes("cancel_movement_between_sections_during_creation") &&
                Object.keys(rowForUpdate).length === 0) ||
              (pageStore.pageBuckets[pageStore.page._id].title === "Offers" && !formData.proposed_solution?.some((p: any) => !p.deleted))
            }
            disabledValues={disabledSections}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
