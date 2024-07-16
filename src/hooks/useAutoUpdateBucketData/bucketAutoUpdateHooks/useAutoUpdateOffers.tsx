import React, { useContext } from "react";
import { TAutoUpdateFunction } from "../useAutoUpdateBucketData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { useModulePageStore } from "pages/ModulePage/modulePageStore";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useAutoUpdateOffers() {
  const { rowForUpdate } = useModulePageStore();

  const { handleCreateNewData, handleUpdateData, handleDeleteData } = useDataMethods();

  const { getPageDocument } = useGetStoredPageData();

  const { formData } = useNewDataModalStore();

  const autoUpdateOffers: TAutoUpdateFunction = (isUpdate, idsToDelete) => {
    if (idsToDelete) {
      handleDeleteData({ dataIds: idsToDelete });
    } else {
      if (isUpdate) {
        if (formData.previous_offer) {
          const { customer, project, status, ...reviseRow } = formData;
          const confirmedReviseIndex = status === "confirmed" ? reviseRow.reference_number.slice(14) : rowForUpdate.confirmed_revise_index;
          reviseRow.status = "revised";
          reviseRow.confirmed_revise_index = "";

          const doesDocumentExist = !!getPageDocument({ pageId: "current", documentId: formData._id });

          const saveFunction = doesDocumentExist ? handleUpdateData : handleCreateNewData;

          saveFunction({
            document: reviseRow,
            callback: (newPagesData) =>
              handleUpdateData({
                document: {
                  ...rowForUpdate,
                  confirmed_revise_index: confirmedReviseIndex,
                  status: status === "revised" ? rowForUpdate.status : status,
                },
                pagesData: newPagesData,
              }),
          });
        } else {
          if (formData.status === "confirmed") {
            handleUpdateData({ document: { ...formData, confirmed_revise_index: "" } });
          } else {
            handleUpdateData({ document: formData });
          }
        }
      } else {
        handleCreateNewData({ document: formData });
      }
    }
  };

  return autoUpdateOffers;
}
