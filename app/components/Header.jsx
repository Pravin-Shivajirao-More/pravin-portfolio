import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='Pravin More' className='rounded-full w-32' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Pravin Shivajirao More
                <Image src={assets.hand_icon} alt='hand' className='w-6' />
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
            >
                Civil Engineer & Social Entrepreneur
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo'
            >
                Managing Director at Shivmala Infrastructure Pvt. Ltd. and Founder of Shivmala Foundation.
                With over 11 years of experience in engineering and a deep passion for rural development,
                I work to empower communities through digital literacy, infrastructure, and education.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-transparent'
                >
                    Contact me
                    <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
                </motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/pravin-resume.pdf" // Replace with actual resume path
                    className='px-10 bg-white dark:text-black py-3 border rounded-full border-gray-500 flex items-center gap-2'
                >
                    My resume
                    <Image src={assets.download_icon} alt='download' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
