
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import xdatathonImage from "../assets/xd.png";
import black from "../assets/black.jfif"
import cours from "../assets/cours.png";
import food from "../assets/food.png";
import blog from "../assets/blog.png";
import ecommerce from "../assets/ecommerceCars.png";
import collabOn from "../assets/collabOn.png";
import soaiGame from "../assets/soaiGame.png"
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";


function Card() {
  const projects = [
    {
      id: 1,
      name: "announcement website",
      image: cours,
      details:
        "This is a web application  that allows users to publish and view advertisements for tutoring courses .",
      githubLink: "https://github.com/sarabentafat/projetGl",
      tools: "ReactJs Tailwind css ",
      demo: "",
    },
    {
      id: 2,
      name: "Xdatathon",
      image: xdatathonImage,
      details: "website of DatathonX Hackathon , organized",
      tools: "React Js TailwindCss ",
      githubLink: "https://github.com/sarabentafat", // Add your GitHub link here
      demo: "https://xdatathon.netlify.app/",
    },

    {
      id: 3,
      name: "Food Delivery ",
      image: food,
      details: " website for food delivery ",
      githubLink: "https://github.com/sarabentafat/Food-Delivey",
      tools: "ReactJs TailwindCss",
      demo: "",
    },
    {
      id: 4,
      name: "blog app",
      image: blog,
      details: "CRUD platform with authentication",
      githubLink: "https://github.com/sarabentafat/BlogAPP",
      tools: "Reactjs Nodejs MongoDB tailwindCss",
      demo: "",
    },
    {
      id: 4,
      name: "Cars ecommerce application ",
      image: ecommerce,
      details:
        "I was the team leader for the project, responsible for backend development using Express.js. Additionally, I integrated the backend with the frontend using Redux and Axios ",
      githubLink: "https://github.com/sarabentafat/EcommerceCars",
      tools: "Nodejs Redux Nodejs MongoDB tailwindCss",
      demo: "",
    },
    {
      id: 4,
      name: "Collaboration app",
      image: collabOn,
      details:
        "I was part of the frontend development team for the winning project at the 2023 Innobyte Hackathon hosted by Bytecraft Club.",
      githubLink: "https://github.com/sarabentafat/collabOn",
      tools: "Nodejs tailwindCss",
      demo: "",
    },
    {
      id: 4,
      name: "Quizz app",
      image: soaiGame,
      details:
        "This web application is an interactive quiz game designed for the welcome day event at SOAI. ",
      githubLink: "https://github.com/sarabentafat/QuizzApp",
      tools: "Fireabse Reactjs tailwindCss",
      demo: "https://learning-e47b8.web.app/",
    },
    {
      id: 5,
      name: "Freelance react project",
      image: black,
      details:
        " ",
      githubLink: "",
      tools: "React Js ,Jest ,React Testing Library",
      demo: "",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 rounded-sm ">
      {projects.map((project) => (
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          <div className="m-3 bg-bgClr rounded-2xl hover: " key={project.id}>
       
              <img
                className="bg-no-repeat  rounded-t-2xl h-[190px] w-full"
                src={project.image}
                alt=""
              />
           
            <h1 className="pt-4 pl-4 text-lg  text-hColor">{project.name}</h1>
            <p className="text-pColor text-sm pl-4  p-2">
              {project.details}
            </p>
            <p className="text-textColor text-xs pl-4  ">{project.tools}</p>
            <div className="flex">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size={25}
                  className="hover:text-pColor ml-4 mb-3 mt-3"
                />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank">
                  <AiOutlineDeliveredProcedure
                    size={25}
                    className="hover:text-pColor ml-2 mb-3 mt-3"
                  />
                </a>
              )}
            </div>
          </div>
        </motion.nav>
      ))}
    </div>
  );
}

export default Card;
