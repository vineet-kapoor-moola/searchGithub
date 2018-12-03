import React from "react";
import { connect } from "react-redux";
import FormDropdownField from "../common/FormDropdownField";
import * as actions from "../../actions";

const SearchDropdown = ({
  label,
  key,
  gridClass,
  type,
  options,
  handleDropdownSelect
}) => {
  return (
    <FormDropdownField
      key={key}
      label={label}
      className={gridClass}
      type={type}
      options={options}
      handleChange={handleDropdownSelect}
    />
  );
};

export default connect(
  null,
  actions
)(SearchDropdown);
