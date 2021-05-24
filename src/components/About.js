import React from "react";

 const About = ( ({name,image,bio,address,email,resumedownload}) =>  {
//const {name,image,bio,address,email,resumedownload} = props;
 // const [city,state] = this.address;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={image}
              alt={name + " Pic"}
            />
          </div>
          <div className="nine columns main-col">
            <h2>Who I am</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  {address.city}, {address.state}
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
});

export default About;