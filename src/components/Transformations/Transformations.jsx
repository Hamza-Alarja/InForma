import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../Home/story-section-1.jpeg";
import "./Transformations.css";
import Form from "../Form/Form";
import AnimatedPages from "./../../AnimatedPages";

export default function Transformations() {
  return (
    <AnimatedPages>
      <div className="Transformations">
        <div className="Transformations-text ms-5 ps-5">
          <h2 className="direction text-light fw-bold ">TRANSFORMATIONS</h2>
          <h3 className="h1 text-warning my-4 fw-bold">Some of our heroes</h3>
          <p className=" direction-p">
            At Informa we got no clients, we got heros we are proud to share.
          </p>
        </div>
      </div>
      <div className="incoming">
        <Container fluid>
          <Row className="gy-3 my-3">
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
            <Col md={3}>
              <img className="w-100" src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contactUs container-fluid">
        <Row>
          <Col md={6}>
            <p>TALK TO US WE WOULD LIKE TO HEAR FROM</p>
            <h3 className="h1 fw-bold my-5">
              Talk to us <br /> we would like <br /> to hear from
              <span className="text-warning"> you</span>
            </h3>
            <p>Leave your message and we will contact you within 24 hours</p>
          </Col>
          <Col md={6}>
            <Form />
          </Col>
        </Row>
      </div>
    </AnimatedPages>
  );
}
