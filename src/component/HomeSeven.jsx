import React from "react";

// --- Placeholder Data for In Focus Activities ---
const inFocusActivities = [
  {
    id: 1,
    activityType: "Do",
    title: "Reel Contest for Vikaspedia User Stories",
    image:
      "https://static.mygov.in/static/s3fs-public/mygov_1756987732123183681_0.jpg", // Replace with actual path
    link: "#reel-contest",
  },
  {
    id: 2,
    activityType: "Do",
    title: "Inviting Ideas for Anganwadi Centre of the Future",
    image:
      "https://static.mygov.in/static/s3fs-public/mygov_1758867492123183681_0.png", // Replace with actual path
    link: "#anganwadi-ideas",
  },
  {
    id: 3,
    activityType: "Discuss",
    title:
      "Inviting Ideas for Non-Institutionalised Rehabilitation of Divyaang Children",
    image:
      "https://static.mygov.in/static/s3fs-public/mygov_1759231153110258821.png", // Replace with actual path
    link: "#divyaang-rehab",
  },
  // Add more activities as needed to make the carousel scrollable
  {
    id: 4,
    activityType: "Do",
    title: "Swachhata Pakhwada 2024: Contribute to a cleaner India",
    image:
      "https://static.mygov.in/static/s3fs-public/mygov_1759231153110258821.png",
    link: "#swachhata",
  },
  {
    id: 5,
    activityType: "Discuss",
    title: "National Policy on Education: Your feedback matters",
    image:
      "https://static.mygov.in/static/s3fs-public/mygov_1756987732123183681_0.jpg",
    link: "#education-policy",
  },
];

// --- Sub-Component for an "In Focus" Activity Card ---
const InFocusCard = ({ activityType, title, image, link }) => (
  <a
    href={link}
    className="
            flex-none 
            w-80 md:w-96 
            bg-white 
            rounded-lg 
            shadow-md 
            overflow-hidden 
            mr-6 
            transform hover:scale-[1.01] transition duration-200 
            flex flex-col
        "
  >
    {/* Top Logos/Badges */}

    {/* Main Image */}
    <div className="h-48 w-full relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none"; // Hide broken image icon
          e.target.parentElement.style.backgroundColor = "#e5e7eb"; // Placeholder gray
          e.target.parentElement.classList.add(
            "flex",
            "items-center",
            "justify-center"
          );
          e.target.parentElement.innerHTML = `<span class="text-gray-500">Image N/A</span>`;
        }}
      />
      {/* Small orange tag on some images (e.g., Anganwadi) */}
      {activityType === "Do" && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
          {activityType}
        </div>
      )}
    </div>

    {/* Bottom Content Area */}
    <div className="p-4 flex-grow flex flex-col justify-between">
      <p className="text-sm text-gray-500 mb-2">Activity: {activityType}</p>
      <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {title}
      </h4>
      {/* This empty div pushes content up, useful in flex-col justify-between */}
      <div className="flex-grow"></div>
      {/* Placeholder for additional details if needed, e.g., a "View More" link */}
    </div>
  </a>
);

// --- Main HomeSeven Component ---
const HomeSeven = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Decorative Corner Element */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-500" />

      {/* Header */}
      <div className="mb-8 pl-8 pt-8">
        <h2 className="text-3xl font-bold text-gray-800">IN FOCUS</h2>
        <p className="text-gray-500">
          Let's take part in this and be a changemaker
        </p>
      </div>

      {/* Horizontal Scrollable Container */}
      <div
        className="
                flex 
                overflow-x-auto 
                py-4 
                px-8 
                scrollbar-hide /* Tailwind plugin for hiding scrollbar, install if needed */
                md:scrollbar-default /* Show on larger screens if desired */
            "
      >
        {inFocusActivities.map((activity) => (
          <InFocusCard key={activity.id} {...activity} />
        ))}
      </div>

      {/* Navigation Arrows (Optional, but good for UX on desktop) */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2  space-x-2 z-20 hidden md:flex">
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* --- FABs from previous components (optional, but keep for consistency) --- */}
    </div>
  );
};

export default HomeSeven;
