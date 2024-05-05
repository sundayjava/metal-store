import { useCurrency } from "@/context/CurrencyContext";
import { ShoppingCart } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

export default function ItemCard(props: { item: any }) {
  const { item } = props;
  const { currency } = useCurrency();
  const t = useTranslations("Cart");

  return (
    <div
      className={`cursor-pointer flex-shrink-0 transition-shadow border-gray-200 hover:shadow-2xl rounded-md bg-white w-[285px]`}
    >
      <div
        className={`cursor-pointer py-6 rounded-lg w-full px-2 bg-white`}
        style={{ overflow: "hidden" }}
      >
        <div className="relative w-full h-[180px] mb-5 hover:h-[170px] hover:shadow-lg rounded-lg">
          <div className="inline-block leading-0 max-w-full">
            <Image
              src={item.img}
              alt="logo"
              fill
              sizes="100%"
              className="h-full absolute w-full inset-0 object-contain object-center text-transparent"
            />
          </div>
        </div>
        <p className="h-[60px] hover:text-deem line-clamp-2 text-center text-decoration-none text-primary text-[16px] leading-7 font-[400]">
          {item?.title}
        </p>
        <h1 className="font-[700] text-primary text-center mb-4 text-[18px] no-underline leading-7 w-full">
          {currency === "eur"
            ? "€"
            : currency === "chf"
            ? "₮"
            : currency === "usd"
            ? "$"
            : "£"}
          {item?.price.toLocaleString()}
        </h1>
        <div className="w-full flex-grow-0 flex justify-center items-center object-bottom">
          <button className="inline-flex w-auto px-4 py-2 border shadow-lg rounded-md hover:border-accent text-white hover:text-accent bg-primary text-center items-center justify-center">
            <ShoppingCart sx={{ fontSize: 19 }} />
            <span className="font-bold">{t("title")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
