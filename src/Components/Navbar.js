            
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import smilelogo from './Assets/smilelogo.webp';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navclass">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-1 fst-italic" to="/">
          <img src={smilelogo} className="smilelogo img-fluid mx-5" style={{ width: '100px' }} />
        </Link>
        <button
          className="navbar-toggler white-button navbarbtn"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='d-end'>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav d-end ml-auto">
            <li className="nav-item">
              <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant="none" id="dropdown-media" className="text-black navbar-btn font-weight-bold navbar-btn">
                  ABOUT US
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-white">
                  <Dropdown.Item href="#" className="text-black navbar-btn bg-white navbar-btn">
                    About Us
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className='text-black navbar-btn bg-white navbar-btn'>
                    People Behind Smile
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className='text-black navbar-btn bg-white navbar-btn'>
                    Impact
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className='text-black navbar-btn bg-white navbar-btn'>
                    SmileStones
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold navbar-btn'>
                    OUR WORK
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Education</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Health</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Livelihood</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Women Empowerment</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Disaster Response</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Empowering Grassroots</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Priviledged Children</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold navbar-btn'>
                    CAMPAIGNS
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Taiyari Kal Ki</Dropdown.Item>
                    <Dropdown.Item href='#'className='text-black navbar-btn navbar-btn'>Health Cannot Wait</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>Shiksha Na Ruke</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn navbar-btn'>She Can Fly</Dropdown.Item>
                </Dropdown.Menu>    
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold navbar-btn'>
                    GET INVOLVED
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Individual Support</Dropdown.Item>
                    <Dropdown.Item href='#'className='text-black navbar-btn'>Corporate partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>School Partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Volunteer & Internship</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold'>
                    MEDIA CENTER
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Individual Support</Dropdown.Item>
                    <Dropdown.Item href='#'className='text-black navbar-btn'>Corporate partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>School Partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Volunteer & Internship</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold'>
                    RESOURCE CENTER
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Individual Support</Dropdown.Item>
                    <Dropdown.Item href='#'className='text-black navbar-btn'>Corporate partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>School Partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Volunteer & Internship</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className='nav-item'>
            <Dropdown onClick={handleNavCollapse}>
                <Dropdown.Toggle variant='none' id='dropdown-media' className='text-black navbar-btn font-weight-bold'>
                    CONTACT US
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-white'>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Individual Support</Dropdown.Item>
                    <Dropdown.Item href='#'className='text-black navbar-btn'>Corporate partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>School Partnerships</Dropdown.Item>
                    <Dropdown.Item href='#' className='text-black navbar-btn'>Volunteer & Internship</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            </ul>
            </div>
            </div>
            </div>
    </nav>

  );
}


