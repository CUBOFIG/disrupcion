import { createContext } from "react";

export const initialState = {
  transactions: [],
  allTransactions: [
    {
      day: "11",
      year: "2023",
      month: "abril",
      transactions: [
        {
          type: "income",
          description: "Uber",
          amount: 132.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
        {
          type: "blank",
          description: "Netflix",
          amount: -12632.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
      ],
    },
    {
      day: "12",
      year: "2023",
      month: "abril",
      transactions: [
        {
          type: "income",
          description: "Uber",
          amount: 132.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
        {
          type: "blank",
          description: "Netflix",
          amount: -132.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
      ],
    },
    {
      day: "12",
      year: "2023",
      month: "febrero",
      transactions: [
        {
          type: "income",
          description: "Uber",
          amount: 132.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
        {
          type: "blank",
          description: "Netflix",
          amount: 12632.12,
        },
        {
          type: "expense",
          description: "HBO",
          amount: 1282.12,
        },
      ],
    },
  ],
  date: null,
};

export const GlobalContext = createContext(initialState);
