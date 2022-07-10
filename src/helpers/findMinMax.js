export const findMinMax = (arr, value) => {
  let min = arr[0][value];
  let max = arr[0][value];
  let averageAmount;

  // eslint-disable-next-line no-plusplus
  for (let i = 1, len = arr.length; i < len; i++) {
    const v = arr[i][value];
    min = v < min ? v : min;
    max = v > max ? v : max;
    averageAmount = max - min;
  }

  return { max, min, averageAmount };
};
