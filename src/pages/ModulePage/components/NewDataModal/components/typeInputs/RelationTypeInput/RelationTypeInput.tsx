import React from "react";
import { TBucketProperty, TDocument, TsinglePageData, obj } from "../../../../../../../types/types";
import FilteredSelectField from "../../../../../../../components/inputs/FilteredSelectField/FilteredSelectField";
import { usePageStore } from "../../../../../../../store/pageStore";
import { useNewDataModalStore } from "../../../newDataModalStore";
import SelectField from "../../../../../../../components/inputs/SelectField/SelectField";
import { TitemsValue } from "../../../types";
import { getIdValueFromObject } from "../../../../../../../services/functions/helpers/getIdValueFromObject";
import { pageIds } from "../../../../../../../consts/config/pages/pages";
import useGetProperties from "hooks/useGetProperties";
import useGetStoredPageData from "hooks/useGetStoredPageData";

export default function RelationTypeInput({
  property,
  parent,
  arrayIndex,
  field_features_obj,
  handleInputChange,
  requiredProperties,
  rowForUpdate,
  handleUpdatedFormDataChange,
}: {
  property: TBucketProperty;
  parent: string | undefined;
  arrayIndex: number | undefined;
  field_features_obj: { [key: string]: any };
  handleInputChange: (e: any, parent?: string, arrayIndex?: number) => void;
  requiredProperties: string[];
  rowForUpdate: { [key: string]: any };
  handleUpdatedFormDataChange: (e: any, parent?: string, arrayIndex?: number) => void;
}) {
  const pageStore = usePageStore();

  const { formData, errors, isRemoved, setIsRemoved } = useNewDataModalStore();

  const { getItemInternalFieldFeature } = useGetProperties();

  const { getPageDocuments, getPageDocument } = useGetStoredPageData();

  const pageTitle: string = pageStore.page.title;
  const initialItems: TsinglePageData = pageStore.pagesData[property.bucketId] || [];
  const initialItemsAll: TDocument[] = Object.values(initialItems).flat();
  const currentPageData: TDocument[] = getPageDocuments({ pageId: "current" }).filter((row) => row._id !== formData._id);

  const isOnUpdate = Object.keys(rowForUpdate).length;

  const savedDocument = getPageDocument({ pageId: "current", documentId: rowForUpdate._id });
  const isLengthBiggerThanIndex = arrayIndex != undefined && parent ? savedDocument?.[parent]?.length > arrayIndex : true;

  const isFieldDisableEditing = !parent
    ? field_features_obj[property.title!]?.disable_editing
    : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.disable_editing;

  const disable_editing = isLengthBiggerThanIndex && isOnUpdate && isFieldDisableEditing;

  if (property.relationType === "onetoone") {
    if (property.title?.includes("stepped")) {
      const items = getPageDocuments({ pageId: property.bucketId });

      const getDefaultValue = () => {
        if (parent) {
          if (!formData[parent]) return "";
          if (arrayIndex !== undefined) {
            if (!formData[parent][arrayIndex]) return "";
            return formData[parent][arrayIndex][property.title!] ?? "";
          }
          return formData[parent][property.title!] ?? "";
        }

        if (arrayIndex !== undefined) {
          return formData[property.title!][arrayIndex] ?? "";
        }

        return formData[property.title!] ?? "";
      };

      return (
        <FilteredSelectField
          name={property.title!}
          defaultValue={getDefaultValue()}
          onChange={(e) => handleInputChange(e, parent, arrayIndex)}
          label={property.description!}
          items={items}
          isRemoved={isRemoved}
          setIsRemoved={setIsRemoved}
          bucketId={property.bucketId}
        />
      );
    }

    if (pageStore.page.title === "Overtime" && (property.title === "project" || property.title === "unit") && formData.without_project) {
      return <div></div>;
    }

    const itemsValue: TitemsValue = {
      "Projects": {
        "location": () => {
          const uniqueLocations: any = [];
          initialItems.exist.forEach((row) => {
            if (!uniqueLocations.find((location: any) => location.name === row.name)) {
              uniqueLocations.push(row);
            }
          });
          return uniqueLocations;
        },
      },
      "Offers": {
        "customer": () => {
          const projects = getPageDocuments({ pageId: pageIds.Projects });
          const projectCustomers = projects.map((row) => getIdValueFromObject(row.customer));

          const customersWithProject = initialItemsAll.filter((row) => projectCustomers.includes(row._id));
          return customersWithProject;
        },
        "project": () => {
          const isUpdate = Object.keys(rowForUpdate).length;
          if (isUpdate) {
            return initialItems.exist;
          }

          const currentCustomerProjects = initialItems?.exist?.filter((row) => getIdValueFromObject(row.customer) === getIdValueFromObject(formData.customer));

          const notUsedProjects = currentCustomerProjects.filter((project) => {
            const currentProjectOffers = currentPageData.filter((offer) => getIdValueFromObject(offer.project) === getIdValueFromObject(project));

            const offerRevises = currentProjectOffers
              .map((offer) => currentPageData.filter((row) => getIdValueFromObject(row.previous_offer) === getIdValueFromObject(offer)))
              .flat();

            const usedProducts = [...currentProjectOffers, ...offerRevises].map((offer) => offer.products?.map((p: any) => p.product)).flat();

            const allProducts = project.products?.map((p: any) => p.product_stepped_brand_type_model);

            return allProducts.some((p: any) => !usedProducts.includes(p));
          });
          return notUsedProjects;
        },
        "product": () => {
          const currentProjectOffers = currentPageData
            .filter((offer) => getIdValueFromObject(offer.project) === getIdValueFromObject(formData.project))
            .filter((offer) => offer._id !== getIdValueFromObject(formData.previous_offer));
          const offerRevises = currentProjectOffers
            .map((offer) => currentPageData.filter((row) => getIdValueFromObject(row.previous_offer) === getIdValueFromObject(offer)))
            .flat();
          const usedProducts = [...currentProjectOffers, ...offerRevises]
            .map((offer) => offer.products?.map((p: any) => p.product))
            .flat()
            .map((p) => getIdValueFromObject(p));
          const allProducts = formData.project?.products?.map((p: any) => p.product_stepped_brand_type_model) || [];
          const notUsedProducts = allProducts.filter((p: any) => !usedProducts.includes(p));
          const notUsedProductsObj = notUsedProducts.map((p: any) => initialItems.exist.find((row) => row._id === p));

          const productsSelectedInFormData = formData.products?.filter((p: any, index: number) => arrayIndex !== index).map((p: any) => p.product);

          return notUsedProductsObj.filter((p: any) => !productsSelectedInFormData.find((row: any) => getIdValueFromObject(row) === getIdValueFromObject(p)));
        },
      },
      "Contracts": {
        "customer": () => {
          const offers = getPageDocuments({ pageId: pageIds.Offers, section: "confirmed" });
          const offerCustomers = offers.map((row) => row.project.customer);
          const customersWithOffer = initialItemsAll.filter((row) => offerCustomers.includes(row._id));

          return customersWithOffer;
        },
        "project": () => {
          const currentCustomerId = getIdValueFromObject(formData.customer);
          const currentCustomerProjects = initialItems.exist.filter((row) => getIdValueFromObject(row.customer) === currentCustomerId);

          const notUsedProjects = currentCustomerProjects.filter((row) => !currentPageData.some((p) => getIdValueFromObject(p.project) === row._id));
          return notUsedProjects;
        },
      },
      "AssemblyPlan": {
        "customer": () => {
          if (isOnUpdate) {
            return initialItems?.exist;
          }
          const projectsFromAssemblyProjectsPage = getPageDocuments({ pageId: pageIds.AssemblyProjects }).map((row) => row.project);
          const customersFromAssemblyProjectsPage = projectsFromAssemblyProjectsPage.map((row) => getIdValueFromObject(row.customer));
          return initialItems.exist.filter((row) => customersFromAssemblyProjectsPage.includes(row._id));
        },
        "project": () => {
          if (isOnUpdate) {
            return initialItems?.exist;
          }
          const projectsFromAssemblyProjectsPage = getPageDocuments({ pageId: pageIds.AssemblyProjects }).map((row) => row.project);
          const currentCustomerProjects = projectsFromAssemblyProjectsPage.filter((row) => row.customer === getIdValueFromObject(formData.customer));
          return currentCustomerProjects;
        },
        "unit": () => {
          const currentProjectUnits = initialItems.exist.filter((row) => getIdValueFromObject(row.project) === getIdValueFromObject(formData.project));

          const usedUnits = currentPageData.map((row) => getIdValueFromObject(row.unit));
          const freeUnits = currentProjectUnits.filter((row) => !usedUnits.includes(row._id));
          return freeUnits;
        },
      },
      "FieldTeams": {
        "employee": () => {
          const usedEmployees = currentPageData.map((row) => row.employees?.map((employee: obj) => employee.employee)).flat();
          return initialItems?.exist?.filter((r) => r.department === "Taşeron" && !usedEmployees.includes(r._id));
        },
      },
      "MonthlyProgressPayments": {
        "project": () => {
          const progressPaymentsProjectIds = getPageDocuments({ pageId: pageIds.ProgressPayments }).map((row) => getIdValueFromObject(row.unit?.project));

          return initialItems.exist.filter((row) => progressPaymentsProjectIds.includes(row._id));
        },
        "unit": () => {
          if (arrayIndex !== undefined) {
            return initialItems.exist?.filter((row) => getIdValueFromObject(row.project) === getIdValueFromObject(formData.payments?.[arrayIndex]?.project));
          }
          return [];
        },
        "employee": () => {
          const currentTeamEmployees = formData.team_name?.employees?.map((elem: any) => initialItems?.exist.find((row: any) => row._id === elem.employee));
          const usedEmployees = formData.salary?.map((elem: obj, index: number) => (index === arrayIndex ? undefined : getIdValueFromObject(elem.employee)));
          const freeEmployees = currentTeamEmployees.filter((elem: obj) => !usedEmployees.includes(elem._id));
          return freeEmployees;
        },
      },
      "EmployeesOHS": {
        "employee": () => {
          const usedEmployees = currentPageData.map((row) => getIdValueFromObject(row.employee));
          return initialItems.exist.filter((row) => !usedEmployees.includes(row._id));
        },
      },
      "Overtime": {
        "unit": () => {
          const tasks = getPageDocuments({ pageId: pageIds.AssemblyPlan });
          const usedUnitIds = tasks.map((task) => getIdValueFromObject(task.unit));
          const allUnits = Object.values(initialItems).flat();
          const usedUnits = allUnits.filter((unit) => usedUnitIds.includes(unit._id));

          const currentProjectUnits = usedUnits.filter((unit) => getIdValueFromObject(unit.project) === getIdValueFromObject(formData.project));
          return currentProjectUnits;
        },
      },
      "MaintenanceOffers": {
        "unit": () => {
          const allUnits = Object.values(initialItems).flat();
          const usedUnits = currentPageData.map((row) => getIdValueFromObject(row.unit));
          const freeUnits = allUnits.filter((row) => !usedUnits.includes(row._id));
          return freeUnits;
        },
      },
      "MaintenanceUnits": {
        "employee": () => {
          const maintenancePersonnel = initialItems.exist.filter((row) => row.department === "Bakım");
          return maintenancePersonnel;
        },
      },
      "MaintenancePlanning": {
        "unit": () => {
          const maintenanceContractsPageData = getPageDocuments({ pageId: pageIds.MaintenanceContracts, section: "signed" });
          const signedUnitIds = maintenanceContractsPageData.map((row) => getIdValueFromObject(row.unit));
          const usedUnitIds = currentPageData.map((row) => getIdValueFromObject(row.unit));

          return initialItems.exist.filter((row) => signedUnitIds.includes(row._id) && !usedUnitIds.includes(row._id));
        },
      },
      "All": {
        "offer": () => initialItems?.confirmed,
      },
    };

    const items: { [key: string]: any }[] = (
      itemsValue[pageTitle]?.[property.title!] ||
      itemsValue.All[property.title!] ||
      (() => initialItems?.exist) ||
      (() => [])
    )();

    const getValue = () => {
      const allData = getPageDocuments({ pageId: property.bucketId });
      let target = formData[property.title!];

      if (parent && arrayIndex !== undefined) {
        target = formData[parent][arrayIndex][property.title!];
      } else if (parent) {
        target = formData[parent][property.title!];
      } else if (arrayIndex !== undefined) {
        target = formData[property.title!][arrayIndex];
      }

      return typeof target === "string" ? allData.find((row) => row._id === target) : target;
    };

    const isFieldReadOnly = !parent
      ? field_features_obj[property.title!]?.read_only
      : getItemInternalFieldFeature(pageStore.page.title, parent, property.title!)?.read_only;

    const readOnly = Boolean(isFieldReadOnly || disable_editing);

    return (
      <SelectField
        name={property.title!}
        defaultItem={getValue()}
        onChange={(e) => handleInputChange(e, parent, arrayIndex)}
        handleUpdatedFormDataChange={(e) => handleUpdatedFormDataChange(e, parent, arrayIndex)}
        label={property.description!}
        items={(disable_editing ? initialItems?.exist : items) || []}
        primary={property.primary || pageStore.pageBuckets[property.bucketId].primary}
        readOnly={readOnly}
        error={requiredProperties.includes(property.title!) && errors[property.title!]}
      />
    );
  }

  if (property.relationType === "onetomany") {
    return <div style={{ color: "red" }}>onetomany relation</div>;
  }

  return <div style={{ color: "red" }}>relation not one to one or one to many</div>;
}
