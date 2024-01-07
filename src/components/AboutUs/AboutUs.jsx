import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../FeedBacks/feedbacks.jpeg";
import Count from "../Count/Count";
import Form from "../Form/Form";
import AnimatedPages from "./../../AnimatedPages";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <AnimatedPages>
      <div className="FeedBacks">
        <div className="FeedBacks-text ms-5 ps-5">
          <h2 className="direction text-light fw-bold ">ABOUT US</h2>
          <h3 className="h1 text-warning my-4 fw-bold">ABOUT US</h3>
        </div>
      </div>
      <Container fluid className=" Informa">
        <Row>
          <Col xl={6}>
            <iframe
              height="315"
              src="https://www.youtube.com/embed/IpUQElrETw4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded"
            ></iframe>
          </Col>
          <Col xl={6}>
            <h2 className="direction text-warning fw-bold ">ABOUT US</h2>
            <h3 className="h1">
              About
              <span className="text-warning"> Informa</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ducimus ex sed enim. Atque minima totam molestiae harum
              accusantium distinctio ipsum, provident omnis debitis adipisci
              perspiciatis nobis aut id voluptate.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="CERTIFICATIONS p-5">
        <h6 className="direction fw-bold text-light my-2">CERTIFICATIONS</h6>
        <h3 className="h1 fw-bold text-light my-4">
          Some Of Our <span className="text-warning">Certificates</span>
        </h3>
        <Row className="p-5">
          <Col md={3} className="my-1">
            <img className="w-100 rounded" src={img} alt="" />
          </Col>
          <Col md={3} className="my-1">
            <img className="w-100 rounded" src={img} alt="" />
          </Col>
          <Col md={3} className="my-1">
            <img className="w-100 rounded" src={img} alt="" />
          </Col>
          <Col md={3} className="my-1">
            <img className="w-100 rounded" src={img} alt="" />
          </Col>
        </Row>
      </div>
      <Count />
      <div className="contactUs container-fluid ">
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
