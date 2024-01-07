import React, { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import "./Popup.css";
import { Col, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Popup() {
  const [selectedProgram, setSelectedProgram] = useState("workout");
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const [isMegaPackageVisible, setIsMegaPackageVisible] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qy0nnvh",
        "template_9gbhe3b",
        form.current,
        "FSwI15obdmzrffP72"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error("Email sending error:", error);
        }
      );
  };

  const prices = {
    workout: [900, 1800, 3000, 5000],
    Nutrition: [1150, 2300, 3750, 6000],
    "Nutrition&Workout": [1500, 3000, 5000, 8000],
  };
  const packageChange = {
    workout: [600, 1200, 2000, 3200],
    Nutrition: [600, 1200, 2000, 3200],
    "Nutrition&Workout": [1500, 3000, 5000, 8000],
  };

  const handleProgramChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProgram(selectedValue);

    if (selectedValue === "Nutrition&Workout") {
      setIsMegaPackageVisible(true);
    } else {
      setIsMegaPackageVisible(false);
    }
  };

  function handleForm({ resetForm }) {
    resetForm();
  }
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Full name is Required")
      .min(3, "Full name is too short")
      .max(15, "Full name is too long"),
    country: Yup.string()
      .required("Your Country is Required")
      .min(3, "Your Country Name Is Too Short")
      .max(20, "Your Country Name Is Too Long"),

    phone: Yup.string()
      .required("Phone is Required")
      .matches(
        /^(01[0125][0-9]{8}|00[0-9]{1,15})$/,
        "Phone Number Is Not Valid"
      ),
    age: Yup.number().required("Your Age Is Required").min(14).max(80),
    weight: Yup.number()
      .required("Your weight Is Required")
      .min(30, "weight Is Not Valid")
      .max(150, "weight Is Not Valid"),
    height: Yup.number()
      .required("Your height Is Required")
      .min(100, "height Is Not Valid")
      .max(220, "height Is Not Valid"),
  });
  let registered = useFormik({
    initialValues: {
      name: "",
      phone: "",
      age: "",
      country: "",
      weight: "",
      height: "",
    },
    validationSchema,
    onSubmit: handleForm,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {!show && (
        <Button className="Register" onClick={handleShow}>
          <i className="fa-solid fa-pencil"></i> Register Now
        </Button>
      )}

      <Modal className="modal" show={show} onHide={handleClose} centered>
        <div className="p-3">
          <h6 className="fw-bold">Register Now</h6>
        </div>
        <Modal.Body>
          <form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <input
                  placeholder="Full Name"
                  className={"form-control"}
                  onChange={registered.handleChange}
                  value={registered.values.name}
                  type="text"
                  name="name"
                  id="name"
                  onBlur={registered.handleBlur}
                />
                {registered.errors.name && registered.touched.name ? (
                  <p className="text-danger">{registered.errors.name}</p>
                ) : null}
              </Col>

              <Col md={6}>
                <input
                  placeholder="Phone Number"
                  className="form-control "
                  onChange={registered.handleChange}
                  value={registered.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  onBlur={registered.handleBlur}
                />
                {registered.errors.phone && registered.touched.phone ? (
                  <p className="text-danger">{registered.errors.phone}</p>
                ) : null}
              </Col>
            </Row>

            <Col md={12} className="my-3">
              <input
                placeholder="Country of residence"
                className="form-control"
                onChange={registered.handleChange}
                value={registered.values.country}
                type="tel"
                name="country"
                id="country"
                onBlur={registered.handleBlur}
              />
              {registered.errors.country && registered.touched.country ? (
                <p className="text-danger">{registered.errors.country}</p>
              ) : null}
            </Col>
            <Row className="my-3">
              <Col md={6}>
                <input
                  placeholder="Age"
                  className="form-control"
                  onChange={registered.handleChange}
                  value={registered.values.age}
                  type="text"
                  name="age"
                  id="age"
                  onBlur={registered.handleBlur}
                />
                {registered.errors.age && registered.touched.age ? (
                  <p className="text-danger">{registered.errors.age}</p>
                ) : null}
              </Col>

              <Col md={6}>
                <select name="gender" className="form-select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="input-container">
                  <input
                    placeholder="Weight"
                    className="form-control"
                    onChange={registered.handleChange}
                    value={registered.values.weight}
                    type="text"
                    name="weight"
                    id="weight"
                    onBlur={registered.handleBlur}
                  />
                  <span className="unit text-muted">KG</span>
                </div>
                {registered.errors.weight && registered.touched.weight ? (
                  <p className="text-danger">{registered.errors.weight}</p>
                ) : null}
              </Col>
              <Col md={6}>
                <div className="input-container">
                  <input
                    placeholder="Height"
                    className="form-control"
                    onChange={registered.handleChange}
                    value={registered.values.height}
                    type="text"
                    name="height"
                    id="height"
                    onBlur={registered.handleBlur}
                  />
                  <span className="unit text-muted">CM</span>
                </div>
                {registered.errors.height && registered.touched.height ? (
                  <p className="text-danger">{registered.errors.height}</p>
                ) : null}{" "}
              </Col>
            </Row>

            <Row className="my-3">
              <Col md={6}>
                <p className="text-muted my-2 p-0 fs-6">Plan program</p>
                <div className="d-flex align-items-center">
                  <input
                    name="planProgram"
                    type="radio"
                    value="workout"
                    id="Workout"
                    onChange={handleProgramChange}
                  />
                  <label className="m-2" htmlFor="Workout">
                    Workout only
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="planProgram"
                    type="radio"
                    value="Nutrition"
                    id="Nutrition"
                    onChange={handleProgramChange}
                  />
                  <label className="m-2" htmlFor="Nutrition">
                    Nutrition only
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="planProgram"
                    type="radio"
                    value="Nutrition&Workout"
                    id="Nutrition&Workout"
                    onChange={handleProgramChange}
                  />
                  <label className="m-2" htmlFor="Nutrition&Workout">
                    Nutrition & Workout Plan
                  </label>
                </div>
              </Col>
              <Col md={6}>
                <p className="text-muted my-2 p-0 fs-6">Plan Duration</p>
                <div className="d-flex align-items-center">
                  <input
                    name="Planduration"
                    type="radio"
                    value="1 Month"
                    id="1 Month"
                    onChange={() => setSelectedDurationIndex(0)}
                  />
                  <label className="m-2" htmlFor="1 Month">
                    1 Month - <span>{prices[selectedProgram][0]} L.E</span>
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="Planduration"
                    type="radio"
                    value="3 Months"
                    id="3 Months"
                    onChange={() => setSelectedDurationIndex(1)}
                  />
                  <label className="m-2" htmlFor="3 Months">
                    3 Months - <span>{prices[selectedProgram][1]} L.E</span>
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="Planduration"
                    type="radio"
                    value=" 6 Months"
                    id="6 Months"
                    onChange={() => setSelectedDurationIndex(2)}
                  />
                  <label className="m-2" htmlFor="6 Months">
                    6 Months - <span>{prices[selectedProgram][2]} L.E</span>
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="Planduration"
                    type="radio"
                    value="12 Months"
                    id="12 Months"
                    onChange={() => setSelectedDurationIndex(3)}
                  />
                  <label className="m-2" htmlFor="12 Months">
                    12 Months - <span>{prices[selectedProgram][3]} L.E</span>
                  </label>
                </div>
              </Col>
              <hr className="text-muted my-3" />
              <div>
                <p className="text-muted fw-bold fs-6">Choose your package</p>
                <div className="d-flex align-items-center">
                  <input
                    name="package"
                    type="radio"
                    value="Silver Package - Free"
                    id="Silver Package - Free"
                  />
                  <label className="m-2" htmlFor="Silver Package - Free">
                    Silver Package - Free
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    name="package"
                    type="radio"
                    value="Golden Package"
                    id="Golden Package"
                  />
                  <label className="m-2" htmlFor="Golden Package">
                    Golden Package - {""}
                    <span>
                      {packageChange["Nutrition"][selectedDurationIndex]} L.E
                    </span>
                  </label>
                </div>

                <div className="d-flex align-items-center">
                  <input
                    name="package"
                    type="radio"
                    value="Mega Package"
                    id="Mega Package"
                    style={{ display: isMegaPackageVisible ? "block" : "none" }}
                  />
                  <label
                    className="m-2"
                    htmlFor="Mega Package"
                    style={{ display: isMegaPackageVisible ? "block" : "none" }}
                  >
                    Mega Package -{" "}
                    <span>
                      {selectedProgram === "Nutrition&Workout"
                        ? packageChange["Nutrition&Workout"][
                            selectedDurationIndex
                          ]
                        : ""}
                      L.E
                    </span>
                  </label>
                </div>
              </div>
            </Row>
            <button
              variant="secondary"
              onClick={handleClose}
              disabled={!(registered.isValid && registered.dirty)}
              type="submit"
              className="btn btn-outline-warning float-end my-3"
            >
              Send <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
