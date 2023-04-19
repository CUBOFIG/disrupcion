import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS_WITH_DATE,
  DELETE_ALL_ELEMENTS,
} from "./types";
import { GlobalContext, initialState } from "./Global.context";
import { useCalendar } from "hooks/useCalendar";
import { useEffect } from "react";
import { useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./Global.reducer";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentMonth, year, nextMonths, previousMonths, updateMonth } =
    useCalendar();

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const deleteTransaction = (id, idGroup) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: { id, idGroup },
    });
  };

  const deleteAllElements = () => {
    dispatch({
      type: DELETE_ALL_ELEMENTS,
    });
  };

  const getTransactionsWithDate = (date) => {
    dispatch({
      type: GET_TRANSACTIONS_WITH_DATE,
      payload: date,
    });
  };

  useEffect(() => {
    getTransactionsWithDate({ month: currentMonth, year });
  }, [currentMonth, year, state.allTransactions]);

  const contextValue = {
    transactions: state.transactions,
    allTransactions: state.allTransactions,
    addTransaction,
    currentMonth,
    deleteTransaction,
    nextMonths,
    previousMonths,
    updateMonth,
    deleteAllElements,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
