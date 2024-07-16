import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { pageIds } from "consts/config/pages/pages";

export default function useAutocompleteOffers(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const { getPageDocument } = useGetStoredPageData();

  const autocompleteOffers: TAutocompleteFunction = (newFormData) => {
    const getCustomer = () => {
      let customer = newFormData.customer;
      if (!customer && shouldPasteFromStore("customer")) {
        customer = getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(newFormData.project?.customer) });
      }
      return customer;
    };

    const related_person = newFormData.project?.related_person;
    const related_person_phone = newFormData.project?.related_person_phone;
    const related_person_role = newFormData.project?.related_person_role;

    const abbreviation = getPageDocument({ pageId: pageIds.Products, documentId: newFormData.products?.[0]?.product })?.abbreviation;

    const reference_number = `${newFormData.reference_number?.slice(0, 7)}${abbreviation?.slice(0, 2) || "XX"}${
      newFormData.project?.serial_number?.toString()?.slice(7, 11) || "XXXX"
    }`;

    const count = (index: number) =>
      newFormData.project?.products?.find((row: any) => row.product_stepped_brand_type_model === getIdValueFromObject(newFormData.products[index].product))
        ?.count;

    const products = newFormData.products?.map((product: any, index: number) => ({
      ...product,
      count: count(index),
      docx_data: product.docx_data || ["{}"],
    }));

    const commonData = {
      ...newFormData,
      customer: getCustomer(),
      products,
      related_person,
      related_person_phone,
      related_person_role,
    };

    const finalFormData = newFormData.previous_offer ? commonData : { ...commonData, reference_number };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteOffers;
}
