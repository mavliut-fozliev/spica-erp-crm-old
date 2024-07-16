import { extraProperties } from "consts/config/pages/extraProperties";
import { TlocalPages } from "pages/ModulePage/types";
import React from "react";
import { usePageStore } from "store/pageStore";
import { TBucketProperty, obj } from "types/types";

export default function useGetProperties() {
  const pageStore = usePageStore();

  const getFieldFeatures = (pageTitle: string) => {
    const field_features = pageStore.config.Pages?.find((p) => p.title === pageTitle)?.field_features || [];

    const field_features_obj: { [key: string]: any } = {};
    field_features.forEach((f: any) => {
      field_features_obj[f.field_name] = f;
    });

    return field_features_obj;
  };

  function getItemInternalFieldFeature(pageTitle: string, parentTitle: string, propertyTitle: string) {
    if (!pageTitle) return;

    const internal_field_features = pageStore.config.Pages?.find((p) => p.title === pageTitle)?.internal_field_features || [];

    const sameNameFaetures = internal_field_features.filter((f: obj) => f.field_name === propertyTitle);

    const currentParentFeature = sameNameFaetures.find((f: obj) => f.parent === parentTitle);

    const currentFeature = currentParentFeature || sameNameFaetures[0];

    return currentFeature;
  }

  const getProperties = (pageTitle: string): TBucketProperty[] => {
    if (!pageTitle) return [];

    const bucketId = pageStore.config.Pages.find((p) => p.title === pageTitle)?._id;

    if (!bucketId) return [];

    const initialProperties = Object.values(pageStore.pageBuckets[bucketId].properties!);

    extraProperties[pageTitle]?.forEach((property: TBucketProperty) => {
      const duplacatedPropertyIndex = initialProperties.findIndex((p: TBucketProperty) => p.title === property.title);

      if (duplacatedPropertyIndex === -1) {
        initialProperties.push(property);
        return;
      }

      const currentField = initialProperties[duplacatedPropertyIndex];

      const isObjectArray = currentField.type === "array" && currentField.items.type === "object";
      if (isObjectArray) {
        initialProperties[duplacatedPropertyIndex].items.properties = {
          ...currentField.items.properties,
          ...property.properties,
        };
        return;
      }

      const isObject = currentField.type === "object";
      if (isObject) {
        initialProperties[duplacatedPropertyIndex].properties = {
          ...currentField.properties,
          ...property.properties,
        };
        return;
      }
    });

    if (!localStorage.getItem("localPages")) {
      let localPages: TlocalPages = {};
      pageStore.config.Pages.forEach((page) => {
        localPages[page.title] = { field_features: page.field_features };
      });
      localStorage.setItem("localPages", JSON.stringify(localPages));
    }

    const localPages: TlocalPages = JSON.parse(localStorage.getItem("localPages") ?? "{}");
    const localFieldFeatures = localPages[pageTitle]?.field_features ?? [];

    const sortedProperties = initialProperties
      .filter((property: any) => property.title !== "status")
      .sort(
        (a, b) =>
          (localFieldFeatures?.find((f: any) => f.field_name === a.title)?.order ?? 0) -
          (localFieldFeatures?.find((f: any) => f.field_name === b.title)?.order ?? 0)
      )
      .map((property: any) => {
        const isArray = property.type === "array";
        const isObjectArray = property.items?.type === "object";
        const isStorageArray = property.items?.properties?.hasOwnProperty("storage");

        const getSortedInternalPropertiesObj = (internalProperties: obj[]) => {
          const internalPropertiesArray = Object.values(internalProperties);

          const sortedInternalProperties = internalPropertiesArray.sort((a: any, b: any) => {
            const order = (item: obj) => getItemInternalFieldFeature(pageTitle, property.title, item.title)?.order ?? Infinity;

            return order(a) - order(b);
          });

          return Object.fromEntries(sortedInternalProperties.map((property: any) => [property.title, property]));
        };

        if (isArray && isObjectArray && !isStorageArray) {
          const internalProperties = property.items.properties;
          const sortedInternalPropertiesObj = getSortedInternalPropertiesObj(internalProperties);

          return { ...property, items: { ...property.items, properties: sortedInternalPropertiesObj } };
        }

        const isObject = property.type === "object";
        if (isObject) {
          const internalProperties = property.properties;
          const sortedInternalPropertiesObj = getSortedInternalPropertiesObj(internalProperties);

          return { ...property, properties: sortedInternalPropertiesObj };
        }

        return property;
      });

    return sortedProperties;
  };

  return { getFieldFeatures, getItemInternalFieldFeature, getProperties };
}
