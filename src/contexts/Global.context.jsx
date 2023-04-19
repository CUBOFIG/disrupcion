import { createContext } from "react";

export const initialState = {
  allTransactions: [],
  date: {},
  transactions: [],
};

export const GlobalContext = createContext(initialState);
