declare module "docx-merger" {
  export default class DocxMerger {
    constructor(options: any, arrayBuffers: ArrayBuffer[]);
    save(type: string, callback: (mergedDocx: Blob) => Promise<void>): Promise<ArrayBuffer>;
  }
}
