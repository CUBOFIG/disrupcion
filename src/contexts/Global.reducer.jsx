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

      const allTransactionss = state.allTransactions;

      allTransactionss.forEach((transaction, index) => {
        if (
          transaction.month === date.month &&
          transaction.year === date.year &&
          transaction.day === date.day
        ) {
          transaction.transactions = [
            ...transaction.transactions,
            action.payload,
          ];
        }
      });

      return {
        ...state,
        allTransactions: state.allTransactions,
      };

    case GET_TRANSACTIONS_WITH_DATE:
      const { month, year } = action.payload;
      const { allTransactions } = state;

      const transactions = allTransactions.filter(
        (transaction) =>
          transaction.month === month && transaction.year === year
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
