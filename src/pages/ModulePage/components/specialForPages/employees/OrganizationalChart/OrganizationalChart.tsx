import React from "react";
import ModalWindow from "../../../../../../components/modals/ModalWindow/ModalWindow";
import styles from "./OrganizationalChart.module.scss";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import { obj } from "types/types";

export default function OrganizationalChart({
  open,
  handleClose,
  selectedEmployee,
  allEmployees,
}: {
  open: boolean;
  handleClose: () => void;
  selectedEmployee: obj;
  allEmployees: obj[];
}) {
  const selectedEmployeeDepartment = getNameValueFromObject(selectedEmployee.department);
  const selectedEmployeeJob = getNameValueFromObject(selectedEmployee.job);

  const currentEmployees =
    selectedEmployeeDepartment === "Yönetim"
      ? allEmployees
      : allEmployees.filter((e) => getNameValueFromObject(e?.department) === "Yönetim" || getNameValueFromObject(e.department) === selectedEmployeeDepartment);

  const box = (job: string) => (
    <div className={styles["employee-box"]}>
      <p className={styles["employee-job"]}>{job}</p>
      <div className={styles["employee-name-box"]}>
        {currentEmployees
          .filter((e) => getNameValueFromObject(e.job) === job)
          .map((e, i) => (
            <p key={i.toString()} className={styles["employee-name"]} style={{ color: e.name === selectedEmployee.name ? "red" : "black" }}>
              {e.name}
            </p>
          ))}
      </div>
    </div>
  );

  const line = (direction: "h" | "v") => <div className={styles[`line-${direction}`]}></div>;

  const schema = (titles: string[], upLine?: boolean) => (
    <div>
      {titles.map((title, i) => (
        <div key={i.toString()}>
          {(i !== 0 || upLine) && line("v")}
          {box(title)}
        </div>
      ))}
    </div>
  );

  return (
    <ModalWindow
      open={open}
      handleClose={handleClose}
      title="Organizasyon Şeması"
      customWidth={selectedEmployeeJob === "Direktör" || selectedEmployeeJob === "Genel Müdür" ? 1300 : 600}
    >
      <div
        style={{
          display: "flex",
          marginLeft: selectedEmployeeJob === "Direktör" || selectedEmployeeJob === "Genel Müdür" ? "400px" : undefined,
        }}
      >
        <p className={styles["department"]}>Yönetim</p>
        <div>
          {box("Direktör")}
          {line("v")}
          <div style={{ display: "flex" }}>
            {box("Genel Müdür")}
            {line("h")}
            {box("Sekreter")}
          </div>
          {selectedEmployeeJob !== "Sekreter" && line("v")}
        </div>
      </div>
      {selectedEmployeeJob !== "Direktör" && selectedEmployeeJob !== "Genel Müdür" ? (
        <div style={{ display: "flex" }}>
          {selectedEmployeeJob !== "Sekreter" ? <div className={styles["department"]}>{selectedEmployeeDepartment}</div> : <div></div>}
          {selectedEmployeeDepartment === "Muhasebe" && schema(["Muhasebe Müdürü", "Muhasebe Müdür Yardımcısı", "Muhasebe Personeli"])}
          {selectedEmployeeDepartment === "Bakım" && schema(["Bakım Müdürü", "Bakım Süpervizorü", "Bakım Teknisyeni"])}
          {selectedEmployeeDepartment === "Taşeron" && <div>{box("Taşeron")}</div>}
          {selectedEmployeeDepartment === "FQE" && <div>{box("FQE Mühendisi")}</div>}
          {selectedEmployeeDepartment === "SAIS" && <div>{box("SAIS Mühendisi")}</div>}
          {selectedEmployeeDepartment === "Satın Alma & Depo" && <div>{box("Satın Alma & Depo Personeli")}</div>}
          {selectedEmployeeDepartment === "Depo" && <div>{box("Depo Personeli")}</div>}
          {selectedEmployeeDepartment === "Genel" && <div>{box("Yardımcı Personel")}</div>}
        </div>
      ) : (
        <div>
          <div className={styles["middle-line"]}></div>
          <div className={styles["all-boxes"]}>
            {schema(["Muhasebe Müdürü", "Muhasebe Müdür Yardımcısı", "Muhasebe Personeli"], true)}
            {schema(["Bakım Müdürü", "Bakım Süpervizorü", "Bakım Teknisyeni"], true)}
            {schema(["Taşeron"], true)}
            {schema(["FQE Mühendisi"], true)}
            {schema(["SAIS Mühendisi"], true)}
            {schema(["Satın Alma & Depo Personeli"], true)}
            {schema(["Depo Personeli"], true)}
            {schema(["Yardımcı Personel"], true)}
          </div>
        </div>
      )}
    </ModalWindow>
  );
}
