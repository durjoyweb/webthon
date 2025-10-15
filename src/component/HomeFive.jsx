import React from 'react';

// ------------------- Component Data -------------------
const periodicals = [
    {
        title: "MYGOV PULSE",
        subtitle: "A citizen Connect Fortnightly Newsletter",
        image: "https://www.mygov.in/sites/all/themes/mygov/images/newletter-collage.png", // Replace with actual path
        links: {
            latest: "#mygov-pulse-latest",
            ebook: "#mygov-pulse-ebook",
            all: "#mygov-pulse-all"
        }
    },
    {
        title: "YUVAAM",
        subtitle: "VOICE OF THE YOUTH",
        image: "https://www.mygov.in/sites/all/themes/mygov/images/yuvaam-card.png", // Replace with actual path
        links: {
            latest: "#yuvaam-latest",
            ebook: "#yuvaam-ebook",
            all: "#yuvaam-all"
        }
    },
    {
        title: "BHARAT MATTERS",
        subtitle: "INDIA'S NARRATIVE OVERSEAS",
        image: "https://www.mygov.in/sites/all/themes/mygov/images/bm.png", // Replace with actual path
        links: {
            latest: "#bharat-matters-latest",
            ebook: "#bharat-matters-ebook",
            all: "#bharat-matters-all"
        }
    },
];

// ------------------- Sub-Component for a Single Card -------------------
const PeriodicalCard = ({ title, subtitle, image, links }) => {
    return (
        <div className="
            flex flex-col items-center 
            text-center 
            p-4 
            border-r border-gray-200 last:border-r-0 
            w-full
        ">
            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold text-gray-700">{title}</h3>
            <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

            {/* Image/Cover */}
            <div className="
                w-48 h-64 md:w-56 md:h-72 
                bg-gray-100 
                rounded-lg 
                shadow-xl 
                overflow-hidden 
                flex items-center justify-center
                mb-8 
                transform hover:scale-[1.02] transition duration-300
            ">
                <img 
                    src={image} 
                    alt={`${title} Cover`} 
                    className="w-full h-full object-cover" 
                    // For placeholder images, use a mock background for structure
                    onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken image icon
                        e.target.parentElement.style.backgroundColor = '#d1d5db'; // Set a placeholder color
                        e.target.parentElement.classList.add('p-8');
                    }}
                />
            </div>

            {/* Buttons Container (Green Bar) */}
            <div className="
                flex justify-center items-center 
                w-full max-w-sm 
                h-10 
                bg-gradient-to-r from-green-500 to-green-600 
                rounded-b-lg 
                shadow-md
                mb-8
            ">
                {/* We use a neutral background for the links and position them over the green bar */}
                <a href={links.latest} className="
                    bg-white text-green-700 
                    text-xs font-semibold 
                    px-2 py-1 
                    rounded 
                    shadow-sm 
                    hover:bg-gray-100 transition
                ">
                    View Latest Edition
                </a>
            </div>

            {/* Secondary Buttons */}
            <div className="flex space-x-4 mt-[-20px] mb-4">
                <a href={links.ebook} className="text-sm font-medium text-gray-600 hover:text-green-600">
                    View E-book
                </a>
                <a href={links.all} className="text-sm font-medium text-gray-600 hover:text-green-600">
                    View All
                </a>
            </div>
        </div>
    );
};


// ------------------- Main HomeFive Component -------------------
const HomeFive = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            
            {/* Header */}
            <h2 className="
                text-3xl md:text-4xl 
                font-bold 
                text-green-700 
                mb-10 
                border-b-4 border-green-500 
                inline-block
            ">
                MyGov Periodicals
            </h2>

            {/* Cards Grid: Flex for mobile, 3-column grid for large screens */}
            <div className="
                flex flex-col lg:flex-row 
                justify-around items-stretch 
                gap-8 lg:gap-0 
                bg-white
                rounded-lg 
            ">
                {periodicals.map((periodical, index) => (
                    <PeriodicalCard 
                        key={index} 
                        {...periodical} 
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeFive;