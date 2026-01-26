export const getFrequencyName = (value: number) => {
  if (value <= 1) return 'very rare';
  if (value === 2) return 'rare';
  if (value === 3) return 'occasional';
  if (value === 4) return 'common';

  return 'very common';
};
