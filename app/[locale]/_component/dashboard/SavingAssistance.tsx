import { metals } from "@/utils/data";
import trial from "../../../../public/dashboard/triol.webp";
import Image from "next/image";
import CurrencyDropdown from "../global/CurrencyDropdown";
import { useTranslations } from "next-intl";

export default function SavingAssistance() {
  const t = useTranslations("SavingAssist");
  return (
    <div className="flex justify-between gradbgAll md:flex-row flex-col py-10 items-center pt-32 gap-4">
      <div className="md:w-[70%] w-full">
        <h1 className="text-decoration-none text-primary text-xl font-[700] mb-[24px]">
          {t("title")}
        </h1>
        <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
          {t("sub")}
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 items-center">
          <div className="flex flex-col">
            <label className="text-decoration-none text-primary text-[18px] leading-6 font-[700]">
              {t("goldtext")}
            </label>
            <select className="border px-5 py-3 uppercase border-deem/50 text-secondary text-[14px] rounded-md">
              {metals.map((item) => (
                <option key={item.id}>{item.value}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-decoration-none text-primary text-[18px] leading-6 font-[700]">
              {t("budget")}
            </label>
            <div className="border px-5 py-3 uppercase flex border-deem/50 text-secondary text-[14px] rounded-md">
              <CurrencyDropdown />
              <input
                type="text"
                placeholder="5,000"
                className=" ms-4 border-none outline-none w-[50%]"
              />
            </div>
          </div>
          <button
            disabled
            className="text-[15px] font-bold cursor-not-allowed text-white mt-6 py-3 px-3 rounded-lg bg-primary"
          >
            {t("btn")}
          </button>
        </div>
      </div>
      <div className="relative w-[220px] h-[230px]">
        <Image
          src={trial}
          alt="pamp"
          className="leading-[0] rotate-6 max-w-[100%]"
        />
      </div>
    </div>
  );
}
