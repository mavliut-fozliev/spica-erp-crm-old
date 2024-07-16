import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./Home.module.scss";
import Topbar from "./components/Topbar/Topbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useInstantStore } from "../../store/instantStore";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { useUserStore } from "../../store/userStore";
import { defaultPage, usePageStore } from "../../store/pageStore";
import { TBucket, TVariables, Tconfig, TconfigPage, TconfigPageModule } from "../../types/types";
import Spinner from "../../components/progress/Spinner/Spinner";
import Toast from "../../components/modals/Toast/Toast";
import { Pages, pageIds } from "./../../consts/config/pages/pages";
import PageModules from "./../../consts/config/pageModules/pageModules.json";
import DisableScreenActions from "../../components/DisableScreenActions/DisableScreenActions";
import useData from "services/api/useData";

export default function HomePage() {
  const navigate = useNavigate();

  const instantStore = useInstantStore();
  const authStore = useAuthStore();
  const userStore = useUserStore();
  const pageStore = usePageStore();

  const token = localStorage.getItem("token");

  const dataService = useData();
  const getPageBuckets = async (pages: { [key: string]: any }[]) => {
    try {
      instantStore.setIsLoading(true);

      const pageBuckets: { [key: string]: any } = {};

      const pageBucketsArray: TBucket[] = await dataService.getBucketAll().then((buckets) => buckets.filter((bucket) => bucket.category === "pages"));

      pageBucketsArray.forEach((obj) => {
        pageBuckets[obj._id!] = obj;
      });

      pageStore.setPageBuckets(pageBuckets);
    } catch (error) {
      console.error(error);
    } finally {
      instantStore.setIsLoading(false);
    }
  };

  const getConfig = async () => {
    try {
      instantStore.setIsLoading(true);

      const config: Tconfig = {
        PageModules: PageModules as TconfigPageModule[],
        Pages: Pages as TconfigPage[],
      };

      await getPageBuckets(Pages);

      pageStore.setConfig(config);
    } catch (error) {
      console.error(error);
    } finally {
      instantStore.setIsLoading(false);
    }
  };

  const getVariables = async () => {
    try {
      instantStore.setIsLoading(true);
      const variables: TVariables = (await dataService.getBucketDataAll("6579aa86d71b6e002cfbb32d")) as TVariables;

      pageStore.setVariables(variables);
    } catch (error) {
      console.error(error);
    } finally {
      instantStore.setIsLoading(false);
    }
  };

  const getNotifications = async () => {
    const decodedToken = token ? (jwtDecode(token) as { identifier?: string }) : { identifier: "no identifier" };
    const notifications = await dataService.getBucketDataAll("6527f226ffa6b3002d10cc44", {
      additionalFilter: [{ "user.identifier": decodedToken.identifier }, window.location.pathname !== "/notifications" ? { seen: false } : {}],
      additionalQueryParams: {
        sort: { _id: -1 },
      },
    });
    pageStore.setNotifications(notifications);
  };

  const getDashboardBuckets = async () => {
    if (!pageStore.pagesData.hasOwnProperty(pageIds.Offers) || !pageStore.pagesData.hasOwnProperty(pageIds.Products)) {
      const offersData: any = await dataService.getBucketDataAll(pageIds.Offers, {
        additionalFilter: {
          status: { $eq: "exist" },
        },
      });
      const productsData: any = await dataService.getBucketDataAll(pageIds.Products, {
        additionalFilter: {
          status: { $eq: "exist" },
        },
      });
      pageStore.setPagesData({
        ...pageStore.pagesData,
        [pageIds.Offers]: { exist: offersData },
        [pageIds.Products]: { exist: productsData },
      });
    }
  };

  useEffect(() => {
    getConfig();
    getVariables();
    getNotifications();
    getDashboardBuckets();
  }, []);

  useEffect(() => {
    authStore.setTokenDecoded(token ? jwtDecode(token) : undefined);
  }, [token]);

  useEffect(() => {
    userStore.setRole(authStore.tokenDecoded?.attributes?.role || "");
    userStore.setIdentifier(authStore.tokenDecoded?.identifier || "");
    userStore.setName(authStore.tokenDecoded?.attributes?.name || "");
    userStore.setSurname(authStore.tokenDecoded?.attributes?.surname || "");
  }, [authStore.tokenDecoded]);

  useEffect(() => {
    const path = window.location.pathname;
    if (localStorage.getItem("token")) {
      if (path === "/login") {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div className={styles[instantStore.hideSidebar ? "home-fullScreen" : "home"]}>
      <Sidebar />
      <div className={styles["main"]}>
        <Topbar />
        <div className={styles["content"]}>
          <Outlet />
        </div>
      </div>
      <Spinner isLoading={instantStore.isLoading} hideSidebar={instantStore.hideSidebar} />
      <DisableScreenActions show={instantStore.disableAnyAction} />
      <Toast />
    </div>
  );
}
