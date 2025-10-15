import React, { useState } from 'react';

// Data structure for the activity options
const activities = [
    // Note: The structure is kept, using arbitrary Tailwind values for the specific pastel colors.
    { 
        label: "DO/TASK", 
        icon: "✅", 
        bgColor: "bg-[#e67e22]", // Orange-ish, distinct color for selected/hover
        baseColor: "bg-[#e67e22]",
        accentColor: "text-[#e67e22]"
    },
    { 
        label: "DISCUSS", 
        icon: "💬", 
        bgColor: "bg-blue-500", // Using a standard Tailwind blue for hover for simplicity
        baseColor: "bg-[#f0f7f9]",
        accentColor: "text-blue-500"
    },
    { 
        label: "POLL/SURVEY", 
        icon: "📊", 
        bgColor: "bg-green-600",
        baseColor: "bg-[#f0f9f7]",
        accentColor: "text-green-500"
    },
    { 
        label: "BLOG", 
        icon: "✍️", 
        bgColor: "bg-yellow-600",
        baseColor: "bg-[#fff8f0]",
        accentColor: "text-yellow-500"
    },
    { 
        label: "TALK", 
        icon: "🎤", 
        bgColor: "bg-pink-500",
        baseColor: "bg-[#fcf0f5]",
        accentColor: "text-pink-500"
    },
    { 
        label: "QUIZ", 
        icon: "🔴", 
        bgColor: "bg-red-500",
        baseColor: "bg-[#f9f0f3]",
        accentColor: "text-red-500"
    },
    { 
        label: "MG PRIME", 
        icon: "🧩", 
        bgColor: "bg-teal-600",
        baseColor: "bg-[#f0fcf2]",
        accentColor: "text-teal-500"
    },
    { 
        label: "CAMPAIGN", 
        icon: "📢", 
        bgColor: "bg-purple-600",
        baseColor: "bg-[#f5f0fb]",
        accentColor: "text-purple-500"
    },
    { 
        label: "PLEDGE", 
        icon: "✖️✖️", 
        bgColor: "bg-lime-600",
        baseColor: "bg-[#f0fbf0]",
        accentColor: "text-lime-500"
    },
    { 
        label: "PODCAST", 
        icon: "🎧", 
        bgColor: "bg-indigo-600",
        baseColor: "bg-[#f8f0fc]",
        accentColor: "text-indigo-500"
    },
];

// Helper component for the triangle indicator (unchanged)
const TriangleIndicator = ({ activeIndex }) => {
    // Using an arbitrary value utility to position the indicator under the center of the card.
    const baseOffset = 40; // Roughly the center of the first item 
    const cardSize = 96; // w-24 (96px) + gap-4 (16px) = 112px is NOT correct for space-x-4
                          // w-24 (96px) is the width of the card. Offset is center + (index * (w+gap))
    
    // In a flex row with space-x-4, the center of item `i` is approx `(i * 112) + 48`
    const getTranslateValue = (index) => {
        const offset = index * 112 + 48; // 112px = w-24 (96px) + space-x-4 (16px)
        return `translate-x-[${offset}px]`;
    };

    return (
        <div className="relative h-2 w-full mt-4 mx-auto">
            <div className="absolute w-full h-[3px] bg-gray-300"></div>
            {/* Triangle Thumb. Using a specific offset for the first item */}
            <div 
                className={`absolute left-0 top-[-5px] transition-transform duration-300 ease-in-out
                            w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] 
                            border-l-transparent border-r-transparent border-b-gray-700
                            ${getTranslateValue(activeIndex)}`}
            ></div>
        </div>
    );
};


export function HeroSecond() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeActivity = activities[activeIndex];
    
    return (
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
            
            {/* --- Heading Section --- */}
            <div className="pb-4 sm:pb-6">
                <h2 className="text-3xl font-bold text-green-600 tracking-tight">
                    GET INVOLVED
                </h2>
                <p className="text-gray-500 mt-1 text-lg">
                    Participate in nation-building activities
                </p>
            </div>
            
            {/* --- Activity Tabs/Icons Section --- */}
            <div className="overflow-x-auto custom-scrollbar">
                <div className="flex space-x-4 p-2"> 
                    {activities.map((activity, index) => {
                        const isSelected = index === activeIndex;

                        // **Modification 1: Define Hover Classes**
                        const hoverClasses = `
                            hover:${activity.bgColor} hover:text-white 
                            hover:shadow-xl hover:scale-[1.03]
                        `;

                        // **Modification 2: Define Base/Selected Classes**
                        const itemClasses = isSelected
                            ? `
                                ${activity.bgColor} text-white shadow-xl 
                                transform scale-[1.03] ring-2 ring-offset-2 ring-gray-700
                            `
                            : `
                                ${activity.baseColor} text-gray-700 border border-gray-100
                                hover:bg-opacity-80
                            `;

                        return (
                            <div 
                                key={index} 
                                onClick={() => setActiveIndex(index)}
                                // **Modification 3: Apply dynamic and hover classes**
                                className={`
                                    flex flex-col items-center justify-center 
                                    w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 
                                    rounded-lg cursor-pointer transition duration-300 ease-in-out
                                    
                                    ${itemClasses}
                                    ${hoverClasses} 
                                `}
                            >
                                <div className="text-4xl mb-1">
                                    {activity.icon}
                                </div>
                                {/* **Modification 4: Ensure text color changes correctly** */}
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

            {/* --- Slider/Indicator --- */}
            <div className='px-4'>
                 <TriangleIndicator activeIndex={activeIndex} />
            </div>

            {/* --- Example Content Area (Optional) ---
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                    Active Section: {activeActivity.label}
                </h3>
                <p className="mt-2 text-gray-600">
                    This area would load content specific to the "{activeActivity.label}" activity.
                </p>
            </div> */}
        </div>
    );
}