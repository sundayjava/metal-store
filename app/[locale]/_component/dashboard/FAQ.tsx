import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import silverIkg from "../../../../public/dashboard/silver1kg.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("Faq");
  const accordiondata = [
    {
      id: 1,
      title: `${t("head1")}`,
      desc: `${t("value1")}`,
    },
    {
      id: 2,
      title: `${t("head2")}`,
      desc: `${t("value2")}`,
    },
    {
      id: 3,
      title: `${t("head3")}`,
      desc: `${t("value3")}`,
    },
    {
      id: 4,
      title: `${t("head4")}`,
      desc: `${t("value4")}`,
    },
    {
      id: 5,
      title: `${t("head5")}`,
      desc: `${t("value5")}`,
    },
    {
      id: 6,
      title: `${t("head6")}`,
      desc: `${t("value6")}`,
    },
    {
      id: 7,
      title: `${t("head7")}`,
      desc: `${t("value7")}`,
    },
  ];
  return (
    <div className="pt-32 bg-white gradbgAll">
      <div className="flex items-end justify-between">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-primary text-lg font-[700] mb-[24px]">
            {t("title")}
          </h1>
          <p className="text-decoration-none text-primary text-[20px] leading-7 font-[300] max-w-[750px]">
            {t("sub")}
          </p>
        </div>
        <button className="md:flex hidden text-deem hover-border2 gap-2 items-center">
          More FAQ <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
      <div className="sm:flex justify-between items-center">
        <div className="mt-16 md:w-[60%] w-full">
          {accordiondata.map((item) => (
            <Accordion
              key={item.id}
              sx={{
                boxShadow: "none",
                border: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  padding: 2,
                  borderRadius: 3,
                  fontWeight: 300,
                  ":hover": {
                    backgroundColor: "#dceff7",
                  },
                }}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#dceff7",
                  paddingY: 5,
                  borderRadius: 5,
                  marginBottom: 4,
                }}
              >
                {item.desc}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="relative w-[220px] h-[230px]">
          <Image
            src={silverIkg}
            alt="pamp"
            className="leading-[0] rotate-6 max-w-[100%]"
          />
        </div>
        {/* <div>
              <Image
                src={silverIkg}
                alt="silver 1kg"
                className="h-[400px] object-contain sm:block hidden"
              />
            </div> */}
      </div>
      <div className="flex justify-end md:hidden gap-2 items-center">
        <button className="text-accent hover-border">
          More FAQ <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
    </div>
  );
}
