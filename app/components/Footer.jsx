import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* Logo optional */}
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail icon' className='w-6' />
          psmore4321@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Pravin Shivajirao More. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
          <li><a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'>Instagram</a></li>
          <li><a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>Facebook</a></li>
          <li><a href="https://www.quora.com/" target='_blank' rel='noopener noreferrer'>Quora</a></li>
          <li><a href="https://www.pinterest.com/" target='_blank' rel='noopener noreferrer'>Pinterest</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
