import React from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RiPinterestLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Description() {
  return (
    <div className="w-4/12 bg-primary font-montserrat">
      <img className="w-fit h-96" src="mainpic.webp" alt="Smith" />
      <div className="text-grey pl-12 pt-12 text-sm">
        <p className="text-xl text-white font-semibold pb-8">
          General Information
        </p>
        <p className="pb-3">
          <img className="inline-block pr-5" src="crayon.webp" alt="" />
          Name: <span className="text-white pl-2">Justin Bieber</span>
        </p>
        <p className="pl-9 pb-3">
          Location: <span className="text-white pl-2">London UK</span>
        </p>
        <p className="pb-3">
          <img className="inline-block pr-4" src="lettre.webp" alt="" />
          contactme@templatename.com
        </p>
        <p className="pb-3">
          <img className="inline-block pr-4" src="tel.webp" alt="" />
          +76 6524 567862 763
        </p>
        <p className="pb-6">
          <img className="inline-block pr-4" src="ecran.webp" alt="" />
          www.mytemplatename.com
        </p>
      </div>

      <div className="flex text-grey pl-20 pb-4">
        <a
          href="https://google.com"
          className="text-2xl pr-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGooglePlus />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl pr-6"
        >
          <RiPinterestLine />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg pr-6"
        >
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-lg pr-6">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}
