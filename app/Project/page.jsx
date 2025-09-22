"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUp, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Portfolio",
    title: "project 1",
    description:
      "Ini adalah Web Portfolio saya menggunakan React, Next.js dan Talwind CSS",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      {
        name: "Talwind CSS",
      },
    ],
    image: "/assets/work/image.png",
    live: "https://nicolee.vercel.app",
    github: "https://github.com/Nico-LeeNH/portfolioweb",
  },
  {
    num: "02",
    category: "E-REPOM",
    title: "project 2",
    description:
      "Aplikasi E-REPOM memudahkan mahasiswa dalam mengajukan surat rekomendasi untuk penelitian, observasi, dan magang. Dengan sistem pengisian form yang sederhana dan efisien, mahasiswa dapat dengan cepat mengirimkan permohonan sesuai kebutuhan akademis dan profesional mereka.",
    stack: [
      { name: "Flutter" },
      { name: "Laravel" },
    ],
    image: "/assets/work/E-REPOM.jpeg",
    live: "",
    github: "https://github.com/ocin14/Aplikasi-Mahasiswa",
  },
  {
    num: "03",
    category: "FIT.AI",
    title: "project 3",
    description:
      "Web aplikasi perencanaan nutrisi harian dan rekomendasi makanan berbasis AI. Rekomendasi makanan harian yang dipersonalisasi berdasarkan kebutuhan pengguna kalori, protein, lemak, karbohidrat, dan gula dengan memastikan variasi dan menghindari pengulangan makanan dalam satu minggu. Dengan menggunakan model machine learning, aplikasi ini menghasilkan rencana makan optimal yang terintegrasi dengan database makanan secara real-time.",
    stack: [
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "TensorFlow" },
    ],
    image: "/assets/work/FIT.AI.png",
    live: "",
    github: "https://github.com/KALEOUUU/ml-food-recommendation",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl-justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last commo*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*button*/}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider button*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
