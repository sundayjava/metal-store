import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import {
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ItemCard from "../global/ItemCard";

function SampleNextArrow(props: any) {
  const { style, onClick, currentIndex, data } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const topValue = isMediumScreen ? "6rem" : "4rem";
  const hideButton = isMediumScreen ? "inline" : "none";
  return (
    <div>
      {currentIndex !== data.length - 5 && (
        <Button
          onClick={onClick}
          variant="contained"
          className="z-30 bg-white hover:bg-secondaryColor"
          sx={{
            ...style,
            position: "absolute",
            top: topValue,
            right: "1rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
            display: hideButton,
            ":hover": {
              backgroundColor: "#232F3E",
              color: "white",
            },
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftOutlined
            sx={{
              transform: "rotate(90deg)",
              color: "black",
              ":hover": {
                color: "white",
              },
            }}
          />
        </Button>
      )}
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick, currentIndex } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const topValue = isMediumScreen ? "6rem" : "4rem";
  const hideButton = isMediumScreen ? "inline" : "none";
  return (
    <div>
      {currentIndex !== 0 && (
        <Button
          onClick={onClick}
          variant="contained"
          className="z-30 bg-white md:block hidden"
          sx={{
            ...style,
            position: "absolute",
            top: topValue,
            left: "1rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
            display: hideButton,
            ":hover": {
              backgroundColor: "#232F3E",
            },
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftOutlined
            sx={{
              transform: "rotate(90deg)",
              color: "black",
              ":hover": {
                color: "white",
              },
            }}
          />
        </Button>
      )}
    </div>
  );
}

const ProductCarousel: React.FC<{ data: any }> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const showdots = isMediumScreen ? false : true;

  const handleSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  var settings = {
    dots: showdots,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: false,
    initialSlide: 0,
    afterChange: handleSlideChange,
    nextArrow: (
      <SampleNextArrow currentIndex={currentIndex} data={props.data} />
    ),
    prevArrow: (
      <SamplePrevArrow
        currentIndex={currentIndex}
        hasItems={props.data.length > 0}
      />
    ),
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
    <div className="bg-white rounded-md">
      <div className="slider-container relative px-1 mt-3">
        <Slider {...settings}>
          {props.data.map((item: any, index: number) => (
            <ItemCard key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
