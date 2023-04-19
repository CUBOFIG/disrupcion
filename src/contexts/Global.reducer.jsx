import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  GET_TRANSACTIONS_WITH_DATE,
} from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION: {
      const { allTransactions } = state;
      const { date } = action.payload;

      const transactions = allTransactions.find(
        (transaction) =>
          transaction.month === date.month &&
          +transaction.year === +date.year &&
          +transaction.day === +date.day
      );

      const newtransactions = transactions.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );

      const updatedObject = {
        ...transactions,
        transactions: newtransactions,
      };

      if (newtransactions.length === 0) {
        const newTransactions = state.allTransactions.map(
          (item) => item !== transactions
        );

        return {
          ...state,
          allTransactions: newTransactions,
        };
      }

      const newTransactions = state.allTransactions.map((item) =>
        item === transactions ? updatedObject : item
      );

      return {
        ...state,
        allTransactions: newTransactions,
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
      };

    default:
      return state;
  }
};

export default Reducer;
