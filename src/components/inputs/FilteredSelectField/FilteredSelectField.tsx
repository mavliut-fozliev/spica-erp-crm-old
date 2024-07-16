import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select, Box, SelectChangeEvent } from "@mui/material";
import styles from "./FilteredSelectField.module.scss";
import { TDocument } from "types/types";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";

type TSelectField = {
  _id?: string;
  [key: string]: any;
};

export default function FilteredSelectField({
  name,
  defaultValue,
  onChange,
  label,
  items,
  error,
  isRemoved,
  setIsRemoved,
  bucketId,
}: {
  name: string;
  defaultValue: string;
  onChange: (Event: any) => void;
  label: string;
  items: TSelectField[];
  error?: boolean;
  isRemoved?: boolean;
  setIsRemoved?: (isRemoved: boolean) => void;
  bucketId: string;
}) {
  const { getPageDocument } = useGetStoredPageData();

  const filterProps = name.split("stepped")[1].trim().split("_").slice(1);
  const filterLabels = label.split("_") || [];

  const objectForUpdate: TDocument = getPageDocument({ pageId: pageIds.Products, documentId: defaultValue }) || {};
  const valuesForUpdate = filterProps.map((filterProp) => objectForUpdate[filterProp]);

  const values = /^[0-9a-fA-F]{24}$/.test(defaultValue) ? valuesForUpdate : defaultValue ? defaultValue.split("_") : [];

  const result = Array(filterProps.length).fill(items);

  const [selectionModel, setSelectionModel] = useState<any[][]>(result);

  const handleChange = (event: SelectChangeEvent<string | string[]> | { target: { name: string; value: string } }) => {
    onChange(event);
  };

  const selectFielsSx = {
    boxShadow: "none",
    border: "1px solid rgb(225, 225, 225)",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
  };

  const handleFilter = (e: any) => {
    const indexOfTarget = filterProps.indexOf(e.target.name);

    const valuesSliced = values.slice(0, indexOfTarget + 1);
    valuesSliced[indexOfTarget] = e.target.value;

    handleChange({ target: { name: name, value: `${valuesSliced?.join("_")}` } });

    const newCurrentSelection: { [key: string]: any } = Object.fromEntries(
      filterProps.filter((filterProp, index) => valuesSliced[index]).map((filterProp, index) => [filterProp, valuesSliced[index]])
    );

    const newSelectionModel = [
      ...result.map((array, index) =>
        index <= indexOfTarget
          ? selectionModel[index]
          : index === indexOfTarget + 1
          ? array.filter((item: any) => Object.keys(newCurrentSelection).every((key) => item[key] === newCurrentSelection[key]))
          : []
      ),
    ];
    setSelectionModel(newSelectionModel);
  };

  useEffect(() => {
    if (isRemoved && setIsRemoved) {
      const newSelection = result.map((array, index) => {
        if (index === 0) {
          return array;
        } else {
          const filters: any[] = [];
          for (let i = 0; i < index; i++) {
            filters.push((item: any) => item[filterProps[i]] === values[i]);
          }

          return array.filter((item: any) => filters.every((filter) => filter(item)));
        }
      });

      setSelectionModel(newSelection);
      setIsRemoved(false);
    }
  }, [isRemoved]);

  useEffect(() => {
    const newSelection = result.map((array, index) => {
      if (index === 0) {
        return array;
      } else {
        const filters: any[] = [];
        for (let i = 0; i < index; i++) {
          filters.push((item: any) => item[filterProps[i]] === values[i]);
        }

        return array.filter((item: any) => filters.every((filter) => filter(item)));
      }
    });

    setSelectionModel(newSelection);
  }, []);

  return (
    <Box className={styles["box"]}>
      {result.map((array, index) => (
        <div key={index.toString()} className={styles["box-item"]}>
          <label id="select-label" className={styles["label"]}>
            {filterLabels[index + 1]}
          </label>
          <Box className={styles["inner-box"]}>
            <FormControl fullWidth error={error} className={styles["form-control"]}>
              <Select
                name={filterProps[index]}
                defaultValue=""
                value={values[index] || ""}
                onChange={handleFilter}
                className={styles[error ? "select-error" : "select"]}
                sx={selectFielsSx}
              >
                {selectionModel[index]
                  ?.filter((item, itemIndex, array) => array.findIndex((el) => el[filterProps[index]] === item[filterProps[index]]) === itemIndex)
                  .map((item, itemIndex) => (
                    <MenuItem key={itemIndex.toString()} value={item[filterProps[index]]} className={styles["item"]}>
                      {item[filterProps[index]]}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      ))}
    </Box>
  );
}
