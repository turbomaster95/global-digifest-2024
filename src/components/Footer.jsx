import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { FaMastodon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-6 noglowp">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/turbomaster95" target="_blank" rel="noopener noreferrer" className=""><GitHubLogoIcon /></a>
          <a href="https://mastodon.social/@coderrrrr" target="_blank" rel="noopener noreferrer" className=""><FaMastodon /></a>
          <a href="https://instagram.com/coderrrrr.site/" target="_blank" rel="noopener noreferrer" className="hover:underline"><InstagramLogoIcon /></a>
          <a href="https://x.com/coderrrrrsite" target="_blank" rel="noopener noreferrer" className="hover:underline"><FaXTwitter /></a>
        </div>
      </div>
      <div className="text-center pb-6">
        <p>&copy; {new Date().getFullYear()} Deva Midhun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
