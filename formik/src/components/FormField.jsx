
import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type, placeholder }) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <Field
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="mt-1 text-sm text-red-600"
    />
  </div>
);

export default FormField;
