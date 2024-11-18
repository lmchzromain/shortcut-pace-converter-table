/**
 * Calculates speed (in km/h) from a given pace.
 * @param {number} minutes - Minutes of the pace.
 * @param {number} seconds - Seconds of the pace.
 * @returns {string} - Speed in km/h, rounded to two decimal places.
 */
export const calculateSpeed = (minutes, seconds) => {
  const totalMinutes = minutes + seconds / 60;
  return (60 / totalMinutes).toFixed(2);
};
