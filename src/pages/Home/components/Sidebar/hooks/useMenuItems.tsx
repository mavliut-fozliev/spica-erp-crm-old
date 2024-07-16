import { Titem, Tsubmodule } from "../../../types";
import { usePageStore } from "../../../../../store/pageStore";
import { TbAssembly } from "react-icons/tb";
import { TbCoin } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GiMetalBar } from "react-icons/gi";
import { LuWarehouse } from "react-icons/lu";
import { SiQuicklook } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";

const icons = [
  <TbCoin style={{ width: "20px", height: "21px" }} />,
  <TbAssembly style={{ width: "18px", height: "20px" }} />,
  <GrCertificate style={{ width: "17px", height: "17px", paddingTop: "3px" }} />,
  <FaHelmetSafety style={{ paddingTop: "2px" }} />,
  <BsPeopleFill style={{ paddingTop: "1px" }} />,
  <SiQuicklook style={{ paddingTop: "2px" }} />,
  <AiOutlineSafetyCertificate style={{ height: "16px", width: "16px", paddingTop: "3px" }} />,
  <GrHostMaintenance style={{ height: "16px", width: "16px", paddingTop: "3px" }} />,
  <MdOutlineAccountBalance style={{ height: "18px", width: "18px", paddingTop: "1px" }} />,
  <GiMetalBar style={{ height: "18px", width: "18px", paddingTop: "2px" }} />,
  <LuWarehouse style={{ height: "16px", width: "16px", paddingTop: "1px" }} />,
];

const pageDataNotFound = {
  title: "404",
  description: "Sayfa Bulunamadı",
  href: "/404",
  order: 0,
  _id: "404",
};

export default function useMenuItems(): Titem[] {
  const pageStore = usePageStore();

  const items = pageStore.config.PageModules
    ? [
        ...pageStore.config.PageModules?.map((module, index) => ({
          icon: icons[index],
          label: module.module_name || "",
          links: module.pages
            .map((page: string) => {
              const subPages = module.submodules?.map((s: any) => s.pages).flat();

              if (subPages?.includes(page)) return undefined;

              const currentPage = pageStore.config.Pages.find((p) => p.title === page);

              if (!currentPage) return pageDataNotFound;

              return {
                title: currentPage.title,
                description: currentPage.description,
                href: `/${currentPage.title.toLowerCase()}`,
                order: currentPage.order,
                _id: currentPage._id,
              };
            })
            .filter((page: any) => page !== undefined),
          submodules:
            module.submodules?.map((submodule: { name: string; pages: string[] }) => ({
              label: submodule.name || "",
              links: submodule.pages.map((page: string) => {
                const currentPage = pageStore.config.Pages.find((p) => p.title === page);
                if (!currentPage) return pageDataNotFound;

                return {
                  title: currentPage.title,
                  description: currentPage.description,
                  href: `/${currentPage.title.toLowerCase()}`,
                  order: currentPage.order,
                  _id: currentPage._id,
                };
              }),
            })) || [],
        })),
      ]
    : [];

  items.forEach((item) => {
    item.links.sort((a: any, b: any) => a.order - b.order);
    item.submodules?.forEach((submodule: any) => {
      submodule.links.sort((a: any, b: any) => a.order - b.order);
    });
  });

  return items;
}
