import * as Yup from "yup";

const initialValues = { amount: 0, date: "", description: "" };

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .test((val, ctx) => {
      return val !== 0
        ? true
        : ctx.createError({ message: "La cantida debe ser diferente a 0" });
    })
    .required(),
  date: Yup.string().required("Este campo es obligatorio"),
  description: Yup.string().required("Este campo es obligatorio"),
});

export { initialValues, validationSchema };
