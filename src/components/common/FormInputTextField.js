import React from "react";
import "../../assets/css/common.css";

const FormTextField = ({
  input,
  label,
  type,
  className,
  // updateValue,
  meta: { error, touched }
}) => {
  // input.value = updateValue();
  return (
    <div className={className}>
      <label style={{ fontSize: "16px" }}>{label}</label>
      <input
        {...input}
        style={{
          marginBottom: "5px",
          border: "1px solid black",
          textIndent: "15px"
        }}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
export default FormTextField;
