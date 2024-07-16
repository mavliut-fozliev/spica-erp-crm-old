import React from "react";
import { TBucketProperty, obj } from "types/types";
import { spaces } from "../../../consts";
import styles from "./ObjectTypeInput.module.scss";
import { usePageStore } from "store/pageStore";
import ObjectDifferentView from "../../customViews/ObjectDifferentView/ObjectDifferentView";
import { TFile } from "../../../newDataModalStore";
import useGetProperties from "hooks/useGetProperties";

export default function ObjectTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  getInputElement,
  setOpenPropoesedSolution,
  setProposedSolutionArrayIndex,
  files,
  setFiles,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  field_features_obj: { [key: string]: any };
  getInputElement: ({ property, parent, arrayIndex }: { property: TBucketProperty; parent?: string | undefined; arrayIndex?: number | undefined }) => {
    [key: string]: any;
  };
  setOpenPropoesedSolution: (state: boolean) => void;
  setProposedSolutionArrayIndex: (state: { productIndex: number; docxDataIndex: number }) => void;
  files: TFile;
  setFiles: (state: TFile) => void;
}) {
  const pageStore = usePageStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const isArrayObject = !!property.items;

  const backgroundColor = field_features_obj[property.title!]?.order % 2 === 0 ? "rgb(240, 250, 250)" : "rgb(255, 255, 245)";

  let className = window.innerWidth > 800 ? "object" : "object-one-column";
  if (!isArrayObject) {
    className = window.innerWidth > 800 ? "object-single" : "object-single-one-column";
  }

  return (
    <div>
      {!isArrayObject && <p className={styles["object-single-title"]}>{property.description!}</p>}
      <div className={styles[className]} style={!isArrayObject ? { background: backgroundColor } : {}}>
        {[
          ...(spaces[pageStore.page.title] ?? []).filter((item) => item.parent === property.title),
          ...Object.values(isArrayObject ? property.items.properties : property.properties || {}),
        ]
          .sort((a: any, b: any) => {
            const order = (item: obj) =>
              item.space ? item.order : getItemInternalFieldFeature(pageStore.page.title, property.title!, item.title)?.order ?? Infinity;

            return order(a) - order(b);
          })
          .filter((innerProperty: any) => !getItemInternalFieldFeature(pageStore.page.title, property.title!, innerProperty.title)?.hide_from_form_data)
          .map((innerProperty: any, innerPropertyIndex: number) => {
            const gridWidth = getItemInternalFieldFeature(pageStore.page.title, property.title!, innerProperty.title)?.grid_width;

            if (innerProperty.space) {
              return (
                <div
                  style={{ gridColumn: `span ${innerProperty.gridWidth}` }}
                  className={styles["space"]}
                  key={property.title?.concat(innerPropertyIndex.toString())}
                >
                  <div className={styles["space-text"]}>
                    <div>{innerProperty.innerText}</div>
                  </div>
                </div>
              );
            }

            // recursion
            return (
              <div style={{ gridColumn: `span ${gridWidth || 6}` }} key={property.title?.concat(innerPropertyIndex.toString())}>
                <ObjectDifferentView
                  nativeElement={getInputElement({
                    property: innerProperty,
                    parent: property.title,
                    arrayIndex,
                  })[innerProperty.type || 0]()}
                  innerProperty={innerProperty}
                  arrayIndex={arrayIndex}
                  setOpenPropoesedSolution={setOpenPropoesedSolution}
                  setProposedSolutionArrayIndex={setProposedSolutionArrayIndex}
                  files={files}
                  setFiles={setFiles}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
