import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ message, onInput, className, disabled }) => {
  return (
    <Button
      className={`custom-button ${className}`}
      onClick={onInput}
      disabled={disabled}
    >
      {message}
    </Button>
  );
};

export default CustomButton;
