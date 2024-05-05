import Image from "next/image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import goldLogo from "../../../../public/dashboard/goldlog.webp";
import leftos from "../../../../public/dashboard/lefttos.webp";

export default function GoldSection() {
  return (
    <div className="mt-16 gradbgAll">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-primary text-lg font-[700] mb-[24px]">
            We’re here to help you save.
          </h1>
          <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
            Turn your money into physical gold with WARET GOLD.
          </p>
          <Link
            href="https://www.youtube.com/watch?v=qySv9Yw2SuQ"
            className="mt-4 gap-2 flex items-center md:justify-start justify-end text-darkaccent text-deem hover:text-primaryColor text-[15px] text-center"
          >
            <SmartDisplayIcon sx={{ fontSize: 15, cursor: "pointer" }} />
            <span className="hover-border2 font-normal text-deem hover:text-primary">
              What is WARET GOLD
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
            Trust an industry expert
          </h1>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[300] max-w-[750px]">
            WARET GOLD is the official online retailer of the MKS PAMP GROUP, a
            Swiss family group with a global reputation.
          </p>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[300] max-w-[750px]">
            Over the past 60 years, the group has become the leader in the
            precious metals sector.
          </p>
          <p className="text-decoration-none text-primary text-[19px] leading-7 font-[400]">
            Let’s build for the long term.
          </p>
          <div className="mt-11">
            <Link
              href="en/about-us"
              className="hover-border2 font-normal text-deem hover:text-primary"
            >
              Learn more about us <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
