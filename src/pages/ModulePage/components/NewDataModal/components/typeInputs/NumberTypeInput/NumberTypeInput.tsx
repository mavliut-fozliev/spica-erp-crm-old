import React from "react";
import { TBucketProperty } from "../../../../../../../types/types";
import SelectField from "../../../../../../../components/inputs/SelectField/SelectField";
import { useNewDataModalStore } from "../../../newDataModalStore";
import Text from "../../../../../../../components/inputs/Text/Text";
import { usePageStore } from "../../../../../../../store/pageStore";
import { transformInputToObject } from "../../../../../../../services/functions/helpers/transformInputToObject";
import { inputColor } from "../../../../../../../hooks/usePaintInput";
import { getSymbol } from "../../../../../../../consts/propertySymbols";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import CustomSlider from "components/inputs/CustomSlider/CustomSlider";

export default function NumberTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  handleInputChange,
  requiredProperties,
  rowForUpdate,
  inputColor,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  field_features_obj: { [key: string]: any };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  requiredProperties: string[];
  rowForUpdate: { [key: string]: any };
  inputColor?: inputColor;
}) {
  const pageStore = usePageStore();
  const { formData, errors } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocument } = useGetStoredPageData();

  const isBoss =
    arrayIndex !== undefined && formData.employees?.[arrayIndex]?.is_boss === true && pageStore.page.title === "FieldTeams" && property.title === "salary";

  const isFieldReadOnly = !parent
    ? field_features_obj[property.title!]?.read_only
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

  const isOnUpdate = Object.keys(rowForUpdate).length;

  const savedDocument = getPageDocument({ pageId: "current", documentId: rowForUpdate._id });
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isFieldDisableEditing = !parent
    ? field_features_obj[property.title!]?.disable_editing
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing;

  const isFieldChangesAreDisabled = isLengthBiggerThanIndex && isOnUpdate && isFieldDisableEditing;

  const readOnly = Boolean(isBoss || isFieldReadOnly || isFieldChangesAreDisabled);

  if (property.enum) {
    const getDefaultItem = () => {
      if (parent) {
        if (!formData[parent]) return undefined;
        const target = arrayIndex !== undefined ? formData[parent][arrayIndex][property.title!] : formData[parent][property.title!];
        return transformInputToObject(target);
      }

      const target = arrayIndex !== undefined ? formData[property.title!][arrayIndex] : formData[property.title!];
      return transformInputToObject(target);
    };
    return (
      <SelectField
        name={property.title!}
        defaultItem={getDefaultItem()}
        onChange={(e) => handleInputChange(e, parent, arrayIndex)}
        label={property.description!}
        items={property.enum.map((num: number) => ({ _id: num, name: num })) || []}
        primary={"name"}
        readOnly={readOnly}
        error={requiredProperties.includes(property.title!) && errors[property.title!]}
      />
    );
  }

  const getValue = () => {
    if (parent) {
      if (!formData[parent]) return "";

      if (arrayIndex !== undefined) {
        if (!formData[parent][arrayIndex]) return "";
        return formData[parent][arrayIndex][property.title!] ?? "";
      }
      return formData[parent][property.title!] ?? "";
    }

    if (arrayIndex !== undefined) {
      return formData[property.title!][arrayIndex] ?? "";
    }

    return formData[property.title!] ?? "";
  };

  const hideLabel = !parent
    ? field_features_obj[property.title!]?.hide_label
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.hide_label;

  if (field_features_obj[property.title!]?.slider) {
    return <CustomSlider name={property.title!} label={property.description} value={formData[property.title!] || 0} onChange={handleInputChange} />;
  }

  return (
    <Text
      type="number"
      label={hideLabel ? "" : property.description}
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
    />
  );
}
