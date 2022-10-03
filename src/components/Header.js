import React, { useState } from "react";

const Header = ({ name, occupation, description, city, social }) => {
// toggle current class based on what li is clicked.

  const [active,setActive] = useState({active:false});

  const toggleActive = (()=>{
   const currentState = active;
   setActive({ active: !currentState })
  });
  const networks = social.map( (network)=> {
    return (
      <li key={network.name}>
        <a href={network.url} target="_blank">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <header id="home">
   

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I{"'"}m {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
