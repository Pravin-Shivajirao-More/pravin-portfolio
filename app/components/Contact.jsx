import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Contact = () => {
  const handleButtonClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfIzUp_bBNp1ceLMgL_pVu36k2Rh2W9JfhyvLAsBVaNaJ_o9w/viewform?usp=dialog", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat text-lg font-Ovo dark:bg-none'
    >
      {/* Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Connect with Me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I'm always open to new opportunities, collaborations, or just a friendly chat! Whether you have a project in mind, a question, or simply want to connect — feel free to reach out. Let’s build something great together!
      </motion.p>

      {/* Personal Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className='text-center text-base sm:text-lg mb-12 space-y-2 font-Ovo'
      >
        <p><strong>Pravin Shivajirao More</strong></p>
        <p>Managing Director – Shivmala Infrastructure Pvt. Ltd.</p>
        <p>Founder – Shivmala Foundation</p>
        <p>📞 <strong>Phone:</strong> 8421217140</p>
        <p>✉️ <strong>Email:</strong> psmore4321@gmail.com</p>
        <p>📍 <strong>Address:</strong> Bardapur, Tal. Ambejogai, Dist. Beed, Maharashtra, India</p>
      </motion.div>

      {/* Contact Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={handleButtonClick}
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
      >
        Contact Me
        <Image src={assets.right_arrow_white} alt='' className='w-4' />
      </motion.button>
    </motion.div>
  );
};

export default Contact;
