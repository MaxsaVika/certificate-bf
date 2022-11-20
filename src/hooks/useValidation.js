import { REG_NAME, REG_PHONE } from "../utilites/mxutils";

export const useValidation = () => {
  const validate = (fieldName, value) => {
    const validationRules = {
      name: {
        minLength: 3,
        maxLength: 20,
      },
      phone: {
        length: 12,
      },
    };

    const rules = validationRules[fieldName] ?? {};
    const valueLength = value.length;

    if (fieldName === "name") {
      const isValid =
        valueLength >= rules.minLength &&
        valueLength <= rules.maxLength &&
        value.match(REG_NAME);

      return isValid ? "" : "Імʼя має містити від 3 до 20 літер";
    }

    if (fieldName === "phone") {
      const preparedPhone = value.replace(/\s/g, "").slice(1);
      const isValid =
        rules.length === preparedPhone.length && preparedPhone.match(REG_PHONE);

      return isValid ? "" : "Телефон має мати вигляд +380 67 123 34 56";
    }
  };

  return {
    validate,
  };
};
