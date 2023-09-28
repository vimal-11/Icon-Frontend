'use client';

import { Footer, Navbar } from '../components';
import { About, Register, Feedback, Hero, WhyIcon, Partners, WhenandWhere } from '../sections';
import Workshop from '../sections/Workshop';

const Page = () => (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Workshop />
      <Register />
      <WhenandWhere />
      <WhyIcon />
      <Partners />
      <Feedback />
      <Footer />
    </div>
);

export default Page;
