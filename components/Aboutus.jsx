'use client';

import React from 'react';

import styles from '../styles';

const contributors = [
  {
    name: 'Vimalaadithan B S',
    desc: 'Secretary',
    image: 'vimal.jpg',
    link1: 'https://github.com/vimal-11',
    link2: 'https://www.linkedin.com/in/vimal11/',
    link3: 'https://www.instagram.com/_vimal._11/',
    courseandyear: 'CSE, IV Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Laxman S',
    desc: 'Treasurer',
    image: 'laxman.jpg',
    link1: 'https://github.com/laxx1612/',
    link2: 'https://www.linkedin.com/in/laxman-s-326555230/',
    link3: 'https://www.instagram.com/_._laxx/',
    courseandyear: 'CSE, IV Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Charan S',
    desc: 'Joint Secretary',
    image: 'charan.jpg',
    link1: '#',
    link2: 'http://www.linkedin.com/in/charan-srinivassan-917715291',
    link3: 'https://www.instagram.com/_charan_017/',
    courseandyear: 'CSE, III Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Dwaipayan De',
    desc: 'Joint Treasurer',
    image: 'dwai.jpg',
    link1: 'www.google.com',
    link2: 'www.github.com',
    link3: '#',
    courseandyear: 'CSE, III Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Bharani M',
    desc: 'Assosiate Treasurer',
    image: 'bharani.jpg',
    link1: 'https://github.com/bharani-kcm',
    link2: 'https://www.linkedin.com/in/bharani-m-b32265287',
    link3: 'https://www.instagram.com/bharani_kcm/',
    courseandyear: 'CSE, III Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Robin Brito',
    desc: 'M.Tech Representative',
    image: 'robin.jpg',
    link1: 'https://www.github.com',
    link2: 'https://www.instagram.com',
    link3: '#',
    courseandyear: 'M.Tech II Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: 'Jothika ',
    desc: 'MCA Representative',
    image: 'jothika.jpg',
    link1: 'https://www.github.com',
    link2: 'https://www.linkedin.com/in/jothika-raja-b1235a1a4',
    link3: 'https://www.instagram.com/jyotika.raja/',
    courseandyear: 'MCA II Year',
    description:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const Aboutus = () => (
  <div className={`${styles.xPaddings} py-8 relative`}>
    <h2 className="text-6xl font-semibold text-center text-white my-8 mb-16 z-10">
      OFFICE BEARERS
    </h2>
    <div className="gradient-02 z-0" />
    {contributors.map((contributor, index) => (
      <div
        key={index}
        className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words text-white bg-slate-700 w-full shadow-lg rounded-xl mt-[100px] mb-[20px]"
      >
        <div className="px-6 py-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={contributor.image}
                  className="aspect-square shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  alt={contributor.name}
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="text-center mt-2">
                <h3 className="text-2xl text-white font-bold leading-normal mb-1">
                  {contributor.name}
                </h3>
                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  {contributor.courseandyear}
                </div>
                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                  {contributor.desc}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:flex-row lg:pt-4 pt-4 md:pt-8 pb-0">
                <div className="p-3 text-center flex justify-center align-items-center">
                  <img
                    src="/github.svg"
                    className="w-[20px] md:w-[28px] h-[20px] md:h-[28px] object-contain cursor-pointer mr-2"
                    alt="GitHub"
                  />
                  <a
                    href={contributor.link1}
                    className="text-base md:text-sm font-bold block uppercase tracking-wide text-white"
                  >
                    Github
                  </a>
                </div>
                <div className="p-3 text-center flex justify-center align-items-center">
                  <img
                    src="/linkedin.svg"
                    className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] object-contain cursor-pointer mr-2"
                    alt="LinkedIn"
                  />
                  <a
                    href={contributor.link2}
                    className="text-base md:text-sm font-bold block uppercase tracking-wide text-white"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="p-3 text-center flex justify-center align-items-center">
                  <img
                    src="/instagram.svg"
                    className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] object-contain cursor-pointer mr-2"
                    alt="Instagram"
                  />
                  <a
                    href={contributor.link3}
                    className="text-base md:text-sm font-bold block uppercase tracking-wide text-white"
                  >
                    Instagram
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Aboutus;
