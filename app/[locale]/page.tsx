"use client";

import AndroidSideBar from "@/app/[locale]/_component/dashboard/AndroidSideBar";
import DashBoardNavBar from "@/app/[locale]/_component/dashboard/DashBoardNavBar";
import { useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Footer from "./_component/Footer/Footer";
import CarouselSlider from "./_component/splash-component/CarouselSlider";
import ProductCarousel from "./_component/product-component/ProductCarousel";
import {
  bestSellData,
  coinsData,
  limitedEditionData,
  newlyArrivedData,
} from "@/utils/data";
import ProductCarousel2 from "./_component/product-component/ProductCarousel2";
import SecureSaving from "./_component/dashboard/SecureSaving";
import MetalTabs from "./_component/dashboard/MetalTabs";

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
            <MetalTabs/>
            {/* <div>
              <ProductCarousel sectionName="Best Seller" data={bestSellData} />
              <SecureSaving />
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <ProductCarousel2
                  sectionName="Limited Editions"
                  data={limitedEditionData}
                />
                <ProductCarousel2 sectionName="Coins" data={coinsData} />
              </div>
              <ProductCarousel
                sectionName="New Arrivals"
                data={newlyArrivedData}
              />
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
