export const REG_PHONE = "^(?:38)?(0\\d{9})$"; //UA //without +
export const REG_NAME = "^([a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ\\-\\'\\s\\ʼ]{3,20})$"; //UA

export const checkPhoneFormat = (data) => {
  return data.match(REG_PHONE) !== null;
};

export const checkNameFormat = (data) => {
  return data.match(REG_NAME) !== null;
};
