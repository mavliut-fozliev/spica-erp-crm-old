import React, { useContext } from "react";
import { TCreateDocxFunction } from "../../CreateDocxButton";
import useStorage from "services/api/useStorage";
import { useNewDataModalStore } from "pages/ModulePage/components/NewDataModal/newDataModalStore";
import useGetStoredPageData from "hooks/useGetStoredPageData";
import { contractTemplates, errorTemplate } from "../../consts";
import { pageIds } from "consts/config/pages/pages";
import { getIdValueFromObject } from "services/functions/helpers/getIdValueFromObject";
import { TDocument, obj } from "types/types";
import { generateDocument } from "services/functions/createDocxFromTemplate/createDocxFromTemplate";
import DocxMerger from "docx-merger";
import { convertNumberToWord } from "services/functions/helpers/numberHelpers";
import agreement_first_pic from "assets/agreement_first_pic.png";
import useDataMethods from "pages/ModulePage/hooks/useDataMethods";

export default function useCreateDocxContracts({ docxData }: { docxData: obj }): TCreateDocxFunction {
  const storageService = useStorage();

  const { formData } = useNewDataModalStore();

  const { getPageDocument, getPageDocuments } = useGetStoredPageData();

  const { handleMultipleCreate } = useDataMethods();

  const handleCreateAgreement: TCreateDocxFunction = async () => {
    const productProps: obj[] = [];

    const singleProductFilePromises: Promise<File>[] = [];

    const singleProductTemplate = await storageService.getData(contractTemplates.singleProduct);

    const currentProjectOffers = getPageDocuments({ pageId: pageIds.Offers, section: "confirmed" })
      .filter((row) => row.project?._id === formData.project?._id)
      .map((row) =>
        row.confirmed_revise_index
          ? getPageDocuments({ pageId: pageIds.Offers, section: "revised" }).find(
              (revise) => revise.previous_offer._id === row._id && revise.reference_number.slice(14) === row.confirmed_revise_index
            )
          : row
      );

    const customer = getPageDocument({ pageId: pageIds.Customers, documentId: getIdValueFromObject(formData.project.customer) });

    const newUnits: TDocument[] = [];

    currentProjectOffers.forEach((offer, offerIndex) => {
      offer?.products?.forEach((product: any, productIndex: number) => {
        product.docx_data?.forEach((docx_data: string, docxDataIndex: number) => {
          const docxData = JSON.parse(docx_data || "{}");

          const count = Number(docxData.adet) || 0;

          Array.from({ length: count }, (_, index) => {
            const productName = getPageDocument({ pageId: pageIds.Products, documentId: product.product })?.name;
            const newUnit = {
              serial_number: `${productName} No ${offerIndex + 1}-${productIndex + 1}-${docxDataIndex + 1}-${index + 1}`,
              project: getIdValueFromObject(offer.project),
              product: getIdValueFromObject(product.product),
              unit_data: docx_data,
              status: "unsigned",
            };
            newUnits.push(newUnit);
            return newUnit;
          });

          const productObject = getPageDocument({ pageId: pageIds.Products, documentId: product.product });
          const insertProductData = {
            ...docxData,
            project_name: formData.project?.name,
            company_name: customer?.name,
            marka: productObject?.brand,
            model: productObject?.model,
            type: productObject?.type,
            durak_sayisi_ext:
              `${docxData.durak_sayisi} (${Array.from({ length: docxData.durak_sayisi || 0 }, (_: any, i: any) => i + (Number(docxData.first_floor) || 0)).join(
                ", "
              )})` || "“”",
          };
          productProps.push(insertProductData);

          singleProductFilePromises.push(generateDocument(singleProductTemplate.url, { insertText: insertProductData }, "singleProduct.docx"));
        });
      });
    });

    handleMultipleCreate({ documents: newUnits, bucket: pageIds.Units });

    const singleProductFiles = await Promise.all(singleProductFilePromises);

    return Promise.all([
      storageService.getData(contractTemplates.head[productProps.length - 1] || errorTemplate),
      storageService.getData(contractTemplates.payment[formData.payment?.length - 1 || 0] || errorTemplate),
    ]).then(async (templates) => {
      // connect files
      function fileToArrayBuffer(file: any): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as ArrayBuffer);
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
        });
      }

      const fetchAndCreateFile = async (url: string, filename: string) => {
        const blob = await fetch(url).then((res) => res.blob());
        return new File([blob], filename);
      };

      const fetchFiles = async () => {
        const urls = [templates[0].url, templates[1].url];
        const filenames = ["headFile", "allProductsFile", "singleProductFile", "footerProductFile"];

        const filePromises = urls.map((url, index) => fetchAndCreateFile(url, filenames[index]));
        return Promise.all(filePromises);
      };

      const fileArray = await fetchFiles();

      return Promise.all([...fileArray, ...singleProductFiles].map((file: any) => fileToArrayBuffer(file))).then((arrayBuffers) => {
        const result = new DocxMerger({}, arrayBuffers);

        return new Promise<File>((resolve, reject) => {
          result.save("blob", async (mergedDocx: any) => {
            try {
              const finishFileUrl = URL.createObjectURL(mergedDocx);

              const getTotalProductAmount = () => {
                const obj: any = {};
                productProps.forEach((product) => {
                  if (obj.hasOwnProperty(product.type)) {
                    obj[product.type] = (Number(obj[product.type]) + Number(product.adet)).toString();
                  } else {
                    obj[product.type] = product.adet;
                  }
                });
                return Object.entries(obj)
                  .map(([key, value]: any) => `${value} ( ${convertNumberToWord(value)} ) adet ${key}`)
                  .join(" - ");
              };

              const payment: any = {};
              formData.payment?.forEach((pay: any, index: number) => {
                payment[`money_${index}`] = pay.money_amount;
                payment[`date_${index}`] = `${pay.date?.slice(8, 10)}.${pay.date?.slice(5, 7)}.${pay.date?.slice(0, 4)}`;
                payment[`method_${index}`] = getIdValueFromObject(pay.method);
              });

              const agreementData = {
                company_name: customer?.name || "“”",
                project_name: formData.project?.name || "“”",
                customer_address: customer?.address || "“”",
                related_person: formData.project?.related_person || "“”",
                related_person_phone: formData.project?.related_person_phone || "“”",
                related_person_role: formData.project?.related_person_role || "“”",
                birim: getIdValueFromObject(currentProjectOffers[0]?.birim),
                birimT:
                  getIdValueFromObject(currentProjectOffers[0]?.birim) === "$"
                    ? "ABD Doları"
                    : getIdValueFromObject(currentProjectOffers[0]?.birim) === "₺"
                    ? "Türk Lirası"
                    : getIdValueFromObject(currentProjectOffers[0]?.birim) === "€"
                    ? "Euro"
                    : "",
                birimW:
                  getIdValueFromObject(currentProjectOffers[0]?.birim) === "$"
                    ? "USD"
                    : getIdValueFromObject(currentProjectOffers[0]?.birim) === "₺"
                    ? "TL"
                    : getIdValueFromObject(currentProjectOffers[0]?.birim) === "€"
                    ? "EUR"
                    : "",
                kdv: `${currentProjectOffers[0]?.kdv}`,
                adet_toplam: getTotalProductAmount() || "“”",
                toplam_fiyat: docxData.totalPriceWithoutKDV?.toString() || "“”",
                toplam_fiyatT: convertNumberToWord(docxData.totalPriceWithoutKDV?.toString()) || "“”",
                teslim_suresi: formData.delivery_time || "“”",
                ...payment,
              };
              const agreementPhotos: any = {
                first_pic: agreement_first_pic,
              };
              const agreementPhotoSizes: any = {};

              const productPropsObject = productProps.map((productDocxData: any, index) => {
                const newObj: any = {};
                for (let key in productDocxData) {
                  newObj[`${key}_${index}`] = productDocxData[key];
                }
                return newObj;
              });

              const finishFile = await generateDocument(
                finishFileUrl,
                {
                  insertText: { ...agreementData, ...Object.assign({}, ...productPropsObject) },
                  insertPhotos: agreementPhotos,
                  photoSizes: agreementPhotoSizes,
                },
                `sözleşme belgesi ${formData.project?.name}.docx`.replace("/", "_"),
                true
              );

              resolve(finishFile);
            } catch (error) {
              reject(error);
            }
          });
        });
      });
    });
  };

  return handleCreateAgreement;
}
