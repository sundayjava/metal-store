"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { userReviews } from "@/utils/data";
import { useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Usercarousel() {
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const showdots = isMediumScreen ? false : true;
  const t = useTranslations("SavingAssist");

  var settings = {
    dots: showdots,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1.5,
          infinite: false,
        },
      },
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="gradbgAll py-10">
      <div className="text-decoration-none text-primary text-xl font-[700] mb-[24px]">
        <h1>
          {t("morethan1")}{" "}
          <span className="text-green-600">{t("morethan2")}</span>{" "}
        </h1>
        <p>{t("morethan3")}</p>
      </div>
      <div className="mt-20" />
      <div className="bg-white rounded-md">
        <div className="slider-container relative px-1 mt-3">
          <Slider {...settings}>
            {userReviews.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer flex-shrink-0 transition-shadow border-gray-200 hover:shadow-2xl rounded-md bg-white w-[285px]"
              >
                <div className="cursor-pointer py-6 rounded-lg w-full px-2 bg-white">
                  <div className="flex gap-2">
                    <Rating
                      sx={{
                        color: "#fff",
                        backgroundColor: "#68D391",
                        fontSize: 19,
                        paddingX: 1,
                      }}
                      name="read-only"
                      value={5}
                      readOnly
                    />
                    <span className="flex gap-1 items-center text-primary/30 text-[14px]">
                      <CheckCircleIcon sx={{ color: "gray", fontSize: 17 }} />
                      invited
                    </span>
                  </div>
                  <h2 className="font-bold line-clamp-1 text-[12px] mt-4">
                    {item.title}
                  </h2>
                  <p className="line-clamp-3 h-12 mt-1 text-[12px] font-light">
                    {item.desc}
                  </p>
                  <div className="mt-6 text-[14px]">
                    <h1>
                      {item.name},{" "}
                      <span className=" text-gray-500 text-[14px]">
                        {item.time}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex text-primary justify-center mt-3 md:px-0 px-28 flex-col items-center md:text-[14px] text-[9px]">
        <p>
          Rated <span className="font-bold">4.7 / 5</span> based on{" "}
          <span className="underline">2,162 reviews.</span> Trust our favorite
          reviews
        </p>
      </div>
    </div>
  );
}
