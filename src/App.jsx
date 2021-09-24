import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/proj/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import './app.scss';


function App() {
  return (
    <div className="app">
      <div class="container">
        <div class="loader"></div>
      </div>
      <Navbar/>
      <div className="sections">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact className='contact-section'/>
        <Footer className='footer-section'/>
      </div>
    </div>
  );
}

export default App;
