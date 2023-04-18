import * as Yup from "yup";

const initialValues = { amount: 0, date: "", description: "" };

const validationSchema = Yup.object().shape({
  amount: Yup.number().required(),
  date: Yup.string().required(),
  description: Yup.string().required(),
});

export { initialValues, validationSchema };
