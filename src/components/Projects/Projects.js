import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kvm from "../../Assets/Projects/vm.png";
import bitsOfCode from "../../Assets/Projects/car.jpeg";
import docker from "../../Assets/Projects/docker.png";
import serverless from "../../Assets/Projects/serverless.png";
import aws_tf from "../../Assets/Projects/aws_tf.png";
import unicommute from "../../Assets/Projects/unicommute.png";
import ebellia from "../../Assets/Projects/ebellia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unicommute}
              isBlog={false}
              title="UniCommute - A Dhaka based SaaS for University Students"
              description="UniCommute is a carpooling app that connects university students in Dhaka. It allows students to share rides, split costs, and reduce traffic congestion. The app is built using MERN stack and Google Maps API."
              demoLink="https://www.unicommute.com"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebellia}
              isBlog={false}
              title="Ebellia - A Jewelry E-commerce Platform"
              description="Ebellia is a jewelry e-commerce platform that allows users to browse and purchase jewelry online. The platform is built using WooCommerce and Wordpress while bKash API for payment processing."
              demoLink="https://ebellia.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kvm}
              isBlog={false}
              title="KVM-Based Virtualization"
              description="This project demonstrates the creation and management of KVM-based virtual machines using both GUI and CLI on Ubuntu 22.04. It covers the entire process from system preparation to adding shared folders and connecting external devices. Each step is meticulously documented with commands and configuration details, ensuring reproducibility and ease of understanding."
              ghLink="https://github.com/JunaidAbrar/VM-Skills-Portfolio"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws_tf}
              isBlog={false}
              title="CI/CD with Terraform and Docker for Node.js on AWS"
              description="A complete DevOps pipeline that automates the deployment of a Node.js application using Terraform, Docker, and GitHub Actions. The project provisions AWS EC2 infrastructure, builds and pushes Docker images to ECR, and deploys the application with continuous integration and continuous deployment."
              ghLink="https://github.com/JunaidAbrar/Devops-Project"
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
