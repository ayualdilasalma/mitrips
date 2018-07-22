export function formatNumber(num) {
  const nominal = num.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp ${nominal},-`;
}
