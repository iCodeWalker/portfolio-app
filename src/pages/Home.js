import React, { useRef } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const HomePage = (props) => {
  const contactDiv = useRef();

  const location = useLocation();

  console.log(location.state);

  const handleHireClick = () => {
    const refe = document.querySelector(".contact");
    console.log(contactDiv.current);
    refe.scrollIntoView({ behavior: "smooth", alignToTop: true });
  };

  return (
    <div>
      <Header onHireClick={handleHireClick} />

      <Home />

      <Skills />

      <MyWorks />

      <Contact reference={contactDiv} />

      <Education />

      <Experience />
      <hr
        style={{
          borderBottom: "1px wheat solid",
          marginBottom: "100px",
        }}
      />

      <Footer />
    </div>
  );
};

export default HomePage;
