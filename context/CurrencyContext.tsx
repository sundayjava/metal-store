"use client";

import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext<any>({ currency: 'eur', setCurrency: undefined});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  let [currency, setCurrency] = useState('eur');

  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(){
    return useContext(CurrencyContext)
}