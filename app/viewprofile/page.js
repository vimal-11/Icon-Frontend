'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  textVariant,
  fadeIn,
  staggerContainer,
} from '../../utils/motion';

const StudentDetails = () => {
  // const router = useRouter();
  const [student, setStudent] = useState(null);
  const [events, setEvents] = useState([]);

  // Check if localStorage is defined before using it
  const uid = typeof localStorage !== 'undefined' ? localStorage.getItem('user_id') : null;

  useEffect(() => {
    // Check if uid is defined before making API requests
    if (uid) {
      async function fetchData() {
        try {
          const studentResponse = await axios.get(
            `https://api.icon-ptucse.in/student/${uid}`,
          );
          setStudent(studentResponse.data);
          const uname = studentResponse.data.name;

          // Check if localStorage is defined before using it
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('user_name', uname);
          }

          const eventsResponse = await axios.get(
            `https://api.icon-ptucse.in/students/${uid}/events/`,
          );
          setEvents(eventsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      fetchData();
    }
  }, [uid]);


  // const handlePaymentSuccess = async (response) => {
  //   try {
  //     // Send the response to your backend for payment validation
  //     console.log(response);
  //     const responseFromBackend = await axios.post("https://api.icon-ptucse.in/api/callback/", {
  //       response: JSON.stringify(response),
  //     });

  //     // Handle success on the frontend as needed
  //     console.log("Payment success:", responseFromBackend.data);
  //     alert("Payment Success! Thank you for Registering.");
  //     window.location.reload();

  //     // Clear input fields
  //     // setName("");
  //     // setAmount("");
  //   } catch (error) {
  //     console.error("Error validating payment:", error);
  //     alert("Payment Failed. Try Again");
  //   }
  // };


  // const handlePaymentClick = async (e, event, regFee) => {
  //   e.preventDefault();
  //   console.log(event, regFee);
  //   await loadScript();
  //   const data = {
  //     student_id: student.id, // Replace with the actual student ID
  //     event_id: event.id, // Replace with the actual event ID
  //     amount: regFee,
  //   };

  //   try {
  //     const response = await axios.post('https://api.icon-ptucse.in/api/razorpay/', data);
  //     // Handle the response here, e.g., redirect to the Razorpay page

  //     const options = {
  //       key: response.data.razorpay_key,
  //       amount: response.data.order.amount,
  //       currency: "INR",
  //       name: response.data.student_name,
  //       description: "Test Transaction",
  //       order_id: response.data.order.id,
  //       handler: function (response) {
  //         handlePaymentSuccess(response);
  //       },
  //       prefill: {
  //         name: "User's Name",
  //         email: "User's Email",
  //         contact: "User's Phone",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };
  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //     // Extract the Razorpay Gateway URL from the response
  //     //  const razorpayGatewayUrl = response.data.razorpay_gateway_url;
  //     // Redirect the user to the Razorpay Gateway URL
  //     //  window.location.href = razorpayGatewayUrl;

  //     // const { callback_url } = response.data;
  //     // window.location.href = callback_url;
  //     // router.push(callback_url);
  //   } catch (error) {
  //     console.error('Error initiating payment:', error);
  //   }
  // };


  // const loadScript = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   document.body.appendChild(script);
  // };


  if (!student) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
      >
        <div className="text-white text-center">
          Profile not created and registered here -{' '}
          <a href="/regprofile" className="text-bold text-green-500">
            Create profile
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="bg-primary-black overflow-hidden"
    >
      {/* Student Details Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="flex justify-center items-center h-screen"
      >
        <motion.div
          className="relative md:flex md:flex-row flex-col md:w-2/3 rounded-lg lg:shadow-extra-lg m-0"
        >
          <div className="md:w-1/2 m-0 p-0">
            <img
              // src={student.id_card}
              src="/icon_finale.png"
              alt="ID Card"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <motion.div
            className="relative w-full md:w-1/2 p-[30px] py-[40px] m-0 bg-black bg-opacity-30 rounded-br-lg lg:rounded-tr-lg md:rounded-tr-lg space-y-4 sm:p-[20px] sm:py-[60px]"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center md:pb-[60px]">
              Student Details
            </h1>
            <ul>
              <li className="text-white">
                Name: <span className="text-blue-500">{student.name}</span>
              </li>
              <li className="text-white">
                College:{' '}
                <span className="text-green-500">{student.college}</span>
              </li>
              <li className="text-white">
                Department:{' '}
                <span className="text-purple-500">{student.dept}</span>
              </li>
              <li className="text-white">
                Year: <span className="text-red-500">{student.year}</span>
              </li>
              <li className="text-white">
                Email: <span className="text-yellow-500">{student.email}</span>
              </li>
              <li className="text-white">
                Phone Number:{' '}
                <span className="text-orange-500">{student.ph_no}</span>
              </li>
              <li className="text-white">
                Is Approved:{' '}
                {student.is_approved ? (
                  <span className="text-green-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 bg-black bg-opacity-30 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Registered Events</h2>
        <p className="text-lg mb-4 py-4 text-center font-medium">
          Check event details & <span className="text-green-500 font-bold">Add Team members </span> by clicking on <span className="text-blue-500 font-bold">Click here for full details. </span>
        </p>

        {/* {events.map((event, index) => (
          <Link key={event.id} href={`/viewprofile/${event.id}`}>
            <div
              key={event.id}
              className={`relative bg-white bg-opacity-20 p-4 rounded-lg mb-4 cursor-pointer transition-colors duration-300 ${index % 2 === 0
                ? 'hover:bg-red-500 hover:bg-opacity-90'
                : 'hover:bg-blue-500 hover:bg-opacity-90'
              }`}
            >
              <h3 className="text-lg font-semibold text-white">
                {event.event.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Date: {event.event.date}
              </p>
              <div className="text-sm text-gray-400 mt-2 flex justify-end">
                <ul>
                  {event.is_paid ? (
                    <li className="text-green-500 font-bold">Paid</li>
                  ) : (
                    <li className="text-sm text-white font-bold mt-2 bg-red-500 py-1 px-4 rounded-md hover:bg-red-600">
                      <Link href={`/payevent/${event.event.reg_fee}`}>
                        Pay for event
                      </Link>
                    </li>
                    <li className="text-sm text-white font-bold mt-2 bg-red-500 py-1 px-4 rounded-md hover:bg-red-600">
                        <button onClick={(e) => handlePaymentClick(e, event.event, event.event.reg_fee)}>
                          Pay for event
                        </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Link>
        ))} */}

          {events.map((event, index) => (
            <div
              key={event.id}
              className={`relative bg-white bg-opacity-20 p-4 rounded-lg mb-4 cursor-pointer transition-colors duration-300 ${index % 2 === 0
                ? "hover:bg-green-500 hover:bg-opacity-90"
                : "hover:bg-blue-500 hover:bg-opacity-90"
              }`}
            >
              <Link key={event.id} href={`/viewprofile/${event.id}`}>
              <h3 className="text-lg font-semibold text-white">
                {event.event.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Date: {event.event.date}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Amount: {event.event.reg_fee}
              </p>
              </Link>
              <div className="text-sm text-gray-400 mt-2 flex justify-end">
                <ul>
                  {event.is_paid ? (
                    <li className="text-green-500 font-bold">Paid</li>
                  ) : (
                    <li className="text-sm text-white font-bold mt-2 bg-red-500 py-1 px-4 rounded-md hover:bg-red-600">
                      <Link href="https://forms.gle/wuBCrrzEH3WqvqtHA">
                        Pay for event
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className="text-sm text-gray-400 mt-2 flex justify-end">
                <Link key={event.id} href={`/viewprofile/${event.id}`}>
                  <button className="text-sm text-gray-400 border border-gray-400 rounded-md px-2 py-1 hover:bg-gray-400 hover:text-white">
                    Click here for full details
                  </button>
                </Link>
              </div>
              {/* <Link className="text-sm text-gray-400 mt-2 flex" key={event.id} href={`/viewprofile/${event.id}`}>Click here for full details</Link> */}
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default StudentDetails;
