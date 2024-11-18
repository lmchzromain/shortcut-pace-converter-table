/**
 * Calculates the total time for a given distance.
 * @param {number} minutes - Minutes of the pace.
 * @param {number} seconds - Seconds of the pace.
 * @param {number} distance - Distance in kilometers.
 * @returns {string} - Formatted time (h:mm:ss).
 */
export const calculateDistanceTime = (minutes, seconds, distance) => {
  const totalSeconds = (minutes * 60 + seconds) * distance;
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = Math.floor(totalSeconds % 3600);
  const formattedMinutes = String(Math.floor(remainingSeconds / 60)).padStart(
    2,
    "0"
  );
  const formattedSeconds = String(remainingSeconds % 60).padStart(2, "0");

  return `${hours}:${formattedMinutes}:${formattedSeconds}`;
};
