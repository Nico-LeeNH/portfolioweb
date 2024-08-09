"use client"

import { Icon } from 'lucide-react'
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'


// about
const about ={
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nico Lee "
    },
    {
      fieldName: "Phone",
      fieldValue: "+6281-55599-2978"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Country",
      fieldValue: "Indonesia"
    },
    {
      fieldName: "Email",
      fieldValue: "nathanaelhandokonico@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Indo, English, Chinese"
    }
   ]
}

const experience ={
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items:[
    {
      company: "SIDIGS",
      position: "Full Stack Developer",
      duration: "Juli 2024 - Present",
    },
    {
      company: "SIDIGS",
      position: "Wordpress Developer",
      duration: "April 2024 - Present",
    },
    {
      company: "Jagoan Hosting",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
}


const education ={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items:[
    {
      institution: "SMK Telkom Malang",
      degree: "Web Development",
      year: "2023 - Present",
    },
    
  ],
}


const skills ={
  title: "My skill",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList:[
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import{
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from '@radix-ui/react-scroll-area'
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <div>Resume page</div>
  )
}

export default Resume;