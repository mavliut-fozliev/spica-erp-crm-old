import React from "react";
import TextArea from "../../../../../../../components/inputs/TextArea/TextArea";
import { TBucketProperty } from "../../../../../../../types/types";
import { useNewDataModalStore } from "../../../newDataModalStore";
import { usePageStore } from "../../../../../../../store/pageStore";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function TextareaInputType({
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

  const { formData } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocument } = useGetStoredPageData();

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

  const readOnly = !!(isReadOnly || disable_editing);

  return (
    <TextArea
      name={property.title}
      placeholder={property.description}
      value={
        parent
          ? formData[parent]
            ? arrayIndex !== undefined
              ? formData[parent][arrayIndex]
                ? formData[parent][arrayIndex][property.title!] || ""
                : formData[parent][property.title!] || ""
              : ""
            : ""
          : arrayIndex !== undefined
          ? formData[property.title!][arrayIndex] || ""
          : formData[property.title!] || ""
      }
      onChange={(e) => handleInputChange(e, parent, arrayIndex)}
      readOnly={readOnly}
    />
  );
}
