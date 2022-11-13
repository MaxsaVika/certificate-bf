import React from "react";
import css from "./Header.module.css";
import logo from "../images/logo.png";

// import SocialLinks from "../DataBase/SocialLinks";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaViber,
  FaPhoneAlt,
} from "react-icons/fa";

// const iconNames = ["instagram", "facebook", "viber", "telegram"];

// export default function Header() {
//   return (
//     <div className={css.Header}>
//       <p className={css.logo}>BF</p>
//       <div className={css.socialContainer}>
//         <p>
//           <FaPhoneAlt /> 067-123-45-67
//         </p>
//         <ul className={css.socialList}>
//           {iconNames.map((iconName, i) => (
//             <li key={i} className={css.socialItem}>
//               <a href="https://react-icons.github.io/react-icons">
//                 <SocialLinks iconName={iconName} styles={{ width: 16 }} />
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default function Header() {
  return (
    <div className={css.Header}>
      {/* <div className={css.headerLogo}>
        <img src={logo} alt="BF" className={css.logoImg} />
        <h2 className={css.logoName}>BODY FACTORY</h2>
      </div> */}
      <div>
        <a
          className={css.headerLogo}
          href="https://bodyfactory.com.ua/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={logo} alt="BF" className={css.logoImg} />
          <h2 className={css.logoName}>BODY FACTORY</h2>
        </a>
      </div>
      <div className={css.socialContainer}>
        <p className={css.socialPhone}>+38 096 918 90 89</p>
        <ul className={css.socialList}>
          <li className={css.socialItemMob}>
            <a
              href="https://react-icons.github.io/react-icons"
              rel="noreferrer"
              target="_blank"
            >
              <FaPhoneAlt className={css.socialIcon} />
            </a>
          </li>

          <li className={css.socialItemDesk}>
            <a
              href="https://react-icons.github.io/react-icons"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF className={css.socialIcon} />
            </a>
          </li>

          <li className={css.socialItem}>
            <a
              href="https://react-icons.github.io/react-icons"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram className={css.socialIcon} />
            </a>
          </li>

          <li className={css.socialItemDesk}>
            <a
              href="https://react-icons.github.io/react-icons"
              rel="noreferrer"
              target="_blank"
            >
              <FaTelegramPlane className={css.socialIcon} />
            </a>
          </li>

          <li className={css.socialItemDesk}>
            <a
              href="https://react-icons.github.io/react-icons"
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
