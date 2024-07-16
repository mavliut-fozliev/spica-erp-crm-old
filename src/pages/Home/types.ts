export type Tlink = {
  title: string;
  description: string;
  href: string;
  _id: string;
};

export type Tsubmodule = {
  label: string;
  links: Tlink[];
};

export type Titem = {
  icon: React.ReactNode;
  label: string;
  links: (undefined | Tlink)[];
  submodules: Tsubmodule[];
};

export type TexpandedModule = {
  old: string;
  new: string;
};

export type Tuser = {
  _id?: string;
  identifier?: string;
  identity_id?: string;
  name?: string;
  surname?: string;
};

export type TNotification = {
  _id?: string;
  title?: string;
  created_at?: string;
  user?: string;
  seen?: boolean;
  seen_date?: string | undefined;
};

export type TNotificationResolved = Omit<TNotification, "user"> & {
  user?: Tuser;
};
