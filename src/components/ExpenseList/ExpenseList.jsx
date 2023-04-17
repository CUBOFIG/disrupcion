import { ExpenseCard } from "components";
import { GlobalContext } from "contexts/Global.context";
import { useContext } from "react";
const ExpenseList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      {transactions.map((item, index) => (
        <div key={index}>
          <div className="mb-2 mt-4">
            <strong>Hoy - 6 Dic.</strong>
          </div>
          {item.transactions.map((transaction, index) => (
            <ExpenseCard key={`exp-${index}`} {...transaction} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
