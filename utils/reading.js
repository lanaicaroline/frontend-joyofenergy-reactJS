/**
 * Generates an array of synthetic reading objects with timestamps and random values.
 *
 * @param {number} [length=1200] - The number of readings to generate.
 * @returns {Promise<Array<{time: number, value: number}>>} 
 *   A promise that resolves to an array of readings, each containing:
 *   - time: The timestamp in milliseconds for the reading.
 *   - value: A random value between 0.4 and 1.1.
 */
export const getReadings = async (length = 1200) => {
  const current = Date.now();
  const hour = 1000 * 60 * 60;
  return [...new Array(length)].map((_, index) => ({
    time: current - index * hour,
    value: Math.random() * 0.7 + 0.4,
  }));
};

/**
 * Groups an array of readings by day, summing the values for each day.
 *
 * @param {Array<{ time: string | number | Date, value: number }>} readings - The array of reading objects to group. Each object should have a `time` (date/time string, timestamp, or Date object) and a `value` (number).
 * @returns {Array<{ time: number, value: number }>} An array of objects, each representing a day with the summed value. The `time` property is a timestamp (milliseconds since epoch) at midnight of the day.
 */
export const groupByDay = (readings) => {
  const groupedByDay = readings.reduce((curr, { time, value }) => {
    const readingDate = new Date(time);
    const day = new Date(
      readingDate.getFullYear(),
      readingDate.getMonth(),
      readingDate.getDate()
    ).getTime();
    if (!curr[day]) curr[day] = 0;
    curr[day] += value;
    return curr;
  }, {});

  return Object.entries(groupedByDay).map(([day, value]) => ({
    time: Number(day),
    value,
  }));
};

/**
 * Sorts an array of reading objects by their `time` property in ascending order.
 *
 * @param {Array<{time: number}>} readings - The array of reading objects to sort.
 * @returns {Array<{time: number}>} A new array of readings sorted by time.
 */
export const sortByTime = (readings) => {
  return [...readings].sort(
    (readingA, readingB) => readingA.time - readingB.time
  );
};
