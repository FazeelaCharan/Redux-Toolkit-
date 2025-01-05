// src/components/FormButton.js
import React from "react";

const FormButton = ({ isSubmitting, label }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? "Submitting..." : label}
  </button>
);

export default FormButton;
