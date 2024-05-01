"use client";

import AndroidSideBar from "@/app/[locale]/_component/dashboard/AndroidSideBar";
import DashBoardNavBar from "@/app/[locale]/_component/dashboard/DashBoardNavBar";
import { useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");
  const t = useTranslations('Index')

  console.log(t.name)
  
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
          <div className="container">{t('about')}</div>
        </div>
      </div>
    </div>
  );
}
