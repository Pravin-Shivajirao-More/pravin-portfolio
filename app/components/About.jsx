import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20 '
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col gap-20 my-20 lg:flex-row items-center'
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 flex flex-col items-center text-center'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am a dedicated civil engineer and social entrepreneur with over 11 years of experience working with multinational and central government engineering firms. As the Managing Director of Shivmala Infrastructure Pvt. Ltd. and Founder of Shivmala Foundation, my mission is to empower rural India by bridging the digital and educational gap through innovative training and outreach programs.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50'
              >
                <Image src={isDarkMode ? iconDark : icon} alt='title' className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul
            whileHover={{ scale: 1.1 }}
            className='flex items-center gap-3 sm:gap-5'
          >
            {/* Tools section is kept hidden as per original request */}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
