import React from "react";
// import Button from "../Button/Button";
import useCertificate from "../hooks/useCertificate";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  FiCheckCircle,
  FiXCircle,
  FiArrowLeftCircle,
  FiArrowLeft,
} from "react-icons/fi";
import css from "./FormWrapper.module.css";

import cover from "../images/cover.png";

export default function FormWrapper({ cn }) {
  const { info, saveInfo } = useCertificate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    saveInfo({ ...info, [name]: value });
  };

  const handleCancel = () => {
    saveInfo({ ...info, name: "", phone: "", check: false });
  };

  return (
    <div className={css.coverSection}>
      <div className={cn}>
        <img src={cover} alt="BF" className={css.coverImg} />
        <form className={css.userForm}>
          <input
            type="text"
            name="name"
            value={info.name}
            required=""
            placeholder="Ваше ім'я"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            required=""
            placeholder="Tелефон"
            onChange={handleChange}
          />
        </form>
        {info.check ? (
          <>
            <button
              className={css.userFormButtonCancel}
              type="button"
              onClick={handleCancel}
            >
              <FiArrowLeft className={css.coverButtonIcon} />
            </button>
            <button className={css.userFormButtonPay} type="submit">
              <FiCheckCircle
                className={
                  info.name && info.phone
                    ? `${css.coverButtonIcon} ${css.iconActive}`
                    : css.coverButtonIcon
                }
              />
            </button>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

/* <div className={css.userFormBtn}>         
          <Button text="Придбати" />
          <Button
            style={{ color: "rgba(206, 206, 148, 0.323)" }}
            type="button"
            text="Скасувати"
            onClick={handleCancel}
          />
        </div> */
