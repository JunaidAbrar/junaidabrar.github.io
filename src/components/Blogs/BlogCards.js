import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function BlogCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" href={props.articleLink} target="_blank">
          <CgWebsite /> &nbsp;
          {props.isBlog ? "View Blog" : "View Article"}
        </Button>
        {"\n"}
        {"\n"}
        {props.ghLink && (
          <Button variant="secondary" href={props.ghLink} target="_blank" style={{ marginLeft: "10px" }}>
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default BlogCards;