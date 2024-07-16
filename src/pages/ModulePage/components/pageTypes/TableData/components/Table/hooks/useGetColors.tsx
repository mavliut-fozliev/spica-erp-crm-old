import getColor from "consts/colors/colors";
import dayjs from "dayjs";
import React from "react";
import { usePageStore } from "store/pageStore";
import { obj } from "types/types";
import { TDocumentWithId } from "../Table";

export default function useGetColors({ rows }: { rows: TDocumentWithId[] }) {
  const pageStore = usePageStore();
  const bucketId = pageStore.page._id;

  const getColorsObject = () => {
    const rowColors: (string | undefined)[] = [...rows].reverse()?.map((row: obj) => {
      const pageTitle = pageStore.pageBuckets[bucketId]?.title;

      if (pageTitle !== "EmployeesTrainings") return;

      const recieved_trainings = row.recieved_trainings || [];
      const closestExpiredTraining = recieved_trainings?.sort((a: obj, b: obj) => dayjs(a.end_date).valueOf() - dayjs(b.end_date).valueOf())[0];
      const closestExpiredTrainingEndDate = closestExpiredTraining?.end_date;

      const currentDate = dayjs();

      const dayDifference = dayjs(closestExpiredTrainingEndDate).diff(currentDate, "day");
      const monthDifference = dayjs(closestExpiredTrainingEndDate).diff(currentDate, "month");

      if (monthDifference >= 1) return getColor("success", 0.8);

      if (dayDifference > 0) return getColor("warning", 0.8);

      return getColor("danger", 0.8);
    });
    const arrayOfColorObjects = rowColors.map((color, index) => ({ [`[data-id='${index + 1}']`]: { background: color, borderRadius: "4px" } }));
    return Object.assign({}, ...arrayOfColorObjects);
  };

  return getColorsObject;
}
