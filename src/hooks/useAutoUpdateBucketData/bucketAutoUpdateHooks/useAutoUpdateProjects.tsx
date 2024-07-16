import { TAutoUpdateFunction } from "../useAutoUpdateBucketData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { pageIds } from "consts/config/pages/pages";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useAutoUpdateProjects() {
  const { handleCreateNewData, handleUpdateData, handleDeleteData } = useDataMethods();

  const { getPageDocuments } = useGetStoredPageData();

  const { formData } = useNewDataModalStore();

  const autoUpdateProjects: TAutoUpdateFunction = (isUpdate, idsToDelete) => {
    if (idsToDelete) {
      handleDeleteData({ dataIds: idsToDelete });
    } else {
      const updateProperties = (obj: { [key: string]: any }, searchString: string, newValue: (key: string, oldValue: any) => any): { [key: string]: any } => {
        if (typeof obj !== "object" || obj === null) {
          return obj;
        }

        if (Array.isArray(obj)) {
          return obj.map((item) => updateProperties(item, searchString, newValue));
        }

        return Object.fromEntries(
          Object.entries(obj).map(([key, value]) => [
            key,
            typeof value === "object" ? updateProperties(value, searchString, newValue) : key.includes(searchString) ? newValue(key, value) : value,
          ])
        );
      };

      const updatedRow = updateProperties(formData, "stepped", (key, oldValue) => {
        const filterProps = key.split("stepped")[1]?.trim()?.split("_")?.slice(1);
        const values = oldValue.split("_");
        const resultObject = filterProps.reduce((obj: { [key: string]: any }, key, index) => {
          obj[key] = values[index];
          return obj;
        }, {});
        if (/^[0-9a-fA-F]{24}$/.test(oldValue)) {
          return oldValue;
        } else if (filterProps.length == values.length) {
          return getPageDocuments({ pageId: pageIds.Products }).find((row) =>
            Object.keys(resultObject).every((key) => row.hasOwnProperty(key) && resultObject[key] === row[key])
          )?._id;
        }
      });

      const saveFunction = isUpdate ? handleUpdateData : handleCreateNewData;
      saveFunction({ document: updatedRow });
    }
  };

  return autoUpdateProjects;
}
