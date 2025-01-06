import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Form = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" label="Name" control={control} errors={errors} />
      <InputField
        name="email"
        label="Email"
        type="email"
        control={control}
        errors={errors}
      />
      <InputField
        name="password"
        label="Password"
        type="password"
        control={control}
        errors={errors}
      />
      <InputField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        control={control}
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
