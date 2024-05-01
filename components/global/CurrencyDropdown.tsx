import { currency } from "@/utils/constants";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

const currencyData = [
  {
    code: "eur",
    flag: "€",
  },
  {
    code: "chf",
    flag: "₮",
  },
  {
    code: "usd",
    flag: "$",
  },
  {
    code: "gbp",
    flag: "£",
  },
];

export default function CurrencyDropdown() {
  const [currency, setCurrency] = useState("eur");

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div>
      <Box
        sx={{
          minWidth: "10%",
          color: "white",
          border: "none",
          marginRight: "10px",
        }}
      >
        <FormControl fullWidth variant="standard" style={{borderBottom:'0px', textDecoration:'none'}} sx={{ border: "none", color: "white" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              color: "white",
              border: "none",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
            value={currency}
            onChange={handleChangeCurrency}
            MenuProps={{ sx: { color: "white" } }}
          >
            {currencyData.map((item) => (
              <MenuItem
              key={item.code}
                value={item.code}
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  paddingY: 1,
                  paddingX:2,
                  alignItems: "center",
                }}
              >
                <div className="flex gap-4 items-center">
                  <span
                    style={{
                      backgroundColor: "#FFC940",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#131921",
                      borderRadius: "100%",
                      width: 17,
                      height: 17,
                    }}
                  >
                    {item.flag}
                  </span>
                  {item.code}
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
