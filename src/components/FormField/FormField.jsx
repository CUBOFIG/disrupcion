import Col from "react-bootstrap/Col";
import { FormGroup, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const FormField = ({
  label,
  name,
  placeholder,
  type,
  error,
  value,
  handleChange,
  extraText,
  defaultValue,
}) => (
  <FormGroup as={Col} md="12" controlId="validationFormik04" className="mt-2">
    <Form.Label>{label}</Form.Label>
    <InputGroup>
      {extraText && <InputGroup.Text>{extraText}</InputGroup.Text>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!error}
        defaultValue={defaultValue}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputGroup>
  </FormGroup>
);
export default FormField;
