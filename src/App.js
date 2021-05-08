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
import resumeData from "./resumeData.json";

const App = () => {
  const { main, resume, portfolio, testimonials } = resumeData;
  return (
    <div className="App">
      <Header
        name={main.name}
        occupation={main.occupation}
        description={main.description}
        city={main.address.city}
        social={main.social}
      />
      <About
        name={main.name}
        image={main.image}
        bio={main.bio}
        address={main.address}
        email={main.email}
        resumedownload={main.resumedownload}
      />
      <Resume
        skillmessage={resume.skillmessage}
        education={resume.education}
        work={resume.work}
        skills={resume.skills}
      />
      <Portfolio portfolio={portfolio.projects} />
      <Testimonials testimonies={testimonials.testimonials} />
      <Contact email={main.email} />
      <Footer name={main.name} social={main.social} />
    </div>
  );
};
export default App;
