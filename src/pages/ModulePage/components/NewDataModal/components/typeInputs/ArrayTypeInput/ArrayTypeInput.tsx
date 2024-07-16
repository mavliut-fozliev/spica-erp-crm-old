import React, { useState } from "react";
import styles from "./ArrayTypeInput.module.scss";
import { TBucketProperty } from "../../../../../../../types/types";
import { usePageStore } from "../../../../../../../store/pageStore";
import { useNewDataModalStore } from "../../../newDataModalStore";
import IconButton from "../../../../../../../components/buttons/IconButton/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import MainButton from "../../../../../../../components/buttons/MainButton/MainButton";
import ConfirmationDialog from "../../../../../../../components/modals/ConfirmationDialog/ConfirmationDialog";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function ArrayTypeInput({
  property,
  field_features_obj,
  modalItems,
  handleInputChange,
}: {
  property: TBucketProperty;
  field_features_obj: { [key: string]: any };
  modalItems: ({ property, parent, arrayIndex }: { property: TBucketProperty; parent?: string | undefined; arrayIndex?: number | undefined }) => {
    [key: string]: any;
  };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
}) {
  const pageStore = usePageStore();

  const { formData, setFormData, errors } = useNewDataModalStore();

  const { getPageDocuments } = useGetStoredPageData();

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deleteObjIndex, setDeleteObjIndex] = useState<number>(NaN);

  const error = field_features_obj[property.title!]?.required && errors[property.title!];

  const handleConfirmRemove = () => {
    setFormData({
      ...formData,
      [property.title!]: [...(formData[property.title!].filter((_: any, _index: number) => _index !== deleteObjIndex) || [])],
    });

    const shouldRemoveFromStore = field_features_obj[property.title!]?.disable_editing;

    if (shouldRemoveFromStore) {
      const currentSectionData = getPageDocuments({ pageId: "current", section: pageStore.section });

      const newArray = [...(formData[property.title!].filter((_: any, _index: number) => _index !== deleteObjIndex) || [])];

      const newPageSection = currentSectionData.map((row) => (row._id === formData._id ? { ...row, [property.title!]: newArray } : row));

      const newPagesData = {
        ...pageStore.pagesData,
        [pageStore.page._id]: { ...pageStore.pagesData[pageStore.page._id], [pageStore.section]: newPageSection },
      };

      pageStore.setPagesData(newPagesData);
    }
  };

  const addingForbiden = field_features_obj[property.title!]?.prevent_adding_and_removing_elements_to_an_array;

  const lengthBiggerThanAllowed = (): boolean => {
    const value = formData[property.title!];
    if (!Array.isArray(value)) return false;

    const maxLength = field_features_obj[property.title!]?.max_length;
    if (maxLength === undefined) return false;

    if (value.length < maxLength) return false;

    return true;
  };

  const docxDataAndOffersPage = pageStore.pageBuckets[pageStore.page._id].title === "Offers" && property.title === "docx_data";

  const productLengthBiggerThanTen = formData.products?.map((prod: any) => prod.docx_data)?.flat()?.length >= 10;

  const hideAddButton = addingForbiden || lengthBiggerThanAllowed() || docxDataAndOffersPage || productLengthBiggerThanTen;

  return (
    <>
      <p className={styles["array-title"]}>{property.description!}:</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {formData[property.title!]?.map((row: any, index: number) => {
          const hideDeleteButton = field_features_obj[property.title!]?.prevent_adding_and_removing_elements_to_an_array;

          return pageStore.pageBuckets[pageStore.page._id].title === "Offers" && property.title === "docx_data" ? (
            <div key={index.toString()} style={{ marginBottom: "10px", display: "flex" }}></div>
          ) : (
            <div key={index.toString()} style={{ marginBottom: "10px" }}>
              <div
                className={styles[index % 2 === 0 ? "array-body-1" : "array-body-2"]}
                style={{ boxShadow: error ? "1px 1px 4px 1px #ff0000" : "1px 1px 3px #a1a1a1" }}
              >
                <div className={styles["array-head"]}>
                  <p className={styles["array-index"]}>{index + 1}</p>
                  <div className={styles["array-remove-button"]}>
                    {!hideDeleteButton && (
                      <IconButton
                        width={20}
                        height={20}
                        style={{ padding: "0", margin: "0", marginBottom: "1px" }}
                        onClick={() => {
                          setDeleteObjIndex(index);
                          setOpenConfirmation(true);
                        }}
                      >
                        <ClearIcon style={{ width: "18px", height: "18px", color: "red" }} />
                      </IconButton>
                    )}
                  </div>
                </div>
                {modalItems({ property, arrayIndex: index })[property.items.type || 0]()}
              </div>
            </div>
          );
        })}
      </div>
      {hideAddButton ? (
        <div></div>
      ) : (
        <div style={{ margin: "10px 0" }} className={styles["array-add-button"]}>
          <MainButton
            width="60px"
            color={error ? "danger" : undefined}
            onClick={() => {
              handleInputChange({
                target: {
                  name: property.title!,
                  value: [
                    ...(formData[property.title!] || []),
                    property.items.type === "object" ? Object.fromEntries(Object.keys(property.items.properties).map((key) => [key, undefined])) : undefined, // empty object or string
                  ],
                },
              });
            }}
          >
            Ekle
          </MainButton>
        </div>
      )}
      <ConfirmationDialog
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        onConfirm={handleConfirmRemove}
        title="Emin misiniz?"
        subtitle={"Satır Silinecektir."}
        type="warning"
      />
    </>
  );
}
