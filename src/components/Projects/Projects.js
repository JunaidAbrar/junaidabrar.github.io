import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kvm from "../../Assets/Projects/vm.png";
import bitsOfCode from "../../Assets/Projects/car.jpeg";
import docker from "../../Assets/Projects/docker.png";
import serverless from "../../Assets/Projects/serverless.png";

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
              imgPath={kvm}
              isBlog={false}
              title="KVM-Based Virtualization"
              description="This project demonstrates comprehensive utilization of Kernel-based Virtual Machine (KVM) technology for virtualization, focusing on setup, management, and advanced configurations of virtual machines (VMs)."
              ghLink="https://github.com/JunaidAbrar/VM-Skills-Portfolio"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              isBlog={false}
              title="AWS Powered Image Analysis App"
              description="Generate tags and metadata for your image, leveraging AWS S3 for hosting, API Gateway for RESTful endpoints, Lambda for serverless compute, and Rekognition for AI-powered image analysis, all secured by IAM."
              ghLink="https://github.com/JunaidAbrar/AWS-Image-Analysis-App"
              demoLink="http://my-image-analysis-app-junaid.s3-website-us-east-1.amazonaws.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Docker-Fundamentals-Showcase"
              description="The contents of this repository reflect hands-on exercises covering Docker installation, image handling, container operations, Dockerfile creation, and practical application deployments."
              ghLink="https://github.com/JunaidAbrar/Docker-Fundamentals-Showcase"
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
