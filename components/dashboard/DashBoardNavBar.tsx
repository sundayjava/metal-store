"use client";

import { category, metals, navData } from "@/utils/data";
import "./dashboard.css";
import { useRef, useEffect, useState } from "react";
import { appName, currency } from "@/utils/constants";
import { ArrowDropUp, Call } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../public/dashboard/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalSwitcher from "../global/local-switcher";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import CurrencyDropdown from "../global/CurrencyDropdown";

export default function DashBoardNavBar(props: {
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let position = window.pageYOffset;
      if (position > 100 && headerRef.current) {
        headerRef.current.classList.add("fixed");
      } else if (headerRef.current) {
        headerRef.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#232F3E",
          flexDirection: "column",
          justifyContent: "space-between",
          py: "0.1rem",
          px: "1.5rem",
        }}
      >
        <div
          className="headerWrapper md:block hidden bg-primary"
          ref={headerRef}
        >
          <header className="bg-secondary text-white/70 w-full h-auto m-auto">
            <div className="flex container justify-between font-[400] items-center text-[12px] leading-[1.4]">
              {metals.map((metal) => (
                <p
                  key={metal.id}
                  className="cursor-pointer uppercase hover:text-white"
                >
                  {metal.value} {currency}
                  {metal.value === "gold"
                    ? (23221.7).toLocaleString()
                    : metal.value === "silver"
                    ? (1781.23).toLocaleString()
                    : metal.value === "platinum"
                    ? (821.0).toLocaleString()
                    : (361.0).toLocaleString()}
                  <span
                    className={`text-[12px] ${
                      metal.value === "platinum"
                        ? "text-green-600"
                        : metal.value === "palladium"
                        ? "text-green-600"
                        : "text-green-600"
                    } cursor-pointer hover:text-green-500 font-bold`}
                  >
                    <ArrowDropUp />
                    €0.00
                  </span>
                </p>
              ))}
            </div>
          </header>
          <div className="container text-white py-2 bg-primary flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <div className="relative w-5 h-5">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <p className="text-sm cursor-pointer hover:text-white/60">
                {appName}
              </p>
              <p className="text-[14px] lg:block hidden mx-7 text-white">
                <Call sx={{ fontSize: 14, marginLeft: "5px" }} /> +498007244869
              </p>
              <CurrencyDropdown />
            </div>
            <div className="flex gap-5 items-center text-[14px] leading-3">
              {navData.map((item) => (
                <button
                  key={item.id}
                  className="hover-border hover:text-accent"
                >
                  {item.value}
                </button>
              ))}
              <div className="flex gap-5">
                <LocalSwitcher />
                <button className="hover:text-accent text-[14px]">
                  Sign in
                </button>
                <button className="border text-[14px] hover:bg-accent hover:text-primary rounded-md md:px-3 px-1 md:py-1 py-[2px]">
                  Open an account
                </button>
              </div>
            </div>
          </div>
          <div
            className={`nav flex container justify-between py-1 bg-primary items-center ${
              isOpenNav === true && "click"
            }`}
          >
            <div className="">
              <div className="flex">
                <nav className={isOpenNav === true ? "open" : ""}>
                  <ul className="list-none flex mb-3 gap-10 items-center">
                    {category.map((item) => (
                      <li key={item.id}>
                        <button className="text-white/80 hover:bg-accent/20 text-[14px] leading-[18px] font-bold rounded-lg uppercase">
                          {item.parent}
                        </button>

                        <div
                          className={`dropdown_menu megaMenu ${
                            openMegaMenu === true && "open"
                          }`}
                        >
                          <div className="flex gap-4 ">
                            {item.children.length !== 0 &&
                              item.children.map((item) => (
                                <div key={item.id} className="">
                                  <h4 className="text-[15px] hover:text-accent text-secondaryColor cursor-pointer mb-2 font-bold mr-5 block">
                                    {item.value}
                                  </h4>
                                  {item.items?.length !== 0 && (
                                    <ul className="w-full text-black">
                                      {item.items?.map((itemize) => (
                                        <li
                                          key={itemize.id}
                                          className="text-[13px] text-darkaccent w-full py-1 cursor-pointer hover-border"
                                        >
                                          {itemize.value}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="rounded-md">
                <div className="flex bg-white">
                  <input
                    className="appearance-none block w-full px-3 bg-transparent outline-none border-none text-[14px] me-2"
                    type="search"
                    placeholder="Search"
                    aria-labelledby="Search"
                    //   onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    className="bg-accent px-3 py-[2px] text-[13px]"
                    //   onClick={() => searchHandleChange()}
                  >
                    Search
                  </button>
                </div>
              </div>
              <li className="relative ml-3 list-none">
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#C1C2C5", cursor: "pointer" }}
                />
                <div className="absolute cursor-pointer bg-red-600 px-1 right-1 text-[12px] font-bold text-white rounded-full top-0">
                  3
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="justify-between bg-primary items-center flex gap-[3rem] w-full pt-2">
          <IconButton
            onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <div className="flex items-center gap-1">
            <div className="relative w-5 h-5">
              <Image
                src={logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <p className="text-sm cursor-pointer hover:text-white/60">
              {appName}
            </p>
          </div>
          <li className="relative ml-3 list-none">
            <ShoppingCartOutlinedIcon
              sx={{ color: "#C1C2C5", cursor: "pointer" }}
            />
            <div className="absolute cursor-pointer bg-red-600 px-1 right-1 text-[12px] font-bold text-white rounded-full top-0">
              3
            </div>
          </li>
        </div>
        <ul className="list-none flex mb-3 gap-10 items-center">
          {category.map((item) => (
            <li key={item.id}>
              <button className="text-white/80 hover:bg-accent/20 text-[14px] leading-[18px] font-bold rounded-lg uppercase">
                {item.parent}
              </button>
            </li>
          ))}
          {/* 
          <li className=" mr-3">
            <Search sx={{ color: "white", cursor: "pointer", fontSize: 22 }} />
          </li> */}
        </ul>
        <div className="rounded-md w-full">
          <div className="flex bg-white">
            <input
              className="appearance-none block w-full px-3 bg-transparent outline-none border-none text-[14px] me-2"
              type="search"
              placeholder="Search"
              aria-labelledby="Search"
              //   onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-accent px-3 py-[2px] text-[13px]"
              //   onClick={() => searchHandleChange()}
            >
              Search
            </button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
