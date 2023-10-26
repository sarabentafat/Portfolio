
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import pic from '../assets/me.png'

const About = () => {
  return (
    <div className=" pt-56 sm:pt-20" id="about">
      <h1 className="text-2xl mb-3 font-bold text-hColor">
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          /about me
        </motion.nav>
      </h1>
      <div className="md:flex text-justify ">
        <div className="md:w-[60%]  md:mr-3 lg:mr-5">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-pColor">
              I am currently a 4th-year computer engineering student at
              <span className="text-textColor">
                <a href="https://estin.dz/"> ESTIN </a>
              </span>
              , I'm an active member in clubs , where I collaborate with other
              students and participate in projects and events. I've developed
              strong teamwork and communication skills. Now i'm looking for
              internships ,startups to work with and events so ican continue improving my
              skills and pursuing my passion for Tech .
            </p>
          </motion.nav>
        </div>

        <div className="  relative flex-1 mt-10  md:mt-0">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="w-full"
          >
            <img
              src={pic}
              className="w-[500px] lg:w-[600px] absolute   rounded-md
             "
              alt="pic"
            />
          </motion.nav>
        </div>
      </div>
    </div>
  );
}

export default About