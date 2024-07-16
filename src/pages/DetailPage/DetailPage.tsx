import React, { useEffect, useState } from "react";
import { usePageStore } from "../../store/pageStore";
import styles from "./DetailsPage.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import DownloadButton from "../../components/buttons/DownloadButton/DownloadButton";
import ToggleButtons from "../../components/buttons/ToggleButtons/ToggleButtons";
import { getIdValueFromObject } from "../../services/functions/helpers/getIdValueFromObject";
import useAutocomplete from "../../hooks/useAutocomplete/useAutocomplete";
import usePaintInput from "../../hooks/usePaintInput";
import { getNameValueFromObject } from "../../services/functions/helpers/getNameValueFromObject";
import { TBucketProperty, TconfigPage, obj } from "types/types";
import { gridWidths } from "./consts";
import { convertTimeToShow } from "services/functions/helpers/dateHelpers";
import OpenFileInNewButton from "components/buttons/OpenFileInNewButton/OpenFileInNewButton";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { formatNumberBasedOnProp } from "services/functions/helpers/numberHelpers";

export default function DetailPage({ currentPage }: { currentPage: TconfigPage }) {
  const pageStore = usePageStore();

  const autocompleteFormData = useAutocomplete({ pageTitle: currentPage.title, dontSave: true });

  const paintInput = usePaintInput();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const { getProperties, getFieldFeatures } = useGetProperties();

  const properties = getProperties(currentPage.title);
  const field_features_obj = getFieldFeatures(currentPage.title);

  const exceptArray = [
    "_id",
    "id",
    "status",
    ...Object.keys(field_features_obj)?.filter((key: any) => field_features_obj[key]?.hide_from_detail_page || field_features_obj[key]?.hide),
  ];

  const propertyTitlesAndDescriptions: { title: string; description: string }[] = [];

  const allCurrentOfferRevises = getPageDocuments({ pageId: "current", section: "revised" }).filter(
    (row) => getIdValueFromObject(row.previous_offer) === pageStore.clickedRow._id
  );
  const [reviseIndex, setReviseIndex] = useState(allCurrentOfferRevises?.[0]?.reference_number.slice(14) || "0");
  const pagination = ["0", ...(allCurrentOfferRevises?.map((row, index) => (index + 1).toString()) || [])];

  const initialRow =
    pageStore.page.title === "Offers"
      ? { customer: pageStore.clickedRow.customer, project: pageStore.clickedRow.project, ...allCurrentOfferRevises?.[0] }
      : pageStore.clickedRow;

  const calculatedRow = autocompleteFormData(initialRow);

  const paintObj = paintInput({ ...initialRow, ...calculatedRow });

  const [currentData, setCurrentData] = useState<any>({ ...initialRow, ...calculatedRow });

  const getViewElement = (property: TBucketProperty, parent?: string): { [key: string]: (document: obj) => any } => {
    const propTitle = property.title!;
    return {
      date: (document) => {
        const isHourlyLeave =
          pageStore.page.title === "AnnualLeave" && document.leave_type !== "SAATLİK İZİN" && (propTitle === "start_time" || propTitle === "end_time");

        if (isHourlyLeave) {
          return "-";
        }

        const config = {
          dateOnly: field_features_obj[propTitle]?.date_only,
          timeOnly: field_features_obj[propTitle]?.time_only,
        };

        if (parent) {
          config.dateOnly = getItemInternalFieldFeature(currentPage.title, parent, property.title!)?.date_only;
          config.timeOnly = getItemInternalFieldFeature(currentPage.title, parent, property.title!)?.time_only;
        }

        const convertedTime = convertTimeToShow(document[propTitle], config);

        return convertedTime;
      },
      relation: (document) => {
        if (!document[propTitle]) {
          return "";
        }

        const isRelationResolved = typeof document[propTitle] === "object";

        if (isRelationResolved) {
          return document[propTitle]?.[property.primary!];
        }

        const primary = pageStore.pageBuckets[property.bucketId].primary;

        return getPageDocument({ pageId: property.bucketId, documentId: document[propTitle] })?.[primary];
      },
      boolean: (document) => {
        if (propTitle === "permit_required" && document.nationality === "KKTC") {
          return "Çalışma İzninden Muaf";
        }

        if (document[propTitle]) {
          return <AiOutlineCheck style={{ width: "18px", height: "18px" }} />;
        }

        return "";
      },
      number: (document) => {
        let value = getNameValueFromObject(document[propTitle]) || 0;

        return (
          <div
            style={{
              color: paintObj[propTitle || ""]?.color,
            }}
          >
            {value}
            {/* {symbol[pageStore.page.title]?.[property.title!]} */}
          </div>
        );
      },
      array: (document) => {
        if (property.items.type !== "object") {
          return document[propTitle]?.join(", ");
        }

        const isStorage = property.items.properties.hasOwnProperty("storage");

        if (isStorage) {
          const isExist = document[propTitle]?.find((elem: any) => elem.deleted === false);

          if (!isExist) {
            return [<div id="file" key={"file"} style={{ height: "16px" }}></div>];
          }

          const data = [...document[propTitle]].reverse();

          const getElement = (elem: any, index: number) => {
            const isVisible = field_features_obj[propTitle]?.type === "visible";

            const visibleContent = () => {
              return (
                <div style={{ width: "120px" }}>
                  <img src={elem.storage} alt="" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
              );
            };

            return (
              <div className={styles["file-container"]} key={index.toString()}>
                <div className={styles["file-content-box"]}>
                  {isVisible ? visibleContent() : <></>}
                  <div className={styles["file-open-button"]}>
                    <OpenFileInNewButton fileObj={elem} />
                  </div>
                  <div className={styles["file-content-button"]}>
                    <DownloadButton fileUrlArray={[elem]} single />
                  </div>
                </div>
                {document[propTitle]?.filter((item: any) => item.deleted === false).length > 1 && index === 0 && !elem.deleted ? (
                  <div className={styles["current-text"]}>Güncel</div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          };

          const returnData = data
            .map((elem: any, index: number) => {
              if (elem.deleted === false) {
                return getElement(elem, index);
              }
              return <div key={index.toString()}></div>;
            })
            .filter((elem: any) => elem !== undefined);

          return <div className={styles["file-value"]}>{returnData}</div>;
        } else if (property.title === "products") {
          return (
            <div>
              {document.products?.map((product: any, index: number) => {
                const productName = getPageDocument({ pageId: pageIds.Products, documentId: product.product_stepped_brand_type_model })?.name;
                return <div key={index.toString()}>{product.count + "\u00a0adet\u00a0" + productName}</div>;
              })}
            </div>
          );
        } else if (property.items.type === "object") {
          const props = Object.values(property.items.properties);

          const columns = props.map((prop: any, propIndex: number) => {
            const columnTitle = prop.description;

            const values = document[propTitle]?.map((row: obj) => getViewElement(prop, propTitle)?.[prop.type]?.(row) || getViewElement(prop).default(row));

            return (
              <div key={propIndex.toString()} className={styles["array-column"]}>
                <div className={styles["array-title"]}>{columnTitle}</div>
                {values?.map((value: any, index: number) => (
                  <div key={index.toString()} className={styles[value?.props?.className?.includes("file-value") ? "" : "array-value"]}>
                    {value}
                  </div>
                ))}
              </div>
            );
          });

          return (
            <div className={styles["array-table"]} style={{ display: "flex", overflow: "auto" }}>
              {columns}
            </div>
          );
        }

        return "";
      },
      object: (document) => {
        const props = Object.values(property.properties);

        const titleColumn = props.map((prop: any) => prop.description);

        const valueColumn = props.map(
          (prop: any) => getViewElement(prop)?.[prop.type]?.(document[propTitle]) || getViewElement(prop).default(document[propTitle])
        );

        return (
          <div className={styles["object-table"]}>
            <div className={styles["object-column"]}>
              {titleColumn.map((title, index) => (
                <div key={index.toString()} className={styles["object-title"]}>
                  {title}
                </div>
              ))}
            </div>
            <div className={styles["object-column"]}>
              {valueColumn.map((value, index) => (
                <div key={index.toString()} className={styles["object-value"]}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        );
      },
      default: (document) => {
        let value = getNameValueFromObject(document[propTitle]);

        return (
          <div
            style={{
              color: paintObj[property.title || ""]?.color,
            }}
          >
            {value}
            {/* {symbol[pageStore.page.title]?.[property.title!]} */}
          </div>
        );
      },
    };
  };

  const componentArrays: { title: string; description: string; value: any; order: number }[] = properties
    .map((property: { [key: string]: any }) => {
      for (let except of exceptArray) {
        if (property.title === except) {
          return { title: "exclude", description: "", value: "", order: undefined };
        }
      }

      propertyTitlesAndDescriptions.push({ title: property?.title, description: property?.description });

      const value = getViewElement(property)?.[property.type]?.(currentData) || getViewElement(property).default(currentData);

      const returnOrder = field_features_obj[property.title]?.order;

      return {
        title: property.title,
        description: property.description,
        value: value,
        order: returnOrder,
      };
    })
    .filter((obj) => obj.title !== "exclude")
    .sort((a, b) => a.order - b.order);

  function changeCurrentDataIfOffersPage() {
    if (pageStore.page.title !== "Offers") return;

    if (reviseIndex === "0") {
      setCurrentData(pageStore.clickedRow);
    } else {
      const revisedData = getPageDocuments({ pageId: "current", section: "revised" });

      const getPreviousOffer = (row: obj) => getIdValueFromObject(row.previous_offer);

      const getRowReferenceNumber = (row: obj) => row.reference_number.slice(14);

      const currentRevise = revisedData.find((row) => getPreviousOffer(row) === pageStore.clickedRow._id && getRowReferenceNumber(row) === reviseIndex) || {};

      setCurrentData({ customer: pageStore.clickedRow.customer, project: pageStore.clickedRow.project, ...currentRevise });
    }
  }

  useEffect(() => {
    changeCurrentDataIfOffersPage();
  }, [reviseIndex]);

  return (
    <div className={styles["page"]}>
      {allCurrentOfferRevises.length ? (
        <div style={{ width: "fit-content", marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>Revizeler</p>
          </div>
          <ToggleButtons
            alignment={reviseIndex}
            setAlignment={setReviseIndex}
            labels={pagination}
            values={pagination}
            checkedItem={Number(pageStore.clickedRow.confirmed_revise_index)}
          />
        </div>
      ) : (
        <></>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}>
        {componentArrays.map(({ title, description, value, order }, index) => {
          return (
            <div key={index.toString()} className={styles["text-box"]} style={{ gridColumn: `span ${gridWidths[pageStore.page.title]?.[title] ?? 12}` }}>
              <div className={styles["text-title"]}>{description + "\u00a0"}:</div>
              {<div className={styles["text-value"]}>{value || "\u00a0"}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
