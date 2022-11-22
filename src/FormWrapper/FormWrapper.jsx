import React, { useState, useEffect } from "react";
import useCertificate from "../hooks/useCertificate";
import { TbArrowNarrowLeft, TbCheck } from "react-icons/tb";
import css from "./FormWrapper.module.css";
import InputMask from "react-input-mask";
import { useDrag } from "@use-gesture/react";
import { useValidation } from "../hooks/useValidation";
import BarLoader from "react-spinners/BarLoader";

export default function FormWrapper({ cn }) {
  const { info, saveInfo } = useCertificate();
  const { validate } = useValidation();

  const [error, setError] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [validationResult, setValidationResult] = useState({
    name: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeName = (e) => setClientName(e.target.value);
  const handleChangePhone = (e) => setClientPhone(e.target.value);

  useEffect(() => {
    setValidationResult({ name: "", phone: "" });

    if (clientName && clientPhone) {
      setIsDisabled(false);
    }
  }, [clientName, clientPhone]);

  const handleCancel = () => {
    saveInfo((prev) => ({ ...prev, check: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validatedName = validate("name", clientName);
    const validatedPhone = validate("phone", clientPhone);
    const hasErrors = [validatedName, validatedPhone].filter((item) => !!item);

    if (hasErrors.length > 0) {
      setIsDisabled(true);
      setValidationResult((prev) => ({
        ...prev,
        name: validatedName,
      }));
      setValidationResult((prev) => ({
        ...prev,
        phone: validatedPhone,
      }));
      return;
    }

    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch("https://tsless.vercel.app/api/", {
        method: "POST",
        body: JSON.stringify({
          amount: info.price,
          orderDescription: info.title,
          orderId: `${info.id}_${new Date().getTime()}`,
          name: clientName,
          phone: clientPhone,
        }),
      });

      const responseJSON = await response.json();

      if ("url" in responseJSON) {
        const url = responseJSON.url;

        window.open(url, "_self");
      } else {
        setError(error);
      }
    } catch (error) {
      setError(error.message);
      return error;
    } finally {
      setClientName("");
      setClientPhone("");
      setIsLoading(false);
    }
  };

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (!active && Math.abs(mx) > 10 && xDir < 0) {
        saveInfo((prev) => ({ ...prev, check: false }));
        cancel();
      }
    }
  );

  return (
    <div className={css.coverSection}>
      <div {...bind()} className={cn}>
        <img src="/images/cover.png" alt="BF" className={css.coverImg} />

        {info.check ? (
          <>
            <form className={css.userForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="clientName"
                value={clientName}
                className={
                  !!validationResult["name"]
                    ? `${css.userFormInput} ${css.inputError}`
                    : css.userFormInput
                }
                autoComplete="off"
                required
                placeholder="Ваше ім'я"
                onChange={(e) => handleChangeName(e)}
              />

              <InputMask
                type="tel"
                name="clientPhone"
                value={clientPhone}
                onChange={(e) => handleChangePhone(e)}
                className={
                  !!validationResult["phone"]
                    ? `${css.userFormInput} ${css.inputError}`
                    : css.userFormInput
                }
                required
                mask="+380\ 99 999 99 99"
                maskChar=" "
                alwaysShowMask
              />

              <div className={css.errorMessageWrapper}>
                {!!validationResult["name"] ? (
                  <p className={css.errorMessage}>{validationResult["name"]}</p>
                ) : (
                  <p className={css.errorMessage}> </p>
                )}

                {!!validationResult["phone"] && (
                  <p className={css.errorMessage}>
                    {validationResult["phone"]}
                  </p>
                )}
              </div>

              <button
                className={css.userFormButtonPay}
                type="submit"
                disabled={isDisabled || isLoading}
              >
                {isLoading ? (
                  <BarLoader
                    color="rgb(248, 211, 47)"
                    className={css.coverButtonIcon}
                  />
                ) : (
                  <>
                    Придбати <TbCheck className={css.coverButtonIcon} />{" "}
                  </>
                )}
              </button>
            </form>

            <button
              className={css.userFormButtonCancel}
              type="button"
              onClick={handleCancel}
            >
              <TbArrowNarrowLeft className={css.coverButtonIcon} />
              Скасувати
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
