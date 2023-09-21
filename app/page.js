'use client';

import { Footer, Navbar } from '../components';
import { About, Register, Feedback, Hero, WhyIcon, Partners, WhenandWhere, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Register />
    <WhenandWhere />
    <WhyIcon />
    <Partners />
    <Feedback />
    <Footer />
    <World />

  </div>
);

export default Page;

