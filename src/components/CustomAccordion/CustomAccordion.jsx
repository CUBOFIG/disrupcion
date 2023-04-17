import React from "react";
import { Accordion, AccordionCollapse } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomAccordion({ header, content }) {
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
    return <button onClick={decoratedOnClick}>{children}</button>;
  };

  return (
    <Accordion defaultActiveKey="0" className="mb-1">
      <div>
        {React.Children.map(header, (child) => {
          return React.cloneElement(child, { CustomToggle });
        })}
        <AccordionCollapse eventKey="1">{content}</AccordionCollapse>
      </div>
    </Accordion>
  );
}

export default CustomAccordion;
