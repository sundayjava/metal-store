"use client";

import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://th.bing.com/th/id/R.01df74538da8de610121212d15b52c37?rik=NcTRJew351sAdw&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
    code: "fr",
    name: "Francais",
    flag: "https://th.bing.com/th/id/R.8a44fb08d11752d187cbfd4cb0e1d8f5?rik=ajDoeTg1VOTheQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fFrench-Flag-Background.jpg&ehk=PsIgD0dQU5umyW1t9HauhLJg889j0K8w4VTZ6vr82No%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "https://th.bing.com/th/id/OIP.RkNnol5HjKVm1HTZxkcpeAHaEc?rs=1&pid=ImgDetMain",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "https://th.bing.com/th/id/R.4c0ff315b66f5c382898c7989a436a57?rik=J14uIMj1S8NxGA&pid=ImgRaw&r=0",
  },
];

export default function LocalSwitcher() {
  const [ispending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value;
    router.replace(`/${nextLocale}`);
  };

  return (
    <div className="">
      <FormControl fullWidth variant="standard" style={{borderBottom:'0px', textDecoration:'none'}} sx={{ border: "none", color: "white" }}>
        <Select
          defaultValue={localActive}
          labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              color: "white",
              border: "none",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          onChange={handleLanguageChange}
          disabled={ispending}
          MenuProps={{ sx: { color: "white" } }}
        >
          {languages.map((item) => (
            <MenuItem
              key={item.code}
              value={item.code}
              sx={{
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between",
                paddingY:1
              }}
            >
              <div className="flex gap-2 items-center">
                <Image src={item.flag} width={20} height={14} alt={item.code} className="w-4 h-4 rounded-full"/>
                <span className="text-[12px]">{item.code}</span>
              </div>
              <span className="text-[12px]">{localActive === item.code ? "" : item.name}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
