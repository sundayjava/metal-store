"use client";

import AndroidSideBar from "@/app/[locale]/_component/dashboard/AndroidSideBar";
import DashBoardNavBar from "@/app/[locale]/_component/dashboard/DashBoardNavBar";
import { useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Footer from "./_component/Footer/Footer";
import CarouselSlider from "./_component/splash-component/CarouselSlider";
import SecureSaving from "./_component/dashboard/SecureSaving";
import MetalTabs from "./_component/dashboard/MetalTabs";
import GoldSection from "./_component/dashboard/GoldSection";
import ProductCarousel2 from "./_component/product-component/ProductCarousel2";
import { bestSellData } from "@/utils/data";
import SavingAssistance from "./_component/dashboard/SavingAssistance";
import Usercarousel from "./_component/dashboard/Usercarousel";
import WhatIsNew from "./_component/dashboard/WhatIsNew";
import FAQ from "./_component/dashboard/FAQ";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");
  const t = useTranslations("Index");

  console.log(t.name);

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
          <div className="container py-4">
            <CarouselSlider />
            <MetalTabs />
            <SecureSaving />
            <GoldSection />
            <SavingAssistance/>
            <Usercarousel/>
            <FAQ/>
            <WhatIsNew/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
