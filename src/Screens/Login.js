import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../Components/Assets/jeet.jpg';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('User');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="container-fluid h-100 d-inline-block text-black">
      <section class="vh-100" style={{ height: '100vh' }}>
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src={image}
                class="img-fluid m-5 shadow-4-strong"
                alt="Sample image"
                style={{ borderRadius: '30%', maxHeight: '80vh', minWidth: '40vh' }}
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form style={{ minWidth: '50vh' }}>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                  />
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                  />
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <Dropdown >
                  <Dropdown.Toggle variant="none" id="dropdown-media">
                    {selectedRole}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleRoleChange('User')}>
                      User
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRoleChange('Admin')}>
                      Admin
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRoleChange('Guest')}>
                      Guest
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  >
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{' '}
                    <Link to="/createuser" class="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div class="text-black mb-3 mb-md-0 bottom-fixed">
            Copyright © 2020. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
