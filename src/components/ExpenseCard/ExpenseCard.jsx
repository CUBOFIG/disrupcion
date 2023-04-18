import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion, AccordionCollapse, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CustomButton } from "components";

const ExpenseCard = ({ type, amount, description }) => {
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
            <Button className="delete-button w-100">Eliminar</Button>
          </Card.Body>
        </AccordionCollapse>
      </Card>
    </Accordion>
  );
};

export default ExpenseCard;
