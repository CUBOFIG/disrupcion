import { useState, useContext } from "react";
import { Formik } from "formik";
import { GlobalContext } from "contexts/Global.context";
import { initialValues, validationSchema } from "./FormSchema";
import { Row, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import FormField from "../FormField/FormField";
import moment from "moment";

const FormTransaction = ({ toggle }) => {
  const { addTransaction } = useContext(GlobalContext);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const onSubmit = (event, { resetForm }) => {
    const newTransaction = {
      id: uuidv4(),
      description: event.description,
      amount: event.amount,
      date: {
        day: parseInt(moment(event.date).format("DD")),
        month: moment(event.date).format("MMMM"),
        year: parseInt(moment(event.date).format("YYYY")),
      },
    };

    addTransaction(newTransaction);
    resetForm();
    handleClose();
  };

  const handleClose = () => toggle(false);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validateOnChange={validateAfterSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <FormField
                value={values.description}
                handleChange={handleChange}
                error={errors.description}
                type="text"
                placeholder="Especifique el concepto de la transacción..."
                name="description"
                label="Concepto"
              />

              <FormField
                extraText="$"
                value={values.amount}
                handleChange={handleChange}
                error={errors.amount}
                type="number"
                placeholder="00.00"
                name="amount"
                label="Monto de la transacción"
              />

              <FormField
                value={values.date}
                handleChange={handleChange}
                error={errors.date}
                type="date"
                name="date"
                label="Fecha"
              />
            </Row>
            <Button
              type="submit"
              className="w-100"
              onClick={() => {
                setValidateAfterSubmit(true);
              }}
            >
              Agregar Movimiento
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormTransaction;
