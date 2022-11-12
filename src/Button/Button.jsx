import React from "react";
import css from "./Button.module.css";

function Button({ text, type, onClick, style, icon }) {
  return (
    <button style={style} className={css.btn} type={type} onClick={onClick}>
      {icon}
    </button>
  );
}

export default Button;
