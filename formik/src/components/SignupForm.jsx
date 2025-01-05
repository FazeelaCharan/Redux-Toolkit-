
import React from "react";
import { Formik, Form } from "formik";
import FormField from "./FormField";
import FormButton from "./FormButton";
import { signupSchema } from "../validations/signupSchema";

const initialValues = {
  email: "",
  password: "",
  age: "",
};

const SignupForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Submitted:", values);
    alert("your form has successfully Submitted :)");

    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
      <p className="text-gray-600 mb-6">
        Enter your details to create an account
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <FormField
              label="Age"
              name="age"
              type="number"
              placeholder="Enter your age"
            />
            <FormButton isSubmitting={isSubmitting} label="Sign Up" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
