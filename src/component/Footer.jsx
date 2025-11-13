import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { LuRotate3D } from 'react-icons/lu';
import { Link } from 'react-router';

const Footer = () => {
         

    return (
  <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-black py-8 px-4 rounded-xl mt-20 text-white">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Logo & Links */}
    <div>
      <div className="flex items-center space-x-2 text-white">
        <LuRotate3D size={25} />
        <span className="text-xl font-bold">Food Share</span>
      </div>
      <ul className="space-y-2 mt-4">
        <li><Link to="/all-models" className="hover:text-yellow-300">All Models</Link></li>
        <li><Link to="/add-model" className="hover:text-yellow-300">Add Model</Link></li>
        <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
        <li><Link to="/auth/login" className="hover:text-yellow-300">Login</Link></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-bold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><Link to="/" className="hover:text-yellow-300">Learning Blog</Link></li>
        <li><Link to="/" className="hover:text-yellow-300">Guides</Link></li>
        <li><Link to="/" className="hover:text-yellow-300">Poly Tips</Link></li>
        <li><Link to="/resources" className="hover:text-yellow-300">Resources</Link></li>
      </ul>
    </div>

    {/* Community */}
    <div>
      <h3 className="text-lg font-bold mb-4">Community</h3>
      <ul className="space-y-2">
        <li><Link to="/" className="hover:text-yellow-300">Discussion Forums</Link></li>
        <li><Link to="/" className="hover:text-yellow-300">Study Groups</Link></li>
        <li><Link to="/" className="hover:text-yellow-300">Events & Workshops</Link></li>
        <li><Link to="/" className="hover:text-yellow-300">Leaderboard</Link></li>
      </ul>
    </div>

    {/* Connect */}
    <div>
      <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
      <div className="flex space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <BsTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
          <BsInstagram size={24} />
        </a>
      </div>
      <div>
        <a 
          href="mailto:support@foodshare.com" 
          className="flex items-center hover:text-yellow-300"
        >
          <IoMailSharp size={18} className="mr-2"/>
          support@foodshare.com
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-300">
    <p className="text-sm">
      © {new Date().getFullYear()} Food Share. All Rights Reserved.  
      <span className="ml-4">
        <Link to="/" className="hover:text-yellow-300 mr-3">Privacy Policy</Link>
        <Link to="/" className="hover:text-yellow-300">Terms of Service</Link>
      </span>
    </p>
  </div>
</footer>


    );
};

export default Footer;