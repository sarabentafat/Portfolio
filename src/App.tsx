import Footer from "./sections/Footer"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Home from "./sections/Home"
import About from "./sections/About";


function App() {
  return (
    <>
      <div
        className="bg-black text-white  text-lg sm:text-xl font-roboto
      "
      >
        <div className="mx-[60px] sm:mx-[150px] lg:mx-[300px] ">
          <Home />
          <About/>
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
