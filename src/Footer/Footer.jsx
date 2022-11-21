import React from "react";
import css from "./Footer.module.css";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <div className={css.footerLogoWrapper}>
          <a
            className={css.footerBlockLogo}
            href="https://bodyfactory.com.ua/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/images/logo.png"
              alt="BF"
              className={css.footerLogoImg}
            />
            <h3 className={css.footerlogoName}>
              BODY FACTORY \{" "}
              <span className={css.footerlogoAccent}>OFFICIAL</span>
            </h3>
          </a>
        </div>

        <div className={css.footerPhone}>
          <a href="tel:+380969189089" rel="noreferrer" target="_blank">
            +38 096 918 90 89
          </a>
          <a
            href="https://goo.gl/maps/FwnA2U8h5pGoPJsg6"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoLocationSharp className={css.footerLocationIcon} />
          </a>
        </div>
      </div>
      <div className={css.politics}>
        <span>Ознайомтеся з нашою</span>{" "}
        <a href="privacy.html" target="_blank" rel="noopener">
          Політикою конфіденційності
        </a>{" "}
        <span>та</span>{" "}
        <a href="user-agreement.html" target="_blank" rel="noopener">
          Угодою користувача.
        </a>
        {"  "}
        <span>
          Натискаючи на кнопку “Придбати”, Ви погоджуєтеся з умовами викладеними
          в цих документах.
        </span>
      </div>
    </footer>
  );
}
