// import { Formik, Form, Field } from "formik";
import { GlobalContext } from "contexts/Global.context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
// import Col from "react-bootstrap/Col";
import moment from "moment";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./FormSchema";
import FormField from "./FormField";

const FormTransaction = ({ toggle }) => {
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event, { resetForm }) => {
    console.log(resetForm);
    const newTransaction = {
      id: uuidv4(),
      description: event.description,
      amount: event.amount,
      date: {
        day: moment(event.date).format("DD"),
        month: moment(event.date).format("MMMM"),
        year: moment(event.date).format("YYYY"),
      },
    };

    addTransaction(newTransaction);
    console.log(newTransaction);
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
            <Button type="submit">Agregar Movimiento</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormTransaction;
