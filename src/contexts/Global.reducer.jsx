import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  GET_TRANSACTIONS_WITH_DATE,
} from "./types";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";

const Reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION: {
      const { allTransactions, transactions: currentTransactions } = state;
      const { id: currentId, idGroup } = action.payload;

      const transactionGroup = currentTransactions.find(
        ({ id }) => id === idGroup
      );

      const updatedTransactionGroup = transactionGroup.transactions.filter(
        ({ id }) => id !== currentId
      );

      if (updatedTransactionGroup.length === 0) {
        const newTransactions = allTransactions.filter(
          ({ id }) => id !== idGroup
        );

        return {
          ...state,
          allTransactions: newTransactions,
        };
      }

      const newObjectDate = {
        ...transactionGroup,
        transactions: updatedTransactionGroup,
      };

      const updateAllTransactions = allTransactions.map((item) =>
        item.id === idGroup ? newObjectDate : item
      );

      return {
        ...state,
        allTransactions: updateAllTransactions,
      };
    }
    case ADD_TRANSACTION:
      const { date } = action.payload;

      const foundObject = state.allTransactions.find(
        (item) =>
          item.year === date.year &&
          item.month === date.month &&
          item.day === date.day
      );

      if (foundObject) {
        const updatedObject = {
          ...foundObject,
          transactions: [...foundObject.transactions, action.payload],
        };

        const newTransactions = state.allTransactions.map((item) =>
          item === foundObject ? updatedObject : item
        );

        return {
          ...state,
          allTransactions: newTransactions,
        };
      } else {
        const newObject = {
          year: date.year,
          month: date.month,
          day: date.day,
          transactions: [action.payload],
          id: uuidv4(),
        };

        return {
          ...state,
          allTransactions: [...state.allTransactions, newObject],
        };
      }

    case GET_TRANSACTIONS_WITH_DATE:
      const { month, year } = action.payload;
      const { allTransactions } = state;

      const transactions = allTransactions.filter(
        (transaction) =>
          transaction.month === month && +transaction.year === +year
      );

      return {
        ...state,
        transactions: transactions,
        date: {
          month,
          year: +year,
        },
      };

    default:
      return state;
  }
};

export default Reducer;
