import { useContext } from "react";
import CertificateContext from "../context/CertificateContext";

const useCertificate = () => {
  const context = useContext(CertificateContext);

  return context;
};

export default useCertificate;
