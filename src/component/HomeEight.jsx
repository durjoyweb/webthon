import React from "react";

// --- Placeholder Data ---

// Data for the Trending Discussion column
const trendingDiscussions = [
  {
    id: 1,
    title:
      "Inviting comments and suggestions on the Draft Accessibility Standards for the Services Sector",
    image: "src/image/assistive_technology.jpg", // Replace with actual path
    lastDate: "Oct 31 2025 - 5:30pm",
    link: "#services-standards",
  },
  {
    id: 2,
    title:
      "Inviting comments and suggestions on the Draft Accessibility Standards for the Assistive Technology Sector",
    image: "src/image/inviting_comment.jpg", // Replace with actual path
    lastDate: "Oct 31 2025 - 5:30pm",
    link: "#tech-standards",
  },
  {
    id: 3,
    title:
      "Inviting Ideas for Mann Ki Baat by Prime Minister Narendra Modi on 26th October 2025",
    image: "src/image/inviting_idea.jpg", // Replace with actual path
    lastDate: "Oct 24 2025 - 11:45pm",
    link: "#mann-ki-baat",
  },
  {
    id: 4,
    title: "Digital Safety Dialogue",
    image: "src/image/Digital_sefty.png", // Replace with actual path
    lastDate: "Oct 31 2025 - 5:45pm",
    link: "#digital-safety",
  },
];

// --- Sub-Component for Trending Discussion Cards ---
const DiscussionCard = ({ title, image, lastDate, link }) => (
  <a
    href={link}
    className="
        flex flex-col 
        bg-white 
        rounded-lg 
        overflow-hidden 
        shadow-sm 
        border border-gray-100 
        transform hover:shadow-md transition duration-200
    "
  >
    {/* Card Image */}
    <div className="h-32 w-full relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => (e.target.style.backgroundColor = "#d1d5db")} // Placeholder background
      />
    </div>

    {/* Card Content */}
    <div className="p-3">
      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 min-h-[40px]">
        {title}
      </h4>
      <p className="text-xs text-gray-500">
        Last Date: <span className="font-medium text-red-600">{lastDate}</span>
      </p>
    </div>
  </a>
);

// --- Main HomeNine Component ---
const HomeEight = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className="
                grid grid-cols-1 lg:grid-cols-2 
                gap-8 
            "
      >
        {/* 1. Left Column: Creative Tasks */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800">
                Creative Tasks
              </h2>
              <p className="text-gray-500 text-sm">
                Your creativity can make a big impact
              </p>
            </div>
            <a
              href="#creative-tasks-all"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              See All
            </a>
          </div>

          {/* Main Creative Task Card (Essay Competition) */}
          <a
            href="#essay-competition"
            className="
                        relative 
                        rounded-lg 
                        overflow-hidden 
                        shadow-lg 
                        h-[500px] lg:h-full 
                        transform hover:scale-[1.005] transition duration-300
                    "
          >
            {/* The Large Banner/Image */}
            <img
              src="src\image\Creative_tasks.png"
              alt="International Year of Cooperatives 2025 Essay Competition"
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.backgroundColor = "#e0f2f1")} // Placeholder
            />

            {/* Title Overlay (Bottom Left) */}
            <div
              className="
                            absolute bottom-0 left-0 
                            p-5 
                            w-full 
                            bg-gradient-to-t from-black/80 to-transparent
                        "
            >
              <h3 className="text-xl font-bold text-white mb-1">
                International Year of Cooperatives 2025 Essay Competition
              </h3>
              <p className="text-sm text-gray-200">
                Last Date: Oct 25 2025 - 11:45pm
              </p>
            </div>

            {/* Decorative Logos (Top Right - visible in the screenshot) */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {/* Logos for Creative Task */}
            </div>
          </a>
        </div>

        {/* 2. Right Column: Trending Discussion */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Trending Discussion
            </h2>
            <p className="text-gray-500 text-sm">
              Share your suggestions and ideas with us
            </p>
          </div>

          {/* Discussion Cards Grid */}
          <div
            className="
                        grid grid-cols-1 sm:grid-cols-2 
                        gap-4 lg:gap-6 
                        flex-grow 
                        auto-rows-fr /* Ensures rows stretch to fill height */
                    "
          >
            {trendingDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} {...discussion} />
            ))}
          </div>
        </div>
      </div>

      {/* --- FABs for consistency --- */}
    </div>
  );
};

export default HomeEight;
