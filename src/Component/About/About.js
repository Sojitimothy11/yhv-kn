import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="item content">
      <div className="item top">
        <h1>Why Us?</h1>
        <p>
          Your ingenious ideas. Our state-of-the-art
          <br /> web development
        </p>
      </div>
      <div className="item row d-flex">
        <div className="item d-flex">
          <div>
            <i className="bi bi-gear"></i>
          </div>
          <div className="col-md-6 col-12">
            <h1>Best ideas</h1>
            <p>
              Bring us your wildest ideas and with our creative mindset and
              tools well make it happen. Our team will provide you with a unique
              site designed for your specific needs,and help you develop an
              online business strategy to outplay your competitors
            </p>
          </div>

          <div className="item d-flex">
            <div>
              <i className="bi bi-people"></i>
            </div>
            <div className="col-md-6 col-12">
              <h1>Support 24/7</h1>
              <p>
                We will help you convert your visitors into clients,and increase
                your revenue
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="item row d-flex">
        <div className="item d-flex">
          <div>
            <i className="bi bi-star"></i>
          </div>
          <div className="col-md-6 col-12">
            <h1>Professional team</h1>
            <p>
              We are a professional web development company with a team of tech
              sawies who are always on top of latest trends in web
              development,web design,SEO and marketing
            </p>
          </div>

          <div className="item d-flex">
            <div>
              <i className="bi bi-stopwatch"></i>
            </div>
            <div className="col-md-6 col-12">
              <h1>Quick work</h1>
              <p>
                We are result-oriented and passionate about each of our
                projects,and "OK" is not good enough for us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="item bottom">
        <div className="item bottom-one">
          <div>
            <h3>
              Industry Expertise+ <br />
              Laser-Focused Team ={" "}
            </h3>
            <br />
            <h1 className="special">SUCCESS</h1>
          </div>
          <div className="item">
            <p>
              Businesses know that a single,full-time marketing manager simply
              <br />
              cannot perform all the roles in digital marketing.Comrade Web
              Agency
              <br />
              positions itself as your digital marketing partner:we cover all
              aspects
              <br />
              of your website,branding, digital marketing strategy,and data
              analysis,all
              <br />
              while owning our results (leads,calls,sales,conversions, targeted
              traffic,etc).
            </p>
          </div>
        </div>
        <div className="item bottom-two"></div>
      </div>
    </div>
  );
};

export default About;
