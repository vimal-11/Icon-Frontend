'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const WhenandWhere = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleText title={<>When and Where ?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
              When is it ???
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
              Icon 2k23 is slated for the <b>final week of October </b>, A prestigious event poised to deliver insights, innovation, and inspiration globally.
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
              Where is it ???
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
              Icon 2k23 unfolds across diverse venues:<b>PTU Auditorium </b>, PTU Outdoor and Indoor grounds, and CSE Department classrooms.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="gradient-03 z-[0] " />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/audi.png"
          alt="audi"
          className="w-[90%] h-[90%] object-contain z-10 relative"
        />

      </motion.div>
    </motion.div>
  </section>
);

export default WhenandWhere;
