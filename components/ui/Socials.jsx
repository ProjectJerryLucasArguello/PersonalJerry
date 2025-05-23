import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub className="text-white"/>, path: "https://github.com/ProjectJerryLucasArguello"},
    {icon: <FaLinkedinIn className="text-white"/>, path: "https://www.linkedin.com/in/jerry-arguello-a6ba35313/"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials