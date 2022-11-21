import React, { useState } from "react";

const CertificateContext = React.createContext();

export const defaultInfo = {
  id: "",
  title: "",
  price: "",
  check: false,
};

export const CertificateProvider = ({ children, info }) => {
  const [currentInfo, setCurrentInfo] = useState(info || defaultInfo);

  const saveInfo = (values) => {
    setCurrentInfo(values);
  };

  return (
    <CertificateContext.Provider value={{ info: currentInfo, saveInfo }}>
      {children}
    </CertificateContext.Provider>
  );
};

export const SettingsConsumer = CertificateContext.Consumer;

export default CertificateContext;
