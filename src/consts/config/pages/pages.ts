import Customers from "./data/Customers.json";
import Products from "./data/Products.json";
import Projects from "./data/Projects.json";
import Offers from "./data/Offers.json";
import Contracts from "./data/Contracts.json";
import Orders from "./data/Orders.json";
import Units from "./data/Units.json";
import AssemblyProjects from "./data/AssemblyProjects.json";
import AssemblyPlan from "./data/AssemblyPlan.json";
import FieldTeams from "./data/FieldTeams.json";
import FieldInspections from "./data/FieldInspections.json";
import ProgressPayments from "./data/ProgressPayments.json";
import MonthlyProgressPayments from "./data/MonthlyProgressPayments.json";
import Locations from "./data/Locations.json";
import Prices from "./data/Prices.json";
import EmployeesOHS from "./data/EmployeesOHS.json";
import SafetyWalk from "./data/SafetyWalk.json";
import Trainings from "./data/Trainings.json";
import AssignedTrainings from "./data/AssignedTrainings.json";
import EmployeesTrainings from "./data/EmployeesTrainings.json";
import Employees from "./data/Employees.json";
import AnnualLeave from "./data/AnnualLeave.json";
import Overtime from "./data/Overtime.json";
import TallySheet from "./data/TallySheet.json";
import Vehicles from "./data/Vehicles.json";
import OrderTrackingProjects from "./data/OrderTrackingProjects.json";
import SAISProjects from "./data/SAISProjects.json";
import MaintenanceOffers from "./data/MaintenanceOffers.json";
import MaintenanceContracts from "./data/MaintenanceContracts.json";
import MaintenanceUnits from "./data/MaintenanceUnits.json";
import MaintenancePlanning from "./data/MaintenancePlanning.json";

export type TpageIds = {
  Customers: string;
  Products: string;
  Projects: string;
  Offers: string;
  Contracts: string;
  Orders: string;
  Units: string;
  AssemblyProjects: string;
  AssemblyPlan: string;
  FieldTeams: string;
  FieldInspections: string;
  ProgressPayments: string;
  MonthlyProgressPayments: string;
  Locations: string;
  Prices: string;
  Trainings: string;
  AssignedTrainings: string;
  EmployeesTrainings: string;
  EmployeesOHS: string;
  SafetyWalk: string;
  Employees: string;
  AnnualLeave: string;
  Overtime: string;
  TallySheet: string;
  Vehicles: string;
  OrderTrackingProjects: string;
  SAISProjects: string;
  MaintenanceContracts: string;
  MaintenanceOffers: string;
  MaintenanceUnits: string;
  MaintenancePlanning: string;
};

export const Pages = [
  Customers,
  Products,
  Projects,
  Offers,
  Contracts,
  Orders,
  Units,
  AssemblyProjects,
  AssemblyPlan,
  FieldTeams,
  FieldInspections,
  ProgressPayments,
  MonthlyProgressPayments,
  Locations,
  Prices,
  Trainings,
  AssignedTrainings,
  EmployeesTrainings,
  EmployeesOHS,
  SafetyWalk,
  Employees,
  AnnualLeave,
  Overtime,
  TallySheet,
  Vehicles,
  OrderTrackingProjects,
  SAISProjects,
  MaintenanceContracts,
  MaintenanceOffers,
  MaintenanceUnits,
  MaintenancePlanning,
];

export const pageIds: TpageIds = Pages.reduce((obj: any, page) => {
  obj[page.title] = page._id;
  return obj;
}, {} as TpageIds);
