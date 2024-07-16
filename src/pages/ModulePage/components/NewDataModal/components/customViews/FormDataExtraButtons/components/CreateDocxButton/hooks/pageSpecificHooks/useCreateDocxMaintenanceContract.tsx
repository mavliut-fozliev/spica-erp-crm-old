import React from "react";
import { TCreateDocxFunction } from "../../CreateDocxButton";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { maintenanceContractTemplateId } from "../../consts";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import dayjs from "dayjs";
import { isoToDate } from "services/functions/helpers/dateHelpers";
import useCreateDocxCommon from "../useCreateDocxCommon";

export default function useCreateDocxMaintenanceContract() {
  const { formData } = useNewDataModalStore();

  const { getPageDocument } = useGetStoredPageData();

  const createDocx = useCreateDocxCommon();

  const getData = () => {
    const product = getPageDocument({ pageId: pageIds.Products, documentId: getIdValueFromObject(formData.unit?.product) });

    const unitData = JSON.parse(formData.unit?.unit_data || "{}");

    const months = dayjs(formData.end_date).diff(dayjs(formData.start_date), "month");

    const insertData = {
      company_name: formData.customer?.name,
      building_name: formData.building_name,
      client_name: formData.client_name,
      registration_number: formData.registration_number,
      customer_address: formData.customer?.address,
      related_person_mail: formData.project?.related_person_email,
      related_person_phone: formData.project?.related_person_phone,
      marka: product?.brand,
      model: product?.model,
      serial_number: formData.unit?.serial_number,
      durak_sayisi: unitData.durak_sayisi,
      hiz: unitData.hiz,
      kapasite_kg: unitData.kapasite_kg,
      kapasite_kisi: unitData.kapasite_kisi,
      start_date: isoToDate(formData.start_date),
      end_date: isoToDate(formData.end_date),
      months,
      price: formData.price,
    };

    const insertPhotos: any = {};
    const insertPhotoSizes: any = {};

    return { insertData, insertPhotos, insertPhotoSizes };
  };

  const filenames = ["file"];

  const handleCreateContract: TCreateDocxFunction = async () => {
    return createDocx({
      templateIds: [maintenanceContractTemplateId],
      fileNames: filenames,
      finishFileName: `bakım sözleşmesi belgesi ${formData.unit?.serial_number}.docx`,
      data: getData(),
    });
  };

  return handleCreateContract;
}
