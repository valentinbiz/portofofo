import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";

import Lottie from "lottie-web";
import AOS from "aos";
import "aos/dist/aos.css";

import AnimationDuck from "../../Components/Animation/duck.json";

import "./ContactStyle.scss";

AOS.init();

export default function Contact() {
  let animationContainerDuck = React.createRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainerDuck.current,
      animationData: AnimationDuck,
      loop: false,
      speed: 1,
      mode: "scroll",
      actions: [
        {
          visibility: [0.4, 1.0],
          type: "play",
        },
      ],
    });
    return () => Lottie.destroy();
  });

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="title">
          <div className="header" data-aos="fade-up" data-aos-duration="1000">
            <h1> .contact </h1>
          </div>
        </div>
        <div
          className="message"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <h1> Say hi!</h1>
          <h3>
            {" "}
            <br /> <br />
            If you want to get in touch regarding my work, possible work
            opportunities or just to say hi then you can do it using this form.
            I will get back to you as soon as possible! <br /> <br />{" "}
            Alternatively, feel free to send me an{" "}
            <a href="mailto:valentin.bizzz@gmail.com">
              {" "}
              <strong className="highlighted-text"> email! </strong>
            </a>
          </h3>
          <div className="animation-container" ref={animationContainerDuck} />
        </div>
        <div
          className="contact-form"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <Form />
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </section>
  );
}
