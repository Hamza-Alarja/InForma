import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="my-5 footer">
      <Container>
        <Row>
          <Col md={4}>
            <span className="fs-3 text-success">
              <i className="fa-solid fa-dumbbell"></i>
            </span>
            <p className="my-5  text-muted">
              Hussein Sayed is a certified fitness trainer and nutritionist who
              helps people change their mindsets and adopt healthier lifestyles
            </p>
            <div className="links-contact fs-4">
              <i className="fa-brands fa-facebook text-primary  me-3"></i>
              <i className="fa-brands fa-tiktok me-3 "></i>
              <i className="fa-brands fa-whatsapp text-success me-3 "></i>
              <i className="fa-brands fa-youtube text-danger me-3 "></i>
              <i className="fa-brands fa-instagram text-danger me-3 "></i>
            </div>
          </Col>
          <Col md={4}>
            <span className="text-muted">INFORMA</span>
            <div className="my-5 d-flex flex-column ">
              <Link to={"/home"} className="pb-3 text-muted">
                Home
              </Link>
              <Link className="pb-3 text-muted" to={"/transformations"}>
                Transformations
              </Link>
              <Link className="pb-3 text-muted" to={"/plans&pricing"}>
                Plans & Pricing
              </Link>
              <Link className="pb-3 text-muted" to={"/aboutus"}>
                About Us
              </Link>
              <Link className="pb-3 text-muted" to={"/contactus"}>
                Contact Us
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <span className="text-muted">CONTACT US</span>
            <div className="my-5">
              <a className="text-muted" href="mailto:someone@example.com">
                mando.180.team@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
