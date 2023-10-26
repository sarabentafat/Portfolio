import Contact from '../components/Contact.tsx'
import pic from '../assets/pic.jpg'
import { motion } from "framer-motion";
import {CgMail} from "react-icons/cg"
import { navVariants} from "../utils/motion";
import {  TypingTexto } from "../components/CustomTexts.tsx";

const Home = () => {
  return (
    <div id="home" className="h-screen  ">
      <Contact />

      <div className="sm:flex pt-52 sm:pt-64  text-justify md:text-2xl">
        <div className="flex-1">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex">
              Hi,i'm
              <TypingTexto title=" Sara Bentafat" />
            </div>

            <p className="text-hColor">
              I'm a web developer based in Algeria. I have great interest in
              full-stack development, cyber security and everything in
              between.
            </p>
          </motion.nav>
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={` `}
          >
            <a href="mailto:s_bentafat@estin.dz">
              <div className="cursor-pointer my-10 relative bg-bgClr w-[124px] flex border  p-2 rounded-lg text-textColor border-textColor  ">
                <button className=" ">Contact</button>

                <CgMail className="absolute right-[5px] top-[14px]" size={23} />
              </div>
            </a>
          </motion.nav>
        </div>

        <div className="sm:w-[30%] relative mt-10 mx-auto w-[75%]  sm:mt-0 ">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={` `}
          >
            <img
              src={pic}
              className="] sm:w-[90%] lg:w-[80%] absolute sm:right-0 right-[8px] rounded-md "
              alt="pic"
            />
          </motion.nav>
        </div>
      </div>
    </div>
  );
}

export default Home
