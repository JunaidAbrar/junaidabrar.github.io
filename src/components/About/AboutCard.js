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
            I am currently a final year Computer Science (BSc) student at BRAC University.

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Driving Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to new places
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
