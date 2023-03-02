/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import WebLogo from "../assets/mang-games-logo.png"

const Footer = () => {
  return (
   <section id='footer' className='border-t-2 bg-[#2a475e] border-y-gray-500 flex flex-col static'>
      <div className="flex py-14 max-lg:flex max-lg:py-10">
         <div className="flex flex-col justify-center px-20 w-full max-lg:px-5">
            <img className="w-64" src={WebLogo} alt="Web Logo"/>
         </div>
         <div className="flex flex-col justify-center px-20 w-full max-lg:px-5 max-lg:py-10">
            <h2 className='text-base uppercase tracking-widest text-white'>Reach us on:</h2>
            <div className="flex items-center gap-8 mt-2">
            <a target="_blank" className='hoveriser' href="https://www.instagram/raka_m.a">
               <FontAwesomeIcon className='text-white fa-icons cursor-pointer' id='font-icon' icon={faInstagram} size="2x"/>
            </a>
            <a target="_blank" className='hoveriser' href="https://www.twitter.com/raka_m_a">
               <FontAwesomeIcon className='text-white fa-icons cursor-pointer' id='font-icon' icon={faTwitter} size="2x"/>
            </a>
            <a target="_blank" className='hoveriser' href="https://www.github.com/RMA-17">
               <FontAwesomeIcon className='text-white fa-icons cursor-pointer' id='font-icon' icon={faGithub} size="2x"/>
            </a>
         </div>
         </div>
      </div>
      <div className="flex copyright w-full h-1/4 py-10 px-20 text-gray-500 max-lg:h-1/2 max-lg:flex-col max-lg:p-2 max-lg:py-2">
         <h1 className='max-lg:py-3 text-white'>&#169; 2023 RMA Projects</h1>
      </div>
    </section>
  );
};

export default Footer;
