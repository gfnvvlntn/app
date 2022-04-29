export const currency = (data) => {
  const locales = {
    RUB: "ru-RU",
    USD: "en-US",
    EUR: "es-ES",
    CNY: "zh",
  };

  try {
    const { currency } = JSON.parse(localStorage.getItem("settings"));
    return new Intl.NumberFormat(locales[currency] || "ru-RU", {
      style: "currency",
      currency: currency || "RUB",
    }).format(data);
  } catch (e) {
    console.log(e);
  }
};
