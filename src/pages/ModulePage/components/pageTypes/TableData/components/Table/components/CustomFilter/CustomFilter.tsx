import SelectField from "components/inputs/SelectField/SelectField";
import React, { useEffect } from "react";
import { TDocumentWithId } from "../../Table";
import Text from "components/inputs/Text/Text";
import { TFilterProps, defaultFilterProps, useTableDataStore } from "../../../../tableDataStore";
import styles from "./CustomFilter.module.scss";
import { usePageStore } from "store/pageStore";
import { convertTimeToShow } from "services/functions/helpers/dateHelpers";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import { useModulePageStore } from "pages/ModulePage/modulePageStore";
import { TBucketProperty, obj } from "types/types";

type TColumnNames = {
  _id: string;
  label: string;
};

const operators = [
  { _id: "contain", label: "içerir" },
  { _id: "equal", label: "eşittir" },
  { _id: "notEqual", label: "eşit değil" },
  { _id: "startWith", label: "ile başlar" },
  { _id: "endWith", label: "ile biter" },
  { _id: "greaterThan", label: "büyüktür" },
  { _id: "lessThan", label: "küçüktür" },
];

export default function CustomFilter({
  columnNames,
  rowsWithId,
  setFilteredRows,
  properties,
}: {
  columnNames: TColumnNames[];
  rowsWithId: TDocumentWithId[];
  setFilteredRows: (rows: TDocumentWithId[]) => void;
  properties: TBucketProperty[];
}) {
  const pageStore = usePageStore();
  const { filterProps, setFilterProps } = useTableDataStore();

  const { openModal } = useModulePageStore();

  const filterRows = (fProps: TFilterProps) => {
    const newRows = rowsWithId.filter((row) => {
      const columnName = fProps.columnName._id;
      const operator = fProps.operator._id ?? "contain";
      const value = fProps.value;

      if (!value) return true;

      let checkValues: (string | undefined)[] = [""];
      if (columnName !== defaultFilterProps.columnName._id) {
        checkValues = [row[columnName]?.toString()];
      } else {
        checkValues = Object.entries(row).map(([key, val]) => {
          const property = properties.find((prop) => prop.title === key);

          switch (property?.type) {
            case "relation":
              return property.primary ? val[property.primary] : "";

            case "date":
              return convertTimeToShow(val);

            case "number":
            case "string":
              if (typeof val === "object") {
                return getNameValueFromObject(val).toString();
              }
              return val.toString();

            default:
              return "";
          }
        });
      }

      const toLowerCase = (v: string) => v?.toLocaleLowerCase("tr-TR");

      const lowerCaseValue = toLowerCase(value);

      return checkValues.some((v) => {
        if (!v) return false;

        const filters: obj = {
          "contain": () => toLowerCase(v).includes(lowerCaseValue),
          "equal": () => toLowerCase(v) === lowerCaseValue,
          "notEqual": () => toLowerCase(v) !== lowerCaseValue,
          "startWith": () => toLowerCase(v).startsWith(lowerCaseValue),
          "endWith": () => toLowerCase(v).endsWith(lowerCaseValue),
          "greaterThan": () => parseFloat(v) > parseFloat(value),
          "lessThan": () => parseFloat(v) < parseFloat(value),
        };

        return filters[operator]();
      });
    });

    setFilteredRows(newRows);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const newFilterProps = { ...filterProps, [name]: value };

    setFilterProps(newFilterProps);
    filterRows(newFilterProps);
  };

  useEffect(() => {
    setFilterProps(defaultFilterProps);
  }, [pageStore.page._id]);

  useEffect(() => {
    filterRows(filterProps);
  }, [pageStore.section, rowsWithId.length, openModal]);

  return (
    <div className={styles["box"]}>
      <div style={{ width: "300px" }}>
        <SelectField
          label="Sütun"
          name={"columnName"}
          defaultItem={filterProps.columnName}
          onChange={handleChange}
          items={[defaultFilterProps.columnName, ...columnNames]}
          primary={"label"}
          disableClearable={true}
        />
      </div>
      <div style={{ width: "140px" }}>
        <SelectField
          label="Operatör"
          name={"operator"}
          defaultItem={filterProps.operator}
          onChange={handleChange}
          items={operators}
          primary={"label"}
          disableClearable={true}
        />
      </div>
      <div style={{ width: "400px" }}>
        <Text label="Değer" name={"value"} value={filterProps.value} onChange={handleChange} error={!!filterProps.value} />
      </div>
    </div>
  );
}
