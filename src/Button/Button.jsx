import React from "react";
import css from "./Button.module.css";

function Button({ text, type, onClick, style }) {
  return (
    <button style={style} className={css.btn} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
