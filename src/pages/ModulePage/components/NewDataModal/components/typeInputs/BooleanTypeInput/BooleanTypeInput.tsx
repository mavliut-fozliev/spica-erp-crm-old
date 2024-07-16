import React from "react";
import ToggleCheckbox from "../../../../../../../components/inputs/ToggleCheckbox/ToggleCheckbox";
import { TBucketProperty } from "../../../../../../../types/types";
import { useNewDataModalStore } from "../../../newDataModalStore";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { usePageStore } from "../../../../../../../store/pageStore";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function BooleanTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  handleInputChange,
  requiredProperties,
  rowForUpdate,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  field_features_obj: { [key: string]: any };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  requiredProperties: string[];
  rowForUpdate: { [key: string]: any };
}) {
  const pageStore = usePageStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { formData, errors } = useNewDataModalStore();

  const { getPageDocument } = useGetStoredPageData();

  const isPermitRequired = property.title === "permit_required" && getIdValueFromObject(formData.nationality) === "KKTC";

  const isReadOnly = !parent
    ? field_features_obj[property.title!]?.read_only
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

  const savedDocument = getPageDocument({ pageId: "current", documentId: rowForUpdate._id });
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isDisableEditing =
    Object.keys(rowForUpdate).length &&
    (!parent
      ? field_features_obj[property.title!]?.disable_editing
      : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing);

  const readOnly = Boolean(isPermitRequired || isReadOnly || (isLengthBiggerThanIndex && isDisableEditing));

  return (
    <ToggleCheckbox
      label={property.description}
      name={property.title!}
      value={
        parent
          ? formData[parent]
            ? arrayIndex !== undefined
              ? formData[parent][arrayIndex]
                ? formData[parent][arrayIndex][property.title!] || false
                : formData[parent][property.title!] || false
              : false
            : false
          : arrayIndex !== undefined
          ? formData[property.title!][arrayIndex] || false
          : formData[property.title!] || false
      }
      onChange={(e) => handleInputChange(e, parent, arrayIndex)}
      disabled={readOnly}
    />
  );
}
