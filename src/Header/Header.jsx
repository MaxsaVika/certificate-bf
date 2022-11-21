import React from "react";
import css from "./Header.module.css";

// import SocialLinks from "../DataBase/SocialLinks";
import {
  FaFacebookF,
  FaInstagram,
  // FaTelegramPlane,
  FaViber,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={css.Header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" className={css.headerLogo}>
          <img src="/images/logo.png" alt="BF" className={css.logoImg} />
          <h2 className={css.logoName}>
            BODY FACTORY \ <span className={css.logoAccent}>BLACK FRIDAY</span>
          </h2>
        </Link>
      </div>
      <div className={css.socialContainer}>
        <a
          className={css.socialPhone}
          href="tel:+380969189089"
          rel="noreferrer"
          target="_blank"
        >
          +38 096 918 90 89
        </a>
        <ul className={css.socialList}>
          <li className={css.socialItemMob}>
            <a href="tel:+380969189089" rel="noreferrer" target="_blank">
              <FaPhoneAlt className={css.socialIcon} />
            </a>
          </li>

          <li className={`${css.socialItemDesk} ${css.socialIconFb}`}>
            <a
              href="https://www.facebook.com/bodyfactory.ua/"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF className={css.socialIcon} />
            </a>
          </li>

          <li className={css.socialItem}>
            <a
              href="https://www.instagram.com/bodyfactory.ua/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram className={css.socialIcon} />
            </a>
          </li>

          {/* <li className={css.socialItemDesk}>
            <a href="https://t.me/MaxsaCEO" rel="noreferrer" target="_blank">
              <FaTelegramPlane className={css.socialIcon} />
            </a>
          </li> */}

          <li className={css.socialItemDesk}>
            <a
              href="viber://chat?number=+380969189089"
              rel="noreferrer"
              target="_blank"
            >
              <FaViber className={css.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
