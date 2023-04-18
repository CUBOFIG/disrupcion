import { createContext } from "react";

export const initialState = {
  transactions: [],
  allTransactions: [],
  date: null,
};

export const GlobalContext = createContext(initialState);
