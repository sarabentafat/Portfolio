import Card from "../components/Card"
import {navVariants} from "../utils/motion"
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className=" sm:pt-16 pt-48 " id="projects">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={` `}
      >
        <h1 className="text-2xl font-bold mb-3 text-hColo">/projects</h1>
      </motion.nav>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={` `}
      >
        <h2 className="text-pColor  mb-4">
          here some projects i've been working with
        </h2>
      </motion.nav>
      <Card />
    </div>
  );
}

export default Projects