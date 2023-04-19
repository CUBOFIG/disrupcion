import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionCollapse } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { GlobalContext } from "contexts/Global.context";

const MonthBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <button onClick={decoratedOnClick}>{children}</button>;
  };

  const allTransactions = transactions
    .map((transaction) => transaction.transactions)
    .flat();

  const allTransactionAmounts = allTransactions.map(
    (transaction) => transaction.amount
  );
  const totalAmount = allTransactionAmounts
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const positiveTransactions = allTransactions.filter(
    (transaction) => transaction.amount > 0
  );
  const negativeTransactions = allTransactions.filter(
    (transaction) => transaction.amount < 0
  );

  const positiveTotalAmount = positiveTransactions
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const negativeTotalAmount = Math.abs(
    negativeTransactions.reduce((acc, item) => acc + item.amount, 0)
  ).toFixed(2);

  return (
    <Accordion defaultActiveKey="0">
      <div className="month-balance mb-2">
        <div className="month-balance__current-balance">
          <p>Balance del mes</p>
          <h1>${totalAmount}</h1>
        </div>
        <div className="month-balance__transaction-logs">
          <div>
            <div className="income-logs">
              <p>Ingresos</p>
              <h1>+${positiveTotalAmount}</h1>
            </div>
            <div className="vertical-line"></div>
            <div className="expenses-logs">
              <p>Gastos</p>
              <h1>-${negativeTotalAmount}</h1>
            </div>
          </div>
          <div className="details">
            <p>Ver analiticas</p>
            <CustomToggle eventKey="1">
              <FontAwesomeIcon icon={faChevronDown} />
            </CustomToggle>
          </div>
        </div>
        <AccordionCollapse eventKey="1">
          <div>DEMO COSITAS EXTRAS</div>
        </AccordionCollapse>
      </div>
    </Accordion>
  );
};

export default MonthBalance;
