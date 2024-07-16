import React, { useEffect, useRef, useState } from "react";
import { TBucketProperty } from "../../../../../../../types/types";
import { usePageStore } from "../../../../../../../store/pageStore";
import { TFile, useNewDataModalStore } from "../../../newDataModalStore";
import FileInput from "../../../../../../../components/inputs/FileInput/FileInput";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { useAddFileFromStorageToBucket } from "../../../hooks/useAddFileFromStorageToBucket";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function StorageArrayTypeInput({
  property,
  parent,
  arrayIndex,
  files,
  setFiles,
  bucketId,
  requiredProperties,
  type,
  accept,
  autocompleteFormData,
  field_features_obj,
  rowForUpdate,
  disabled,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  files: TFile;
  setFiles: (state: TFile) => void;
  bucketId: string;
  requiredProperties: string[];
  type?: "normal" | "mini" | "visible";
  accept?: "img";
  autocompleteFormData?: (newFormData: { [key: string]: any }) => void;
  field_features_obj?: { [key: string]: any };
  rowForUpdate?: { [key: string]: any };
  disabled?: boolean;
}) {
  const pageStore = usePageStore();

  const { formData, setFormData, errors, uploadingFiles, setUploadingFiles, setFormDataHasChanged } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const addFileFromStorageToBucket = useAddFileFromStorageToBucket();

  const { getPageDocument } = useGetStoredPageData();

  const [percentage, setPercentage] = useState(0);

  const name =
    parent && arrayIndex !== undefined ? parent + "~" + arrayIndex + "~" + property.title! : parent ? parent + "~" + property.title! : property.title!;

  const value =
    parent && arrayIndex !== undefined
      ? formData[parent]?.[arrayIndex]?.[property.title!]
      : parent
      ? formData[parent][property.title!]
      : formData[property.title!];

  const formDateRef = useRef<object>({});
  formDateRef.current = formData;

  const uploadingFilesRef = useRef<string[]>([]);
  uploadingFilesRef.current = uploadingFiles;

  const savedDocument = rowForUpdate ? getPageDocument({ pageId: "current", documentId: rowForUpdate._id }) : {};
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isOnUpdate = Object.keys(rowForUpdate || {}).length;

  const isFieldDisableEditing = !parent
    ? field_features_obj?.[property.title!]?.disable_editing
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing;

  const disable_editing = isLengthBiggerThanIndex && isOnUpdate && isFieldDisableEditing;

  const isFieldReadOnly = !parent
    ? field_features_obj?.[property.title!]?.read_only
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

  const readOnly = !!(isFieldReadOnly || disable_editing);

  function mergeObjects(obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
    const merged: { [key: string]: any } = {};
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        merged[key] = obj1[key];
      }
    }
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          merged[key] = obj2[key];
        }
      }
    }
    return merged;
  }

  async function transferFiles(selectedFiles: File[]) {
    setUploadingFiles([...uploadingFilesRef.current, name]);

    const newSingleFile = {
      content: selectedFiles,
      parent,
      arrayIndex,
    };

    const newFiles = {
      ...files,
      [name]: newSingleFile,
    };

    if (setFiles) {
      setFiles(newFiles);
    }

    const oldFormData = { ...formData };

    const resultFormData = await addFileFromStorageToBucket(name, newSingleFile, pageStore.page.title);

    setUploadingFiles(uploadingFilesRef.current?.filter((fileName) => fileName !== name));

    const mergedFormData = mergeObjects(oldFormData, mergeObjects(formDateRef.current, resultFormData));
    autocompleteFormData ? autocompleteFormData(mergedFormData) : setFormData(mergedFormData);
    setFormDataHasChanged(true);
  }

  const isFileExist = () => {
    const arrayValue = Array.isArray(value) ? value : [];
    const count = arrayValue.reduce((acc: number, object: any) => acc + (object["deleted"] ? 0 : 1), 0);
    return Boolean(count);
  };

  function deleteFile() {
    if (parent && arrayIndex !== undefined) {
      const newArray = formData[parent][arrayIndex][property.title!].map((object: any) => ({
        ...object,
        deleted: true,
      }));

      const newParentArray = [...formData[parent].map((obj: any, index: number) => (index === arrayIndex ? { ...obj, [property.title!]: newArray } : obj))];

      const data = { ...formData, [parent]: newParentArray };
      autocompleteFormData ? autocompleteFormData(data) : setFormData(data);
      return;
    }

    const newArray = formData[property.title!].map((object: any) => ({
      ...object,
      deleted: true,
    }));

    const data = {
      ...formData,
      [property.title!]: newArray,
    };

    autocompleteFormData ? autocompleteFormData(data) : setFormData(data);
    setFiles({ ...files, [property.title!]: { content: [] } });
    setFormDataHasChanged(true);
  }

  const hideElement = () => {
    const isPermitRequired = property.title?.includes("permit") && !formData.permit_required;
    const isPassive = property.title?.includes("dismissal") && formData.status !== "passive";
    const isHourlyLeave = pageStore.page.title === "AnnualLeave" && getIdValueFromObject(formData.leave_type) !== "SAĞLIK İZNİ";
    return isPermitRequired || isPassive || isHourlyLeave;
  };

  useEffect(() => {
    let intervalId;
    if (uploadingFiles.includes(name)) {
      intervalId = setInterval(() => setPercentage(Number(sessionStorage.getItem("percentage-" + name))), 100);
    } else {
      clearInterval(intervalId);
      sessionStorage.removeItem("percentage-" + name);
      // setCurrentInputNames("");
    }
  }, [uploadingFiles]);

  const resolvedType =
    (!parent ? field_features_obj?.[property.title!]?.type : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.type) ?? type;

  return (
    <FileInput
      name={name}
      value={value}
      files={files ? files[name]?.content || [] : []}
      transferFiles={transferFiles}
      percentage={percentage}
      multiple={field_features_obj?.[property.title!]?.more_than_one_file}
      label={property.description!}
      fileExist={isFileExist()}
      deleteFile={() => deleteFile()}
      error={requiredProperties.includes(property.title!) && errors[property.title!]}
      hide={hideElement()}
      accept={accept || field_features_obj?.[property.title!]?.file_type}
      type={resolvedType}
      disabled={readOnly || disabled}
      contentSize={field_features_obj?.[property.title!]?.content_size}
    />
  );
}
