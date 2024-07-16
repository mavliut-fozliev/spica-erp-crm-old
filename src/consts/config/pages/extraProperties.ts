import { TBucketProperty } from "../../../types/types";
import { pageIds } from "./pages";

const customerField = {
  title: "customer",
  description: "Müşteri Adı",
  type: "relation",
  relationType: "onetoone",
  bucketId: pageIds.Customers,
  primary: "name",
};

const projectField = {
  title: "project",
  description: "Proje",
  type: "relation",
  relationType: "onetoone",
  bucketId: pageIds.Projects,
  primary: "name",
};

const productField = {
  title: "product",
  description: "Ünite Tipi",
  type: "relation",
  relationType: "onetoone",
  bucketId: pageIds.Products,
  primary: "name",
};

export const extraProperties: { [key: string]: TBucketProperty[] } = {
  "Offers": [
    customerField,
    { title: "related_person", description: "İlgili Kişi Adı", type: "string" },
    { title: "related_person_phone", description: "İlgili Kişi Telefonu", type: "string" },
    { title: "related_person_role", description: "İlgili Kişi Görevi", type: "string" },
  ],
  "Contracts": [customerField, { title: "product_count", description: "Ünite Adet", type: "number" }],
  "Orders": [
    customerField,
    {
      title: "units",
      description: "Üniteler",
      type: "array",
      items: {
        type: "object",
        properties: {
          product: productField,
          serial_number: { title: "serial_number", description: "Seri No", type: "string" },
          added_to_gantt_chart: { title: "added_to_gantt_chart", description: "Montaj Planına Eklendi", type: "boolean" },
        },
      },
    },
  ],
  "Units": [projectField, { title: "added_to_gantt_chart", description: "Montaj Planına Eklendi", type: "boolean" }],
  "AssemblyProjects": [customerField, { title: "fully_added_to_gantt_chart", description: "Tüm Üniteler Montaj Planına Eklendi", type: "boolean" }],
  "AssemblyPlan": [customerField, projectField, { title: "end_date", description: "Bitiş Tarihi", type: "date" }],
  "FieldInspections": [projectField],
  "ProgressPayments": [
    projectField,
    { title: "assembly_start_date", description: "Montaj Başlangıç Tarihi", type: "date" },
    { title: "field_team", description: "Taşeron Adı", type: "string" },
    { title: "place", description: "Lokasyon", type: "string" },
    { title: "model", description: "Model", type: "string" },
    { title: "capacity", description: "Kapasite", type: "string" },
    { title: "number_of_stops", description: "Durak Sayısı", type: "string" },
    { title: "high_floor", description: "Yüksek Kat", type: "number" },
    {
      title: "payments",
      description: "Ödemeler",
      type: "array",
      items: {
        type: "object",
        properties: {
          price_per_floor: { title: "price_per_floor", description: "Kat Başı Fiyat", type: "number" },
          total_floor_cost: { title: "total_floor_cost", description: "Toplam Montaj Bedeli", type: "number" },
          fuel_price: { title: "fuel_price", description: "Yakıt Litre Fiyatı", type: "number" },
          total_fuel_cost: { title: "total_fuel_cost", description: "Yakıt", type: "number" },
          total_cost: { title: "total_cost", description: "Bu Üniteden Alması Gereken Toplam Bedel", type: "number" },
          payed_floor_cost: { title: "payed_floor_cost", description: "Ödeme", type: "number" },
          work_percentage: { title: "work_percentage", description: "Ödeme Açıklaması", type: "string" },
          payment_date: { title: "payment_date", description: "Ödeme Tarihi", type: "date" },
          payed_fuel_cost: { title: "payed_fuel_cost", description: "Yakıt Bedeli", type: "number" },
          fuel_date: { title: "fuel_date", description: "Yakıt Ödeme Tarihi", type: "date" },
          fuel_percentage: { title: "fuel_percentage", description: "Yakıt Ödeme Açıklaması", type: "string" },
          price_difference: { title: "price_difference", description: "Fiyat Farkı Ödemesi", type: "number" },
          fuel_price_difference: { title: "fuel_price_difference", description: "Yakıt Fiyat Farkı Ödemesi", type: "number" },
        },
      },
    },
    { title: "total_payed", description: "Yapılan Ödeme", type: "number" },
    { title: "finality", description: "Son Durum", type: "number" },
  ],
  "MonthlyProgressPayments": [
    {
      title: "payments",
      properties: {
        projectField,
        place: { title: "place", description: "Yeri", type: "string" },
        model: { title: "model", description: "Model", type: "string" },
        capacity: { title: "capacity", description: "KG", type: "string" },
        number_of_stops: { title: "number_of_stops", description: "Durak Sayısı", type: "string" },
        high_floor: { title: "high_floor", description: "Ek Kat", type: "number" },
        total_floor_cost: { title: "total_floor_cost", description: "Toplam Fiyat", type: "number" },
        total_fuel_cost: { title: "total_fuel_cost", description: "Toplam Yakıt Fiyatı", type: "number" },
        remaining_floor_cost: { title: "remaining_floor_cost", description: "Kalan Fiyat", type: "number" },
        remaining_percentage: { title: "remaining_percentage", description: "Kalan Yüzde", type: "number" },
        remaining_fuel_cost: { title: "remaining_fuel_cost", description: "Kalan Yakıt Fiyatı", type: "number" },
        price_difference: { title: "price_difference", description: "Fiyat Farkı Ödemesi", type: "number" },
        fuel_price_difference: { title: "fuel_price_difference", description: "Yakıt Fiyat Farkı Ödemesi", type: "number" },
      },
    },
    {
      title: "total_payments",
      description: "Hakedişler",
      type: "object",
      properties: {
        total_payed_floor: { title: "total_payed_floor", description: "Montaj Hakediş Toplamı", type: "number" },
        total_payed_fuel: { title: "total_payed_fuel", description: "Yakıt Hakediş Toplamı", type: "number" },
        total_additional_payments: { title: "total_additional_payments", description: "Ek Ödemeler Toplamı", type: "number" },
        progress_payment: { title: "progress_payment", description: "Hakedişler Genel Toplamı", type: "number" },
      },
    },
    {
      title: "remaining_progress_payment",
      description: "Hakediş Ödeme Tutarı",
      type: "object",
      properties: {
        progress_payment_copy: { title: "progress_payment_copy", description: "Hakedişler Genel Toplamı", type: "number" },
        total_cut: { title: "total_cut", description: "Toplam Kesintiler", type: "number" },
        payed_progress_payment: { title: "payed_progress_payment", description: "Hakediş Ödeme Tutarı", type: "number" },
      },
    },
  ],
  "Locations": [
    {
      title: "fuel_cost_details",
      properties: {
        total_cost: { title: "total_cost", description: "Lokasyon Yakıt Bedeli", type: "number" },
      },
    },
  ],
  "EmployeesTrainings": [
    {
      title: "recieved_trainings",
      properties: {
        training_name: { title: "training_name", description: "Eğitim Adı", type: "string" },
        start_date: { title: "start_date", description: "Başlangıç Tarihi", type: "date" },
        end_date: { title: "end_date", description: "Bitiş Tarihi", type: "date" },
      },
    },
  ],
  "Employees": [
    {
      title: "received_trainings",
      description: "Alınan Eğitimler",
      type: "array",
      items: {
        type: "object",
        properties: {
          training_name: { title: "training_name", description: "Eğitim Adı", type: "string" },
          start_date: { title: "start_date", description: "Başlangıç Tarihi", type: "date" },
          end_date: { title: "end_date", description: "Bitiş Tarihi", type: "date" },
          certificate: {
            title: "certificate",
            description: "Sertifika",
            type: "array",
            items: {
              type: "object",
              properties: {
                storage: { title: "storage", description: "", type: "storage" },
                deleted: { title: "deleted", description: "", type: "boolean" },
              },
            },
          },
        },
      },
    },
    { title: "remaining_leave", description: "Kalan İzin Gün Sayısı", type: "number" },
    { title: "fmi_remaining_leave", description: "Kalan Fazla Mesai İzin Gün Sayısı", type: "number" },
  ],
  "AnnualLeave": [
    { title: "leave_amount_show", description: "İzin Süresi", type: "string" },
    { title: "remaining_leave_amount", description: "Kalan İzin Gün Sayısı", type: "string" },
  ],
  "Overtime": [projectField],
  "MaintenanceUnits": [productField],
  "MaintenancePlanning": [{ title: "end_date", description: "Bitiş Tarihi", type: "date" }],
};
