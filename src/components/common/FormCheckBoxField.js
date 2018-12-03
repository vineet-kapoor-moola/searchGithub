import React from "react";
import "../../assets/css/common.css";

const FormCheckBox = ({ input, label, type, className, handleChange }) => {
  return (
    <div className={className} style={{ textAlign: "left" }}>
      <label>
        <input
          type={type}
          onChange={e => {
            handleChange(e.target.checked);
          }}
        />
        <span className="font-size-16">{label}</span>
      </label>
    </div>
  );
};

export default FormCheckBox;
