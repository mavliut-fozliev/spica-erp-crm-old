import { obj } from "types/types";

export const departmentJobs = {
  "Yönetim": ["Direktör", "Genel Müdür", "Sekreter"],
  "Muhasebe": ["Muhasebe Müdürü", "Muhasebe Müdür Yardımcısı", "Muhasebe Personeli"],
  "Bakım": ["Bakım Müdürü", "Bakım Süpervizorü", "Bakım Teknisyeni"],
  "FQE": ["FQE Mühendisi"],
  "SAIS": ["SAIS Mühendisi"],
  "Satın Alma & Depo": ["Satın Alma & Depo Personeli"],
  "Depo": ["Depo Personeli"],
  "Genel": ["Yardımcı Personel"],
  "Taşeron": ["Taşeron"],
};

export const spaces: { [key: string]: { space: true; parent: string; order: number; innerText: string; gridWidth: number }[] } = {
  "ProgressPayments": [
    { space: true, parent: "payments", order: 2, innerText: "", gridWidth: 8 },
    { space: true, parent: "payments", order: 3, innerText: "+", gridWidth: 1 },
    { space: true, parent: "payments", order: 4, innerText: "=", gridWidth: 1 },
    { space: true, parent: "payments", order: 5, innerText: "", gridWidth: 3 },
    { space: true, parent: "payments", order: 8, innerText: "", gridWidth: 6 },
    { space: true, parent: "payments", order: 11, innerText: "", gridWidth: 6 },
  ],
  "MonthlyProgressPayments": [
    { space: true, parent: "payments", order: 11, innerText: "", gridWidth: 5 },
    { space: true, parent: "payments", order: 15, innerText: "", gridWidth: 4 },
    { space: true, parent: "payments", order: 19, innerText: "", gridWidth: 4 },
    { space: true, parent: "payments", order: 19, innerText: "", gridWidth: 2 },
    { space: true, parent: "payments", order: 22, innerText: "", gridWidth: 4 },
    { space: true, parent: "payments", order: 22, innerText: "", gridWidth: 8 },
  ],
};

export const modalWindowTitles: obj = {
  "Customers": "Bu İsimde Bir Müşteri Mevcut",
  "AssemblyPlan": "Proje Başka Bir Projeyle Çakışıyor",
  "MaintenancePlanning": "Proje Başka Bir Projeyle Çakışıyor",
};

export const ModalWindowSubtitle: obj = {
  "Customers": "Yine De Devam Etmek İstiyor Musunuz?",
  "AssemblyPlan": "Tüm Çakışan Projeler İleri Tarihe Taşınacak.",
  "MaintenancePlanning": "Tüm Çakışan Projeler İleri Tarihe Taşınacak.",
};
