import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import mongo from "../assets/img/mongo.png";
import react from "../assets/img/react.png";
import next from "../assets/img/next.png";
import angular from "../assets/img/angular.png";
import spring from "../assets/img/spring.png";
import node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import ts from "../assets/img/ts.png";
import stripe from "../assets/img/stripe.png";
import sql from "../assets/img/sql.png";
import firebase from "../assets/img/firebase.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const FrameworkLogos = () => {
    return (
      <div className="framework-logos">
        <div className="logo-container">
          <img  className ="logo" src={next} alt="Next.js" />
          <img className ="logo"  src={react} alt="React"  />
          <img className ="logo"  src={mongo} alt="MongoDB"  />
          <img className ="logo"  src={angular} alt="MongoDB"  />
          <img className ="logo"  src={spring} alt="MongoDB"  />
          <img className ="logo"  src={node} alt="MongoDB"  />
        </div>
        <br />
        <div className="logo-container">
          <img  className ="logo" src={js} alt="Next.js" />
          <img className ="logo"  src={ts} alt="React"  />
          <img className ="logo"  src={php} alt="MongoDB"  />
          <img className ="logo"  src={html} alt="MongoDB"  />
        </div>
        <br />
        <div className="logo-container">
          <img  className ="logo" src={firebase} alt="Next.js" />
          <img className ="logo"  src={stripe} alt="React"  />
        </div>
        <div className="logo-container">
          <img  className ="logo" src={sql} alt="Next.js" />
        </div>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-center">Skills</h2>
              <div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>  
</div>
              <div className="row">
          <div className="col-4">
            <div className="section">
              <h3>Frontend Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Nextjs</li>
                <li>JavaFX</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="section">
              <h3>Backend Frameworks</h3>
              <ul>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Nextjs</li>
                <li>Symfony</li>

              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="section">
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
          </div>
        </div>
            </div>
    
          </div>
        </div>

        <FrameworkLogos />

      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
