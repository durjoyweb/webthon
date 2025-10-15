import React from "react";
import GroupCard from "./GroupCard";

// Import required icons
import { HiUserGroup } from "react-icons/hi";
import { FiPlus, FiMessageSquare } from "react-icons/fi";

// --- Dynamic Data for the Groups ---
// This makes it easy to add or change groups later.
const groupData = [
  {
    icon: HiUserGroup,
    title: "Ministry of Social Justice and Empowerment",
    notificationCount: 2,
    stats: [
      { value: 29, label: "Tasks" },
      { value: 58, label: "Discussions" },
      { value: 0, label: "Polls" },
      { value: 22, label: "Blogs" },
      { value: 1, label: "Talks" },
    ],
  },
  {
    icon: HiUserGroup,
    title: "Ministry of Home Affairs",
    notificationCount: 3,
    stats: [
      { value: 47, label: "Tasks" },
      { value: 4, label: "Discussions" },
      { value: 10, label: "Polls" },
      { value: 35, label: "Blogs" },
      { value: 0, label: "Talks" },
    ],
  },
  {
    icon: HiUserGroup,
    title: "Creative Corner",
    notificationCount: 2,
    stats: [
      { value: 747, label: "Tasks" },
      { value: 13, label: "Discussions" },
      { value: 9, label: "Polls" },
      { value: 534, label: "Blogs" },
      { value: 1, label: "Talks" },
    ],
  },
  {
    icon: HiUserGroup,
    title: "Ministry of Environment, Forest and Climate Change",
    notificationCount: 1,
    stats: [
      { value: 13, label: "Tasks" },
      { value: 4, label: "Discussions" },
      { value: 0, label: "Polls" },
      { value: 9, label: "Blogs" },
      { value: 0, label: "Talks" },
    ],
  },
];

const GroupsSection = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">MG Groups</h1>
          <p className="text-gray-500 mt-2 text-lg">
            Check out the Activities based on Groups
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupData.map((group) => (
            <GroupCard
              key={group.title}
              icon={group.icon}
              title={group.title}
              notificationCount={group.notificationCount}
              stats={group.stats}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
    </div>
  );
};

export default GroupsSection;
