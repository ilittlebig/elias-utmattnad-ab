const currencyFormatter = (
  amount: number,
  currency: string,
  locale: string = navigator.language
): string => {
  if (typeof window === "undefined") return "";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(amount);
}

export default currencyFormatter;
