import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionCollapse } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const MonthBalance = () => {
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <button onClick={decoratedOnClick}>{children}</button>;
  };

  return (
    <Accordion defaultActiveKey="0">
      <div className="month-balance mb-2">
        <div className="month-balance__current-balance">
          <p>Balance del mes</p>
          <h1>$1070.60</h1>
        </div>
        <div className="month-balance__transaction-logs">
          <div>
            <div className="income-logs">
              <p>Ingresos</p>
              <h1>+$1070.60</h1>
            </div>
            <div className="vertical-line"></div>
            <div className="expenses-logs">
              <p>Gastos</p>
              <h1>-$1452.60</h1>
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
