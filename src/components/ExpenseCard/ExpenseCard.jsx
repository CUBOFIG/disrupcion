import { AccordionCollapse, Button } from "react-bootstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "contexts/Global.context";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import Card from "react-bootstrap/Card";

const ExpenseCard = ({ amount, description, id, idGroup }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <button onClick={decoratedOnClick}>{children}</button>;
  };

  const AmountElement = () => {
    let sign = "";
    if (amount > 0) sign = "+";

    return (
      <span>
        {sign}
        {amount}
      </span>
    );
  };

  const isExpense = (amount) => {
    return amount > 0 ? "expense" : "income";
  };

  const deleteElement = () => {
    deleteTransaction(id, idGroup);
  };

  return (
    <Card className="expense-card mb-1">
      <Card.Header className="expense-card__header">
        <div className={`icon icon-${isExpense(amount)}`} />
        <p>{description}</p>
        <div className="details">
          <AmountElement />
          <CustomToggle eventKey={id}>
            <FontAwesomeIcon icon={faChevronDown} />
          </CustomToggle>
        </div>
      </Card.Header>
      <AccordionCollapse eventKey={id}>
        <Card.Body>
          <Button className="delete-button w-100" onClick={deleteElement}>
            Eliminar
          </Button>
        </Card.Body>
      </AccordionCollapse>
    </Card>
  );
};

export default ExpenseCard;
