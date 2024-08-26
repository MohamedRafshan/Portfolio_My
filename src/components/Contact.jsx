import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-6 flex justify-center space-x-8">
        <a href="https://www.github.com" className="hover:text-gray-500">
          <FaGithub size={24} />
        </a>
        <a href="https://www.facebook.com" className="hover:text-gray-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" className="hover:text-gray-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.twitter.com" className="hover:text-gray-500">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.twitch.com" className="hover:text-gray-500">
          <FaTwitch size={24} />
        </a>
      </div>

   
        <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
   
       
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
 
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
