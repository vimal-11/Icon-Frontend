'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="gradient-02" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            ICON
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Exploring Horizons, Unleashing Innovations
          </p>

          <div className="flex gap-4">
            {/* <p className="font-normal text-[14px] text-white opacity-50">
            Mail : <span className='font-extrabold'>icon@ptuniv.edu.in</span>
          </p> */}
            {/* {socials.map((social) => (
               <a
                 key={social.name}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-500 hover:text-blue-700"
               >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px]"
                /> Hello
               </a> */}
              <a
                href="https://github.com/vimal-11/Icon-Frontend/tree/production"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src="/github.svg"
                  alt="/github.svg"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a
                href="'https://github.com/vimal-11/Icon'"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src="/github.svg"
                  alt="/github.svg"
                  className="w-[24px] h-[24px]"
                />
              </a>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
