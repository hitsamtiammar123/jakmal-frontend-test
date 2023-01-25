import numbro from 'numbro';

export const formatNumber = (num) => {
  return `${numbro(num).format({ thousandSeparated: true })}`;
};
