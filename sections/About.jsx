'use client';
import { motion } from 'framer-motion';
import { TypingBoldText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-04 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingBoldText title="About ICON" textStyles="text-center text-3xl font-bold text-white py-5" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-4 font-roboto text-lg text-center text-white leading-10"
      >
        Welcome to ICON, the Annual Technical Symposium hosted by Puducherry Technological University's (PTU) Department of Computer Science and Engineering (CSE). ICON represents a dynamic convergence of technology, innovation, and knowledge-sharing, bringing together brilliant minds from across the nation to explore the frontiers of computer science and engineering.
      </motion.p>

      {/* Vision Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)} // Add your animation variants here
        className="mt-8"
      >
        <TypingBoldText title="Our Vision" textStyles="text-center text-3xl font-bold text-white py-5" />
        <p className="mt-4 font-roboto text-lg text-center text-white leading-10">
          At ICON, we envision a world where technology is a catalyst for change and progress. We believe in the exceptional potential of students and the transformative impact they can make by harnessing the power of cutting-edge technology.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)} // Add your animation variants here
        className="mt-8"
      >
        <TypingBoldText title="Our Mission" textStyles="text-center text-3xl font-bold text-white py-5" />
        <p className="mt-4 font-roboto text-lg text-center text-white leading-10">
          Our mission is to provide an engaging and dynamic platform for students, academicians, and industry professionals to connect, learn, and innovate. Through an array of technical events, hands-on workshops, and insightful discussions, we aim to ignite curiosity, cultivate creativity, and foster innovation in the ever-evolving realm of computer science and engineering.
        </p>
      </motion.div>
      
    </motion.div>
  </section>
);

export default About;
