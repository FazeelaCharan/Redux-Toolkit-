import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({ name, label, type = "text", control, errors }) => {
  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        
        render={({ field }) => <input type={type} {...field} />}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default InputField;
