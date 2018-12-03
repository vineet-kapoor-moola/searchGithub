import React from "react";

const Button = ({ disable }) => {
  return (
    <button
      type="submit"
      className="blue btn-flat center white-text"
      disabled={disable}
    >
      Search
    </button>
  );
};

export default Button;
