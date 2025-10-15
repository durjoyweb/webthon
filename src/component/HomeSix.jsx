import React from "react";

// --- Placeholder Data for Videos ---
const featuredVideo = {
  title:
    "INSIDE India's $500 Billion Tech Mission: Micromax Founder Rahul Sharma on AI, Chips & Building Big",
  source: "MyGov India",
  videoUrl:
    "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/billiontechmission.mp4", // Placeholder embed URL
  size: "535.2 MB",
  resolution: "1920x1080",
};

const suggestedVideos = [
  {
    id: 1,
    thumbnail: "path/to/thumb-skill-india.jpg", // Replace with actual path
    description:
      "From Villages to Japan | How Skill India Transformed Millions of Live...",
    link: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/fromvillagestojapan.mp4",
  },
  {
    id: 2,
    thumbnail: "path/to/thumb-mutual-funds.jpg", // Replace with actual path
    description:
      "How India Invests: Radhika Gupta on India's Financial Future & the...",
    link: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/howindiainvestsmiddleclass.mp4",
  },
  {
    id: 3,
    thumbnail: "path/to/thumb-research-india.jpg", // Replace with actual path
    description: "How the National Research Foundation (NRF) Will Transform...",
    link: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/howthenationalresearchlandscape.mp4",
  },
  {
    id: 4,
    thumbnail: "path/to/thumb-stadium-show.jpg", // Replace with actual path
    description: "EXCLUSIVE: Rishab Rikram Sharma on the power of Star...",
    link: "https://playhls.media.nic.in/igot_vod/MyGov/JULY25/Video/rishabrikhiramsharma.mp4",
  },
];

// --- Sub-Component for Suggested Video Thumbnail ---
const SuggestedThumbnail = ({ thumbnail, description, link }) => (
  <a
    href={link}
    className="
        flex items-start space-x-3 
        p-2 
        rounded-lg 
        hover:bg-gray-50 
        transition duration-150
    "
  >
    <div
      className="
            flex-shrink-0 
            w-24 md:w-40 h-16 md:h-24 
            bg-black 
            rounded-md 
            overflow-hidden 
            relative
        "
    >
      {/* The actual video thumbnail image */}
      <img
        src={thumbnail}
        alt="Suggested Video"
        className="w-full h-full object-cover opacity-80"
      />
      {/* Play Button Overlay (Optional, for better UX) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white/90"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p
      className="
            flex-grow 
            text-sm md:text-base 
            text-gray-700 
            font-medium
            line-clamp-3 
            pt-1
        "
    >
      {description}
    </p>
  </a>
);

// --- Main HomeSix Component ---
const HomeSix = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800">MyGov Media</h2>
      <p className="text-gray-500 mb-8">
        Connecting citizens and government through the power of media
      </p>

      {/* Main Layout: Split into two columns for md and larger screens */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 1. Featured Video Player (Left Column) */}
        <div className="w-full md:w-3/5">
          <div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden shadow-2xl">
            {/* YouTube Embed Placeholder (Use an actual iframe with your video URL) */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={featuredVideo.videoUrl}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Static Image Placeholder if using image instead of iframe */}
            {/* <img src="path/to/featured-video-poster.jpg" alt="Featured Video Poster" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
          </div>

          {/* Video Details and Actions */}
          <p className="text-lg font-semibold text-gray-900 mb-3">
            {featuredVideo.title}
          </p>

          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              {/* MyGov Icon Placeholder */}
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                M
              </div>
              <span>{featuredVideo.source}</span>
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 font-medium">
                {/* Share Icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a1 1 0 00-1 1v4a1 1 0 002 0V9a1 1 0 00-1-1zM5 12a1 1 0 012 0v1a1 1 0 11-2 0v-1z" />
                </svg>
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-700 font-medium">
                {/* Download Icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Footer Details and Button */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex space-x-4">
              <span>Video Size: {featuredVideo.size}</span>
              <span>Video Resolution: {featuredVideo.resolution}</span>
            </div>
            <button
              className="
                            px-4 py-2 
                            text-sm font-semibold 
                            text-orange-600 
                            border-2 border-orange-600 
                            rounded-md 
                            hover:bg-orange-50 
                            transition
                        "
            >
              Explore More
            </button>
          </div>
        </div>

        {/* 2. Suggested Videos Grid (Right Column) */}
        <div className="w-full md:w-2/5">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Suggested Videos
          </h3>
          <div className="space-y-4">
            {suggestedVideos.map((video) => (
              <SuggestedThumbnail key={video.id} {...video} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-6">
            <button
              className="
                            px-6 py-2 
                            text-sm font-semibold 
                            text-gray-600 
                            border border-gray-300 
                            rounded 
                            hover:bg-gray-100 
                            transition
                        "
            >
              View All
            </button>
          </div>
        </div>
      </div>

      {/* --- FABs from previous components (optional, but keep for consistency) --- */}
      {/* The Floating Action Buttons are typically part of a global layout or specific page, 
                but we include a placeholder to remember them as they appear in all screenshots. */}
      <div
        className="
                fixed bottom-10 right-10 
                flex flex-col space-y-3 
                z-50
                pointer-events-none /* Allows clicks to pass through */
            "
      ></div>
    </div>
  );
};

export default HomeSix;
