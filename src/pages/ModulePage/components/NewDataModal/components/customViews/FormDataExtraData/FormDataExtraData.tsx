import React, { ReactElement } from "react";
import { usePageStore } from "../../../../../../../store/pageStore";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { useNewDataModalStore } from "../../../newDataModalStore";
import styles from "./FormDataExtraData.module.scss";

export default function FormDataExtraData({ nativeElement, property, rowForUpdate }: { nativeElement: ReactElement; property: any; rowForUpdate: any }) {
  const pageStore = usePageStore();

  const { formData } = useNewDataModalStore();

  const returns: { [key: string]: { [key: string]: () => JSX.Element } } = {
    "Projects": {
      "map_locations": () => {
        return (
          <div className={styles["location-box"]}>
            <div className={styles["location-native"]}>{nativeElement}</div>
            <div className={styles["location-link"]}>
              <a href="https://www.google.com/maps" target="_blank">
                Haritayı aç
              </a>
            </div>
          </div>
        );
      },
    },
    "ProgressPayments": {
      "payments": () => {
        const isNoPayments = !(formData.payments?.length > 0);
        if (!isNoPayments) {
          return nativeElement;
        }

        const defaultElement = (
          <div>
            <div className={styles["data-line"]}>
              <div className={styles["data-box"]}>
                <div className={styles["data-title"]}>Kat Başı Fiyat</div>
                <div className={styles["data-text"]}>{formData.pricePerFloorIfNoPayment} ₺</div>
              </div>
              <div className={styles["data-box"]}>
                <div className={styles["data-title"]}>Yakıt Litre Fiyatı</div>
                <div className={styles["data-text"]}>{formData.fuelPriceIfNoPayment} ₺</div>
              </div>
            </div>
            <div className={styles["data-line"]}>
              <div className={styles["data-box"]}>
                <div className={styles["data-title"]}>Toplam Montaj Bedeli</div>
                <div className={styles["data-text"]} style={{ color: "green" }}>
                  {formData.totalFloorCostIfNoPayment} ₺
                </div>
              </div>
              <div className={styles["data-space"]}>
                <div style={{ marginTop: "20px" }}>+</div>
              </div>
              <div className={styles["data-box"]}>
                <div className={styles["data-title"]}>Yakıt</div>
                <div className={styles["data-text"]} style={{ color: "green" }}>
                  {formData.totalFuelCostIfNoPayment} ₺
                </div>
              </div>
              <div className={styles["data-space"]}>
                <div style={{ marginTop: "20px" }}>=</div>
              </div>
              <div className={styles["data-box"]} style={{ gridColumn: "span 3" }}>
                <div className={styles["data-title"]}>Bu Üniteden Alması Gereken Toplam Bedel</div>
                <div className={styles["data-text"]} style={{ color: "green" }}>
                  {formData.totalFloorCostIfNoPayment + formData.totalFuelCostIfNoPayment} ₺
                </div>
              </div>
            </div>
          </div>
        );

        return defaultElement;
      },
    },
    "MonthlyProgressPayments": {
      "payed_progress_payment": () => (
        <div style={{ display: "grid", gridTemplateColumns: "20% 80%", alignItems: "center" }}>
          {nativeElement}
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}></div>
        </div>
      ),
    },
    "AnnualLeave": {
      "medical_report": () => {
        const leaveTypeIsHealth = getIdValueFromObject(formData.leave_type) === "SAĞLIK İZNİ";

        const leaveTypeElement = (
          <div style={{ fontSize: "0.85rem", fontWeight: "500", color: "red", marginTop: "30px" }}>İLK 2 GÜN İZİN SÜRESİNE DAHİL DEĞİL</div>
        );

        return (
          <div>
            {nativeElement}
            {leaveTypeIsHealth ? leaveTypeElement : <></>}
          </div>
        );
      },
    },
    default: { default: () => nativeElement },
  };

  return <div style={{ position: "relative" }}>{returns[pageStore.page.title]?.[property.title]?.() || returns.default.default()}</div>;
}
