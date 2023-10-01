import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold  text-white text-5xl sm:text-3xl">SOCIAL</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
        <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://instagram.com/pirate_karthik046?igshid=MzRlODBiNWFlZA="
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkin</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://t.me/Ns_karthik046"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/919025516538"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://instagram.com/pirate_karthik046?igshid=MzRlODBiNWFlZA="
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className=" text-white sm:text-[12px]">
      <span>© Copyright 2023. Made by Karthik</span>
          {/* <a href="#"></a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
