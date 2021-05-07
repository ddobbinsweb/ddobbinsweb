import React from "react";
// css
import "./App.css";
// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
// data
import resumeDataJson from "./resumeData.json";

export default function App() {
  return (
    <div className="App">
      <Header data={resumeDataJson.main} />
      <About data={resumeDataJson.main} />
      <Resume data={resumeDataJson.resume} />
      <Portfolio data={resumeDataJson.portfolio} />
      <Testimonials data={resumeDataJson.testimonials} />
      <Contact data={resumeDataJson.main} />
      <Footer data={resumeDataJson.main} />
    </div>
  );
}
