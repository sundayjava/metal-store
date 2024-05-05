"use client";
import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import ProductCarousel from "../product-component/ProductCarousel";
import { bestSellData, coinsData, limitedEditionData, newlyArrivedData } from "@/utils/data";
import { useTranslations } from "next-intl";

export default function MetalTabs() {
    const [isCentered, setIsCentered] = useState(false);
  
    useEffect(() => {
        const handleResize = () => {
          setIsCentered(window.innerWidth > 640);
        };
        if (typeof window !== "undefined") {
          setIsCentered(window.innerWidth > 640);
          window.addEventListener("resize", handleResize);
    
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
      }, []);

      const t1 = useTranslations("Metals");

      const items: TabsProps["items"] = [
        {
          key: "bestsellers",
          label: `${t1("bestsaler")}`,
          children: <ProductCarousel data={bestSellData}/>
        },
        {
          key: "limitededitions",
          label: `${t1("limitedEdit")}`,
          children: <ProductCarousel data={limitedEditionData}/>
        },
        {
          key: "coins",
          label: `${t1("coins")}`,
          children: <ProductCarousel data={coinsData}/>
        },
        {
          key: "newarrivals",
          label: `${t1("newly")}`,
          children: <ProductCarousel data={newlyArrivedData}/>
        },
      ];

      const onChange = (key: string) => {
        console.log(key);
      };
      
    return (
        <div>
        <div className="mt-20 gradbgAll">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            centered={isCentered}
            size="large"
            tabBarStyle={{
              fontWeight: 600,
            }}
          />
        </div>
      </div>
  )
}
