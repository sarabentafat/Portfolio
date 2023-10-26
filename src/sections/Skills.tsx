import { BiSolidRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";
import { navVariants} from "../utils/motion";
const Skills = () => {
  return (
    <div id="skills" className=" text-justify pt-80  md:pt-28 ">
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
          I am currently cyber security and working in enhacing my backend
          skills.
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
          <ul>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p> Javascript ES6+</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Python</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p> React.js</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Node.js</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Figma</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Docker</p>
            </li>
          </ul>
        </motion.nav>
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={``}
        >
          <ul className="ml-10">
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Html & Css</p>
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              Mysql{" "}
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />{" "}
              MongoDB
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />{" "}
              TailwindCss
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              Bootstrap
            </li>
            <li className="flex">
              <BiSolidRightArrow
                size={13}
                className="text-textColor mr-1 mt-2"
              />
              <p>Firebase</p>
            </li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Skills;
