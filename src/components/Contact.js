import React  from "react";

const Contact = (({email} ) => {
const mailTo = `mailto:${email}`;

    return (
      <section id="contact">
        <div className="row center">

            <h1>
              <span>Get In Touch.</span>
            </h1>
          <a className="button" href={mailTo} ><i className="fa fa-envelope"></i> Email Me</a>
        </div>
      </section>
    );
});

export default Contact;
