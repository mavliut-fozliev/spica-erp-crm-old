import React, { useState } from "react";
import ModalWindow from "../../../../../../../components/modals/ModalWindow/ModalWindow";
import { useNewDataModalStore } from "../../../newDataModalStore";
import styles from "./FieldMeasurementForm.module.scss";
import InputLine from "./InputLine/InputLine";

export default function FieldMeasurementForm({
  open,
  handleClose,
  handleInputChange,
  arrayIndex,
}: {
  open: boolean;
  handleClose: () => void;
  handleInputChange: (e: any, parent: string, arrayIndex: number) => void;
  arrayIndex: number;
}) {
  const { formData } = useNewDataModalStore();

  const data = JSON.parse(formData.information?.[arrayIndex]?.field_measurement_data || "{}") || {};

  const inputLine = (name: string, props?: { width?: number; style?: { [key: string]: any } }) => (
    <InputLine
      name={name}
      value={data[name]}
      onChange={(e) => {
        const field_measurement_data = { ...data };
        if (name === "floor_amount") {
          field_measurement_data[name] = e.target.value > 200 ? 200 : e.target.value;
        } else {
          field_measurement_data[name] = e.target.value;
        }
        handleInputChange({ target: { name: "field_measurement_data", value: JSON.stringify(field_measurement_data) } }, "information", arrayIndex);
      }}
      width={props?.width || 20}
      variant={"free"}
      style={props?.style}
    />
  );

  const floorElement = (index: number) => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{index}. DURAK</div>
          <div style={{ fontSize: "0.7rem", fontWeight: 600, marginLeft: "20px" }}>KAT YÜK:</div>
          <div style={{ marginLeft: "4px" }}>{inputLine(`kat_${index}`)}</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <div style={{ width: "21px", height: "1px", background: "black" }}></div>
              <div style={{ width: "1px", height: "61px", background: "black", marginLeft: "10px" }}></div>
            </div>
            <div className={styles["step"]}></div>
            <div className={styles["floor"]}>
              <div style={{ display: "flex", alignItems: "center", position: "absolute", bottom: "8px", left: "8px" }}>
                KAPI YÜK.:<span style={{ marginLeft: "4px" }}>{inputLine(`kapi_${index}`)}</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "0.7rem", marginTop: "10px", marginLeft: "10px" }}>
          <div>
            <div>EMN.BAR.</div>
            <div>SON KAT DÖŞ.</div>
            <div>KOT</div>
          </div>
          <div style={{ fontWeight: 600, marginLeft: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              kuyu en:<span style={{ marginLeft: "4px" }}>{inputLine(`kuyu_${index}`)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              der:<span style={{ marginLeft: "4px" }}>{inputLine(`kuyu_der_${index}`)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ModalWindow open={open} handleClose={handleClose} closeButtonText="Ok" title="Saha Ölçüm Formu">
      <div>
        <div style={{ fontSize: "0.9rem", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: "600" }}>PROJE ADI:</div>
            <div style={{ marginLeft: "10px" }}>{formData.project?.name}</div>
          </div>
          <div style={{ display: "flex", marginRight: "50px" }}>
            <div style={{ fontWeight: "600" }}>KONTROL TARİHİ: </div>
            <div style={{ marginLeft: "10px" }}>
              {formData.information?.[arrayIndex]?.date?.slice(8, 10)}/{formData.information?.[arrayIndex]?.date?.slice(5, 7)}/
              {formData.information?.[arrayIndex]?.date?.slice(0, 4)}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "0.9rem", fontWeight: 600 }}>
          <div style={{ marginRight: "10px" }}>Kat Sayısı:</div>
          {inputLine("floor_amount")}
        </div>
        <div style={{ display: "flex", fontSize: "0.8rem", fontWeight: 600, marginTop: "20px" }}>
          <div style={{ marginRight: "10px" }}>SON KAT ÜSTÜ YÜK.:</div>
          {inputLine("son_kat")}
        </div>
        <div style={{ display: "flex", fontSize: "0.8rem", fontWeight: 600, marginTop: "20px" }}>
          <div style={{ marginRight: "10px" }}>SEYİR MES.:</div>
          {inputLine("seyir")}
        </div>

        {Array.from({ length: Number(data["floor_amount"] || "2") - 1 }, (_, index) => Number(data["floor_amount"] || "2") - index).map((floorIndex) => (
          <div key={floorIndex.toString()}>{floorElement(floorIndex)}</div>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>1. DURAK</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, marginLeft: "20px" }}>KAT YÜK:</div>
              <div style={{ marginLeft: "4px" }}>{inputLine("kat_1")}</div>
            </div>
            <div style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, marginLeft: "60px" }}>KAT DİBİ YÜK:</div>
              <div style={{ marginLeft: "4px" }}>{inputLine("kat_dibi_1")}</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <div style={{ width: "21px", height: "1px", background: "black" }}></div>
                  <div style={{ width: "1px", height: "61px", background: "black", marginLeft: "10px" }}></div>
                </div>
                <div className={styles["step"]}></div>
                <div className={styles["floor"]}>
                  <div style={{ display: "flex", alignItems: "center", position: "absolute", bottom: "8px", left: "8px" }}>
                    KAPI YÜK.:<span style={{ marginLeft: "4px" }}>{inputLine("kapi_1")}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <div style={{ width: "21px", height: "1px", background: "black" }}></div>
                  <div className={styles["arrow"]} style={{ width: "1px", height: "40px", background: "black", marginLeft: "10px" }}></div>
                </div>
                <div className={styles["step"]}></div>
                <div
                  style={{ height: "40px", width: "125px", borderBottom: "2px solid black", borderLeft: "2px solid black", borderRight: "2px solid black" }}
                ></div>
              </div>
            </div>
            <div style={{ display: "flex", fontSize: "0.7rem", marginTop: "20px", marginLeft: "10px" }}>
              <div>
                <div>EMN.BAR.</div>
                <div>SON KAT DÖŞ.</div>
                <div>KOT</div>
              </div>
              <div style={{ fontWeight: 600, marginLeft: "20px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  kuyu en:<span style={{ marginLeft: "4px" }}>{inputLine("kuyu_1")}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  der:<span style={{ marginLeft: "4px" }}>{inputLine("kuyu_der_1")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWindow>
  );
}
