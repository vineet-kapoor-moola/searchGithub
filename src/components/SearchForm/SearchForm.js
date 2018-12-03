import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import QueryString from "query-string";
import FormInputTextField from "../common/FormInputTextField";
import SearchLicenseDropdown from "./SearchDropdown";
import SearchForkCheckbox from "./SearchForkCheckbox";
import Button from "../common/Button";
// validators
import {
  validateStars,
  validateQuery,
  requiredInput
} from "../../utils/searchFormValidators";

import FIELDS from "./searchFields";
//actions
import * as actions from "../../actions";
// css
import "../../assets/css/searchForm.css";

function getValidators(field) {
  if (field === "query") {
    return [requiredInput, validateQuery];
  } else if (field === "stars") {
    return [requiredInput, validateStars];
  }
}

class SearchForm extends Component {
  renderFormFields() {
    const fieldMapper = {
      select: ({ label, name, gridClass, type, options }) => {
        return (
          <SearchLicenseDropdown
            key={name}
            label={label}
            gridClass={gridClass}
            type={type}
            options={options}
          />
        );
      },
      text: ({ label, name, gridClass, type }) => {
        // updateValue={() => {
        //   if (name === "query") return formValues.query;
        //   return formValues.stars;
        // }
        return (
          <Field
            key={name}
            type={type}
            name={name}
            component={FormInputTextField}
            label={label}
            className={gridClass}
            validate={getValidators(name)}
          />
        );
      },
      checkbox: ({ label, name, gridClass, type }) => {
        return (
          <SearchForkCheckbox
            name={name}
            label={label}
            gridClass={gridClass}
            type={type}
            key={name}
          />
        );
      }
    };

    return FIELDS.map((row, index) => {
      var rowFields = row.map(({ label, name, gridClass, type, options }) => {
        return fieldMapper[type]({ label, name, gridClass, type, options });
      });

      return (
        <div key={index} className="row">
          {rowFields}
        </div>
      );
    });
  }

  render() {
    let {
      handleFormSubmit,
      handleSubmit,
      invalid,
      formValues,
      license,
      fork,
      history,
      location
    } = this.props;

    return (
      <div className="container search-form-container center">
        <div className="form-heading">
          Even Financial Github Repository Search
        </div>
        <form
          className="search-form"
          onSubmit={handleSubmit(() =>
            handleFormSubmit(formValues, license, fork, history)
          )}
        >
          {this.renderFormFields()}
          <Button disable={invalid} />
        </form>
      </div>
    );
  }
}

// function getFormValuesFromQueryString(qString) {
//   let queryArray = qString.q.split(" ");
//   let formObj = {
//     query: queryArray[0],
//     stars: queryArray[1].split(":")[1]
//   };
//   return formObj;
// }

function mapStateToProps(state) {
  // let formObj = getFormValuesFromQueryString(
  //   QueryString.parse(ownProps.location.search)
  // );

  return {
    formValues: state.form.searchForm && state.form.searchForm.values,
    license: state.selectedLicense,
    fork: state.showOnlyForkedRepos
  };
}

export default reduxForm({
  form: "searchForm"
})(connect(mapStateToProps)(SearchForm));
