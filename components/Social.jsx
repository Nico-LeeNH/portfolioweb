import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const socials = [
    { icon: <FaGithub />, path: "https://github.com/Nico-LeeNH"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/nico-lee-nathanael-handoko-a533b4288/"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/nicoleenathanaelh/"},
];


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((item, index)=>{
        return(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
    })}</div>
  )
}

export default Social