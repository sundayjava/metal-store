import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WhatIsNew() {
  const t = useTranslations("Whatsnew");
  const newBlog = [
    {
      id: 1,
      img: "https://assets.goldavenue.com/uploads/redactor2_assets/images/4894/123.jpg",
      time: "10 minutes read",
      title: `${t("pt1title")}`,
      desc: `${t("pt1desc")}`,
      tag1: "Did you know?",
      tag2: "Gold price",
    },
    {
      id: 2,
      img: "https://assets.goldavenue.com/uploads/redactor2_assets/images/4009/fb745a00-2ade-46ed-9d6b-923d1758b5cb.jpg",
      time: "10 minutes read",
      title: `${t("pt2title")}`,
      desc: `${t("pt2desc")}`,
      tag1: "Gold Savings",
      tag2: "Investment",
    },
    {
      id: 3,
      img: "https://assets.goldavenue.com/uploads/redactor2_assets/images/3935/b54ffb84-6e43-4533-ac8f-0af1067b6d66.jpeg",
      time: "15 minutes read",
      title: `${t("pt3title")}`,
      desc: `${t("pt3desc")}`,
      tag1: "Investing",
      tag2: "Gold",
    },
  ];
  return (
    <div className="md:mt-32 mt-20 bg-white">
      <div className="flex md:flex-row flex-col items-end justify-between">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-primary text-xl font-[700] mb-[24px]">
            {t("title")}
          </h1>
          <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
            {t("sub")}
          </p>
        </div>
        <Link
          href="https://newstopedia.space"
          className="md:flex hidden text-deem hover-border2 gap-2 items-center"
        >
          {t("lkn1")} <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 mt-24">
        {newBlog.map((item) => (
          <div key={item.id}>
            <div className="relative leading-0 h-[200px] bg-primary/30 max-w-full">
              <Image
                src={item.img}
                alt="jikn"
                fill
                sizes="100%"
                className="h-full absolute w-full inset-0 object-cover object-bottom text-transparent"
              />
            </div>
            <p className="my-3  text-gray-400 flex gap-3">
              <span className="text-deem hover-border2 cursor-pointer">
                The Spotlight
              </span>
              {item.time}
            </p>
            <a
              href="https://newstopedia.space"
              className="text-decoration-none line-clamp-3 text-primary text-lg font-[600] h-[130px]"
            >
              {item.title}
            </a>
            <p className="mt-4 text-decoration-none text-primary text-[19px] leading-7 font-[300] h-[170px]">
              {item.desc}
            </p>
            <div className="text-[14px] text-primaryColor font-light flex items-center gap-1">
              <SellIcon
                sx={{ transform: "rotate(75deg)", fontSize: 15, color: "gray" }}
              />
              <span className="cursor-pointer hover-border2 mr-4 text-deem">
                {item.tag1}
              </span>
              <span className="cursor-pointer hover-border2 text-deem">
                {item.tag2}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end md:hidden my-16 gap-2 items-center">
        <button className="text-deem hover-border">
          Discover our Blog <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
    </div>
  );
}
