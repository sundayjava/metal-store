"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import slide1 from "../../../../public/carousel/slide1.png";
import slide2 from "../../../../public/carousel/slide2.png";
import slide3 from "../../../../public/carousel/slide3.png";
import Image from "next/image";

export default function CarouselSlider() {
  const [viewportWidth, setViewportWidth] = useState(0); // Initialize to 0 or any default value

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const showarrows = viewportWidth < 640 ? false : true;

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: showarrows,
    autoplay: true,
  };
  return (
    <section className="homeSlider bg-white">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="relative md:w-full w-1/3 h-[200px] rounded-lg">
            <Image
              src={slide1}
              alt="logo"
              fill
              sizes="100%"
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div className="relative md:w-full w-1/3 h-[200px] rounded-lg">
            <Image
              src={slide2}
              alt="logo"
              fill
              sizes="100%"
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div className="relative md:w-full w-1/3 h-[200px] rounded-lg">
            <Image
              src={slide3}
              alt="logo"
              fill
              sizes="100%"
              className="object-cover rounded-lg cursor-pointer"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
