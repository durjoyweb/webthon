import React from "react";

const GroupCard = ({
  icon: Icon,
  title,
  notificationCount,
  stats,
  url = "#",
}) => {
  return (
    <a
      href={url}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-start mb-6">
        {/* Icon with Notification Badge */}
        <div className="relative">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <Icon size={24} />
          </div>
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 ml-4 leading-tight">
          {title}
        </h3>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </a>
  );
};

export default GroupCard;