import React from "react";

// --- Placeholder paths for images (Update these with your actual paths) ---
const logo1 = "path/to/gujarat-govt-logo.png";
const logo2 = "path/to/mygov-logo.png";
const logo3 = "path/to/vikas-saptah-logo.png";
const mainCameraVisual =
  "https://static.mygov.in/static/s3fs-public/mygov_1760334409122933441.jpg";
const photoCircle1 =
  "https://static.mygov.in/static/s3fs-public/mygov_1760081919122933441.jpg";
const photoCircle2 = "path/to/water-scene-photo.jpg";
// --------------------------------------------------------------------------

const HomeFourth = () => {
  // Note: We don't strictly need React state for this if we use Tailwind's `group-hover` utilities,
  // which simplifies the code significantly for pure hover effects.

  return (
    // Main Container: Split-screen layout and the Tailwind 'group' class
    <div
      className="
            flex flex-col lg:flex-row min-h-[200px] w-full 
            shadow-xl rounded-xl overflow-hidden 
            group px-10
            transition-all duration-300 ease-in-out
        "
    >
      {/* 1. Left Section: WHAT'S NEW */}
      <div
        className="
                w-full lg:w-5/12 
                bg-[#f7f9fb] 
                p-8 md:p-16 
                flex flex-col justify-center items-center lg:items-end 
                relative 
                text-right
            "
      >
        {/* Visual element placeholder (wavy lines) */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('path/to/wavy-lines-bg.svg')] bg-cover" />

        <p
          className="
                    text-3xl md:text-5xl 
                    font-light text-gray-500 
                    tracking-wider 
                    mb-[-10px] md:mb-[-15px]
                "
        >
          WHAT'S
        </p>
        <h1
          className="
                    text-7xl md:text-9xl 
                    font-extrabold text-[#3d3d3d] 
                    leading-none
                "
        >
          NEW
        </h1>
      </div>

      {/* 2. Right Section: Photo Competition Banner (The hoverable area) */}
      <a
        href="https://gujarat.mygov.in/task/vikas-saptah-photo-competition" // The URL shown in your second screenshot
        target="_blank"
        rel="noopener noreferrer"
        className="
                    w-full lg:w-7/12 
                    bg-white 
                    p-6 md:p-12 
                    relative 
                    overflow-hidden 
                    flex flex-col justify-end 
                    cursor-pointer
                "
      >
        {/* --- Static/Always Visible Elements --- */}

        {/* Logos (Top Right) */}
        <div className="absolute top-4 right-4 flex space-x-2 z-30"></div>

        {/* Main Visual (Camera & Hand) - Note: Use z-0 or z-10 for backdrop effect */}
        <div className="absolute right-0 top-0 h-full w-full pointer-events-none z-10 mx-4">
          <img
            src={mainCameraVisual}
            alt="Camera Visual"
            className="
                            absolute 
                            bottom-0 right-0 
                            w-2/3 max-w-lg 
                            opacity-80 
                            translate-x-1/4 translate-y-1/4 
                            lg:translate-x-1/3 lg:translate-y-1/3 
                        "
          />
        </div>

        {/* Circular Images (Floating) */}
        {/* Increased Z-index to ensure they appear above the camera image */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
          <img
            src={photoCircle1}
            alt="Monument Photo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
          <img
            src={photoCircle2}
            alt="Water Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Plus Icon CTA Button (This is still visible, positioned absolutely) */}

        {/* --- Toggleable Content Area --- */}
        <div className="relative z-20 mt-10 lg:mt-0">
          {/* STATIC TEXT (Default State) */}
          <div
            className="
                        group-hover:opacity-0 group-hover:invisible 
                        opacity-100 visible 
                        transition-opacity duration-300 ease-in-out
                    "
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#747474] leading-none mb-[-10px]">
              VIKAS
            </h2>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#747474] leading-none">
              SAPTAH
            </h2>
            <h1
              className="
                            text-7xl md:text-9xl font-extrabold leading-none mt-2 
                            bg-clip-text text-transparent 
                            bg-gradient-to-r from-orange-600 to-red-500
                        "
            >
              PHOTO <br className="hidden md:block" /> COMPETITION
            </h1>
          </div>

          {/* HOVER BUTTON (Revealed State) */}
          <div
            className="
                        absolute inset-0 
                        flex items-center justify-center 
                        bg-white/70 
                        opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-opacity duration-300 ease-in-out
                        z-40 /* Ensure it's above all visuals */
                    "
          >
            <span
              className="
                            inline-flex items-center px-8 py-4 
                            text-2xl font-semibold 
                            text-white 
                            bg-gradient-to-r from-teal-500 to-blue-500 
                            rounded-lg 
                            shadow-lg 
                            hover:shadow-2xl hover:scale-105 
                            transition duration-300
                            
                        "
            >
              View Details
            </span>
            {/* Tooltip-like text for 'View Details' on hover */}
            <span className="absolute bottom-5 text-sm text-gray-700">
              View Details
            </span>
          </div>
        </div>

        {/* Bottom Bar Graphic */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#2c2c2c] to-[#4c4c4c] z-10" />
      </a>
    </div>
  );
};

export default HomeFourth;
