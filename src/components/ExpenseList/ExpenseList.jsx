import { ExpenseCard } from "components";
import { GlobalContext } from "contexts/Global.context";
import { useContext } from "react";
import moment from "moment";

const ExpenseList = () => {
  const { transactions } = useContext(GlobalContext);

  function formatDate(month, day) {
    const monthNumber = moment().month(month).month();
    const date = moment().set({ month: monthNumber, date: day });

    const isToday = date.isSame(moment().startOf("day"), "d");
    const isYesterday = date.isSame(
      moment().subtract(1, "days").startOf("day"),
      "d"
    );

    const options = {
      sameDay: "[Hoy] - D MMMM",
      lastDay: "[Ayer] - D MMMM",
    };

    if (isToday || isYesterday) return date.calendar(null, options);

    return date.format("D MMMM");
  }

  function compareDates(a, b) {
    const dayA = parseInt(a.day);
    const dayB = parseInt(b.day);

    if (dayA > dayB) return -1;

    if (dayA < dayB) return 1;

    return 0;
  }

  return (
    <div className="expense-list">
      {transactions.length > 0 ? (
        transactions.sort(compareDates).map((item, index) => (
          <div key={index}>
            <div className="mb-2 mt-4">
              <strong>{formatDate(item.month, item.day)}</strong>
            </div>
            {item.transactions.map((transaction, index) => (
              <ExpenseCard key={`exp-${index}`} {...transaction} />
            ))}
          </div>
        ))
      ) : (
        <div className="no-transactions-found">
          <h2>No se encontraron transacciones para el mes seleccionado</h2>
          <p>Cambia la fecha o agrega tu primera transaccion para esta fecha</p>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
