import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaViber } from "react-icons/fa";

const icons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  telegram: FaTelegram,
  viber: FaViber,
};

const getIcon = (iconName, styles) => {
  const Icon = icons[iconName];
  if (!Icon) {
    return <></>;
  }

  return <Icon style={styles} />;
};

const SocialLinks = ({ iconName, styles }) => getIcon(iconName, styles);

export default SocialLinks;
