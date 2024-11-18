/**
 * Generates a list of paces immutably, based on a given interval.
 * @param {number} start - Starting pace (in minutes).
 * @param {number} end - Ending pace (in minutes).
 * @param {number} step - Interval in seconds.
 * @returns {Array} - List of pace objects ({ minutes, seconds }).
 */
export const generatePaces = (start, end, step) => {
  const totalSteps = Math.floor((end * 60 - start * 60) / step) + 1;

  return Array.from({ length: totalSteps }, (_, index) => {
    const current = start * 60 + index * step;
    return {
      minutes: Math.floor(current / 60),
      seconds: current % 60,
    };
  });
};
