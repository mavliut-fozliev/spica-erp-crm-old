import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import dayjs from "dayjs";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";

export default function useAutocompleteContracts(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const autocompleteContracts: TAutocompleteFunction = (newFormData) => {
    const getCustomer = () => {
      let customer = newFormData.customer;
      if (!customer && shouldPasteFromStore("customer")) {
        customer = getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(newFormData.project?.customer) });
      }
      return customer;
    };

    const confirmedOffers = getPageDocuments({ pageId: pageIds.Offers, section: "confirmed" });
    const currentProjectOffers = confirmedOffers.filter((row) => getIdValueFromObject(row.project) === getIdValueFromObject(newFormData.project));

    const resolvedOffers = currentProjectOffers.map((row) =>
      row.confirmed_revise_index
        ? getPageDocuments({ pageId: pageIds.Offers, section: "revised" }).find(
            (revise) => revise.previous_offer._id === row._id && revise.reference_number.slice(14) === row.confirmed_revise_index
          )
        : row
    );

    let product_count = 0;
    resolvedOffers.forEach((offer) => {
      offer?.products?.forEach((product: any) => {
        product.docx_data?.forEach((docx_data: string) => {
          const count = Number(JSON.parse(docx_data || "{}").adet) || 0;
          product_count += count;
        });
      });
    });

    const payment = newFormData.payment?.map((p: any, index: number) => ({
      ...p,
      method: p.method ? p.method : "döviz çeki",
      date: p.date
        ? p.date
        : newFormData.payment[index - 1]?.date
        ? dayjs(newFormData.payment[index - 1]?.date)
            .add(1, "month")
            .format(isoDateTimeFormat)
        : dayjs().format(isoDateTimeFormat),
    }));

    const status = newFormData.agreement_signed?.at(-1)?.deleted === false ? "signed" : newFormData.status === "signed" ? "exist" : newFormData.status;

    const finalFormData = {
      ...newFormData,
      customer: getCustomer(),
      payment,
      product_count,
      offers: resolvedOffers,
      status: status,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteContracts;
}
