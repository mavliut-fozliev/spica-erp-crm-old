import React from "react";
import { TBucketProperty } from "../../../../../../../types/types";
import SelectField from "../../../../../../../components/inputs/SelectField/SelectField";
import { useNewDataModalStore } from "../../../newDataModalStore";
import { usePageStore } from "../../../../../../../store/pageStore";
import CustomSlider from "../../../../../../../components/inputs/CustomSlider/CustomSlider";
import Text from "../../../../../../../components/inputs/Text/Text";
import { getNameValueFromObject } from "../../../../../../../services/functions/helpers/getNameValueFromObject";
import { TitemsValue } from "../../../types";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { transformInputToObject } from "../../../../../../../services/functions/helpers/transformInputToObject";
import { inputColor } from "../../../../../../../hooks/usePaintInput";
import { getSymbol, symbol } from "../../../../../../../consts/propertySymbols";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function StringTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  handleInputChange,
  requiredProperties,
  rowForUpdate,
  inputColor,
  handleUpdatedFormDataChange,
}: {
  property: TBucketProperty;
  parent?: string;
  arrayIndex?: number;
  field_features_obj: { [key: string]: any };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  requiredProperties: string[];
  rowForUpdate: { [key: string]: any };
  inputColor?: inputColor;
  handleUpdatedFormDataChange: (e: any, parent?: string, arrayIndex?: number) => void;
}) {
  const pageStore = usePageStore();

  const { formData, errors } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const savedDocument = getPageDocument({ pageId: "current", documentId: rowForUpdate._id });
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isDisableEditing =
    Object.keys(rowForUpdate).length &&
    (!parent
      ? field_features_obj[property.title!]?.disable_editing
      : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing);

  const disable_editing = !!(isLengthBiggerThanIndex && isDisableEditing);

  const isReadOnly = !parent
    ? field_features_obj[property.title!]?.read_only
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

  const noWorkStatus =
    pageStore.page.title === "MonthlyProgressPayments" &&
    property.title === "work_percentage" &&
    arrayIndex !== undefined &&
    !getNameValueFromObject(formData.payments[arrayIndex]?.work_status);

  const readOnly = !!(noWorkStatus || isReadOnly || disable_editing);

  if (property.enum) {
    const pageTitle: string = pageStore.page.title;

    const isPercentage = pageTitle === "MonthlyProgressPayments" && property.title === "work_percentage";

    const initialItems: any[] =
      (isPercentage
        ? Array.from({ length: 101 }, (_, index) => ({ _id: `${index}%`, name: `${index}%` }))
        : property.enum.map((str: string) => ({ _id: str, name: str }))) || [];

    const itemsValue: TitemsValue = {
      "MonthlyProgressPayments": {
        "work_status": () => {
          if (arrayIndex !== undefined) {
            if (!formData.payments[arrayIndex]?.project) {
              return [];
            }

            const savedCurrentProductPayments = getPageDocuments({ pageId: "current" })
              .filter((row) => row._id !== formData._id)
              .map((row) =>
                row.payments?.filter((payment: any) => getIdValueFromObject(payment.unit) === getIdValueFromObject(formData.payments?.[arrayIndex]?.unit))
              )
              .flat()
              .filter((row) => row !== undefined);

            const formDataCurrentProductPayments = formData.payments?.filter(
              (payment: any, index: number) =>
                arrayIndex !== index && getIdValueFromObject(payment.unit) === getIdValueFromObject(formData.payments?.[arrayIndex]?.unit)
            );

            const currentProductPayments = [...savedCurrentProductPayments, ...formDataCurrentProductPayments];

            const usedWorkStatuses = currentProductPayments.map((payment) => getIdValueFromObject(payment.work_status));

            const freeWorkStatuses = initialItems.filter(
              (status) => getIdValueFromObject(status) === "ARA ÖDEME" || !usedWorkStatuses.includes(getIdValueFromObject(status))
            );

            return freeWorkStatuses;
          }
          return [];
        },
        "work_percentage": () => {
          if (arrayIndex !== undefined) {
            const savedCurrentProductPayments = getPageDocuments({ pageId: "current" })
              .filter((row) => row._id !== formData._id)
              .map((row) =>
                row.payments?.filter((payment: any) => getIdValueFromObject(payment.unit) === getIdValueFromObject(formData.payments?.[arrayIndex]?.unit))
              )
              .flat()
              .filter((row) => row !== undefined);

            const formDataCurrentProductPayments = formData.payments?.filter(
              (payment: any, index: number) =>
                arrayIndex !== index && getIdValueFromObject(payment.unit) === getIdValueFromObject(formData.payments?.[arrayIndex]?.unit)
            );

            const currentProductPayments = [...savedCurrentProductPayments, ...formDataCurrentProductPayments];

            const usedPercentage = currentProductPayments.map((row) => Number(getIdValueFromObject(row.work_percentage)?.slice(0, -1)));
            const usedPercentageSum = usedPercentage.reduce((acc, curr) => acc + (curr || 0), 0);

            const freePercentageNumber = 100 - usedPercentageSum;
            const freePercentage = initialItems.filter((row) => freePercentageNumber >= Number(getIdValueFromObject(row)?.slice(0, -1)));

            return freePercentage;
          }
          return [];
        },
      },
      "All": {},
    };

    const items: { [key: string]: any }[] = (
      itemsValue[pageTitle]?.[property.title!] ||
      itemsValue.All[property.title!] ||
      (() => initialItems) ||
      (() => [])
    )();

    const getDefaultItem = () => {
      if (parent) {
        if (!formData[parent]) return "";
        const target = arrayIndex !== undefined ? formData[parent][arrayIndex][property.title!] : formData[parent][property.title!];
        return typeof target === "string" ? transformInputToObject(target) : target ?? "";
      }

      const target = arrayIndex !== undefined ? formData[property.title!][arrayIndex] : formData[property.title!];
      return typeof target === "string" ? transformInputToObject(target) : target ?? "";
    };

    return (
      <SelectField
        name={property.title!}
        defaultItem={getDefaultItem()}
        onChange={(e) => handleInputChange(e, parent, arrayIndex)}
        label={property.description!}
        items={(disable_editing ? initialItems : items) || []}
        primary={"name"}
        readOnly={readOnly}
        error={requiredProperties.includes(property.title!) && errors[property.title!]}
        freeSolo={property.title === "nationality"}
        handleUpdatedFormDataChange={(e) => handleUpdatedFormDataChange(e, parent, arrayIndex)}
      />
    );
  }

  if (formData.type === "project" && property.title !== "field_team") {
    return <div></div>;
  }

  const getValue = () => {
    if (parent) {
      if (!formData[parent]) return "";
      if (arrayIndex !== undefined) {
        if (!formData[parent][arrayIndex]) return "";
        return formData[parent][arrayIndex][property.title!] || "";
      }
      return formData[parent][property.title!] || "";
    }

    if (arrayIndex !== undefined) {
      return formData[property.title!][arrayIndex] || "";
    }

    return formData[property.title!] || "";
  };

  const hideElement = (): boolean => {
    if (pageStore.page.title === "Employees") {
      const isOtherNationality = property.title === "other_nationality" && getNameValueFromObject(formData.nationality) !== "Diğer";
      return isOtherNationality;
    }

    return false;
  };

  return (
    <Text
      label={property.description}
      name={property.title}
      value={getValue()}
      onChange={(e: any) => handleInputChange(e, parent, arrayIndex)}
      error={requiredProperties.includes(property.title!) && errors[property.title!]}
      disable={readOnly}
      backgroundColor={inputColor?.background}
      color={
        inputColor?.arrayIndexes !== undefined && arrayIndex !== undefined
          ? inputColor?.arrayIndexes.includes(arrayIndex)
            ? inputColor?.color
            : undefined
          : inputColor?.color
      }
      symbol={getSymbol(pageStore.page.title, property.title!, parent)}
      hide={hideElement()}
    />
  );
}
