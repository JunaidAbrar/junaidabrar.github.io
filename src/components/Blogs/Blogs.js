import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards"; // Import the BlogCards component
import blog_img1 from "../../Assets/blog1.jpeg";
import blog_img2 from "../../Assets/blog2.jpg";

function Blogs() {
  return (
    <Container fluid className="project-section"> {/*dont change this*/}
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Here are some of my blogs</strong>
        </h1>
        <p style={{color: "white"}}>
          Topics of this Blog page might be random.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={blog_img1}
              title="July 36"
              description="A heartfelt take on Bangladesh’s fight for freedom during the Quota Reform Movement, the struggles against injustice, and a hopeful call to come together and rebuild a fairer, stronger nation."
              articleLink="https://medium.com/@junaidabrarrazeen/july-36-153f484d51c2"
              isBlog={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCards
              imgPath={blog_img2}
              title="Monolithic Architecture VS Microservices Architecture"
              description="Software architecture is the blueprint of an application’s structure and functionality, and choosing the right architecture can make or break a project. To understand the distinction between Monolithic and Microservices Architecture, consider the analogy of building a toy house."
              articleLink="https://medium.com/@junaidabrarrazeen/big-box-or-tiny-boxes-choosing-the-right-software-architecture-1e8e753cc9d7"
              isBlog={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;