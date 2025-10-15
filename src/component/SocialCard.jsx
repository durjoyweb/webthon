import React from "react";

const SocialCard = ({ icon, count, unit, metric, platform, url, color }) => {
  const IconComponent = icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center"
    >
      <div className="mb-3">
        <IconComponent size={48} className="text-gray-700" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">
        {count} <span className="font-semibold">{unit}</span>
      </h3>
      <p className="text-gray-500 text-sm">{metric}</p>
      <p className="font-semibold mt-1" style={{ color: color }}>
        {platform}
      </p>
    </a>
  );
};

export default SocialCard;
