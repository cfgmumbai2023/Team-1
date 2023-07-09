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

  <footer className="text-center text-white" style={{backgroundColor: "#000000"}}>

    <div>

      <section className="mb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-5 justify-content-center align-items-center">
            <h5 className='mb-3'>
              CONTACT US
            </h5>
            <p>
            Regd. Office: RKSS Building, Pratiksha Nagar, Sion E, Mumbai-37.
            </p>
            <p>
            Steering NGO of JEET: Ramakrishna Sarada Samiti, www.rkssngo.org
            </p>
            <p>
            Contact Us: Tel: 7021971062 | info@jeet.in.net
            </p>
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
      © 2023 Copyright: JEET, India
    </div>
    
  </footer>

</div>

    </div>
  );
}
