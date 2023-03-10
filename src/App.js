import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import "./app.css";
import Menu from "./components/menu/Menu";
import { useState } from "react";
// import AOS from 'aos'

function App(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        {/* <Education /> */}
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
  
}

export default App;
