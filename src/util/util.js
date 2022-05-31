export const base64Regex =
  /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/

export const formatMoney = (money) => `R$ ${money.toFixed(2) || '0,00'}`
