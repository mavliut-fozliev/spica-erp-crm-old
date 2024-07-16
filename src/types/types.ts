export type Tattributes = {
  role: string;
  name: string;
  surname: string;
};

export type TtokenDecoded = {
  attributes: Tattributes;
  identifier: string;
};

export type TDocument = {
  _id?: string;
  [key: string]: any;
};

export type TBucketProperty = {
  title?: string;
  type?: string;
  description?: string;
  relationType?: string;
  primary?: string;
  [key: string]: any;
};

export type TBucket = {
  _id?: string;
  title: string;
  description: string;
  primary: string;
  properties: {
    [key: string]: TBucketProperty;
  };
  category?: string;
  required?: string[];
};

export type TconfigPageModule = {
  module_name: string;
  pages: string[];
  bound_modules: string[];
  submodules: { name: string; pages: string[] }[];
};

export type TconfigPage = {
  _id: string;
  title: string;
  description: string;
  order: number;
  page_type: string;
  field_features: obj[];
  internal_field_features: obj[];
  section_features: obj;
  [key: string]: any;
};

export type Tconfig = {
  PageModules: TconfigPageModule[];
  Pages: TconfigPage[];
};

export type Tpage = {
  title: string;
  description: string;
  href: string;
  _id: string;
};

export type TsinglePageData = { exist: TDocument[]; [key: string]: TDocument[] };

export type TpagesData = {
  [_id: string]: TsinglePageData;
};

export type TVariables = {
  key: string;
  value: string;
  description: string;
}[];

export type obj = { [key: string]: any };
