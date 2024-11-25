import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards"; // Import the BlogCards component
import blog_img1 from "../../Assets/blog1.jpeg";

function Blogs() {
  return (
    <Container fluid className="project-section"> {/*dont change this*/}
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Here are some of my <strong className="purple">Blogs</strong>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;