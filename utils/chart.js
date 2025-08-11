import Chart from 'chart.js/auto';

let chart;

/**
 * Formats a timestamp into a date label string in the format "DD/MM".
 *
 * @param {number|string|Date} timestamp - The timestamp to format. Can be a number (milliseconds), a date string, or a Date object.
 * @returns {string} The formatted date label as "DD/MM".
 */
export const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();

  const formatPart = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return `${formatPart(day)}/${formatPart(month + 1)}`;
};

/**
 * Renders a bar chart displaying kWh usage in the specified container.
 *
 * @param {string|HTMLElement} containerId - The ID of the DOM element or the element itself where the chart will be rendered.
 * @param {Array<{ time: string|Date, value: number }>} readings - Array of reading objects containing time and value.
 *
 * @returns {void}
 */
export const renderChart = (containerId, readings) => {
  Chart.Chart.defaults.font.size = "10px";

  Chart.Chart.register.apply(
    null,
    Object.values(Chart).filter((chartClass) => chartClass.id)
  );

  const labels = readings?.map(({ time }) => formatDateLabel(time));
  const values = readings?.map(({ value }) => value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: "#5A8EDA",
        borderRadius: 10,
      },
    ],
  };

  if (chart) {
    chart.destroy();
  }

  chart = new Chart.Chart(containerId, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  });
};
