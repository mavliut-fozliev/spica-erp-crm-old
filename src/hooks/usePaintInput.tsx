import React from "react";
import { usePageStore } from "../store/pageStore";

export type inputColor = { background?: string; color?: string; arrayIndexes?: number[] };

type inputColors = {
  [key: string]: (row: { [key: string]: any }) => { [key: string]: inputColor };
};

export default function usePaintInput() {
  const pageStore = usePageStore();

  const inputColors: inputColors = {
    "ProgressPayments": (row: { [key: string]: any }) => ({
      "total_floor_cost": {
        color: "green",
      },
      "total_fuel_cost": {
        color: "green",
      },
      "total_cost": {
        color: "green",
      },
      "payed_floor_cost": {
        color: "red",
      },
      "payed_fuel_cost": {
        color: "red",
      },
      "price_difference": {
        color: "blue",
        arrayIndexes: row.payments?.map((payment: any, index: number) => (payment.price_difference > 0 ? index : undefined)),
      },
      "fuel_price_difference": {
        color: "blue",
        arrayIndexes: row.payments?.map((payment: any, index: number) => (payment.fuel_price_difference > 0 ? index : undefined)),
      },
      "total_payed": {
        color: "green",
      },
      "finality": {
        color: row.finality !== 0 ? "red" : undefined,
      },
    }),
    "MonthlyProgressPayments": (row: { [key: string]: any }) => ({
      "total_floor_cost": {
        color: "green",
      },
      "total_fuel_cost": {
        color: "green",
      },
      "payed_floor_cost": {
        color: "red",
      },
      "payed_fuel_cost": {
        color: "red",
      },
      "price_difference": {
        color: "blue",
        arrayIndexes: row.payments?.map((payment: any, index: number) => (payment.price_difference !== 0 ? index : undefined)),
      },
      "fuel_price_difference": {
        color: "blue",
        arrayIndexes: row.payments?.map((payment: any, index: number) => (payment.fuel_price_difference !== 0 ? index : undefined)),
      },
      "total_payed_floor": {
        color: "blue",
      },
      "total_payed_fuel": {
        color: "blue",
      },
      "total_additional_payments": {
        color: "blue",
      },
      "progress_payment": {
        color: "red",
      },
      "previous_month_dept_tl": {
        color: row.previous_month_dept_tl !== 0 ? "red" : undefined,
      },
      "total_debt_tl": {
        color: "blue",
      },
      "cut_this_month_tl": {
        color: "blue",
      },
      "next_month_dept_tl": {
        color: "red",
      },
      "previous_month_dept_euro": {
        color: row.previous_month_dept_euro !== 0 ? "red" : undefined,
      },
      "cut_this_month_euro": {
        color: "blue",
      },
      "next_month_dept_euro": {
        color: "red",
      },
      "previous_month_dept_dollar": {
        color: row.previous_month_dept_dollar !== 0 ? "red" : undefined,
      },
      "cut_this_month_dollar": {
        color: "blue",
      },
      "next_month_dept_dollar": {
        color: "red",
      },
      "previous_month_dept_sterling": {
        color: row.previous_month_dept_sterling !== 0 ? "red" : undefined,
      },
      "cut_this_month_sterling": {
        color: "blue",
      },
      "next_month_dept_sterling": {
        color: "red",
      },
      "total_cut": {
        color: "green",
      },
      "payed_progress_payment": {
        color: "red",
      },
      "remaining_floor_cost": {
        color: "blue",
      },
      "remaining_fuel_cost": {
        color: "blue",
      },
      "initial_salary": {
        color: "rgb(230, 120, 0)",
      },
      "minimum_wage": {
        color: "rgb(230, 120, 0)",
      },
      "extra_salary": {
        color: "rgb(230, 120, 0)",
      },
    }),
    "All": () => ({}),
  };

  return inputColors[pageStore.page.title] || inputColors["All"];
}
