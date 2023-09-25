'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText } from '../components';

const Partners = () => (
  <section className="p-4 sm:p-8 md:p-12 relative z-10">
    <div className="max-w-4xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-4"
      >
        <motion.div variants={fadeIn('down', 'tween', 0.5, 1)}>
          <TitleText
            title={(
              <>
                Our Sponsors <br className="md:block hidden" /> <br className="md:block hidden" />{' '}
              </>
            )}
            textStyles="text-center"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center py-2">
      <h4 className="text-white text-2xl font-bold tracking-wide mb-4 text-center mt-8 sm:mt-1">
        TITLE SPONSORS
      </h4>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <a href="https://www.interjet.in/" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="jet.png"
                alt="interjet"
                className="w-60 sm:w-64 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center">FASTEST INTERNET IN PUDUCHERRY</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <a href="https://www.smileytrips.com" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="smile.png"
                alt="interjet"
                className="w-60 sm:w-64 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center">SMILEY TRIPS</p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-8 py-3">
        <h4 className="text-white text-2xl font-bold tracking-wide mb-4 text-center">
          PARTNERS
        </h4>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <a href="#" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="tea.png"
                alt="TEA TIME"
                className="w-60 sm:w-64 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center">SNACK PARTNER</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <a href="#" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="klebs.png"
                alt="KLEBS"
                className="w-60 sm:w-64 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center">FASHION PARTNER</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <a href="https://www.instagram.com/pondydiaries/" className="text-white-500 hover:underline hover:text-white-600 py-2">
              <motion.img
                src="pdy.png"
                alt="PONDY DIARIES"
                className="w-60 sm:w-64 md:w-80 h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={fadeIn('up', 'tween', 0.2, 1)}
              />
            </a>
            <p className="text-center">SOCIAL MEDIA PARTNER</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Partners;