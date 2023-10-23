'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';

const Workshop = () => (
    <section className={`${styles.paddings} relative z-10 flex justify-center items-center`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
        >
            <TitleText title={<>Our Workshop</>} textStyles="text-center text-white" />
            <div className="mt-[50px] flex flex-col gap-[30px]">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.5, 1)}
                    className="flex md:flex-row flex-col gap-4 items-center"
                >
                    <div className="w-full text-center">
                        <div className="container mx-auto">
                            <img
                                src="fsd.png"
                                alt="Workshop Illustration"
                                className="w-full h-auto rounded-[20px] object-cover mx-auto"
                                style={{ maxWidth: '600px' }} // Set the maximum width for the image
                            />
                        </div>

                        <h4 className="font-semibold lg:text-[32px] text-[24px] text-white py-5">
                            Explored Full Stack Development and DevOps
                        </h4>
                        {/* <p className="mt-[16px] font-normal lg:text-[20px] text-[16px] text-secondary-white py-4" style={{ letterSpacing: '0.05em' }}>
                            Join us for a 2-day workshop on Full Stack Development in association with <span className="text-blue-500 font-bold">Capgemini</span> on <b className='text-green-500'>October 9th and 10th</b>.
                        </p> */}

                        {/* <a
                            href="https://forms.gle/2Ag5uiSMAPZxXLvA8"
                            className="bg-blue-600 text-white py-4 px-4 rounded-full text-sm hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                            style={{ width: '180px', margin: '0 auto' }}
                        >
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Register Now
                            </motion.span>
                        </a> */}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
);

export default Workshop;