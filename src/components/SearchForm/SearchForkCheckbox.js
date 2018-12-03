import React from "react";
import { connect } from "react-redux";
import FormCheckBoxField from "../common/FormCheckBoxField";
import * as actions from "../../actions";

const SearchForkCheckbox = ({
  label,
  name,
  gridClass,
  type,
  handleForkCheckboxChange
}) => {
  return (
    <FormCheckBoxField
      key={name}
      label={label}
      className={gridClass}
      type={type}
      handleChange={handleForkCheckboxChange}
    />
  );
};

export default connect(
  null,
  actions
)(SearchForkCheckbox);
