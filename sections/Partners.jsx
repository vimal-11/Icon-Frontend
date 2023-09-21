'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText } from '../components';

import { logos } from '../constants';

const Partners = () => (
  <section className="p-[var(--space-md)] relative z-10">
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
                Our Partners <br className="md:block hidden" /> <br className="md:block hidden" />{' '}
              </>
            )}
            textStyles="text-center"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4"
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-32 sm:w-20 md:w-24 h-auto object-contain"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={fadeIn('up', 'tween', 0.2 * index, 1)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Partners;
