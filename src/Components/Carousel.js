import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import cr1 from "./Assets/cr1.jpg";
import cr2 from "./Assets/cr2.jpg";
import cr3 from "./Assets/cr3.jpg";
import cr4 from "./Assets/cr4.jpg";
import cr5 from "./Assets/cr5.jpg";


export default function CustomCarousel() {
    return (

    <>
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <h1 className='text-black font-weight-bolder justify-content-center d-flex align-items-center font-size-larger mt-5 mb-3'>“Our Mentors”</h1>
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000} className="custom-carousel">
            <div>
                <img src={cr1} alt="Image 1" className="custom-carousel-image" />
                <h5>He is an accomplished, versatile, technology-savvy, and result-driven professional with more than 25 years of experience in Entrepreneurship and Fund Management.</h5>
                <h3>Shailesh Dhuri</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr2} alt="Image 2" className="custom-carousel-image" />
                <h5>He is currently working as CEO of dentsu Solutions, India; President of dentsuIndia (Strategy & Integration) and Head of Strategy & Consulting of dentsuCreative, APAC</h5>
                <h3>Narayan Devanathan</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr3} alt="Image 3" className="custom-carousel-image" />
                <h5>Shubhra is a senior Pharmaceutical executive with over 23 years of experience in Business Development, Licensing, Strategic Planning, Portfolio Acquisition & divestments and Alliance Management</h5>
                <h3>Shubhra Mehrotra</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr4} alt="Image 4" className="custom-carousel-image" />
                <h5>He is a thorough advertising & marketing professional, he has also played a role in evangelising “Daan Utsav”, Joy of Giving among those who believe in philanthropy.</h5>
                <h3>Karthik Kumar</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={cr5} alt="Image 5" className="custom-carousel-image" />
                <h5>He grew up in Mysore and completed his BA from Mysore University. He went on to do his Masters in Personnel Management Industrial Relations from Tata Instituteof Social Sciences, Mumbai.</h5>
                <h3>Aashu Calapa</h3>
                <h6>Industry Expert</h6>
            </div>
        </Carousel>

    </>
    );
}
