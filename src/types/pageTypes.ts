import { TDocument } from "./types";

export type TPageTypes = {
  [key: string]: { exist: TDocument[] } | undefined;
  "651d309082063a002c6f9851"?: {
    exist: {
      name: string;
      address: string;
      phone: string;
      email: string;
      status: string;
    }[];
  };
  "651d84bc82063a002c6f9f9a"?: {
    exist: {
      name: string;
      brand: string;
      type: string;
      model: string;
      abbreviation: string;
      status: string;
    }[];
  };
  "651e842a82063a002c6fa24f"?: {
    exist: {
      customer: string;
      name: string;
      related_person: string;
      related_person_phone: string;
      related_person_role: string;
      related_person_email: string;
      building_drawing: any[];
      products: any[];
      field_control_form: any[];
      photos: any[];
      additional_document: any[];
      comment_section: string;
      reminder: string;
      serial_number: number;
      created_date: string;
      status: string;
    }[];
  };
  "651d6a2882063a002c6f9ba3"?: {
    exist: {
      customer: string;
      project: string;
      product__from__project: string;
      product_count: number;
      reference_number: string;
      previous_offer: string;
      notes: string;
      shape_screenshot: any[];
      shape_property_file: any[];
      proposed_solution: any[];
      confirmed: boolean;
      status: string;
      created_date: string;
      proposed_solution_docx_data: string;
      related_person: string;
      related_person_phone: string;
      related_person_role: string;
      standby_time: string;
      pended: boolean;
    }[];
  };
  "65721d81d71b6e002cfaba28"?: {
    exist: {
      project: string;
      customer: string;
      offer: string;
      product: string;
      agreement: any[];
      agreement_signed: any[];
      payment: any[];
      status: string;
    }[];
  };
  "6527b072ffa6b3002d10bfd3"?: {
    exist: {
      name: string;
      customer: string;
      project: string;
      offer: string;
      product: string;
      product_count: number;
      delivery_date: string;
      estimated_arrival_date: string;
      schindler_files: any[];
      pull_signal_form: any[];
      notes_for_assembly: string;
      invoice: any[];
      product_serial_number: any[];
      status: string;
    }[];
  };
  "656dcec7d71b6e002cfa1b15"?: {
    exist: {
      name: string;
      ordered_project: string;
      unit_worksite_delivery_form: any[];
      unit_worksite_delivery_photos: any[];
      mechanical_assembly_delivery_form: any[];
      mechanical_assembly_delivery_photos: any[];
      damage_notification_form: any[];
      damage_notification_photos: any[];
      external_files: any[];
      extra_material: any[];
      status: string;
    }[];
  };
  "65489afcd71b6e002cf7406c"?: {
    exist: {
      order_name: string;
      customer: string;
      project_name: string;
      product: string;
      product_serial_number: any;
      field_team: string;
      task_name: string;
      start: string;
      type: string;
      end: string;
      progress: string;
      order: number;
      project: string;
      dependencies: any[];
      status: string;
    }[];
  };
  "6576ddbbd71b6e002cfb2812"?: {
    exist: {
      team_name: string;
      employees: any[];
      status: string;
    }[];
  };
  "656ed054d71b6e002cfa47f0"?: {
    exist: {
      field_name: string;
      information: any[];
      status: string;
    }[];
  };
  "65782dabd71b6e002cfb5489"?: {
    exist: {
      added_to_assembly_program: boolean;
      project_name: string;
      project_date: string;
      assembly_start_date: string;
      subcontractor_name: string;
      location: string;
      model: string;
      status: string;
      capacity: string;
      number_of_stops: number;
      high_floor: number;
      price_per_floor: number;
      total_installation_fee: number;
      payments: any[];
      fuel_liter_price: number;
      fuel: number;
      price_difference_payment: number;
      total_price_from_this_product: number;
      advance_payment: number;
      advance_payment_description: string;
      advance_payment_date: string;
      deducted_money: number;
      deducted_money_description: string;
      deducted_money_date: string;
      payment_made: number;
      finality: number;
      notes: any[];
      name: string;
    }[];
  };
  "657ae033d71b6e002cfbe32f"?: {
    exist: {
      year: number;
      month: string;
      team_name: string;
      payments: any[];
      status: string;
      total_fuel: number;
      total_payment: number;
      additional_works_to_be_paid: any[];
      total_additional_payments: number;
      general_total_of_progressed_payments: number;
      advance_debt_transferred_from_the_previous_month: number;
      advance_debt_transferred_from_the_previous_month_euro: number;
      advance_and_other_payments_given_this_month: any[];
      total_of_advance_and_other_payments_given_this_month: number;
      duties_made_this_month_euro: number;
      debt_transferred_to_the_next_month_euro: number;
      euro_exchange_rate: number;
      total_debt: number;
      this_month_interruption: number;
      debt_transferred_to_the_next_month: number;
      progress_payment_amount: number;
      payments_to_employees: any[];
      personnel_salary_payment_deposited_to_bank: number;
      remainder: number;
    }[];
  };
  "6579a793d71b6e002cfbabb6"?: {
    exist: {
      name: string;
      model: string;
      fuel_cost_details: any[];
      status: string;
    }[];
  };
  "6579ab4fd71b6e002cfbb475"?: {
    exist: {
      status: string;
      model: string;
      capacity: string;
      price: any[];
    }[];
  };
  "655dde2ed71b6e002cf8e4a8"?: {
    exist: {
      name: string;
      status: string;
      employee: string;
      trainings: any[];
      equipments: any[];
      cautions_and_punishments: any[];
    }[];
  };
  "655de5a6d71b6e002cf8ed3b"?: {
    exist: {
      name: string;
      status: string;
      test_boolean: boolean;
      test_yes_no: string;
      test_radio: string;
      test_file: any[];
      access_identifier: string;
    }[];
  };
  "655de02dd71b6e002cf8eab4"?: {
    exist: {
      name: string;
      date: string;
      notes: string;
      files: any[];
      status: string;
    }[];
  };
  "655dea3ad71b6e002cf8eee1"?: {
    exist: {
      name: string;
      training: string;
      status: string;
    }[];
  };
  "655cc987d71b6e002cf8b478"?: {
    exist: {
      name: string;
      tc_identity: string;
      job: string;
      department: string;
      birth_date: string;
      start_date: string;
      status: string;
      diploma: any[];
      place_of_residence: any[];
      civil_registry: any[];
      passport: any[];
      employment_contract: any[];
      personnel_sertifications: any[];
      debited_equipments: any[];
      permit_required: boolean;
      permit_start_date: string;
      permit_end_date: string;
      work_permit_document: any[];
      make_passive: boolean;
      dismissal_date: string;
      dismissal_certificate: any[];
    }[];
  };
  "655f3140d71b6e002cf91f0b"?: {
    exist: {
      title: string;
      status: string;
      employee: string;
      start_date: string;
      end_date: string;
      leave_type: string;
      department_head_approval: boolean;
      manager_approval: boolean;
      reason: string;
    }[];
  };
  "655f5ee3d71b6e002cf94752"?: {
    exist: {
      status: string;
      employee: string;
      project: string;
      product: string;
      overtime: string;
      start_time: string;
      end_time: string;
      department_head_approval: boolean;
      manager_approval: boolean;
      reason: string;
    }[];
  };
  "655f30f3d71b6e002cf91da0"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
  "655f3062d71b6e002cf91881"?: {
    exist: {
      status: string;
      license_plate: string;
      employee: string;
      start_date: string;
      end_date: string;
      navigation_document: any[];
      navigation_end_date: string;
      inspection_document: any[];
      inspection_end_date: string;
      exhaust_emissions_document: any[];
      exhaust_emissions_end_date: string;
      compulsory_traffic_insurance: any[];
      compulsory_traffic_insurance_end_date: string;
      insurance_policy: any[];
      insurance_end_date: string;
    }[];
  };
  "6560b7ccd71b6e002cf9654c"?: {
    exist: {
      ordered_project: string;
      emo: any[];
      mmo: any[];
      working_space: any[];
      preproduction_permit: any[];
      assembly_permit: any[];
      corporation_permit: any[];
      status: string;
    }[];
  };
  "655f2fd0d71b6e002cf9186e"?: {
    exist: {
      ordered_project: string;
      status: string;
    }[];
  };
  "655f3b2dd71b6e002cf93781"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
  "655f3b67d71b6e002cf938ab"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
  "655f3c32d71b6e002cf939e0"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
  "655f3c82d71b6e002cf93d3f"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
  "655f3c73d71b6e002cf93d3b"?: {
    exist: {
      title: string;
      description: string;
      status: string;
    }[];
  };
};
