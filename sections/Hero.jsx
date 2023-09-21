'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import '../styles/styles.scss'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <div className="solar-syst z-0 relative">
    <div className="sun" />
    <div className="mercury" />
    <div className="venus" />
    <div className="earth" />
    <div className="mars" />
    <div className="jupiter" />
    <div className="saturn" />
    <div className="uranus" />
    <div className="neptune" />
    <div className="pluto" />
    <div className="asteroids-belt" />
  </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative">
        <motion.div variants={textVariant(1.1)} className=" flex justify-center items-center flex-col">
          <img src="/F5.png"  className= "w-[50%] h-[50%]" alt="" />
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <a href='/register'className="btn btn-sm md:btn-md lg:btn-lg btn-active lowercase ">Register Now</a>
        </motion.div>
      </div>
      

      
      
    </motion.div>
  </section>
);

export default Hero;
