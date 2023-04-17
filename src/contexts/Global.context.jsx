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
          data: {
            name: "Uber",
            amount: 132.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
        },
        {
          type: "blank",
          data: {
            name: "Netflix",
            amount: 12632.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
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
          data: {
            name: "Uber",
            amount: 132.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
        },
        {
          type: "blank",
          data: {
            name: "Netflix",
            amount: 12632.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
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
          data: {
            name: "Uber",
            amount: 132.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
        },
        {
          type: "blank",
          data: {
            name: "Netflix",
            amount: 12632.12,
          },
        },
        {
          type: "expense",
          data: {
            name: "HBO",
            amount: 1282.12,
          },
        },
      ],
    },
  ],
  date: null,
};

export const GlobalContext = createContext(initialState);
