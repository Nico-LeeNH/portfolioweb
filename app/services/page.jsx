"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Sebagai Web developer, saya memiliki pengalaman dalam membangun dan mengoptimalkan situs web responsif. Dengan menggunakan berbagai teknologi web seperti HTML, CSS, Vue.js, Javascript dan framework modern.",
    href: "https://github.com/Nico-LeeNH",
  },
  {
    num: "02",
    title: "WordPress Development",
    description:
      "Sebagai WordPress developer, saya berfokus pada pengembangan situs web yang dapat dengan mudah diatur dan diperbarui oleh pengguna. Saya mengkustomisasi tema dan plugin sesuai kebutuhan spesifik klien, memastikan keamanan, performa, dan pengalaman pengguna yang lancar.",
    href: "https://sekolahanaksaleh.sch.id/",
  },
  {
    num: "03", 
    title: "UI/UX Design",
    description:
      "Sebagai UI/UX Designer, saya merancang antarmuka yang estetis dan intuitif, dengan mengutamakan kenyamanan dan kemudahan navigasi. Setiap desain berdasarkan analisis perilaku pengguna, bertujuan menciptakan pengalaman yang menyenangkan dan efektif dalam penggunaan aplikasi.",
    href: "https://www.figma.com/design/cATD704148ING69kadauxc/Nutur?node-id=0-1&t=j0XKudmd3AeDCSLf-1",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/*top*/}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/*title*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/*description*/}
              <p className="text-white/60">{service.description}</p>
              {/*border*/}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

// "use Client";

// import { BsArrowDownRight } from 'react-icons/bs';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     num: "01",
//     title: "Web Development",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat molestiae sapiente",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "Wordpress Development",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat molestiae sapiente",
//     href: "",
//   },
//   {
//     num: "01",
//     title: "UI/UX Design",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat molestiae sapiente",
//     href: "",
//   },
// ]

// const Services = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className='container mx-auto'>
//         <motion.div
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: 1,
//           transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
//          }}
//         >
//           {services.map((service, index)=>{
//             return(
//               <div key={index}>
//                 <div>
//                   <div>{service.num}</div>
//                   <Link href={service.href}>
//                   <BsArrowDownRight />
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services;
