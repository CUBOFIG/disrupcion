import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ message, onInput }) => {
  return (
    <Button className="custom-button" onClick={onInput}>
      {message}
    </Button>
  );
};

export default CustomButton;
