import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { pageIds } from "consts/config/pages/pages";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import { usePageStore } from "store/pageStore";
import { roundNumber } from "services/functions/helpers/numberHelpers";

export default function useAutcompleteProgressPayments(processAndSaveFormData: TprocessAndSaveFormData) {
  const pageStore = usePageStore();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const autocompleteProgressPayments: TAutocompleteFunction = (newFormData: any) => {
    const project = getPageDocument({ pageId: pageIds.Projects, documentId: getIdValueFromObject(newFormData.unit?.project) });
    const taskFromGanttChart = getPageDocuments({ pageId: pageIds.AssemblyPlan }).find(
      (row) => getIdValueFromObject(row.unit) === getIdValueFromObject(newFormData.unit)
    );

    const assembly_start_date = taskFromGanttChart?.start_date;
    const field_team = taskFromGanttChart?.field_team?.team_name;

    const currentProductData = newFormData.unit;

    const model = getPageDocument({ pageId: pageIds.Products, documentId: getIdValueFromObject(currentProductData?.product) })?.model;

    const currentProductDocxData = JSON.parse(newFormData.unit?.unit_data || "{}");

    const capacity = currentProductDocxData.kapasite_kg;
    const number_of_stops = currentProductDocxData.durak_sayisi;
    const high_floor = currentProductDocxData.high_floor || 0;

    const currentProductPayments = getPageDocuments({ pageId: pageIds.MonthlyProgressPayments })
      .map((row) => row.payments?.filter((payment: any) => getIdValueFromObject(newFormData.unit) === getIdValueFromObject(payment.unit)))
      .flat()
      .filter((item) => item !== undefined);

    const locationName = getPageDocument({ pageId: pageIds.Locations, documentId: getIdValueFromObject(project?.location) })?.name;

    const place = locationName;

    const locationModel = model?.includes("5000") ? "5000/5500" : model?.includes("3000") ? "3000/3300" : "";

    const locationObj = getPageDocuments({ pageId: pageIds.Locations }).find((row) => row.name === locationName && row.model === locationModel);

    const fuel_liter_amount = locationObj?.fuel_cost_details.find(
      (row: any) => Number(currentProductDocxData.durak_sayisi) >= row.from && Number(currentProductDocxData.durak_sayisi) <= row.to
    )?.location_liter_detail;

    const payments = currentProductPayments
      .sort((a, b) => a.payment_no - b.payment_no)
      .map((payment) => {
        const total_floor_cost = roundNumber((Number(number_of_stops) + Number(high_floor) / 2) * Number(payment.price_per_floor));

        const total_fuel_cost = () => {
          const fuel_cost = roundNumber(Number(fuel_liter_amount) * payment.fuel_price) || 0;
          return fuel_cost;
        };

        const total_cost = total_floor_cost + total_fuel_cost();

        const work_percentage_number = Number(getNameValueFromObject(payment.work_percentage)?.slice(0, -1));

        const payed_floor_cost = total_floor_cost * work_percentage_number * 0.01;

        const price_difference =
          (Number(payment.price_per_floor) - Number(currentProductPayments?.[0]?.price_per_floor || 0)) *
            (Number(number_of_stops) + Number(high_floor) / 2) *
            work_percentage_number *
            0.01 || 0;

        const fuel_price_difference =
          (Number(total_fuel_cost()) -
            roundNumber(
              (Number(currentProductPayments?.[0]?.payed_fuel_cost || 0) / Number(currentProductPayments?.[0]?.work_percentage?.slice(0, -1))) * 100 || 0
            )) *
            work_percentage_number *
            0.01 || 0;

        return {
          price_per_floor: payment.price_per_floor,
          total_floor_cost,
          fuel_price: payment.fuel_price,
          total_fuel_cost: total_fuel_cost(),
          total_cost,
          payed_floor_cost,
          work_percentage: payment.work_percentage,
          payment_date: payment.date,
          payed_fuel_cost: payment.payed_fuel_cost,
          fuel_date: payment.fuel_date,
          fuel_percentage: payment.work_percentage,
          price_difference,
          fuel_price_difference,
        };
      });

    const priceObj = getPageDocuments({ pageId: pageIds.Prices }).find((row) => row.model === locationModel && row.capacity === capacity);
    const pricePerFloorIfNoPayment = priceObj?.price.find((row: any) => number_of_stops >= row.from && number_of_stops <= row.to)?.price_per_floor;

    const totalFloorCostIfNoPayment = roundNumber((Number(number_of_stops) + Number(high_floor) / 2) * pricePerFloorIfNoPayment);

    const fuelLiterAmountIfNoPayment = Number(fuel_liter_amount);
    const fuelPriceIfNoPayment = Number(pageStore.variables.find((v) => v.key === "fuel_price")?.value) || 0;
    const totalFuelCostIfNoPayment = roundNumber(fuelLiterAmountIfNoPayment * fuelPriceIfNoPayment);

    const extraData = { pricePerFloorIfNoPayment, fuelPriceIfNoPayment, totalFloorCostIfNoPayment, totalFuelCostIfNoPayment };

    const total_payed = payments.reduce((sum, payment) => sum + Number(payment.payed_floor_cost) + Number(payment.payed_fuel_cost), 0);

    const work_percentage_number = (payment: { [key: string]: any }) => Number(getNameValueFromObject(payment.work_percentage)?.slice(0, -1));

    const total_percentage = payments.reduce((sum, payment) => sum + work_percentage_number(payment), 0);
    const remaining_percentage = 100 - total_percentage;

    const finality =
      (payments?.at(-1) ? (payments?.at(-1)?.total_cost || 0) * remaining_percentage * 0.01 : totalFloorCostIfNoPayment + totalFuelCostIfNoPayment) || 0;

    const finalFormData = {
      ...newFormData,
      project,
      assembly_start_date,
      field_team,
      place,
      model,
      capacity,
      number_of_stops,
      high_floor,
      payments,
      total_payed,
      finality,
      ...extraData,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteProgressPayments;
}
