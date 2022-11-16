import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentNotes from "../PaymentNotes/PaymentNotes";

export default function PendingPage() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return <PaymentNotes text="Очікую....." onClick={goBack} />;
}
