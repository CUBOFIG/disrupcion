import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  GET_TRANSACTIONS_WITH_DATE,
} from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

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
        (transaction) => transaction.month === month && transaction.year == year
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
