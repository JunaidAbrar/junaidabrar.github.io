import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/vm.png";
import bitsOfCode from "../../Assets/Projects/car.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KVM-Based Virtualization"
              description="This project demonstrates comprehensive utilization of Kernel-based Virtual Machine (KVM) technology for virtualization, focusing on setup, management, and advanced configurations of virtual machines (VMs)."
              ghLink="https://github.com/JunaidAbrar/VM-Skills-Portfolio"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car Rental System"
              description="This project is a car rental system that allows users to rent cars, view available cars, and manage their rental history. The system is built using MERN Stack"
              ghLink="https://github.com/Ashakin23/CSE470_CarRental_System"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
