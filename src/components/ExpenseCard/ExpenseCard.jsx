import { Accordion, AccordionCollapse, Button } from "react-bootstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "contexts/Global.context";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import Card from "react-bootstrap/Card";

const ExpenseCard = ({ type, amount, description, id, date }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <button onClick={decoratedOnClick}>{children}</button>;
  };

  const AmountElement = () => {
    let sign = "";
    if (type === "income") {
      sign = "+";
    } else if (type === "expense") {
      sign = "-";
    }

    return (
      <span>
        {sign}
        {amount}
      </span>
    );
  };

  const deleteElement = () => {
    deleteTransaction(id, date);
  };

  return (
    <Accordion defaultActiveKey="0" className="mb-1">
      <Card className="expense-card">
        <Card.Header className="expense-card__header">
          <div className={`icon icon-${type}`} />
          <p>{description}</p>
          <div className="details">
            <AmountElement />
            <CustomToggle eventKey="1">
              <FontAwesomeIcon icon={faChevronDown} />
            </CustomToggle>
          </div>
        </Card.Header>
        <AccordionCollapse eventKey="1">
          <Card.Body>
            <Button className="delete-button w-100" onClick={deleteElement}>
              Eliminar
            </Button>
          </Card.Body>
        </AccordionCollapse>
      </Card>
    </Accordion>
  );
};

export default ExpenseCard;
