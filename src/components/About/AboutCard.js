import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Junaid Abrar Razeen </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            My background lies in Computer Science, with a degree from BRAC University with expertise in Cloud Computing, IT infrastructure, and web development. Currently gaining hands-on experiences in the Mobile Financial Services(MFS) industry, working in the Product and Project Management Office at UCB Fintech Company Limited, Upay.
            <br />
            <br />
            My baby project is <span className="purple">UniCommute</span>, a cloud-based carpooling solution that addresses Dhaka's traffic challenges. I am passionate about AI and cloud innovations, and I am eager to apply my technical and analytical skills to dynamic roles in the DevOps and MFS sectors.
          </p>
            <br />
          <p style={{ textAlign: "justify" }}> 
            Apart from building pipelines, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Shifting gears on the highway
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Meeting new people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If forever isn't forever, let us vibe till whenever"{" "}
          </p>
          <footer className="blockquote-footer">Junaid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
