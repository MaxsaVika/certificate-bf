import React from "react";
import Button from "../Button/Button";
import css from "./PaymentNotes.module.css";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function PaymentNotes({ text, onClick }) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={css.content}>
          <h3 className={css.infoText}>{text}</h3>
          <Button
            type="button"
            onClick={onClick}
            icon={<TbArrowNarrowRight className={css.iconBack} />}
          />
        </div>
      </div>
    </div>
  );
}
