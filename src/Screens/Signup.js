import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../Components/Assets/jeet.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import { Dropdown } from "bootstrap/dist/js/bootstrap.bundle";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    UDISE: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (value) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePassword = (value) => {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
    if (!passwordRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must contain at least 5 characters, including an uppercase letter, a lowercase letter, and a number.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Validate email and password on change
    if (name === "email") {
      validateEmail(value);
    } else if (name === "password") {
      validatePassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further actions here
  };

  return (
    <Carousel showThumbs={false} className="custom-carousel">
      {/* ...carousel slides... */}

      <div>
        {/* ...second carousel slide... */}
        {/* <div className='container-fluid d-flex justify-content-center align-items-center p-5 fs-5 font-weight-bold'>
          FOR CONTENT CREATORS
        </div> */}
        <div className="container-fluid">
          <section className="text-black">
            <div className="container h-80">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-10 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>
                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={handleSubmit}
                          >
                            {/* ...form fields... */}
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
                                >
                                  First Name
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
                                >
                                  Last Name
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3c"
                                >
                                  Your Email
                                </label>
                                {errors.email && (
                                  <div className="text-danger">
                                    {errors.email}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <div>
                                  <input
                                    type="checkbox"
                                    id="contentCheckbox"
                                    className="form-check-input"
                                    name="role"
                                    value="content creator"
                                    checked={formData.role === "content"}
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="contentCheckbox"
                                  >
                                    Content Creator
                                  </label>
                                </div>
                                {errors.role && (
                                  <div className="text-danger">
                                    {errors.role}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Password
                                </label>
                                {errors.password && (
                                  <div className="text-danger">
                                    {errors.password}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  placeholder="                     Only if you are a student"
                                  name="name"
                                  value={formData.UDISE}
                                  onChange={handleChange}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
                                >
                                  UDISE
                                </label>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn">
                                Register
                              </button>
                              <Link
                                to="/login"
                                className="m-3 btn btn-lg btn-danger "
                              >
                                Already a User?
                              </Link>
                            </div>
                          </form>
                        </div>
                        <div class="col-md-9 col-lg-6 col-xl-5">
                          <img
                            src={image}
                            class="img-fluid shadow-4-strong"
                            alt="Sample image"
                            style={{
                              borderRadius: "30%",
                              minHeight: "100vh",
                              minWidth: "70vh",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
   


    <div class="text-black mb-3 mb-md-0 bottom-fixed">
      Copyright © 2020. All rights reserved.
    </div>
    
  </div> */}
          </section>
        </div>
      </div>
    </Carousel>
  );
}
