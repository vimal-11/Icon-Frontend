'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { RegisterCard, TitleText } from '../components';

const Workshop = () => {

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={<>Workshop</>}
          textStyles="text-center"
        />
        <div
          className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
        >
          <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className={`relative ${'lg:flex-[1] flex-[2]'
            } flex items-center justify-center min-w-[170px] h-[700px] cursor-pointer`}
          >
            <img
              src="./planet-06.png"
              alt="planet"
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
            
              <motion.h3
                variants={fadeIn('center', 'tween', 0.75, 1)}
                className="font-semibold sm:text-[40px] text-[18px] text-white absolute z-0 lg:origin-[0,0]"
                
              >
                Register For Workshop
              </motion.h3>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Workshop;