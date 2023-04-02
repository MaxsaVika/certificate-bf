import React from "react";
import css from "./Button.module.css";

function Button({ text, type, onClick, style, icon, accent }) {
  return (
    <button style={style} className={css.btn} type={type} onClick={onClick}>
      <span>{icon}</span>
      <span> {text}</span>
      <span className={css.btnAccent}>{accent}</span>
    </button>
  );
}

export default Button;
