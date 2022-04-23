export const currency = (data) => {
  const locales = {
    RUB: "ru-RU",
    USD: "en-US",
    EUR: "es-ES",
    CNY: "zh",
  };
  const settings = JSON.parse(localStorage.getItem("settings"));

  return new Intl.NumberFormat(locales[settings.currency], {
    style: "currency",
    currency: settings.currency,
  }).format(data);
};
