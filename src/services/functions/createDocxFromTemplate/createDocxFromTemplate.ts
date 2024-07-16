import * as Docxtemplater from "docxtemplater";
import * as PizZip from "pizzip";
//@ts-ignore
import * as ImageModule from "docxtemplater-image-module-free";
//@ts-ignore
import * as JSZipUtils from "jszip-utils";
import { obj } from "types/types";

interface ErrorWithProperties extends Error {
  properties?: {
    errors: Array<{
      properties: {
        explanation: string;
      };
    }>;
  };
}

export function generateDocument(
  templateUrl: string,
  insertData: { insertText: obj; insertPhotos?: obj; photoSizes?: { [key: string]: { width: number; height: number } } },
  filename: string,
  download_immediately?: boolean
): Promise<File> {
  const opts: any = {};
  opts.centered = false;
  opts.getImage = function (url: any) {
    return new Promise(function (resolve, reject) {
      JSZipUtils.getBinaryContent(url, function (error: any, content: any) {
        if (error) {
          return reject(error);
        }
        return resolve(content);
      });
    });
  };
  opts.getSize = function (imgData: any, url: any, tagName: any) {
    if (insertData.photoSizes?.[tagName]) {
      return [insertData.photoSizes?.[tagName].width, insertData.photoSizes?.[tagName].height];
    } else {
      return new Promise(function (resolve, reject) {
        const blob = new Blob([imgData]);
        const image = new Image();
        image.src = URL.createObjectURL(blob);
        image.onload = () => resolve([image.width, image.height]);
        image.onerror = (error) => {
          reject(error);
        };
      });
    }
  };

  return new Promise((resolve, reject) => {
    JSZipUtils.getBinaryContent(templateUrl, function (error: any, content: any) {
      if (error) {
        reject(error);
      }

      const imageModule = new ImageModule(opts);

      const zip = new PizZip.default(content);
      const doc = insertData.insertPhotos
        ? new Docxtemplater.default().loadZip(zip).attachModule(imageModule).compile()
        : new Docxtemplater.default().loadZip(zip).compile();

      try {
        doc.resolveData({ ...insertData.insertText, ...(insertData.insertPhotos || {}) }).then(function () {
          doc.render();
          const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          });

          if (download_immediately) {
            const blobUrl = URL.createObjectURL(out);

            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(blobUrl);
          }

          const file = new File([out], filename, { type: out.type });
          resolve(file);
        });
      } catch (error) {
        const err = error as ErrorWithProperties;
        const replaceErrors = (key: string, value: any) => {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function (error, key) {
              error[key] = value[key as keyof Error];
              return error;
            }, {} as Record<string, any>);
          }
          return value;
        };
        console.log(JSON.stringify({ error: err }, replaceErrors));

        if (err.properties && err.properties.errors instanceof Array) {
          const errorMessages = err.properties.errors
            .map(function (error) {
              return error.properties.explanation;
            })
            .join("\n");
          console.log("errorMessages", errorMessages);
          reject(errorMessages);
        }
        reject(error);
      }
    });
  });
}
