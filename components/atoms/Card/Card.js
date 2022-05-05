import React from "react";
import PropTypes from "prop-types";

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export function Card({ className = "", style = {}, children }) {
  return (
    <div className={`shadow ${className}`} style={style}>
      {children}
    </div>
  );
}
