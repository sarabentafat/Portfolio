import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className=" relative text-sm flex justify-center text-pColor pb-5 h-[150px] ">
      <div className="sm:hidden">
        <ul className="flex mt-10">
          <li>
            <a
              href="https://www.linkedin.com/in/sara-bentafat-0362a6212/"
              target="_blank"
            >
              <AiFillLinkedin size={25} className=" text-textColor " />
            </a>
          </li>
          <li>
            <a href="mailto:s_bentafat@estin.dz" target="_blank">
              <CgMail size={25} className=" text-textColor mx-1" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sarabentafat" target="_blank">
              <AiFillGithub size={25} className=" text-textColor" />
            </a>
          </li>
        </ul>
      </div>
      <p className="mb-6 text-center absolute bottom-0">
        Built and designed by Sara Bentafat
        <br />
        All rights reserved. ©
      </p>
    </div>
  );
};

export default Footer;
