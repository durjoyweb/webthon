import React from "react";
import StateCard from "./StateCard";
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";

// --- Data for the State Cards ---
// Storing data this way makes the component cleaner and easier to update.
const statesData = [
  {
    name: "ODISHA",
    stats: { do: 4, discuss: 0, users: 1912, talk: 0, blog: 2 },
  },
  {
    name: "PUDUCHERRY",
    stats: { do: 1, discuss: 0, users: 131, talk: 0, blog: 0 },
  },
  {
    name: "RAJASTHAN",
    stats: { do: 1, discuss: 0, users: 71704, talk: 0, blog: 0 },
  },
  {
    name: "SIKKIM",
    stats: { do: 0, discuss: 0, users: 144, talk: 0, blog: 0 },
  },
  {
    name: "TAMIL NADU",
    stats: { do: 6, discuss: 10, users: 132929, talk: 0, blog: 0 },
  },
  {
    name: "TRIPURA",
    stats: { do: 11, discuss: 7, users: 18593, talk: 21, blog: 4 },
  },
  {
    name: "UTTAR PRADESH",
    stats: { do: 2, discuss: 4, users: 293017, talk: 0, blog: 5 },
  },
  {
    name: "UTTARAKHAND",
    stats: { do: 4, discuss: 11, users: 74535, talk: 0, blog: 5 },
  },
];

const StatesSection = () => {
  return (
    <div className="bg-blue-50/70 min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section: Title and Description */}
        <div className="lg:w-1/4 text-center lg:text-left pt-8">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-blue-900">MyGov</span>
            <br />
            <span className="text-blue-500">State/UTs</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Engage and Contribute to Activities Published by States and Union
            Territories Across India.
          </p>
        </div>

        {/* Right Section: Grid of State Cards */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {statesData.map((state) => (
            <StateCard
              key={state.name}
              stateName={state.name}
              stats={state.stats}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed top-1/2 -translate-y-1/2 right-5 sm:right-8 flex flex-col items-center space-y-2"></div>
    </div>
  );
};

export default StatesSection;
