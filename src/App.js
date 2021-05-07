import React from "react";
// css
import "./App.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
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
