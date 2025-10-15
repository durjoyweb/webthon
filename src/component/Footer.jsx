import React from 'react';
// Import all necessary icons
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookMessenger, FaUniversity, FaBlog, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi';
import { BsPatchQuestion } from 'react-icons/bs';
import { TbTransform } from 'react-icons/tb';

// --- Reusable Button for the "Useful Links" Section ---
const UsefulLinkButton = ({ icon: Icon, text, href = '#' }) => (
  <a
    href={href}
    className="bg-white text-gray-700 flex items-center p-3 rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300"
  >
    <Icon className="w-6 h-6 mr-3 text-red-500" />
    <span className="font-semibold text-sm">{text}</span>
  </a>
);

// --- Data Arrays for easy management ---
const socialLinks = [
  { icon: FaXTwitter, href: '#' },
  { icon: FaFacebookF, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaWhatsapp, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
  { icon: FaFacebookMessenger, href: '#' },
];

const footerLinks = {
  Activities: ['Groups', 'Do', 'Discuss', 'Poll & Survey', 'Blog', 'Talk', 'Campaigns', 'Podcast', 'Wall of Fame', 'Archive Sites'],
  'Get to Know': ['MyGov Circular', 'About MyGov', 'Work at MyGov', 'Associate with MyGov', 'MyGov Media', 'MyGov Tenders', 'Weekly Newsletter', 'Pulse Newsletter', 'Website Policies', 'Points & Badges', 'Meity Dashboard'],
  'Help & Support': ['Help', 'Site Map', 'Usage of Aadhaar', 'Link to us', 'Web Information Manager', 'FAQ', 'Terms & Conditions', 'Feedback', 'Public Grievance', 'Contact Us'],
};

const usefulLinksData = [
    { icon: BsPatchQuestion, text: 'MyGov Quiz' },
    { icon: TbTransform, text: 'Transforming India' },
    { icon: FaLightbulb, text: 'MyGov Innovation' },
    { icon: FaHandshake, text: 'MyGov Pledge' },
    { icon: FaBlog, text: 'MyGov Blog' },
    { icon: HiUserGroup, text: 'Self4Society' },
    { icon: FaUniversity, text: 'Campus Program' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Social Links */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">Follow us</h2>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-gray-700">
          
          {/* Column 1: Download App */}
          <div className="md:col-span-12 lg:col-span-3 bg-gray-700/50 p-6 rounded-lg text-center flex flex-col items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/017/441/744/large_2x/qr-code-icon-qr-code-sample-for-smartphone-scanning-isolated-illustration-vector.jpg" alt="MyGov App QR Code" className="w-32 h-32 mb-4 bg-white p-1 rounded" />
            <h3 className="font-bold text-lg mb-2">Download MyGov Mobile App</h3>
            <p className="text-sm text-gray-300 mb-4">
              And Continue to Contribute Towards Building a New India on the Move
            </p>
            <div className="flex space-x-3">
              <a href="#"><img src="https://www.mygov.in/sites/all/themes/mygov/images/footer/app_store.svg" alt="Download on the App Store" className="h-10" /></a>
              <a href="#"><img src="https://www.mygov.in/sites/all/themes/mygov/images/footer/play_store.svg" alt="Get it on Google Play" className="h-10" /></a>
            </div>
          </div>

          {/* Columns 2, 3, 4: Link Lists */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-4 lg:col-span-2">
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Useful Links */}
          <div className="md:col-span-8 lg:col-span-3">
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usefulLinksData.map((link, index) => (
                <UsefulLinkButton key={index} icon={link.icon} text={link.text} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;