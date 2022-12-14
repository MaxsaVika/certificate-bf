import React from "react";
import css from "./Certificates.module.css";
import cssForm from "./FormWrapper/FormWrapper.module.css";
import { config } from "react-spring";
import VerticalCarousel from "./VerticalCarousel/VerticalCarousel";
import FormWrapper from "./FormWrapper/FormWrapper";
import cards from "./DataBase/certificate";
import useCertificate from "./hooks/useCertificate";

const Certificates = () => {
  const { info } = useCertificate();

  return (
    <section className={css.container}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>
          {info.check ? info.title : "ВИБЕРІТЬ СВІЙ ЧОРНИЙ СЕРТИФІКАТ"}
        </h1>
      </div>
      <div className={css.AppVertical}>
        <VerticalCarousel
          cards={cards}
          offsetRadius={2}
          showNavigation={true}
          animationConfig={config.gentle}
        />

        <FormWrapper
          cn={
            info.check
              ? `${cssForm.formWrapper} ${cssForm.checked}`
              : cssForm.formWrapper
          }
        />
      </div>
    </section>
  );
};

export default Certificates;
