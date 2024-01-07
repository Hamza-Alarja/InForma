import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";

function Form() {
  function handleForm({ resetForm }) {
    resetForm();
  }
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Full name is required")
      .min(3, "Full name is too short")
      .max(15, "Full name is too long"),
    email: Yup.string()
      .required("email is required")
      .email("Email is not valid"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone number is not valid"),
    message: Yup.string()
      .required("Please write a message so that we can help you")
      .min(3, "Your Message is too short"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleForm,
  });
  return (
    <>
      <div className="form-contact">
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Full Name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
          />

          {formik.errors.name && formik.touched.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}

          <input
            placeholder="Phone Number"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p className="text-danger">{formik.errors.phone}</p>
          ) : null}
          <input
            placeholder="Email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <textarea
            placeholder="Your Message"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.message}
            type="text"
            name="message"
            id="message"
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.message && formik.touched.message ? (
            <p className="text-danger">{formik.errors.message}</p>
          ) : null}
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn btn-outline-danger float-end my-3"
          >
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
