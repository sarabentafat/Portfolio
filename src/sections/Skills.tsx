import { BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Skills = () => {
  const technologies = [
    "Javascript ES6+",
    "Python",
    "React.js",
    "Jest and react testing library",
    "Redux",
    "Node.js",
    "Figma",
    "Docker",
    "Html & Css",
    "Mysql",
    "MongoDB",
    "FireBase",
    "TailwindCss",
    "Bootstrap",
    "Firebase",
  ];

  return (
    <div id="skills" className="text-justify pt-80 md:pt-28">
      <h1 className="text-2xl mb-3 font-bold text-hColor">
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          /Skills
        </motion.nav>
      </h1>

      <h2 className="text-pColor">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={` `}
        >
          I am currently learning cyber security, React native, CI DI tools and
          ML.
        </motion.nav>

        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          Here are some technologies I have experience working with:
        </motion.nav>
      </h2>

      <div className="flex text-pColor mt-3">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={``}
        >
          <ul className="grid grid-cols-2">
            {technologies.map((tech, index) => (
              <li key={index} className="flex">
                <BiSolidRightArrow
                  size={13}
                  className="text-textColor mr-1 mt-2"
                />
                <p>{tech}</p>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Skills;
