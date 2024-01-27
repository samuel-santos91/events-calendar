import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Please enter a title"),

  description: yup
    .string()
    .max(100, "Description must contain a maximum of 50 characters")
    .required("Please enter a description"),

  time: yup.string().required("Please enter a time"),
});
