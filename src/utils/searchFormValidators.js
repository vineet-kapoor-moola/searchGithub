import { validStars } from "github-query-validator";
import { queryValidator } from "github-query-validator";

export const validateStars = input => {
  if (!validStars(input)) {
    return "You are looking at wrong stars";
  }
};

export const validateQuery = input => {
  if (!queryValidator(input)) {
    return "You must enter a valid query";
  }
};

export const requiredInput = input => {
  return input ? undefined : `Input is required`;
};

//
// function requiredField(field, input) {
//   debugger;
//   let noInputErrorMapper = {
//     query: field => {
//       return `You must provide a ${field}`;
//     },
//     stars: () => {
//       return `You must try to look for some starry repos`;
//     }
//   };
//   return function requiredInput(field) {
//     debugger;
//     return noInputErrorMapper[field](field);
//   };
// }

// function validationFn(values) {
//   const errors = {};
//
//   let requiredFields = ["query", "stars"];
//
//   let noValueErrorMapper = {
//     query: field => {
//       return `You must provide a ${field}`;
//     },
//     stars: () => {
//       return `You must try to look for some starry repos`;
//     }
//   };

// function starsValidator(field, input) {
//   return validStars(input);
// }
// function isValidField(field, input) {
//   let invalidErrorMapper = {
//     query: input => {
//       return true;
//     },
//     stars: input => {
//       return starsValidator(input);
//     }
//   };
//   return invalidErrorMapper[field](input);
// }

// requiredFields.forEach(field => {
//   if (!values[field]) {
//     errors[field] =
//       noValueErrorMapper[field] && noValueErrorMapper[field](field);
//   }
// else if (!isValidField(field, values[field])) {
//   errors[field] = "enter valid value";
// }
// });

//   return errors;
// }
