import React, { useEffect, useState } from "react";
import { usePageStore } from "../../store/pageStore";
import styles from "./Dashboard.module.scss";
import Table from "./components/Table/Table";
import { GridColDef } from "@mui/x-data-grid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { pageIds } from "consts/config/pages/pages";
import dayjs from "dayjs";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { isoDateFormat } from "services/functions/helpers/dateHelpers";

export default function Dashboard() {
  const pageStore = usePageStore();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const [rows, setRows] = useState<any>([]);

  const columns: GridColDef[] = [
    {
      field: "project",
      headerName: "Proje",
      width: 250,
      sortable: true,
      disableColumnMenu: true,
      valueGetter: (params: any) => {
        return params.row["project"]
          ? params.row["project"]["status"] === "deleted"
            ? `${params.row["project"]["name"]}(silindi)`
            : params.row["project"]["name"]
          : "";
      },
    },
    {
      field: "products",
      headerName: "Üniteler",
      width: 250,
      sortable: true,
      disableColumnMenu: true,
      valueGetter: (params: any) => {
        return `${params.row.products?.map((p: any) => getPageDocument({ pageId: pageIds.Products, documentId: p.product })?.name).join(", ")}`;
      },
    },
    {
      field: "customer",
      headerName: "Müşteri",
      width: 200,
      sortable: true,
      disableColumnMenu: true,
      valueGetter: (params: any) => {
        return params.row["customer"]
          ? params.row["customer"]["status"] === "deleted"
            ? `${params.row["customer"]["name"]}(silindi)`
            : params.row["customer"]["name"]
          : "";
      },
    },
    {
      field: "created_date",
      headerName: "Gün Sayısı",
      width: 100,
      sortable: true,
      disableColumnMenu: true,
      valueGetter: (params: any) => {
        return `${dayjs().diff(dayjs(params.row.created_date).format(isoDateFormat), "day")} gün`;
      },
    },
  ];

  useEffect(() => {
    const rows = getPageDocuments({ pageId: pageIds.Offers, section: "exist" });
    const rowsWithId = [...rows.map((row, index) => ({ ...row, id: rows.length - index }))].reverse();
    setRows(rowsWithId);
  }, [pageStore]);

  return (
    <>
      <p className={styles["title"]}>Takipteki Teklifler</p>
      <div className={styles["container"]}>
        <Table rows={rows} columns={columns} />
      </div>
    </>
  );
}
