import React, { useEffect } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";

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
  useEffect(() => {
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }, []);

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
        >
          Last 30 days
        </button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
