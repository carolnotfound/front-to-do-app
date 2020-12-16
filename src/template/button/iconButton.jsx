import React from "react";

export default ({ click, icon, style }) => {
  const buttonStyle = style || "btn-dark";
  const buttonClass = `btn ${buttonStyle}`;

  return (
    <button type="button" className={buttonClass} onClick={click}>
      <i className={icon}></i>
    </button>
  );
};
