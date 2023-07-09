import React from 'react';
import { Link } from 'react-router-dom';
import '../Screens/home.css'
import below from "./Assets/below.svg";
import bapu from "./Assets/bapu.png";

const FrontPage = () => {

  return (
    <header className='masthead'>
      <div className="container-fluid px-4 px-lg-5 ">
                <div className='row col-12'>
                  <div className='col-4'>
                    <img className='bapu' src={bapu} />
                  </div>
                  <div className='col-8 justify-content-center d-flex align-items-center '>
                    <span className='quote'> “The best way to find yourself, is to lose yourself in the service of others.” <span className='gandhi'><br />~Mahatma Gandhi</span><br /><br /><Link to='/donate' className='donate'>Donate</Link></span>
                    
                  </div>
                </div>
            </div>
    </header>
    
  );
};

export default FrontPage;
