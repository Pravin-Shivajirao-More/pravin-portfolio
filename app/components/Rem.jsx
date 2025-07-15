import React from 'react';
import { motion } from 'motion/react';

const awards = [
  {
    title: 'Best Employee Award',
    organization: 'Bechtel, McDermott',
  },
  {
    title: 'Quality Management Award',
    organization: 'Air Products',
  },
  {
    title: 'Leadership in Rural Training',
    organization: 'Shivmala Foundation',
  },
];

const languages = ['Marathi', 'Hindi', 'English', 'Gujarati', 'Punjabi'];

const Rem = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20'>

      {/* Mission Statement */}
      <motion.blockquote
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-2xl font-semibold italic mb-10 text-gray-800 dark:text-white/90 font-Ovo'
      >
        To build not only structures, but also strong rural communities through education, digital empowerment, and skill development.
      </motion.blockquote>

      {/* Awards & Recognition */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mb-16'
      >
        <h2 className='text-4xl font-bold text-center mb-10 font-Ovo'>Awards & Recognition</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='bg-white dark:bg-darkHover border border-gray-300 dark:border-white/40 rounded-xl p-6 text-center shadow-md hover:shadow-xl dark:text-white font-Ovo'
            >
              <h3 className='text-xl font-semibold mb-1'>{award.title}</h3>
              <p className='text-sm text-gray-600 dark:text-white/80'>{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languages Known */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='mb-16'
      >
        <h2 className='text-4xl font-bold text-center mb-8 font-Ovo'>Languages Known</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center'>
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className='px-6 py-4 bg-white dark:bg-darkHover border border-gray-300 dark:border-white/40 rounded-lg shadow-md text-center text-lg font-medium text-gray-800 dark:text-white w-full'
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Rem;
