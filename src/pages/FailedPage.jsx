import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentNotes from "../PaymentNotes/PaymentNotes";

export default function FailedPage() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <PaymentNotes text="Зачекайте, щось пішло не так..." onClick={goBack} />
  );
}
