import React, { useContext, useState } from "react";
import { usePageStore } from "store/pageStore";
import { pageIds } from "consts/config/pages/pages";
import Accordion from "components/Accordion/Accordion";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import styles from "./MonthlyProgressPaymentsPage.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { TDocument, obj } from "types/types";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import useAutocomplete from "hooks/useAutocomplete/useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { addCommasToNumber } from "services/functions/helpers/numberHelpers";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function MonthlyProgressPaymentsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageStore = usePageStore();
  const autocomplete = useAutocomplete({ pageTitle: pageStore.page.title, dontSave: true });

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const { handleChangeButton } = useDataMethods();

  const rows = getPageDocuments({ pageId: pageIds.MonthlyProgressPayments, section: pageStore.section });

  const rowsWithId: TDocument[] = rows.map((row, index) => ({ ...row, id: rows.length - index }));

  const getUnpaidRows = () => {
    const groupedByTeamId = rowsWithId.reduce((acc, item) => {
      const { _id } = item.team_name;
      if (!acc[_id]) {
        acc[_id] = [];
      }
      acc[_id].push(item);
      return acc;
    }, {});

    const resultArray = Object.keys(groupedByTeamId).map((teamId) => groupedByTeamId[teamId]);
    const uniqueByTeam = resultArray.map((arr) => arr.at(-1));
    return uniqueByTeam;
  };

  const finalRows = pageStore.section === "exist" ? getUnpaidRows() : rowsWithId;

  const periods: { [key: string]: any }[] = rowsWithId.map((row) => ({ year: row.year, month: row.month, _id: `${row.year}_${row.month}` }));

  const uniquePeriods = Object.values(
    periods.reduce((accumulator, current) => {
      accumulator[current._id] = current;
      return accumulator;
    }, {})
  );

  const handleDetailsClick = (row: TDocument) => {
    pageStore.setClickedRow(row);
    navigate(`${location.pathname}/${Number(row.id)}`);
  };

  const handleExportClick = async (document: TDocument) => {
    const validateExcelFile = (file: any) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
          const buffer = reader.result as any;
          const workbook = new Workbook();
          workbook.xlsx
            .load(buffer)
            .then(() => {
              const worksheet = workbook.getWorksheet(1);

              if (worksheet) {
                worksheet.getCell("D2").value = `${document.year} ${document.month}`;
                worksheet.name = `${document.year} ${document.month}`;

                document.payments?.forEach((payment: obj, index: number) => {
                  const unit = getPageDocument({ pageId: pageIds.Units, documentId: getIdValueFromObject(payment.unit) });

                  const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(unit?.project) });

                  const productSerialNumber = unit?.serial_number;

                  worksheet.getCell(`B${index + 5}`).value = `${project?.name} ${productSerialNumber}`;

                  worksheet.getCell(`C${index + 5}`).value = `${payment.place}`;
                  worksheet.getCell(`D${index + 5}`).value = `${payment.model}`;
                  worksheet.getCell(`E${index + 5}`).value = `${payment.capacity}`;
                  worksheet.getCell(`F${index + 5}`).value = `${payment.number_of_stops}`;
                  worksheet.getCell(`G${index + 5}`).value = `${payment.high_floor}`;

                  const work_status = getNameValueFromObject(payment.work_status);
                  worksheet.getCell(`H${index + 5}`).value = `${work_status}`;

                  worksheet.getCell(`I${index + 5}`).value = `${addCommasToNumber(payment.price_per_floor)} ₺`;
                  worksheet.getCell(`J${index + 5}`).value = `${addCommasToNumber(payment.total_floor_cost)} ₺`;

                  const work_percentage = getNameValueFromObject(payment.work_percentage);
                  worksheet.getCell(`K${index + 5}`).value = `${work_percentage}`;

                  worksheet.getCell(`L${index + 5}`).value = `${addCommasToNumber(payment.payed_fuel_cost)} ₺`;
                  worksheet.getCell(`M${index + 5}`).value = `${addCommasToNumber(payment.payed_floor_cost)} ₺`;
                });

                const calculatedDocument = autocomplete(document);

                worksheet.getCell(`L15`).value = `${addCommasToNumber(calculatedDocument.total_payed_fuel)} ₺`;
                worksheet.getCell(`M15`).value = `${addCommasToNumber(calculatedDocument.total_payed_floor)} ₺`;

                document.additional_payments?.forEach((payment: obj, index: number) => {
                  worksheet.getCell(`B${index + 18}`).value = `${payment.reason}`;
                  worksheet.getCell(`D${index + 18}`).value = `${addCommasToNumber(payment.payment_amount)} ₺`;
                });
                worksheet.getCell(`D22`).value = `${addCommasToNumber(calculatedDocument.total_additional_payments)} ₺`;

                worksheet.getCell(`M18`).value = `${addCommasToNumber(calculatedDocument.total_payed_fuel)} ₺`;
                worksheet.getCell(`M19`).value = `${addCommasToNumber(calculatedDocument.total_payed_floor)} ₺`;
                worksheet.getCell(`M20`).value = `${addCommasToNumber(calculatedDocument.total_additional_payments)} ₺`;
                worksheet.getCell(`M21`).value = `${addCommasToNumber(calculatedDocument.payed_progress_payment)} ₺`;

                worksheet.getCell(`D25`).value = `${addCommasToNumber(calculatedDocument.previous_month_dept_euro)} €`;
                worksheet.getCell(`D26`).value = `${addCommasToNumber(calculatedDocument.previous_month_dept_tl)} ₺`;

                document.advance_payment_and_other?.forEach((payment: obj, index: number) => {
                  worksheet.getCell(`B${index + 30}`).value = `${payment.reason}`;
                  worksheet.getCell(`D${index + 30}`).value = `${addCommasToNumber(payment.payment_amount)} ₺`;
                });
                worksheet.getCell(`D35`).value = `${addCommasToNumber(calculatedDocument.total_advance_payment_and_other)} ₺`;

                worksheet.getCell(`D38`).value = `${addCommasToNumber(calculatedDocument.previous_month_dept_euro)} €`;
                worksheet.getCell(`D39`).value = `${addCommasToNumber(calculatedDocument.cut_this_month_euro)} €`;
                worksheet.getCell(`D40`).value = `${addCommasToNumber(calculatedDocument.next_month_dept_euro)} €`;
                worksheet.getCell(`F38`).value = `${addCommasToNumber(calculatedDocument.euro_exchange_rate)}`;
                worksheet.getCell(`F39`).value = `${addCommasToNumber(calculatedDocument.euro_equivalent_lira)} ₺`;

                worksheet.getCell(`D43`).value = `${addCommasToNumber(calculatedDocument.previous_month_dept_tl)} ₺`;
                worksheet.getCell(`D44`).value = `${addCommasToNumber(calculatedDocument.total_advance_payment_and_other)} ₺`;
                worksheet.getCell(`D45`).value = `${addCommasToNumber(calculatedDocument.total_debt_tl)} ₺`;
                worksheet.getCell(`D46`).value = `${addCommasToNumber(calculatedDocument.cut_this_month_tl)} ₺`;
                worksheet.getCell(`D47`).value = `${addCommasToNumber(calculatedDocument.next_month_dept_tl)} ₺`;

                worksheet.getCell(`M24`).value = `${addCommasToNumber(calculatedDocument.payed_progress_payment)} ₺`;
                worksheet.getCell(`M25`).value = `${addCommasToNumber(calculatedDocument.total_cut)} ₺`;
                worksheet.getCell(`M26`).value = `${addCommasToNumber(calculatedDocument.payed_progress_payment)} ₺`;

                const employee_1 = getPageDocument({ pageId: pageIds.Employees, documentId: calculatedDocument.salary?.[0]?.employee });
                const minimum_wage_1 = calculatedDocument.salary?.[0]?.minimum_wage;

                const employee_2 = getPageDocument({ pageId: pageIds.Employees, documentId: calculatedDocument.salary?.[1]?.employee });
                const minimum_wage_2 = calculatedDocument.salary?.[1]?.minimum_wage;

                const total_minimum_wage = minimum_wage_1 + minimum_wage_2;
                const total_extra_salary = calculatedDocument.salary?.[0]?.extra_salary + calculatedDocument.salary?.[1]?.extra_salary;

                worksheet.getCell(`N29`).value = `${employee_1?.name}`;
                worksheet.getCell(`O29`).value = `${addCommasToNumber(minimum_wage_1)} ₺`;

                worksheet.getCell(`N30`).value = `${employee_2?.name}`;
                worksheet.getCell(`O30`).value = `${addCommasToNumber(minimum_wage_2)} ₺`;

                worksheet.getCell(`O32`).value = `${addCommasToNumber(total_minimum_wage)} ₺`;
                worksheet.getCell(`M29`).value = `${addCommasToNumber(total_minimum_wage)} ₺`;
                worksheet.getCell(`M30`).value = `${addCommasToNumber(total_extra_salary)} ₺`;
                worksheet.getCell(`M31`).value = `${addCommasToNumber(calculatedDocument.payed_progress_payment)} ₺`;

                const boss_employee = calculatedDocument.team_name?.employees?.find((row: obj) => row.is_boss);
                const boss_employee_name =
                  boss_employee?.employee === employee_1?._id ? employee_1?.name : boss_employee?.employee === employee_2?._id ? employee_2?.name : "";

                worksheet.getCell(`H42`).value = `${boss_employee_name}`;
              }

              workbook.xlsx.writeBuffer().then((data) => {
                var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                saveAs(blob, `${document.year}-${document.month}-${document.team_name?.team_name}_Montaj_Hakediş.xlsx`);
              });

              // console.log(workbook);
              resolve("Excel file is valid.");
            })
            .catch((error) => {
              reject("Error occurred while loading the workbook.");
            });
        };
      });
    };

    const pathToExcel = "/assets/monthlyProgressPaymentTemplate.xlsx";

    fetch(pathToExcel)
      .then((response) => response.blob())
      .then((blob) => {
        validateExcelFile(blob);
      })
      .catch((error) => console.error("Error fetching file:", error));
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}></div>
      <div>
        {uniquePeriods.map((period, index) => {
          return (
            <div key={index.toString()} style={{ marginTop: "5px" }}>
              <Accordion
                color={"primary"}
                expanded={index === expandedIndex}
                onChange={() => {
                  index === expandedIndex ? setExpandedIndex(-1) : setExpandedIndex(index);
                }}
                title={
                  <div style={{ display: "flex", fontSize: "0.9rem", fontWeight: "400" }}>
                    <div>{period.year}</div>
                    <div style={{ marginLeft: "10px" }}>{period.month}</div>
                  </div>
                }
                details={
                  <div>
                    {finalRows
                      .filter((row) => row.year === period.year && row.month === period.month)
                      .map((row, rowIndex) => {
                        return (
                          <div key={rowIndex.toString()} style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", height: "26px" }}>
                            <div className={styles["change-button"]} onClick={() => handleChangeButton(row)}>
                              <ModeEditOutlineOutlinedIcon style={{ width: "16px", height: "16px" }} />
                            </div>
                            <div className={styles["row-button"]} onDoubleClick={() => handleDetailsClick(row)}>
                              {row.team_name?.team_name}
                            </div>
                            <div className={styles["export-button"]} onClick={() => handleExportClick(row)}>
                              <FileOpenIcon style={{ width: "16px", height: "16px" }} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
