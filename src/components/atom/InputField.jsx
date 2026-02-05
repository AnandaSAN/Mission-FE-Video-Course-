import React from "react";

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={`w-full border border-[#3A35411F] rounded-md p-3 ${type === "password" ? "pr-10" : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
