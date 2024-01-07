import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStickyNavbar(true);
      } else {
        setStickyNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={` ${stickyNavbar ? "sticky" : ""} `}>
        <Link
          to={"/home"}
          className={`logo ${stickyNavbar ? "sticky-link" : ""}`}
        >
          InBody
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="mx-auto ps-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to={"/home"}
              className={`links ${stickyNavbar ? "sticky-link" : ""} `}
            >
              Home
            </Link>
            <Link
              to={"/transformations"}
              className={`links ${stickyNavbar ? "sticky-link" : ""}`}
            >
              Transformations
            </Link>
            <Link
              to={"/feedbacks"}
              className={`links ${stickyNavbar ? "sticky-link" : ""}`}
            >
              Feedbacks
            </Link>
            <Link
              to={"/plans&pricing"}
              className={`links ${stickyNavbar ? "sticky-link" : ""}`}
            >
              Plans & Pricing
            </Link>
            <Link
              to={"/aboutus"}
              className={`links ${stickyNavbar ? "sticky-link" : ""}`}
            >
              About Us
            </Link>
            <Link
              to={"/contactus"}
              className={`links ${stickyNavbar ? "sticky-link" : ""}`}
            >
              Contact Us
            </Link>
          </Nav>

          <Button className="mx-3" variant="outline-warning">
            <i className="fa-brands text-success fa-whatsapp me-2"></i>
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
