import React from "react";
import SocialCard from "./SocialCard";

// Importing icons from react-icons
import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";

// Custom icons for platforms not in the main library (as placeholders)
const RoposoIcon = () => "😊";
const ShareChatIcon = () => "🤝";
const ChingariIcon = () => "🔥";

// --- Data for the Social Cards ---
const socialData = [
  {
    icon: FaWhatsapp,
    count: "7.61",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "WhatsApp",
    color: "#25D366",
    url: "#",
  },
  {
    icon: FaFacebookF,
    count: "1.60",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Messenger",
    color: "#0084FF",
    url: "#",
  },
  {
    icon: FaFacebookF,
    count: "15.92",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Facebook",
    color: "#1877F2",
    url: "#",
  },
  {
    icon: FaTelegramPlane,
    count: "5.25",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Telegram",
    color: "#2AABEE",
    url: "#",
  },
  {
    icon: FaInstagram,
    count: "36.45",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Instagram",
    color: "#E4405F",
    url: "#",
  },
  {
    icon: FaXTwitter,
    count: "35.52",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Twitter",
    color: "#000000",
    url: "#",
  },
  {
    icon: FaLinkedinIn,
    count: "2.05",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "LinkedIn",
    color: "#0A66C2",
    url: "#",
  },
  {
    icon: FaYoutube,
    count: "9.38",
    unit: "+ Lakh",
    metric: "Subscribers",
    platform: "YouTube",
    color: "#FF0000",
    url: "#",
  },
  {
    icon: FaPinterestP,
    count: "21.23K",
    unit: "",
    metric: "Followers",
    platform: "Pinterest",
    color: "#E60023",
    url: "#",
  },
  {
    icon: RoposoIcon,
    count: "14.47",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Roposo",
    color: "#D92B7A",
    url: "#",
  },
  {
    icon: ShareChatIcon,
    count: "84.56K",
    unit: "",
    metric: "Followers",
    platform: "ShareChat",
    color: "#5433FF",
    url: "#",
  },
  {
    icon: ChingariIcon,
    count: "4.90",
    unit: "+ Lakh",
    metric: "Followers",
    platform: "Chingari",
    color: "#FF5733",
    url: "#",
  },
];

const SocialHub = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Our Social HUB</h1>
          <p className="text-gray-500 mt-2">
            Join Our Social Hub to stay up to date
          </p>
        </div>

        {/* --- Social Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {socialData.map((social) => (
            <SocialCard
              key={social.platform}
              icon={social.icon}
              count={social.count}
              unit={social.unit}
              metric={social.metric}
              platform={social.platform}
              url={social.url}
              color={social.color}
            />
          ))}
        </div>
      </div>

      {/* --- Floating Action Buttons --- */}
      <div className="fixed top-1/2 -translate-y-1/2 right-5 flex flex-col space-y-4"></div>
    </div>
  );
};

export default SocialHub;
