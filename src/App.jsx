//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";
import NavBar from "./components/navBar.jsx";
import HeroSection from "./components/heroSection.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Footer from "./components/footer.jsx";
import Skills from "./components/skills.jsx";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
