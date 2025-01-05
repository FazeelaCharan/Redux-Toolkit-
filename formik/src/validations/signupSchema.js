
import * as Yup from "yup";

export const signupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  age: Yup.number()
    .required("Age is required")
    .min(18, "You must be at least 18 years old"),
});
