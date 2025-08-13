import React, { useEffect } from "react";
import { renderChart } from "../utils/chart.js";
// import { groupByDay, sortByTime } from "../utils/reading";
import useGetData from "../hooks/useGetData/useGetData.js";

/**
 * Displays an energy consumption chart for the last 30 days based on provided readings.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.readings - Array of energy reading objects to be visualized.
 * @returns {JSX.Element} The rendered energy consumption chart component.
 */

export const EnergyConsumption = ({ readings }) => {
  const containerId = "usageChart";

  const [chartData, setChartData] = React.useState([]);
  const [timePeriod, setTimePeriod] = React.useState(30);

  const { data } = useGetData(timePeriod);

  // 1. Crie o mock de uma api para trazer esse data
  useEffect(() => {
    setChartData(data?.datasets);
    renderChart(containerId, data?.datasets)
  }, [data, chartData]);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3">
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
          onClick={() => {
            setTimePeriod(30);
          }}
          type="button"
        >
          Last 30 days
        </button>
        <button
          className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
            onClick={() => {
              // 2. Como você faria para tornar o botão “Last 30 days” funcional para filtrar períodos diferentes (ex: 7, 30, 90 dias)?
              setTimePeriod(90);
            }}
            type="button"
        >
          Last 90 days
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
