import React, { useEffect, useState } from "react";
import css from "./Certificates.module.css";
import cssForm from "./FormWrapper/FormWrapper.module.css";
import { config } from "react-spring";
import VerticalCarousel from "./VerticalCarousel/VerticalCarousel";
import FormWrapper from "./FormWrapper/FormWrapper";
// import cards from "./DataBase/certificate";
import useCertificate from "./hooks/useCertificate";

const Certificates = () => {
  const { info } = useCertificate();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setCards(myJson);
      });
  }, []);

  return (
    <section className={css.container}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>Ваш сертифікат у світ BODY FACTORY</h1>
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
