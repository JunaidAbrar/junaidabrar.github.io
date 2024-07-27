import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function BlogCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant= "top" src={props.imagPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>

      </Card.Body> 
    </Card>
  )

}