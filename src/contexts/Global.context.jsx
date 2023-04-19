import { createContext } from "react";

export const initialState = {
  allTransactions: [],
  date: null,
  transactions: [],
};

export const GlobalContext = createContext(initialState);
