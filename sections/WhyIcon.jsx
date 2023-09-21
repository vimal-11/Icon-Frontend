'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';

const WhyIcon = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}  mx-auto flex flex-col`}
    >
      <TitleText title={<>Why Icon 2k23?</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 1)}
          className="flex md:flex-row flex-col gap-4"
        >

          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                Back After 3 Years 🚀
              </h4>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                After a 3-year hiatus, the event is back with a bang - Get ready for nostalgia, excitement, and memories.
              </p>
            </div>

          </div>
          <img
            src="img-1.jpg"
            alt="dk"
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'spring', 1, 1)}
          className="flex md:flex-row flex-col gap-4"
        >

          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                Discover, Connect, and Compete 🏁
              </h4>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                Your Gateway to National-level Technical and Cultural Exchange – Where Languages, Cultures, and Ideas Converge.
              </p>
            </div>

          </div>
          <img
            src="img-1.jpg"
            alt="dk"
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
          />

        </motion.div>
        <motion.div
          variants={fadeIn('right', 'spring', 1.5, 1)}
          className="flex md:flex-row flex-col gap-4"
        >

          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                Savor the Flavors 😋
              </h4>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                Culinary Delights and Tech Wonders Unite A Flavorful Experience Like No Other with 15+ food Stalls Awaiting to deed you.
              </p>
            </div>

          </div>
          <img
            src="img-1.jpg"
            alt="dk"
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'spring', 2.0, 1)}
          className="flex md:flex-row flex-col gap-4"
        >

          <div className="w-full flex justify-between items-center">
            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
              <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                Three Days Out of College 😜
              </h4>
              <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                Experience laughter, learning, and celebration at ICON - Embrace college fun with a well deserved 'OD'!
              </p>
            </div>

          </div>
          <img
            src="img-1.jpg"
            alt="dk"
            className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default WhyIcon;
