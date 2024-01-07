import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../Form/Form";
import AnimatedPages from "./../../AnimatedPages";

export default function ContactUs() {
  return (
    <AnimatedPages>
      <div className="ContactUs">
        <div className="ContactUs-text ms-5 ps-5">
          <h2 className="direction text-light fw-bold ">CONTACT US</h2>
          <h3 className="h1 text-warning my-4 fw-bold">Contact Us</h3>
        </div>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <img
              src="https://www.informa-180.com/images/get-in-touch.svg"
              alt="Get in touch"
            />
          </Col>
          <Col md={6}>
            <p className="fs-3 fw-bold">
              Feel free to contact us. We'll be glad to hear from you.
            </p>
            <Form />
          </Col>
        </Row>
      </Container>
      <hr className="w-75 mx-auto text-muted" />
    </AnimatedPages>
  );
}
