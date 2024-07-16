import React from "react";
import { TAutocompleteFunction, TprocessAndSaveFormData } from "../useAutocomplete";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { obj } from "types/types";

export default function useAutocompleteEmployeesTrainings(processAndSaveFormData: TprocessAndSaveFormData, getTrainingInfo: (employeeId: string) => obj[]) {
  const autocompleteEmployeesTrainings: TAutocompleteFunction = (newFormData) => {
    const currentEmployeeId = getIdValueFromObject(newFormData.employee);

    const trainingsInfo = getTrainingInfo(currentEmployeeId);

    const certificates = newFormData.recieved_trainings || [];

    const recieved_trainings = trainingsInfo.map((row, index) => ({
      certificate: certificates.find((certificate: obj) => certificate.training_name === row.training_name)?.certificate,
      ...row,
    }));

    const finalFormData = {
      ...newFormData,
      recieved_trainings,
    };

    return processAndSaveFormData(finalFormData);
  };
  return autocompleteEmployeesTrainings;
}
