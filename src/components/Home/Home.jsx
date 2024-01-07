import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import storyimg from "./story-section-1.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Count from "../Count/Count";
import Plans from "../Plans/Plans";
import Form from "../Form/Form";
import AnimatedPages from "../../AnimatedPages";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <AnimatedPages>
      <div className="home">
        <div className="home-text">
          <h1>
            DON’T LIMIT YOUR CHALLENGES <br />
            CHALLENGE YOUR LIMITS
          </h1>
        </div>
        <div className="home-btn mt-5">
          <Link
            to={"/plans&pricing"}
            className="mx-3 btn btn-warning text-light"
          >
            <i className="me-1 fa-solid fa-dumbbell"></i> Subscribe Now
          </Link>
          <Link
            to={"/transformations"}
            className="mx-3 btn btn-outline-warning"
          >
            Transformations
          </Link>
        </div>
      </div>
      <div className="media my-4 py-5">
        <Count />
      </div>
      <div className="story bg-dark text-light">
        <Container fluid>
          <Row>
            <Col md={6}>
              <h2>Story of success</h2>
              <p className="p-story">
                Hussein Sayed is a certified fitness trainer and nutritionist
                who helps people change their mindsets and adopt healthier
                lifestyles.
                <br />
                <br />
                Before starting his coaching business, Hussein spent five years
                studying mechanical engineering and minoring in business
                administration at the American University in Cairo. After
                graduating in 2017, he realized that his passion is in
                developing mindsets instead of machines.
                <br />
                <br />
                Now with an experience of 11 years in the fitness field, Hussein
                is holding several certificates in this field including
                Certified Fitness trainer(CFT), Certified Nutritionist (CNC) &
                Certificated Personal Trainer (CPT) in addition to attending
                lectures presented by the European Register of Exercise
                professionals (EREPS).
                <br />
                <br />
                Hussein started INFORMA in 2019 to increase people's awareness
                about healthy lifestyles. Now millions of followers around the
                world are benefiting from his online content. Additionally, his
                personally customized fitness and nutrition programs that are
                based on his knowledge and experience together help his clients
                achieve their targets by following his flexible plans.
              </p>
            </Col>

            <Col md={6}>
              <div className="story-img">
                <img className="scaled-image" src={storyimg} alt="story img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="overflow-hidden py-5 text-center Carousel">
        <h6 className="text-muted my-3 headlines fw-bold">TRANSFORMATIONS</h6>
        <p className="h2">
          Register Now And Be A Part Of Great Transformations
        </p>

        <Carousel className="p-5">
          <Carousel.Item>
            <img width={500} src={storyimg} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} src={storyimg} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} src={storyimg} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} src={storyimg} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} src={storyimg} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Plans />
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
      <div className=" questions text-center p-5">
        <span className="text-muted my-5">CONTACT US</span>
        <h3 className="h1 my-5 fw-bold">Still have a questions ?</h3>
        <button className="btn btn-warning my-2 text-light fw-bold">
          <i className="fa-brands fa-whatsapp "></i>{" "}
          <a
            href="https://web.whatsapp.com/"
            className="text-light"
            target="_blank"
          >
            Whatsapp Us
          </a>
        </button>
      </div>
    </AnimatedPages>
  );
};

export default Home;
