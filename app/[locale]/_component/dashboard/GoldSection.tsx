import Image from "next/image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import goldLogo from "../../../../public/dashboard/goldlog.webp";
import leftos from "../../../../public/dashboard/lefttos.webp";
import { useTranslations } from "next-intl";

export default function GoldSection() {
  const t = useTranslations("WeHelp");
  return (
    <div className="mt-16 gradbgAll">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-primary text-lg font-[700] mb-[24px]">
            {t("title")}
          </h1>
          <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
            {t("sub")}
          </p>
          <Link
            href="https://www.youtube.com/watch?v=qySv9Yw2SuQ"
            className="mt-4 gap-2 flex items-center md:justify-start justify-end text-darkaccent text-deem hover:text-primaryColor text-[15px] text-center"
          >
            <SmartDisplayIcon sx={{ fontSize: 15, cursor: "pointer" }} />
            <span className="hover-border2 font-normal text-deem hover:text-primary">
              {t("lkn1")}
            </span>
          </Link>
        </div>
        <div className="flex justify-center gap-2">
          <div className="relative w-[120px] h-[230px]">
            <Image
              src={goldLogo}
              alt="pamp"
              className="leading-[0] rotate-6 max-w-[100%]"
            />
          </div>
          <div className="relative w-[120px] h-[230px] mb-10">
            <Image
              src={goldLogo}
              alt="pamp"
              className="leading-[0] -rotate-45 max-w-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="gap-10 items-center flex md:flex-row flex-col justify-between mt-12">
        <div className="md:w-[40%] relative w-full">
          <Image
            src={leftos}
            alt="pamp"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h1 className="text-decoration-none text-primary text-lg font-[700] mb-[24px]">
            {t("rightsidetitle")}
          </h1>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[300] max-w-[750px]">
            {t("desc1")}
          </p>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[300] max-w-[750px]">
            {t("desc2")}
          </p>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[400]">
            {t("maun")}
          </p>
          <div className="mt-11">
            <Link
              href="en/about-us"
              className="hover-border2 font-normal text-deem hover:text-primary"
            >
              {t("lkn2")} <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
