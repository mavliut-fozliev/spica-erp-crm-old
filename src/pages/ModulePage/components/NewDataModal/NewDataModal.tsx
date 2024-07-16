import React, { useContext, useEffect, useState } from "react";
import { useNewDataModalStore } from "./newDataModalStore";
import { TBucketProperty, TconfigPage, obj } from "../../../../types/types";
import { useInstantStore } from "../../../../store/instantStore";
import { usePageStore } from "../../../../store/pageStore";
import useAutocomplete from "../../../../hooks/useAutocomplete/useAutocomplete";
import SafetyWalk from "./components/forms/SafetyWalk/SafetyWalk";
import StringTypeInput from "./components/typeInputs/StringTypeInput/StringTypeInput";
import NumberTypeInput from "./components/typeInputs/NumberTypeInput/NumberTypeInput";
import TextareaInputType from "./components/typeInputs/TextareaInputType/TextareaInputType";
import BooleanTypeInput from "./components/typeInputs/BooleanTypeInput/BooleanTypeInput";
import DateTypeInput from "./components/typeInputs/DateTypeInput/DateTypeInput";
import RelationTypeInput from "./components/typeInputs/RelationTypeInput/RelationTypeInput";
import StorageArrayTypeInput from "./components/typeInputs/StorageArrayTypeInput/StorageArrayTypeInput";
import dayjs from "dayjs";
import FieldControlForm from "./components/forms/FieldControlForm/FieldControlForm";
import ConfirmationDialog from "../../../../components/modals/ConfirmationDialog/ConfirmationDialog";
import ModalWindow from "../../../../components/modals/ModalWindow/ModalWindow";
import ProposedSolutionFormModal from "../specialForPages/offers/ProposedSolutionFormModal/ProposedSolutionFormModal";
import FormDataExtraButtons from "./components/customViews/FormDataExtraButtons/FormDataExtraButtons";
import FieldMeasurementForm from "./components/forms/FieldMeasurementForm/FieldMeasurementForm";
import FormDataExtraData from "./components/customViews/FormDataExtraData/FormDataExtraData";
import { useModulePageStore } from "../../modulePageStore";
import ArrayTypeInput from "./components/typeInputs/ArrayTypeInput/ArrayTypeInput";
import usePaintInput from "../../../../hooks/usePaintInput";
import ObjectTypeInput from "./components/typeInputs/ObjectTypeInput/ObjectTypeInput";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import LetterHead from "./components/forms/assemblyProjects/LetterHead/LetterHead";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { ModalWindowSubtitle, modalWindowTitles } from "./consts";
import { isoDateFormat } from "services/functions/helpers/dateHelpers";
import useAutoUpdateBucketData from "hooks/useAutoUpdateBucketData/useAutoUpdateBucketData";
import useFormDataWarning from "./hooks/useFormDataWarning";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";
import EN81_50 from "./components/forms/SAISFORMS/forms/EN81_50/EN81_50";
import EN81_50_2 from "./components/forms/SAISFORMS/forms/EN81-50-2/EN81-50-2";
import F3_ES1_Pre_SAIS from "./components/forms/SAISFORMS/forms/F3_ES1_Pre_SAIS/F3_ES1_Pre_SAIS";

export default function NewDataModal({
  currentPage,
  properties,
  requiredProperties,
  presets,
  field_features_obj,
  pageSections,
  pageSectionLabels,
}: {
  currentPage: TconfigPage;
  properties: TBucketProperty[];
  requiredProperties: string[];
  presets: { [key: string]: any };
  field_features_obj: { [key: string]: any };
  pageSections: string[];
  pageSectionLabels: string[];
}) {
  const pageStore = usePageStore();
  const { rowForUpdate, openModal, selectedArrayIndex } = useModulePageStore();

  const instantStore = useInstantStore();
  const {
    formData,
    errors,
    files,
    uploadingFiles,
    isDisableSaveButton,
    formDataHasChanged,
    isFieldFormFilled,
    setFormData,
    setErrors,
    setFiles,
    setUploadingFiles,
    setIsDisableSaveButton,
    setFormDataHasChanged,
    setIsFieldFormFilled,
  } = useNewDataModalStore();

  const { handleClose } = useDataMethods();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const [updatedFormData, setUpdatedFormData] = useState({});

  const [openPropoesedSolution, setOpenPropoesedSolution] = useState(false);
  const [proposedSolutionArrayIndex, setProposedSolutionArrayIndex] = useState<{ productIndex: number; docxDataIndex: number }>({
    productIndex: 0,
    docxDataIndex: 0,
  });

  const [openFieldMeasurementForm, setOpenFieldMeasurementForm] = useState(false);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const isOnUpdate = Object.keys(rowForUpdate || {}).length > 0;

  const autocompleteFormData = useAutocomplete({ pageTitle: currentPage.title, isOnUpdate: isOnUpdate, callComponent: "newDataModal" });

  const autoUpdateBuckets = useAutoUpdateBucketData();

  const paintInput = usePaintInput();
  const paintObj = paintInput(formData);

  const formDataHasWarning = useFormDataWarning();

  const extraRequiredProperties: { [page: string]: () => string[] } = {
    "Contracts": () => {
      let arr: string[] = [];
      const isThereAgreement = formData.agreement_signed?.at(-1)?.deleted === false;
      if (isThereAgreement) {
        arr = [...arr, "agreement_date"];
      }
      return arr;
    },
    "Employees": () => {
      let arr: string[] = [];
      const nationality = getNameValueFromObject(formData.nationality);
      if (nationality !== "KKTC") {
        arr = [...arr, "passport_number"];
      }
      return arr;
    },
  };

  requiredProperties = [...requiredProperties, ...(extraRequiredProperties[currentPage.title]?.() || [])];

  const getInputElement = ({ property, parent, arrayIndex }: { property: TBucketProperty; parent?: string; arrayIndex?: number }): obj => {
    return {
      error: () => <div style={{ color: "red" }}>error</div>,
      boolean: () => (
        <BooleanTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
        />
      ),
      string: () => (
        <StringTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
          inputColor={paintObj[property.title!]}
          handleUpdatedFormDataChange={handleUpdatedFormDataChange}
        />
      ),
      textarea: () => (
        <TextareaInputType
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
        />
      ),
      number: () => (
        <NumberTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
          inputColor={paintObj[property.title!]}
        />
      ),
      date: () => (
        <DateTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
        />
      ),
      relation: () => (
        <RelationTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          handleInputChange={handleInputChange}
          requiredProperties={requiredProperties}
          rowForUpdate={rowForUpdate}
          handleUpdatedFormDataChange={handleUpdatedFormDataChange}
        />
      ),
      object: () => (
        <ObjectTypeInput
          property={property}
          parent={parent}
          arrayIndex={arrayIndex}
          field_features_obj={field_features_obj}
          getInputElement={getInputElement}
          setOpenPropoesedSolution={setOpenPropoesedSolution}
          setProposedSolutionArrayIndex={setProposedSolutionArrayIndex}
          files={files}
          setFiles={setFiles}
        />
      ),
      array: () => {
        return property.items.properties?.hasOwnProperty("storage") ? (
          <StorageArrayTypeInput
            property={property}
            parent={parent}
            arrayIndex={arrayIndex}
            files={files}
            setFiles={setFiles}
            bucketId={currentPage._id}
            requiredProperties={requiredProperties}
            autocompleteFormData={autocompleteFormData}
            field_features_obj={field_features_obj}
            rowForUpdate={rowForUpdate}
          />
        ) : (
          <ArrayTypeInput property={property} field_features_obj={field_features_obj} modalItems={getInputElement} handleInputChange={handleInputChange} />
        );
      },
    };
  };

  const getFormDataArray = (name: string, parent?: string, arrayIndex?: number) => {
    const haveParent = !!parent;
    const haveIndex = arrayIndex !== undefined;

    if (!haveIndex) {
      return [];
    }

    let fill: object | undefined = undefined;
    let propName = name;

    if (haveParent) {
      fill = {};
      propName = parent;
    }

    if (formData[propName]?.length <= arrayIndex) {
      return new Array(arrayIndex + 1).fill(fill);
    }

    return formData[propName];
  };

  const getUpdatedFormData = (name: string, value: any, parent?: string, arrayIndex?: number, formData?: obj) => {
    const haveParent = !!parent;
    const haveIndex = arrayIndex !== undefined;

    const array = getFormDataArray(name, parent, arrayIndex);

    const getNewFormData = () => {
      const oldFormData = formData || {};
      const newFormData = { ...oldFormData };

      if (haveParent && haveIndex) {
        newFormData[parent] = array.map((row: any, index: number) => (index === arrayIndex ? { ...row, [name]: value } : row));
      } else if (haveParent && !haveIndex) {
        newFormData[parent] = { ...oldFormData[parent], [name]: value };
      } else if (!haveParent && haveIndex) {
        newFormData[name] = array.map((item: any, index: number) => (index === arrayIndex ? value : item));
      } else {
        newFormData[name] = value;
      }

      return newFormData;
    };

    return getNewFormData();
  };

  const handleInputChange = (e: any, parent?: string, arrayIndex?: number) => {
    let { name, value } = e.target;

    if (!formDataHasChanged) {
      setFormDataHasChanged(true);
    }

    const newFormData = getUpdatedFormData(name, value, parent, arrayIndex, formData);
    autocompleteFormData(newFormData, name, arrayIndex);
  };

  const handleUpdatedFormDataChange = (e: any, parent?: string, arrayIndex?: number) => {
    let { name, value } = e.target;
    const newFormData = getUpdatedFormData(name, value, parent, arrayIndex);
    setUpdatedFormData(newFormData);
  };

  const validateForm = (checkOnly?: boolean) => {
    const newErrors: { [key: string]: any } = {};
    requiredProperties.forEach((key) => {
      if (Array.isArray(formData[key])) {
        newErrors[key] =
          !formData[key] ||
          formData[key].length === 0 ||
          formData[key]?.some((item: { [key: string]: any }) => Object.values(item).some((i) => i === null || i === undefined || i?.length === 0));
        if (formData[key]?.length > 0 && formData[key]?.[0]?.hasOwnProperty("storage")) {
          newErrors[key] = formData[key]?.every((item: { [key: string]: any }) => item.deleted === true);
        }
      } else {
        newErrors[key] = !formData[key] || formData[key]?.length === 0;
      }
    });

    if (!checkOnly) {
      setErrors(newErrors);
    }

    const thereIsNoErrors = !Object.values(newErrors).includes(true);
    if (!thereIsNoErrors && !checkOnly) {
      const errorArray: any = [];
      Object.keys(newErrors).forEach((key) => {
        if (newErrors[key]) errorArray.push(` ${key}`);
      });
      // console.log(`%cErrors:`, `color: rgb(200, 0, 0)`);
      // console.log(`%c${errorArray}`, `color: rgb(220, 0, 0)`);
    }
    return thereIsNoErrors;
  };

  const handleSave = async (hasWarning: boolean) => {
    if (openConfirmationDialog) setOpenConfirmationDialog(false);

    // this hook works before update //
    autoUpdateBuckets({ hasWarning });
    ////  ////  ////  ////  ////  ////

    setFormData({});

    setFormDataHasChanged(false);
    instantStore.setShowToast({ clue: "Kaydedildi" });
    handleClose();
  };

  const handleBeforeSave = () => (formDataHasWarning() ? setOpenConfirmationDialog(true) : handleSave(false));

  const handleBeforeClose = () => {
    if (Boolean(uploadingFiles.length)) {
      instantStore.setShowToast({ clue: "Hata, lütfen sayfayı yenileyin", type: "error" });
    }
    setUploadingFiles([]);
    setFiles({});
    setFormData({});
    setErrors({});
    setFormDataHasChanged(false);
    handleClose();
  };

  useEffect(() => {
    if (openModal && rowForUpdate && Object.keys(rowForUpdate).length) {
      setFormData(rowForUpdate);
      autocompleteFormData(rowForUpdate);
      return;
    }
    if (openModal) {
      setFormData(presets);
      return;
    }
    if (pageStore.page.title === "FieldInspections") {
      setIsFieldFormFilled(true);
    }
  }, [openModal]);

  useEffect(() => {
    const newFormData = { ...formData, ...updatedFormData };

    autocompleteFormData(newFormData);
  }, [updatedFormData]);

  useEffect(() => {
    console.log("formData: ", formData);

    if (validateForm()) {
      if (pageStore.page.title === "Contracts" && Number(sessionStorage.getItem("remainingPrice")) !== 0) {
        setIsDisableSaveButton(true);
        return;
      }

      if (isDisableSaveButton) {
        setIsDisableSaveButton(false);
      }
    } else {
      if (!isDisableSaveButton) {
        setIsDisableSaveButton(true);
      }
    }
  }, [formData]);

  /////////////////CHECK SESSION STORAGE WEIGHT//////////////////////
  // const data = sessionStorage.getItem("localPages");
  // if (data) {
  //   console.log("Размер данных в sessionStorage: ", new Blob([data]).size / 1024 / 1024, "мегабайт");
  // } else {
  //   console.log("No key");
  // }

  const modalTitle =
    currentPage.form_data_type === "custom"
      ? pageStore.page.title === "SafetyWalk"
        ? "SafetyWalk"
        : pageStore.page.title === "FieldInspections"
        ? `Saha Kontrol Formu. No: ${selectedArrayIndex + 1}`
        : ""
      : Object.keys(rowForUpdate || {}).length
      ? "Bilgileri Güncelle"
      : "Yeni Oluştur";

  const confirmationDialogTitle: obj = {
    "FieldInspections": { save: "Kaydettikten sonra formda herhangi bir değişiklik yapmak için yönetici onayınız olması gerekmektedir." },
  };

  return (
    <>
      <ModalWindow
        open={openModal}
        handleSave={handleBeforeSave}
        handleClose={handleBeforeClose}
        title={modalTitle}
        columnAmount={pageStore.pageBuckets[currentPage._id].title === "MonthlyProgressPayments" ? "double" : undefined}
        disabled={Boolean(uploadingFiles.length) || isDisableSaveButton || !isFieldFormFilled}
        useConfirmationDialog={formDataHasChanged}
        useGrid={true}
        customConfirmationDialogText={confirmationDialogTitle[pageStore.page.title]}
      >
        {currentPage.form_data_type === "custom" ? (
          <div style={{ gridColumn: "span 6" }}>
            {pageStore.page.title === "SafetyWalk" ? (
              <SafetyWalk handleInputChange={handleInputChange} files={files} setFiles={setFiles} />
            ) : pageStore.page.title === "FieldInspections" ? (
              <FieldControlForm handleInputChange={handleInputChange} files={files} setFiles={setFiles} />
            ) : pageStore.page.title === "SAISProjects" ? (
              <EN81_50_2 handleInputChange={handleInputChange} files={files} setFiles={setFiles} />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          properties
            .filter((property) => !field_features_obj[property.title!]?.hide_from_form_data && !field_features_obj[property.title!]?.hide)
            .map((property, index) => {
              return (
                <div key={index.toString()} style={{ gridColumn: `span ${field_features_obj[property.title!]?.grid_width || 6}`, position: "relative" }}>
                  <FormDataExtraData nativeElement={getInputElement({ property })[property.type || 0]?.()} property={property} rowForUpdate={rowForUpdate} />
                </div>
              );
            })
        )}
        <FormDataExtraButtons
          rowForUpdate={rowForUpdate}
          handleBeforeSave={handleBeforeSave}
          handleInputChange={handleInputChange}
          pageSections={pageSections}
          pageSectionLabels={pageSectionLabels}
        />
      </ModalWindow>
      {pageStore.page.title === "Offers" && (
        <ProposedSolutionFormModal open={openPropoesedSolution} handleClose={() => setOpenPropoesedSolution(false)} arrayIndexes={proposedSolutionArrayIndex} />
      )}
      <FieldMeasurementForm
        open={openFieldMeasurementForm}
        handleClose={() => setOpenFieldMeasurementForm(false)}
        handleInputChange={handleInputChange}
        arrayIndex={0}
      />
      <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={() => setOpenConfirmationDialog(false)}
        onConfirm={() => handleSave(true)}
        type="warning"
        title={modalWindowTitles[pageStore.page.title] || ""}
        subtitle={ModalWindowSubtitle[pageStore.page.title] || ""}
      />
    </>
  );
}
