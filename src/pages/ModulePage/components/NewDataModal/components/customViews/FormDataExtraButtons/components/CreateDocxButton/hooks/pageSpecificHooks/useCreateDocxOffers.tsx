import { pageIds } from "consts/config/pages/pages";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import React from "react";
import { offerTemplates } from "../../consts";
import DocxMerger from "docx-merger";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import first_pic from "assets/offer_first_pic.png";
import empty_pic from "assets/empty_pic.png";
import { TCreateDocxFunction } from "../../CreateDocxButton";
import { obj } from "types/types";
import useCreateDocxCommon from "../useCreateDocxCommon";

export default function useCreateDocxOffers() {
  const { formData } = useNewDataModalStore();

  const { getPageDocument } = useGetStoredPageData();

  const createDocx = useCreateDocxCommon();

  const getData = (productProps: obj[]) => {
    const productPropsObject = productProps.map((productDocxData: any, index) => {
      const newObj: any = {};
      for (let key in productDocxData) {
        newObj[`${key}_${index}`] = productDocxData[key];
      }
      return newObj;
    });

    const insertData = {
      company_name: formData.customer?.name || "“”",
      project_name: formData.project?.name || "“”",
      refNo: formData.reference_number || "“”",
      customer_address: formData.customer?.address || "“”",
      related_person: formData.project?.related_person || "“”",
      related_person_phone: formData.project?.related_person_phone || "“”",
      related_person_mail: formData.project?.related_person_email || "“”",
      current_date: new Date().toLocaleDateString("en-GB").replace(/\//g, "."),
      marka: productProps[0]?.marka,
      model: productProps[0]?.model,
      gecerlilik_suresi: `${formData.offer_validity_period?.slice(8, 10)} / ${formData.offer_validity_period?.slice(
        5,
        7
      )} / ${formData.offer_validity_period?.slice(0, 4)}`,
      teslim_suresi: formData.delivery_time,
      birim: getIdValueFromObject(formData.birim),
      birimT:
        getIdValueFromObject(formData.birim) === "$"
          ? "ABD Doları"
          : getIdValueFromObject(formData.birim) === "₺"
          ? "Türk Lirası"
          : getIdValueFromObject(formData.birim) === "€"
          ? "Euro"
          : "",
      kdv: `${formData.kdv}`,
      ...Object.assign({}, ...productPropsObject),
    };

    const insertPhotos: any = {
      first_pic: first_pic,
    };

    const insertPhotoSizes: any = {};

    productProps.forEach((_: any, index) => {
      if (formData[`draft_drawing_${index + 1}`] && !formData[`draft_drawing_${index + 1}`]?.at(-1)?.deleted) {
        insertPhotos[`draft_drawing_${index}`] = formData[`draft_drawing_${index + 1}`]?.at(-1)?.storage || empty_pic;
        insertPhotoSizes[`draft_drawing_${index}`] = { width: 600, height: 600 };
      } else {
        insertPhotos[`draft_drawing_${index}`] = empty_pic;
      }
    });

    return { insertData, insertPhotos, insertPhotoSizes };
  };

  const getProductProps = () => {
    const productProps: obj[] = [];

    formData.products?.forEach((product: any) => {
      product.docx_data?.forEach((docx_data: string) => {
        const productObject = getPageDocument({ pageId: pageIds.Products, documentId: product.product });
        productProps.push({
          ...JSON.parse(docx_data),
          marka: productObject?.brand,
          model: productObject?.model,
          durak_sayisi_ext:
            `${JSON.parse(docx_data).durak_sayisi} (${Array.from(
              { length: JSON.parse(docx_data).durak_sayisi || 0 },
              (_: any, i: any) => i + (Number(JSON.parse(docx_data).first_floor) || 0)
            ).join(", ")})` || "“”",
        });
      });
    });

    return productProps;
  };

  const filenames = ["headFile", "allProductsFile", "singleProductFile", "footerProductFile"];

  const handleCreateProposedSolution: TCreateDocxFunction = async () => {
    const productProps = getProductProps();

    return createDocx({
      templateIds: [
        offerTemplates.head,
        offerTemplates.products[productProps.length - 1],
        offerTemplates.singleProduct[productProps.length - 1],
        offerTemplates.footer[productProps.length - 1],
      ],
      fileNames: filenames,
      finishFileName: `teklif belgesi ${formData.reference_number}.docx`,
      data: getData(productProps),
    });
  };

  return handleCreateProposedSolution;
}
