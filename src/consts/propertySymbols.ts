export const symbol: { [key: string]: { [key: string]: { value: string; parent?: string } } } = {
  "Offers": {
    "kdv": { value: "%" },
    "delivery_time": { value: "ay" },
  },
  "Contracts": {
    "delivery_time": { value: "ay" },
  },
  "ProgressPayments": {
    "total_payed": { value: "₺" },
    "finality": { value: "₺" },
    "price_difference": { value: "₺" },
    "fuel_price_difference": { value: "₺" },
    "total_floor_cost": { value: "₺" },
    "price_per_floor": { value: "₺" },
    "total_fuel_cost": { value: "₺" },
    "fuel_price": { value: "₺" },
    "total_cost": { value: "₺" },
    "payed_floor_cost": { value: "₺" },
    "payed_fuel_cost": { value: "₺" },
  },
  "MonthlyProgressPayments": {
    "total_floor_cost": { value: "₺" },
    "price_per_floor": { value: "₺" },
    "total_fuel_cost": { value: "₺" },
    "fuel_price": { value: "₺" },
    "payed_fuel_cost": { value: "₺" },
    "payed_floor_cost": { value: "₺" },
    "remaining_percentage": { value: "%" },
    "price_difference": { value: "₺" },
    "fuel_price_difference": { value: "₺" },

    "total_payed_floor": { value: "₺" },
    "total_payed_fuel": { value: "₺" },
    "total_payed": { value: "₺" },
    "progress_payment": { value: "₺" },
    "total_additional_payments": { value: "₺" },

    "previous_month_dept_tl": { value: "₺" },
    "total_advance_payment_and_other_tl": { value: "₺" },
    "total_debt_tl": { value: "₺" },
    "cut_this_month_tl": { value: "₺" },
    "next_month_dept_tl": { value: "₺" },

    "progress_payment_copy": { value: "₺" },

    "previous_month_dept_euro": { value: "€" },
    "total_advance_payment_and_other_euro": { value: "€" },
    "total_debt_euro": { value: "€" },
    "cut_this_month_euro": { value: "€" },
    "next_month_dept_euro": { value: "€" },
    "euro_equivalent_lira": { value: "₺" },

    "previous_month_dept_dollar": { value: "$" },
    "total_advance_payment_and_other_dollar": { value: "$" },
    "total_debt_dollar": { value: "$" },
    "cut_this_month_dollar": { value: "$" },
    "next_month_dept_dollar": { value: "$" },
    "dollar_equivalent_lira": { value: "₺" },

    "previous_month_dept_sterling": { value: "£" },
    "total_advance_payment_and_other_sterling": { value: "£" },
    "total_debt_sterling": { value: "£" },
    "cut_this_month_sterling": { value: "£" },
    "next_month_dept_sterling": { value: "£" },
    "sterling_equivalent_lira": { value: "₺" },

    "total_cut": { value: "₺" },
    "payed_progress_payment": { value: "₺" },
    "remaining_floor_cost": { value: "₺" },
    "remaining_fuel_cost": { value: "₺" },
    "payment_amount": { value: "₺", parent: "additional_payments" },
    "initial_salary": { value: "₺" },
    "salary_amount": { value: "₺" },
    "minimum_wage": { value: "₺" },
    "extra_salary": { value: "₺" },
  },
  "Trainings": {
    "validity_period": { value: "ay" },
  },
  "Overtime": {
    "overtime_amount": { value: "saat" },
  },
  "MaintenanceContracts": {
    "price": { value: "€" },
  },
};

export const getSymbol = (pageTitle: string, propertyTitle: string, parentTitle?: string): string | undefined => {
  const symbolObj = symbol[pageTitle]?.[propertyTitle!];

  if (!symbolObj?.parent) {
    return symbolObj?.value;
  }

  if (symbolObj.parent !== parentTitle) {
    return;
  }

  return symbolObj.value;
};
