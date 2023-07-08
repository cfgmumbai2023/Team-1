import React from 'react';
import fb from './Assets/fb.svg';
import insta from './Assets/insta.svg';
import twitter from './Assets/twitter.svg';
import linkedin from './Assets/linkedin.svg';
import yt from './Assets/yt.svg';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div>

<div className="container-fluid m-0 p-0">

  <footer className="text-center text-white" style={{backgroundColor: "#3f51b5"}}>

    <div className="container">

      <section className="mt-5">

        <div className="row text-center d-flex justify-content-center pt-5">
        
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="#!" className='text-uppercase'>About us</Link>
            </h6>
          </div>
          


          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="#!" className='text-uppercase'>Our Work</Link>
            </h6>
          </div>
         


          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="#!" className='text-uppercase'>Awards</Link>
            </h6>
          </div>
          


          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="#!" className='text-uppercase'>Volunteer</Link>
            </h6>
          </div>
          


          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold text-white">
              <Link to="/donate" className='text-uppercase' >Donate</Link>
            </h6>
          </div>
          
        </div>
        
      </section>
     

      <hr className="my-5" />

      
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-5 justify-content-center align-items-center">
            <h5 className='mb-3'>
              JEET KI AOR
            </h5>
            <p>
            161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre New Delhi - 110049 Delhi, India
            </p>
            <p>
            Contact Us: Tel: +91-11-43123700 | E-mail: info@smilefoundationindia.org
            </p>
          </div>
          <div className='col-6'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58732.36741261475!2d72.55166707606983!3d23.068783729534143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c5452fff81%3A0x40eec23c98225953!2sSmile%20With%20Me%20-%20The%20Foundation!5e0!3m2!1sen!2sin!4v1688566863931!5m2!1sen!2sin" width="300" height="250" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </section>
      


      <section className="text-center mb-5">
        <Link to="" className="text-white me-4">
          <img src={fb} />
        </Link>
        <Link to="" className="text-white me-4">
          <img src={twitter} />
        </Link>
        <Link to="" className="text-white me-4">
          <img src={linkedin} />
        </Link>
        <Link to="" className="text-white me-4">
          <img src={yt} />
        </Link>
        <Link to="" className="text-white me-4">
          <img src={insta} />
        </Link>
      </section>
      
    </div>
   

    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2023 Copyright: Smile Foundation, India
    </div>
    
  </footer>

</div>

    </div>
  );
}
