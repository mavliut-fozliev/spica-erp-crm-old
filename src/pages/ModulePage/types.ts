import { TDocument, TpagesData, obj } from "../../types/types";

export type TBucketButton = {
  _id?: string;
  title?: string;
  bucket?: { [key: string]: any };
  header_name?: string;
  additional_properties?: string;
};

type TlocalPageProps = {
  field_features: obj[];
};

export type TlocalPages = {
  [pageTitle: string]: TlocalPageProps;
};

export type TDataMethodCallback = (newPagesData: TpagesData, data: obj) => void;

export type TDataMethodParams = {
  pagesData?: TpagesData;
  bucket?: string;
  callback?: TDataMethodCallback;
};

export type TDataMethod = (params: TDataMethodParams & { document: TDocument }) => void;

export type TDataMethodMultiple = (params: TDataMethodParams & { documents: TDocument[] }) => void;

export type TDataMethodDelete = (params: TDataMethodParams & { dataIds: (string | undefined)[] }) => void;
