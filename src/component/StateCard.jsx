import React from "react";
import { FaLandmark } from "react-icons/fa"; // A generic icon for the states

// A helper component for displaying each statistic
const Stat = ({ value, label }) => (
  <div className="text-center">
    <p className="font-bold text-blue-900 text-lg sm:text-xl">
      {value.toLocaleString("en-IN")}
    </p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

const StateCard = ({ stateName, stats }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div className="text-blue-400">
          <FaLandmark size={32} />
        </div>
        <div className="flex space-x-4">
          <Stat value={stats.do} label="Do" />
          <Stat value={stats.discuss} label="Discuss" />
        </div>
      </div>
      <div className="flex justify-between items-end mb-4">
        <Stat value={stats.users} label="Users" />
        <div className="flex space-x-4">
          <Stat value={stats.talk} label="Talk" />
          <Stat value={stats.blog} label="Blog" />
        </div>
      </div>
      <div className="border-t border-gray-200 pt-3">
        <h3 className="text-center font-semibold text-gray-700 tracking-wider">
          {stateName}
        </h3>
      </div>
    </div>
  );
};

export default StateCard;
