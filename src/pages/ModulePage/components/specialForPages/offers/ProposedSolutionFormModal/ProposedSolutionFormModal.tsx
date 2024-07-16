import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./ProposedSolutionFormModal.module.scss";
import Grid from "@material-ui/core/Grid";
import { Tproposed_solution_formData } from "../../../../../../types/templateTypes";
import ModalWindow from "../../../../../../components/modals/ModalWindow/ModalWindow";
import Text from "../../../../../../components/inputs/Text/Text";
import { formDataInputs } from "./consts";
import SelectFieldWithText from "../../../../../../components/inputs/SelectFieldWithText/SelectFieldWithText";
import { useNewDataModalStore } from "../../../NewDataModal/newDataModalStore";
import { convertNumberToWord } from "services/functions/helpers/numberHelpers";

export default function ProposedSolutionFormModal({
  open,
  handleClose,
  arrayIndexes,
}: {
  open: boolean;
  handleClose: () => void;
  arrayIndexes: { productIndex: number; docxDataIndex: number };
}) {
  const defaultFormData: Tproposed_solution_formData = Object.fromEntries(
    Object.entries(formDataInputs).map(([key, value]) => [key, value.selectOptions[0] ? value.selectOptions[0] : ""])
  );

  const { formData, setFormData, setFormDataHasChanged, isDisableSaveButton, setIsDisableSaveButton } = useNewDataModalStore();

  const [localFormData, setLocalFormData] = useState<Tproposed_solution_formData>(defaultFormData);
  const [localErrors, setLocalErrors] = useState<any>({});

  const getMaxProductCount = () => {
    const product = formData.products?.[arrayIndexes.productIndex];
    return product?.count;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, key: keyof Tproposed_solution_formData) => {
    const value = event.target.value;

    if (key === "adet_fiyati" || key === "adet") {
      let adet_fiyati = "0";
      let adet = "0";
      if (key === "adet_fiyati") {
        adet_fiyati = value;
        adet = localFormData.adet || "0";
      } else {
        adet_fiyati = localFormData.adet_fiyati || "0";
        adet = value;
      }
      const toplamFiyat = Number(adet_fiyati) * Number(adet);

      setLocalFormData((prev) => ({
        ...prev,
        [key]: value,
        toplam_fiyat: `${toplamFiyat}`,
        toplam_fiyatW: convertNumberToWord(toplamFiyat.toString()),
      }));
      return;
    }

    setLocalFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = (proposedSolutionFormData: Tproposed_solution_formData) => {
    const newFormData = {
      ...formData,
      products: (formData.products || []).map((row: any, i: number) =>
        i === arrayIndexes.productIndex
          ? {
              ...row,
              docx_data: row.docx_data?.map((docx_str: string, docx_i: number) =>
                docx_i === arrayIndexes.docxDataIndex ? JSON.stringify(proposedSolutionFormData) : docx_str
              ),
            }
          : row
      ),
    };
    setFormDataHasChanged(true);
    setFormData(newFormData);
  };

  const renderTextFields = () => {
    const keys: Array<keyof Tproposed_solution_formData> = Object.keys(defaultFormData) as Array<keyof Tproposed_solution_formData>;

    const keysToShow = keys.filter((key) => formDataInputs[key].title.length);

    let currentRow: JSX.Element[] = [];
    const rows: JSX.Element[] = [];

    keysToShow.forEach((key, index) => {
      currentRow.push(
        <Grid item xs={window.innerWidth <= 400 ? 12 : window.innerWidth <= 500 ? 6 : window.innerWidth <= 850 ? 4 : 2} key={index.toString()}>
          {formDataInputs[key].title &&
            (formDataInputs[key].inputType === "text" ? (
              <Text
                label={formDataInputs[key].title}
                name={key}
                value={localFormData[key] || ""}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, key)}
                error={localErrors[key]}
                maxValue={formDataInputs[key].title === "Adet" ? getMaxProductCount() : undefined}
              />
            ) : formDataInputs[key].inputType === "text_read_only" ? (
              <Text
                label={formDataInputs[key].title}
                name={key}
                value={localFormData[key] || ""}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, key)}
                disable={true}
              />
            ) : (
              <SelectFieldWithText
                name={key}
                label={formDataInputs[key].title}
                items={formDataInputs[key].selectOptions || []}
                value={localFormData[key] || "“”"}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, key)}
                error={localErrors[key]}
              />
            ))}
        </Grid>
      );

      if (key === "saft_konstruksiyonu" || key === "kat_butonu_konumu" || key === "toplam_fiyatW") {
        const titles = {
          saft_konstruksiyonu: "Teknik Bilgiler",
          kat_butonu_konumu: "Dekorasyon",
          toplam_fiyatW: "Fiyat",
        };
        rows.push(
          <div key={key}>
            <div className={styles["group-title"]}>{titles[key]}</div>
            <Grid container spacing={1}>
              {currentRow}
            </Grid>
            {key !== "toplam_fiyatW" && <div className={styles["group-bottom-line"]}></div>}
          </div>
        );
        currentRow = [];
      }
    });

    if (currentRow.length > 0) {
      rows.push(
        <Grid container spacing={1} key={currentRow.toString()}>
          {currentRow}
        </Grid>
      );
    }

    return <>{rows}</>;
  };

  useEffect(() => {
    if (open) {
      const str_docx_data = formData.products?.[arrayIndexes.productIndex]?.docx_data?.[arrayIndexes.docxDataIndex];
      setLocalFormData({
        ...defaultFormData,
        ...(str_docx_data ? JSON.parse(str_docx_data) : {}),
      });
    }
  }, [open]);

  useEffect(() => {
    console.log("proposedSolutionFormData: ", localFormData);
  }, [localFormData]);

  function hasAllValues(obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
    return Object.keys(obj1).every((key) => {
      return obj2.hasOwnProperty(key) && obj2[key] && obj2[key].length !== 0 && obj2[key] !== "“”";
    });
  }

  useEffect(() => {
    const resArray: boolean[] = [];
    formData.products?.forEach((product: any) =>
      product?.docx_data?.forEach((data: any) => {
        const res = hasAllValues(defaultFormData, JSON.parse(data));
        resArray.push(res);
      })
    );

    // const isFilled = resArray.every((res) => res === true);
    // if (isFilled && isDisableSaveButton) {
    //   setIsDisableSaveButton(false);
    // } else if (!isFilled && !isDisableSaveButton) {
    //   setIsDisableSaveButton(true);
    // }
  }, [formData]);

  return (
    <ModalWindow
      open={open}
      handleClose={() => {
        setLocalErrors({});
        handleClose();
      }}
      handleSave={() => {
        const errors = Object.entries(localFormData).filter(([key, value]) => !value || value?.length === 0 || value === "“”");
        if (errors.length) {
          const localErrors: any = {};
          errors.forEach((array) => (localErrors[array[0]] = true));
          setLocalErrors(localErrors);
          return;
        }
        handleSave(localFormData);
        handleClose();
        setLocalErrors({});
      }}
      customWidth={1300}
      columnAmount="single"
      title="Teklif Dosyası Oluştur"
    >
      {renderTextFields()}
    </ModalWindow>
  );
}
