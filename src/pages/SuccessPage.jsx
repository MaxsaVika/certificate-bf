import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentNotes from "../PaymentNotes/PaymentNotes";

export default function SuccessPage() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <PaymentNotes
      text="Чекаємо Вас у студії масажу BODY FACTORY"
      onClick={goBack}
    />
  );
}
