import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Button = (props) => {
  const { label, className, handleClick } = props;

  return (
    <button id="bottom-right" className={className} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
