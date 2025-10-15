import React, { useState } from 'react';

// --- Data Structure ---

// 1. Activity Tab Data
const activities = [
    { label: "DO/TASK", icon: "✅", bgColor: "bg-[#e67e22]", baseColor: "bg-[#f0fcf2]" }, // Adjusted baseColor for DO/TASK to match light green background in screenshot 2
    { label: "DISCUSS", icon: "💬", bgColor: "bg-blue-500", baseColor: "bg-[#f0f7f9]" },
    { label: "POLL/SURVEY", icon: "📊", bgColor: "bg-green-600", baseColor: "bg-[#f0f9f7]" },
    { label: "BLOG", icon: "✍️", bgColor: "bg-yellow-600", baseColor: "bg-[#fff8f0]" },
    { label: "TALK", icon: "🎤", bgColor: "bg-pink-500", baseColor: "bg-[#fcf0f5]" },
    { label: "QUIZ", icon: "🔴", bgColor: "bg-red-500", baseColor: "bg-[#f9f0f3]" },
    { label: "MG PRIME", icon: "🧩", bgColor: "bg-teal-600", baseColor: "bg-[#f0fcf2]" },
    { label: "CAMPAIGN", icon: "📢", bgColor: "bg-purple-600", baseColor: "bg-[#f5f0fb]" },
    { label: "PLEDGE", icon: "✖️", bgColor: "bg-lime-600", baseColor: "bg-[#f0fbf0]" },
    { label: "PODCAST", icon: "🎧", bgColor: "bg-indigo-600", baseColor: "bg-[#f8f0fc]" },
];

// 2. Content Card Data (for DO/TASK)
const doTaskCards = [
    { title: "International Year of Cooperatives 2025 Essay Competition", imageSrc: "https://static.mygov.in/static/s3fs-public/mygov_1759730986154086855_0.jpg" },
    { title: "Cyber Warriors Doodle Contest - Youth for a Safer Digital India", imageSrc: "https://static.mygov.in/static/s3fs-public/mygov_1759258964122933441_0.jpg" },
    { title: "CyberShield Creators - Infographic Contest", imageSrc: "https://static.mygov.in/static/s3fs-public/mygov_1759255972122933441.png" },
    { title: "Cyber Smart Idea Challenge Building a Cybercrime-free Digital Bharat", imageSrc: "https://static.mygov.in/static/s3fs-public/mygov_1759254891122933441_0.png" },
];

// --- Helper Components ---

// Triangle Indicator (Modified for better positioning)
const TriangleIndicator = ({ activeIndex }) => {
    // Calculates the offset for the indicator's position
    // Card width (w-24=96px) + gap (space-x-4=16px) = 112px per item
    // Starting position is offset to align under the center of the first item (48px)
    const getTranslateValue = (index) => {
        const offset = index * 112 + 48;
        return `translate-x-[${offset}px]`; // Use arbitrary value for precision
    };

    return (
        <div className="relative h-2 w-full mt-4 mx-auto px-4">
            <div className="absolute w-full h-[3px] bg-gray-300 left-0"></div>
            <div 
                className={`absolute left-0 top-[-5px] transition-transform duration-300 ease-in-out
                            w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] 
                            border-l-transparent border-r-transparent border-b-gray-700
                            ${getTranslateValue(activeIndex)}`}
            ></div>
        </div>
    );
};

// Content Card Component
const ContentCard = ({ card }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="h-40 bg-gray-200 relative">
            {/* Placeholder for Image - Replace with actual image loading in a real app */}
            <img 
                src={card.imageSrc} 
                alt={card.title} 
                className="w-full h-full object-cover" 
            />
        </div>
        <div className="p-4">
            <p className="text-sm font-medium text-gray-700 leading-snug">
                {card.title}
            </p>
        </div>
    </div>
);


// --- Main Component ---

export function HeroThree() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeActivity = activities[activeIndex];
    
    // Function to render the content based on the active tab
    const renderContent = () => {
        // Currently, we only have content data for "DO/TASK"
        if (activeActivity.label === "DO/TASK") {
            return (
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-6">
                        {/* Title matching screenshot 2 */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Do/Task</h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Find a variety of online & on ground skill-building tasks, activities & contests
                            </p>
                        </div>
                        {/* The '+' card from the screenshot */}
                        <div className="bg-white p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
                            <span className="text-2xl font-light leading-none">+</span>
                        </div>
                    </div>

                    {/* Content Card Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {doTaskCards.map((card, index) => (
                            <ContentCard key={index} card={card} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-150">
                            View All
                        </button>
                    </div>
                </div>
            );
        }
        
        // Default content for other tabs (or future implementation)
        return (
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                    Content for: {activeActivity.label}
                </h3>
                <p className="mt-2 text-gray-600">
                    Content for this tab is not yet implemented.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
            
            {/* --- Heading Section (Screenshot 1 Top) --- */}
            <div className="pb-4 sm:pb-6">
                <h2 className="text-3xl font-bold text-green-600 tracking-tight">
                    GET INVOLVED
                </h2>
                <p className="text-gray-500 mt-1 text-lg">
                    Participate in nation-building activities
                </p>
            </div>
            
            {/* --- Activity Tabs/Icons Section (Screenshot 1 Middle) --- */}
            <div className="overflow-x-auto custom-scrollbar">
                <div className="flex space-x-4 p-2"> 
                    {activities.map((activity, index) => {
                        const isSelected = index === activeIndex;

                        // Hover styles (applying the primary color on hover)
                        const hoverClasses = `
                            hover:${activity.bgColor} hover:text-white 
                            hover:shadow-xl hover:scale-[1.03]
                        `;

                        // Base/Selected styles
                        const itemClasses = isSelected
                            ? `
                                ${activity.bgColor} text-white shadow-xl 
                                transform scale-[1.03] ring-2 ring-offset-2 ring-gray-700/50
                            `
                            : `
                                ${activity.baseColor} text-gray-700 border border-gray-100
                            `;

                        return (
                            <div 
                                key={index} 
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    flex flex-col items-center justify-center 
                                    w-24 h-24 sm:w-[90px] sm:h-[90px] flex-shrink-0 
                                    rounded-lg cursor-pointer transition duration-300 ease-in-out
                                    ${itemClasses}
                                    ${hoverClasses} 
                                `}
                            >
                                <div className="text-4xl mb-1">
                                    {activity.icon}
                                </div>
                                <div className={`text-xs font-semibold uppercase tracking-wider
                                    ${isSelected ? 'text-white' : 'text-gray-700'}
                                    hover:text-white
                                `}>
                                    {activity.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* --- Slider/Indicator (Screenshot 1 Bottom) --- */}
            <TriangleIndicator activeIndex={activeIndex} />

            {/* --- Dynamic Content Section (Screenshot 2) --- */}
            {renderContent()}
        </div>
    );
}

// NOTE: In a real Tailwind project, you would need to add the arbitrary 
// background colors (e.g., bg-[#f0fcf2]) to the `tailwind.config.js` 
// safelist or use them directly in the file for them to be generated by the build process.