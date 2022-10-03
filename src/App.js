import React from "react";
// css
import "./App.css";
// components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
// data
import resumeData from "./resumeData.json";

const App = () => {
  const { main, resume, portfolio } = resumeData;

  return (
    <div>
      <div className="App">
      <Nav />
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
          certifications={resume.certifications}
        />
        <Portfolio portfolio={portfolio.projects} />
        <Contact email={main.email} />
        <Footer name={main.name} social={main.social} />
      </div>
    </div>
  );
};
export default App;
