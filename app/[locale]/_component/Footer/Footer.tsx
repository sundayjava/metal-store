"use client";

import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import logo from "../../../../public/dashboard/logo.png";
import { appName } from "@/utils/constants";
import { footerItem } from "@/utils/data";
import CurrencyDropdown from "../global/CurrencyDropdown";
import LocalSwitcher from "../global/local-switcher";
import delivery from "../../../../public/dashboard/delivery.jpg";
import { useTranslations } from "next-intl";

const Footer = () => {
  const date = new Date();
  const t = useTranslations("Footer");
  const socials = [
    {
      id: 1,
      icon: <YouTubeIcon sx={{ fontSize: 17, cursor: "pointer" }} />,
      url: "",
    },
    {
      id: 2,
      icon: <FacebookIcon sx={{ fontSize: 17, cursor: "pointer" }} />,
      url: "",
    },
    {
      id: 3,
      icon: <InstagramIcon sx={{ fontSize: 17, cursor: "pointer" }} />,
      url: "",
    },
    {
      id: 4,
      icon: <LinkedInIcon sx={{ fontSize: 17, cursor: "pointer" }} />,
      url: "",
    },
    {
      id: 5,
      icon: <XIcon sx={{ fontSize: 17, cursor: "pointer" }} />,
      url: "",
    },
  ];

  const topOfPage = () => {
    const delay = 10;
    const scrollStep = -20;

    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, delay);
  };

  return (
    <div className="mt-5">
      <div className="bg-primary/95 text-white py-2">
        <div
          onClick={topOfPage}
          className="flex flex-col items-center cursor-pointer"
        >
          <KeyboardControlKeyIcon sx={{ fontSize: 16 }} />
          <p className="text-[10px]">{t("topp")}</p>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="container py-4 flex md:flex-row flex-col justify-center items-center md:gap-10 gap-2">
          <h1 className="md:text-[14px] text-[12px] md:text-start text-center">
            {t("sub")}
          </h1>
          <div className="rounded-md">
            <div className="flex bg-white rounded-lg">
              <input
                className="appearance-none block w-full px-3 bg-transparent text-secondary outline-none border-none text-[14px] me-2"
                type="text"
                placeholder="type mail..."
                aria-labelledby="send"
              />
              <button className="bg-accent text-secondary px-3 py-[2px] text-[13px]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-3 text-white">
        <div className="container">
          <hr className="border border-gray-600" />
          <div className="flex gap-2 mt-3 items-center text-white">
            <div className="relative w-6 h-6">
              <Image
                src={logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <div>
              <p className="uppercase cursor-pointer font-bold text-[15px]">
                {appName}
              </p>
              <p className="text-[12px] font-light">{t("official")}</p>
            </div>
          </div>
          <div className="mt-8 mb-2 gap-5 flex items-start flex-wrap md:justify-center">
            {footerItem.map((items) => (
              <div className="" key={items.id}>
                <h1 className="mb-2 text-sm">{items.label}</h1>
                {items.values.map((item) => (
                  <p className="cursor-pointer mb-2 text-[13px]" key={item.id}>
                    <a
                      href={item.url}
                      className="hover-border text-white/60 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
          <hr className="border border-gray-600" />
          <div className="flex md:flex-row flex-col justify-between mt-4 mb-3">
            <div className="md:mb-0 mb-3 flex gap-3">
              <CurrencyDropdown />
              <LocalSwitcher />
            </div>
            <div className="flex md:gap-10 gap-4 md:flex-row flex-col">
              <h3 className="text-[14px] flex gap-2 items-center font-bold">
                {t("pay")}:{" "}
                <span className="bg-white/20 cursor-pointer rounded-md px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <AccountBalanceIcon sx={{ fontSize: 18 }} /> {t("tf")}
                </span>{" "}
                <span className="bg-white/20 cursor-pointer rounded-md px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <CurrencyBitcoinIcon sx={{ fontSize: 18 }} /> {t("btc")}
                </span>
              </h3>
              <h3 className="text-[14px] flex gap-1 items-center font-bold">
                <PublicIcon sx={{ fontSize: 18 }} /> {t("deli")}:{" "}
                <span className="px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <Image src={delivery} alt="delivery" className="" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-white/65 py-3">
        <div className="container flex md:flex-row flex-col justify-center text-sm gap-5 items-center">
          <div className="flex gap-5 items-center">
            {socials.map((item) => (
              <div key={item.id}>{item.icon}</div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[2px] h-3 bg-white md:block hidden" />
            <h1 className=" cursor-pointer hover:text-accent">{t("genc")}</h1>
            <div className="w-[2px] h-3 bg-white" />
            <h1 className=" cursor-pointer hover:text-accent">{t("privacy")}</h1>
            <div className="w-[2px] h-3 bg-white" />
            <h1 className=" cursor-pointer hover:text-accent">{t("imp")}</h1>
            <div className="w-[2px] h-3 bg-white md:block hidden" />
          </div>
          <h1>
            &copy; 2018-{date.getFullYear()} WARETGOLD.COM, {t("cright")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
