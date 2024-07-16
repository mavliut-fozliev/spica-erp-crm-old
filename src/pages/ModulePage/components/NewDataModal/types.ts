export type TitemsValue = {
  [pageTitle: string]: { [propertyTitle: string]: () => { [key: string]: any }[] };
};
