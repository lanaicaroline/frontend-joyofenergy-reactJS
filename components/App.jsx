import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar.jsx";
import { EnergyConsumption } from "./EnergyConsumption.jsx";
import { getReadings } from "../utils/reading";

/**
 * Main application component for displaying energy consumption data.
 *
 * Fetches readings asynchronously on mount and renders the sidebar and
 * energy consumption components once data is available.
 *
 * @component
 *
 * @returns {JSX.Element|null} The rendered application layout, or null while loading.
 */
export const App = () => {
  const [readings, setReadings] = useState();

  useEffect(async () => {
    const result = await getReadings();
    setReadings(result);
  }, []);

  if (!readings) {
    return null;
  }

  return (
    <div className="background shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <Sidebar />
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <EnergyConsumption readings={readings} />
      </article>
    </div>
  );
};
