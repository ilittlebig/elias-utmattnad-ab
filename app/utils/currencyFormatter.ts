const currencyFormatter = (
  amount: number,
  currency: string,
  locale: string = navigator.language
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(amount);
}

export default currencyFormatter;
