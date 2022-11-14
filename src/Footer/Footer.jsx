import React from "react";
import logo from "../images/logo.png";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <div>
          <a
            className={css.footerBlockLogo}
            href="https://bodyfactory.com.ua/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={logo} alt="BF" className={css.footerLogoImg} />
            <h3 className={css.footerlogoName}>
              BODY FACTORY \{" "}
              <span className={css.footerlogoAccent}>OFFICIAL</span>
            </h3>
          </a>
        </div>

        <div>
          <h3 className={css.footerAddressTitle}>НАША АДРЕСА</h3>
        </div>

        <div className={css.footerBlockInfo}>
          <p className={css.footerDescr}>
            Студія з персональним інноваційним підходом до клієнтів. Ми
            створюємо комфорт, позбавляємо проблем, надихаємо та відновлюємо вас
            на тижні вперед.
          </p>
        </div>

        <div className={css.footerAddress}>
          <a
            href="https://goo.gl/maps/FwnA2U8h5pGoPJsg6"
            target="_blank"
            rel="noreferrer noopener"
          >
            м. Львів, площа Князя Святослава, 5
          </a>
        </div>
      </div>
    </footer>
  );
}
