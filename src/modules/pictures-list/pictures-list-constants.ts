export const PLACEHOLDERS_COUNT = 10;

export const PLACEHOLDERS_ARR = new Array(PLACEHOLDERS_COUNT)
  .fill(null)
  .map((_, i) => ({ id: `pictures-list-placeholder-${i}` }));
