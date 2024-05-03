"use client";
import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import ProductCarousel from "../product-component/ProductCarousel";
import { bestSellData, coinsData, limitedEditionData, newlyArrivedData } from "@/utils/data";

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

      const items: TabsProps["items"] = [
        {
          key: "bestsellers",
          label: "Best Sellers",
          children: <ProductCarousel data={bestSellData}/>
        },
        {
          key: "limitededitions",
          label: "Limited Editions",
          children: <ProductCarousel data={limitedEditionData}/>
        },
        {
          key: "coins",
          label: "Coins",
          children: <ProductCarousel data={coinsData}/>
        },
        {
          key: "newarrivals",
          label: "New Arrivals",
          children: <ProductCarousel data={newlyArrivedData}/>
        },
      ];

      const onChange = (key: string) => {
        console.log(key);
      };
      
    return (
        <div>
        <div className="mt-20">
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
