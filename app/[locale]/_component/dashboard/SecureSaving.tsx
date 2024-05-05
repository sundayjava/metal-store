import Image from "next/image";
import pamp from "../../../../public/dashboard/pamp.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { useTranslations } from "next-intl";

export default function SecureSaving() {
  const t2 = useTranslations("SecureS");
  const t3 = useTranslations("SecureListing1");
  const t4 = useTranslations("SecureListing2");
  const t5 = useTranslations("SecureListing3");

  const secureData = [
    {
      id: 1,
      title: `${t3("one")}`,
      title1: `${t3("two")}`,
      title2: `${t3("three")}`,
      desc: `${t3("desc")}`,
      btnOne: `${t3("btn1")}`,
      url: "/en/buy/gold",
      btnDown: `${t3("btn2")}`,
    },
    {
      id: 2,
      title: `${t4("one")}`,
      title1: `${t4("two")}`,
      title2: `${t4("three")}`,
      desc: `${t4("desc")}`,
      btnOne: `${t4("btn1")}`,
      url: "/en/buy/gold",
      btnDown: `${t4("btn2")}`,
    },
    {
      id: 3,
      title: `${t5("one")}`,
      title1: `${t5("two")}`,
      title2: `${t5("three")}`,
      desc: `${t5("desc")}`,
      btnOne: `${t5("btn1")}`,
      url: "/en/buy/gold",
      btnDown: `${t5("btn2")}`,
    },
  ];
  return (
    <div className="gradbgAll">
      <div className="flex md:flex-row flex-col justify-between gap-2 mt-12 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-primary text-lg font-[700] mb-[24px]">
            {t2("heading")}
          </h1>
          <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
            {t2("title")}
          </p>
        </div>
        <div className="relative w-[220px] h-[230px]">
          <Image
            src={pamp}
            alt="pamp"
            className="leading-[0] rotate-45 max-w-[100%]"
          />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col py-10 gap-8">
        {secureData.map((item) => (
          <div
            key={item.id}
            className="bg-white md:w-[33%] w-full rounded-lg cursor-pointer shadow-lg py-8 px-5"
          >
            <h1 className="text-lg text-primary font-[700] hover-border2 hover:text-deem text-decoration-none">
              {item.title}
            </h1>
            <h1 className="text-lg text-primary font-[700] hover-border2 hover:text-deem text-decoration-none">
              {item.title1}
            </h1>
            <h1 className="text-lg text-primary font-[700] line-clamp-1 hover-border2 hover:text-deem text-decoration-none">
              {item.title2}
            </h1>
            <p className="mt-4 text-decoration-none text-primary text-[19px] leading-7 font-[300] h-[180px]">
              {item.desc}
            </p>

            <div className="mt-5 h-6">
              <a
                href={item.url}
                className="hover-border2 font-normal text-deem hover:text-primary"
              >
                {item.btnOne} <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </a>
            </div>
            <a
              href="https://www.youtube.com/watch?v=oh6X1A5wvIA&t=131s"
              className="mt-9 gap-2 h-6 flex items-start text-sm text-center text-deem hover:text-primary"
            >
              <SmartDisplayIcon />
              <span className="hover-border2">{item.btnDown}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
