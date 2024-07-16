import React, { useEffect, useState } from "react";
import { useNewDataModalStore } from "../../../../../newDataModalStore";
import ToggleButtons from "../../../../../../../../../components/buttons/ToggleButtons/ToggleButtons";
import { getIdValueFromObject } from "../../../../../../../../../services/functions/helpers/getIdValueFromObject";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function RevisePageNumbers({ rowForUpdate }: { rowForUpdate: { [key: string]: any } }) {
  const { setFormData } = useNewDataModalStore();

  const { getPageDocuments } = useGetStoredPageData();

  const [newReviseCreated, setNewReviseCreated] = useState(false);

  const [newData, setNewData] = useState({});

  const allRevisedData = getPageDocuments({ pageId: "current", section: "revised" });

  const currentOfferRevisesArray = allRevisedData.filter((row) => getIdValueFromObject(row.previous_offer) === rowForUpdate._id);
  const [allCurrentOfferRevises, setAllCurrentOfferRevises] = useState(currentOfferRevisesArray);

  const [reviseIndex, setReviseIndex] = useState(allCurrentOfferRevises[0]?.reference_number.slice(14) || "0");

  useEffect(() => {
    if (reviseIndex === "0") {
      setFormData(rowForUpdate);
    } else if (reviseIndex === "+") {
      const ObjectId = require("mongo-objectid");
      const objectId = new ObjectId();
      const _id = objectId.hex;

      const {
        proposed_solution,
        shape_property_file,
        shape_screenshot,
        draft_drawing_1,
        draft_drawing_2,
        draft_drawing_3,
        draft_drawing_4,
        draft_drawing_5,
        draft_drawing_6,
        draft_drawing_7,
        draft_drawing_8,
        draft_drawing_9,
        draft_drawing_10,
        ...prevReviseOfferProps
      } = allCurrentOfferRevises[0] || rowForUpdate;

      const newData = {
        customer: rowForUpdate.customer,
        project: rowForUpdate.project,
        ...(prevReviseOfferProps || {}),
        _id,
        previous_offer: rowForUpdate._id,
        reference_number: `${rowForUpdate.reference_number}-${allCurrentOfferRevises.length + 1}`,
        status: "revised",
      };
      setNewData(newData);

      setAllCurrentOfferRevises([...allRevisedData.filter((row) => getIdValueFromObject(row.previous_offer) === rowForUpdate._id), newData]);

      setReviseIndex(newData.reference_number.slice(14));
      setFormData(newData);
      setNewReviseCreated(true);
    } else {
      const currentRevise =
        allRevisedData.find((row) => getIdValueFromObject(row.previous_offer) === rowForUpdate._id && row.reference_number.slice(14) === reviseIndex) || {};

      if (Object.keys(currentRevise).length) {
        setFormData({ customer: rowForUpdate.customer, project: rowForUpdate.project, ...currentRevise });
      } else {
        setFormData(newData);
      }
    }
  }, [reviseIndex]);

  const pagination = [
    "0",
    ...(allCurrentOfferRevises?.map((row, index) => (index + 1).toString()) || []),
    ...(newReviseCreated || allCurrentOfferRevises.length >= 15 ? [] : ["+"]),
  ];

  const getConfirmedReviseIndex = () => {
    const confirmedReviseIndex = Number(rowForUpdate.confirmed_revise_index);
    if (confirmedReviseIndex === 0) {
      return rowForUpdate.status === "confirmed" ? 0 : undefined;
    }
    return confirmedReviseIndex;
  };

  return (
    <div style={{ width: "fit-content" }}>
      <div style={{ marginBottom: "10px", marginTop: "30px" }}>
        <p style={{ fontSize: "0.85rem", fontWeight: "500" }}>Revizeler:</p>
      </div>
      <ToggleButtons alignment={reviseIndex} setAlignment={setReviseIndex} labels={pagination} values={pagination} checkedItem={getConfirmedReviseIndex()} />
    </div>
  );
}
