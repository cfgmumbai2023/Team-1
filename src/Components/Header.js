import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import i1 from "./Assets/i1.jpg";
import i2 from "./Assets/i2.jpg";
import i3 from "./Assets/i3.jpg";
import i4 from "./Assets/i4.jpg";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Header() {
  return (
    <div  style={{height: '1000px'}}>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000} className="custom-carousel-header">
        <div>
            <Link to='/'>            
            <img src={i3} alt="Image 1" className="custom-carousel-image img-fluid" />
            </Link>
        </div>
        <div>
        <Link to='/'>
            <img src={i4} alt="Image 2" className="custom-carousel-image img-fluid"  />
            </Link>
        </div>
        <div>
        <Link to='/'>
            <img src={i1} alt="Image 3" className="custom-carousel-image img-fluid" />
        </Link>
        </div>
        <div>
        <Link to='/'>
            <img src={i2} alt="Image 4" className="custom-carousel-image img-fluid" />
        </Link>
        </div>
      </Carousel>
    </div>
  );
}
