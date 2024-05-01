"use client";

import AndroidSideBar from "@/components/dashboard/AndroidSideBar";
import DashBoardNavBar from "@/components/dashboard/DashBoardNavBar";
import CustomDropDown from "@/components/global/CurrencyDropdown";
import LocalSwitcher from "@/components/global/local-switcher";
import { useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Dashboard() {
  // const t = useTranslations("Index");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");

  return (
    <div>
      <AndroidSideBar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex flex-col min-h-screen">
        <DashBoardNavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-grow">
          <div className="container"></div>
        </div>
      </div>
    </div>
    // <div className="bg-gray-300">
    //   <h1>{t("title")}</h1>
    //   <LocalSwitcher />
    //   <CustomDropDown/>
    // </div>
  );
}
