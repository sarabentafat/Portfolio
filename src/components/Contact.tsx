import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {CgMail} from 'react-icons/cg'
import { BiMenuAltRight } from "react-icons/bi";
import {useState} from 'react';

const Contact = () => {
  const [isOpen,setIsOpen]=useState(false)
  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div
        className="hidden sm:block
    font-bold text-textColor text-lg fixed bottom-28 right-[45px] md:right-[70px] "
      >
        <ul className="text-right">
          <li className=" hover:text-pColor">
            <a href="#skills">/skills</a>
          </li>

          <li className=" hover:text-pColor">
            <a href="#home">/home</a>
          </li>
          <li className=" hover:text-pColor">
            <a href="#projects">/projects</a>
          </li>
          <li className=" hover:text-pColor">
            <a href="#about">/about me</a>
          </li>
        </ul>
        <ul className="flex mt-5">
          <li>
            <a
              href="https://www.linkedin.com/in/sara-bentafat-0362a6212/"
              target="_blank"
            >
              <AiFillLinkedin size={25} className=" hover:text-pColor " />
            </a>
          </li>
          <li>
            <a href="mailto:s_bentafat@estin.dz" target="_blank">
              <CgMail size={25} className=" hover:text-pColor mx-1" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sarabentafat" target="_blank">
              <AiFillGithub size={25} className=" hover:text-pColor" />
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden  " onClick={toggleMenu}>
        <BiMenuAltRight
          size={40}
          className="cursor-pointer right-12 absolute top-5 hover:text-textColor   "
        />
      </div>
      {isOpen && (
        <div
          className=" absolute right-14 top-16 sm:hidden text-sm"
          onClick={toggleMenu}
        >
          <ul className="text-right">
            <li className=" hover:text-textColor">
              <a href="#skills">/skills</a>
            </li>
            <li className=" hover:text-textColor">
              <a href="#home">/home</a>
            </li>
            <li className=" hover:text-textColor">
              <a href="#projects">/projects</a>
            </li>
            <li className=" hover:text-textColor">
              <a href="#about">/about me</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contact