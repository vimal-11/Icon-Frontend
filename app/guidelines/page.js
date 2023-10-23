'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn } from '../../utils/motion';
import { staggerContainer } from '../../utils/motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Guidelines = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div className={`${styles.xPaddings} py-8 relative`}>
            <div className="gradient-02 z-[0]" />

            <section className={`${styles.paddings} relative z-0`}>
                <div className="gradient-04 z-0" />

                <div className="relative mx-auto min-w-0 break-words text-white bg-slate-700 w-full shadow-lg text-lg md:text-xl rounded-xl mt-[-50px] pb-[50px] mb-[100px]">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="mt-6 py-6 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4">
                                        <p className="font-bold text-2xl lg:text-3xl text-white mb-4">Registration Guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center py-4">
                            <div className="flex flex-col space-y-4 mx-1 sm:mx-2 md:mx-4 lg:mx-8 xl:mx-16 2xl:mx-32">
                                <GuidelineStep number="1" title="Sign Up and Get Started">
                                    Begin your journey by creating a personal account. Click on "Sign In" to initiate the process.
                                </GuidelineStep>

                                <GuidelineStep number="2" title="Login to Your Account">
                                    After signing up, use your credentials to log in securely and access your account.
                                </GuidelineStep>

                                <GuidelineStep number="3" title="Craft Your Profile">
                                    Personalize your experience by setting up your profile. Navigate to the "CREATE PROFILE" option in the menu bar to get started.
                                </GuidelineStep>

                                <GuidelineStep number="4" title="Reserve Your Spot at Exciting Events">
                                    Dive into the action! Reserve your spot at thrilling events that pique your interest.
                                </GuidelineStep>

                                <GuidelineStep number="5" title="Team Up for Team Events">
                                    For team events, extend the excitement to your teammates. Follow the same process (Steps 1 to 3) to create accounts for each team member.
                                </GuidelineStep>

                                <GuidelineStep number="6" title="Team Members, Check! Now, Register for the Event">
                                    After creating accounts for your team, click on the registered event in your "MY PROFILE" page to add your team members to the event.
                                </GuidelineStep>

                                <GuidelineStep number="7" title="Secure Your Spot with a Payment">
                                    Don't miss out! Complete your event registration by making payments securely from your "MY PROFILE" page.
                                </GuidelineStep>

                                <GuidelineStep number="8" title="Registration Video">
                                    <a href="https://www.instagram.com/p/Cyq1_OXBTP-/?igshid=YTUzYTFiZDMwYg==" className="text-blue">Click Here for Step by Step process for successful registrations.</a>
                                </GuidelineStep>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    </div>
);

const GuidelineStep = ({ number, title, children }) => (
    <div className="flex py-4">
        <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl py-2">{number}</div>
        <div className="ml-4">
            <h2 className="font-semibold text-lg md:text-xl pb-4">{title}</h2>
            <p className="text-white">{children}</p>
        </div>
    </div>
);

export default Guidelines;
