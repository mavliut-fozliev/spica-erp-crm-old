import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData, TshouldPasteFromStore } from "../useAutocomplete";
import { usePageStore } from "store/pageStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { getNameValueFromObject } from "services/functions/helpers/getNameValueFromObject";
import { transformInputToObject } from "services/functions/helpers/transformInputToObject";
import dayjs from "dayjs";
import { isoDateTimeFormat } from "services/functions/helpers/dateHelpers";
import { obj } from "types/types";
import { roundNumber } from "services/functions/helpers/numberHelpers";

export default function useAutocompleteMonthlyProgressPayments(processAndSaveFormData: TprocessAndSaveFormData, shouldPasteFromStore: TshouldPasteFromStore) {
  const pageStore = usePageStore();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const autocompleteMonthlyProgressPayments: TAutocompleteFunction = (newFormData) => {
    const unit = (index: number) => {
      const paymentUnit = newFormData.payments?.[index]?.unit;
      const unit = getPageDocument({ pageId: pageIds.Units, documentId: getIdValueFromObject(paymentUnit) });
      return unit;
    };

    const projectObj = (index: number) => {
      let project = newFormData.payments?.[index]?.project;
      if (!project && shouldPasteFromStore("project", { parentTitle: "payments", arrayIndex: index, formDataId: newFormData._id })) {
        project = unit(index)?.project;
      }
      return project;
    };

    const savedCurrentProductPayments = (index: number) => {
      const currentPageData = getPageDocuments({ pageId: "current" }).filter((row) => row._id !== newFormData._id);

      const currentProductPayments = currentPageData
        .map((row) => {
          const currentUnitId = getIdValueFromObject(unit(index));
          return row.payments?.filter((payment: any) => getIdValueFromObject(payment.unit) === currentUnitId);
        })
        .flat()
        .filter((row) => row !== undefined);

      return currentProductPayments;
    };

    const formDataCurrentProductPayments = (index: number) =>
      newFormData.payments?.filter((payment: any, paymentIndex: number) => {
        const currentUnitId = getIdValueFromObject(unit(index));
        index !== paymentIndex && payment?.filter((payment: any) => getIdValueFromObject(payment.unit) === currentUnitId);
      }) || [];

    const currentProductPayments = (index: number) => [...savedCurrentProductPayments(index), ...formDataCurrentProductPayments(index)];

    const getFreePercentageNumber = (index: number) => {
      const usedPercentage = currentProductPayments(index).map((row) => Number(getIdValueFromObject(row.work_percentage)?.slice(0, -1)));
      const usedPercentageSum = usedPercentage.reduce((acc, curr) => acc + (curr || 0), 0);
      return 100 - usedPercentageSum;
    };

    const work_percentage = (index: number) => {
      const work_status = getIdValueFromObject(newFormData.payments?.[index]?.work_status);
      return work_status
        ? newFormData.payments?.[index]?.work_percentage ??
            (work_status === "MEK.MONTAJ" && getFreePercentageNumber(index) >= 70
              ? transformInputToObject("70%")
              : work_status === "TEST" && getFreePercentageNumber(index) >= 30
              ? transformInputToObject("30%")
              : newFormData.payments?.[index]?.work_percentage)
        : undefined;
    };

    const productDocxData = (index: number) => {
      const docxData = unit(index)?.unit_data;
      return JSON.parse(docxData || "{}");
    };

    const productModel = (index: number) => {
      const productObj = getPageDocument({ pageId: pageIds.Products, documentId: getIdValueFromObject(unit(index)?.product) });
      const model = productObj?.model;

      return model?.includes("5000") ? "5000/5500" : model?.includes("3000") ? "3000/3300" : "";
    };

    const price_per_floor = (index: number) => {
      const docxData = productDocxData(index);
      const priceObj = getPageDocuments({ pageId: pageIds.Prices }).find((row) => row.model === productModel(index) && row.capacity === docxData.kapasite_kg);
      const price = priceObj?.price.find((row: any) => docxData.durak_sayisi >= row.from && docxData.durak_sayisi <= row.to)?.price_per_floor;
      return price;
    };

    const date = (index: number) => newFormData.payments?.[index]?.date ?? dayjs().format(isoDateTimeFormat);
    const fuel_date = (index: number) => newFormData.payments?.[index]?.fuel_date ?? dayjs().format(isoDateTimeFormat);

    //"show only" props
    const place = (index: number) => projectObj(index)?.location?.name;
    const model = (index: number) => getPageDocument({ pageId: pageIds.Products, documentId: getIdValueFromObject(unit(index)?.product) })?.model;
    const capacity = (index: number) => productDocxData(index).kapasite_kg;
    const number_of_stops = (index: number) => productDocxData(index).durak_sayisi;
    const high_floor = (index: number) => productDocxData(index).high_floor ?? 0;
    const total_floor_cost = (index: number) => (Number(number_of_stops(index)) + Number(high_floor(index)) / 2) * Number(price_per_floor(index));

    const total_fuel_cost = (index: number) => {
      const locationName = projectObj(index)?.location?.name;
      const locationObj = getPageDocuments({ pageId: pageIds.Locations }).find((row) => row.name === locationName && row.model === productModel(index));

      const docxData = productDocxData(index);
      const fuel_liter_amount = locationObj?.fuel_cost_details.find(
        (row: any) => Number(docxData.durak_sayisi) >= row.from && Number(docxData.durak_sayisi) <= row.to
      )?.location_liter_detail;

      const fuel_price = Number(pageStore.variables.find((v) => v.key === "fuel_price")?.value) || 0;
      const fuel_cost = roundNumber(Number(fuel_liter_amount) * fuel_price) || 0;
      return fuel_cost;
    };

    const payed_floor_cost = (index: number) =>
      roundNumber(total_floor_cost(index) * Number(getIdValueFromObject(work_percentage(index))?.slice(0, -1)) * 0.01) || 0;
    const payed_fuel_cost = (index: number) =>
      roundNumber(total_fuel_cost(index) * Number(getIdValueFromObject(work_percentage(index))?.slice(0, -1)) * 0.01) || 0;

    const remaining_floor_cost = (index: number) => {
      const total_remaining_floor_cost = total_floor_cost(index) * getFreePercentageNumber(index) * 0.01 || 0;
      return roundNumber(total_remaining_floor_cost - payed_floor_cost(index));
    };

    const remaining_percentage = (index: number) => {
      const dif = (remaining_floor_cost(index) / total_floor_cost(index)) * 100;
      return dif;
    };

    const remaining_fuel_cost = (index: number) => {
      const total_remaining_fuel_cost = total_fuel_cost(index) * getFreePercentageNumber(index) * 0.01 || 0;
      return roundNumber(total_remaining_fuel_cost - payed_fuel_cost(index));
    };

    // price different payments
    const previousPayment = (index: number) => currentProductPayments(index).find((payment) => payment.payment_no === currentProductPayments(index).length);

    const price_difference = (index: number) =>
      previousPayment(index)
        ? (Number(price_per_floor(index)) - Number(previousPayment(index).price_per_floor)) *
          (Number(number_of_stops(index)) + Number(high_floor(index)) / 2) *
          Number(getIdValueFromObject(work_percentage(index)).slice(0, -1)) *
          0.01
        : 0;

    const fuel_price_difference = (index: number) =>
      previousPayment(index)
        ? (total_fuel_cost(index) -
            roundNumber((Number(previousPayment(index).payed_fuel_cost) / Number(getIdValueFromObject(work_percentage(0)).slice(0, -1))) * 100 || 0)) *
          Number(getIdValueFromObject(work_percentage(index)).slice(0, -1)) *
          0.01
        : 0;

    const payments = newFormData.payments?.map((row: any, index: number) => {
      const savedPaymentsLength = getPageDocument({ pageId: "current", documentId: newFormData._id })?.payments?.length || 0;

      const updatedRow = {
        ...row,
        remaining_floor_cost: remaining_floor_cost(index) || 0,
        remaining_percentage: remaining_percentage(index) || 0,
        remaining_fuel_cost: remaining_fuel_cost(index) || 0,
      };

      if (index < savedPaymentsLength) {
        return updatedRow;
      }

      return {
        ...updatedRow,
        unit: unit(index),
        project: projectObj(index),
        work_percentage: work_percentage(index),
        price_per_floor: price_per_floor(index),
        payed_fuel_cost: payed_fuel_cost(index),
        date: date(index),
        fuel_date: fuel_date(index),
        place: place(index),
        model: model(index),
        capacity: capacity(index),
        number_of_stops: number_of_stops(index),
        high_floor: high_floor(index) || 0,
        total_floor_cost: total_floor_cost(index) || 0,
        total_fuel_cost: total_fuel_cost(index) || 0,
        payed_floor_cost: payed_floor_cost(index),
        fuel_price: Number(pageStore.variables.find((v) => v.key === "fuel_price")?.value) || 0,
        price_difference: index === 0 ? 0 : price_difference(index),
        fuel_price_difference: index === 0 ? 0 : fuel_price_difference(index),
        payment_no: currentProductPayments(index).length + 1,
      };
    });

    const total_payed_floor = payments?.reduce((curr: number, payment: any) => payment.payed_floor_cost + curr, 0) || 0;
    const total_payed_fuel = payments?.reduce((curr: number, payment: any) => payment.payed_fuel_cost + curr, 0) || 0;

    const total_additional_payments = newFormData.additional_payments?.reduce((curr: number, payment: any) => (payment.payment_amount || 0) + curr, 0) || 0;

    const progress_payment = total_payed_floor + total_payed_fuel + total_additional_payments;

    const total_payments = {
      total_payed_floor,
      total_payed_fuel,
      total_additional_payments,
      progress_payment,
    };

    //previous month
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    const currentMonth = getNameValueFromObject(newFormData.month);
    const previousMonth = months[(months.indexOf(currentMonth) || months.length) - 1];

    const currentYear = getNameValueFromObject(newFormData.year);
    const previousYear = previousMonth === "Aralık" ? currentYear - 1 : currentYear;

    const previousRow = getPageDocuments({ pageId: "current" }).find((row) => {
      const monthIsEqual = row.month === previousMonth;
      const yearIsEqual = row.year === previousYear;
      const teamIsEqual = getIdValueFromObject(row.team_name) === getIdValueFromObject(newFormData.team_name);
      return monthIsEqual && yearIsEqual && teamIsEqual;
    });

    const advance_payment_and_other = newFormData.advance_payment_and_other?.map((row: any) => {
      const currency = getIdValueFromObject(row.currency) || "₺";
      const payment_amount = row.payment_amount || 0;
      return { ...row, currency, payment_amount };
    });

    const getNextMonthDept = (previousDepth: number, currency: "₺" | "€" | "$" | "£", cut: number) => {
      const previous_month_dept = previousDepth || 0;

      const total_advance_payment_and_other =
        advance_payment_and_other?.reduce((curr: number, payment: any) => (payment.currency === currency ? payment.payment_amount || 0 : 0) + curr, 0) || 0;

      const total_debt = (previousDepth || 0) + total_advance_payment_and_other;

      const next_month_dept = total_debt - (cut || 0);
      return [previous_month_dept, total_advance_payment_and_other, total_debt, next_month_dept];
    };

    //TL
    const [previous_month_dept_tl, total_advance_payment_and_other_tl, total_debt_tl, next_month_dept_tl] = getNextMonthDept(
      previousRow?.dept_tl?.next_month_dept_tl,
      "₺",
      newFormData.dept_tl?.cut_this_month_tl
    );
    const dept_tl = {
      previous_month_dept_tl,
      total_advance_payment_and_other_tl,
      total_debt_tl,
      cut_this_month_tl: newFormData.dept_tl?.cut_this_month_tl,
      next_month_dept_tl,
    };

    //euro
    const [previous_month_dept_euro, total_advance_payment_and_other_euro, total_debt_euro, next_month_dept_euro] = getNextMonthDept(
      previousRow?.dept_euro?.next_month_dept_euro,
      "€",
      newFormData.dept_euro?.cut_this_month_euro
    );
    const euro_exchange_rate = newFormData.dept_euro?.euro_exchange_rate || 0;
    const euro_equivalent_lira = (newFormData.dept_euro?.cut_this_month_euro || 0) * (newFormData.dept_euro?.euro_exchange_rate || 0);
    const dept_euro = {
      previous_month_dept_euro,
      total_advance_payment_and_other_euro,
      total_debt_euro,
      cut_this_month_euro: newFormData.dept_euro?.cut_this_month_euro,
      next_month_dept_euro,
      euro_exchange_rate,
      euro_equivalent_lira,
    };

    //dollar
    const [previous_month_dept_dollar, total_advance_payment_and_other_dollar, total_debt_dollar, next_month_dept_dollar] = getNextMonthDept(
      previousRow?.dept_dollar?.next_month_dept_dollar,
      "$",
      newFormData.dept_dollar?.cut_this_month_dollar
    );
    const dollar_exchange_rate = newFormData.dept_dollar?.dollar_exchange_rate || 0;
    const dollar_equivalent_lira = (newFormData.dept_dollar?.dollar_this_month_euro || 0) * (newFormData.dept_dollar?.dollar_exchange_rate || 0);
    const dept_dollar = {
      previous_month_dept_dollar,
      total_advance_payment_and_other_dollar,
      total_debt_dollar,
      cut_this_month_dollar: newFormData.dept_dollar?.cut_this_month_dollar,
      next_month_dept_dollar,
      dollar_exchange_rate,
      dollar_equivalent_lira,
    };

    //sterling
    const [previous_month_dept_sterling, total_advance_payment_and_other_sterling, total_debt_sterling, next_month_dept_sterling] = getNextMonthDept(
      previousRow?.dept_sterling?.next_month_dept_sterling,
      "£",
      newFormData.dept_sterling?.cut_this_month_sterling
    );
    const sterling_exchange_rate = newFormData.dept_sterling?.sterling_exchange_rate || 0;
    const sterling_equivalent_lira = (newFormData.dept_sterling?.sterling_this_month_euro || 0) * (newFormData.dept_sterling?.sterling_exchange_rate || 0);
    const dept_sterling = {
      previous_month_dept_sterling,
      total_advance_payment_and_other_sterling,
      total_debt_sterling,
      cut_this_month_sterling: newFormData.dept_sterling?.cut_this_month_sterling,
      next_month_dept_sterling,
      sterling_exchange_rate,
      sterling_equivalent_lira,
    };

    const total_cut = (newFormData.dept_tl?.cut_this_month_tl || 0) + euro_equivalent_lira + dollar_equivalent_lira + sterling_equivalent_lira;

    const payed_progress_payment = roundNumber(progress_payment - total_cut);

    const remaining_progress_payment = {
      progress_payment_copy: progress_payment,
      total_cut,
      payed_progress_payment,
    };

    const allFieldTeams = getPageDocuments({ pageId: pageIds.FieldTeams });
    const allEmployees = allFieldTeams
      .map((row) => row.employees)
      .flat()
      .filter((row) => row !== undefined);

    const currentEmployees = newFormData.salary?.map((row: obj) => {
      const employee = allEmployees.find((empl) => empl.employee === getIdValueFromObject(row.employee));
      return employee;
    });

    const currentEmployeesTotalSalary = currentEmployees?.reduce((curr: number, employee: any) => (employee?.is_boss ? 0 : employee?.salary) + curr, 0) || 0;

    const salary = newFormData.salary?.map((row: obj) => {
      const employee = allEmployees.find((empl) => empl.employee === getIdValueFromObject(row.employee));
      const salary_amount = employee?.is_boss ? payed_progress_payment - currentEmployeesTotalSalary : employee?.salary;
      const minimum_wage = employee?.minimum_wage;
      const extra_salary = salary_amount - minimum_wage || 0;
      return {
        ...row,
        salary_amount: row.extra_salary_receipt ? row.salary_amount : salary_amount,
        minimum_wage: row.minimum_wage_receipt ? row.minimum_wage : minimum_wage,
        extra_salary: row.extra_salary_receipt ? row.extra_salary : extra_salary,
      };
    });

    const hasBeenPaid = () => {
      const isFilled = newFormData.salary?.map((row: obj) => Object.keys(row).length === 10);
      const hasFiles = newFormData.salary?.map(
        (row: obj) => row.extra_salary_receipt_file?.at(-1)?.deleted === false && row.minimum_wage_receipt_file?.at(-1)?.deleted === false
      );
      return isFilled?.every((row: any) => !!row) && hasFiles?.every((row: any) => !!row);
    };

    const status = hasBeenPaid() ? "paid" : "exist";

    const finalFormData = {
      ...newFormData,
      payments,
      total_payments,
      advance_payment_and_other,
      dept_tl,
      dept_euro,
      dept_dollar,
      dept_sterling,
      remaining_progress_payment,
      salary,
      status,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteMonthlyProgressPayments;
}
