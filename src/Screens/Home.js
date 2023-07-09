import React from 'react';
import Navbar from '../Components/Navbar';
import FrontPage from '../Components/FrontPage';
import './home.css';
import Footer from '../Components/Footer';
import Volunteer from '../Components/Volunteer';
import CustomCarousel from '../Components/Carousel';
import Header from '../Components/Header';
import Areas from '../Components/Areas';
import ImpactCounter from '../Components/Impact';

export default function Home() {
  return (
    <div>
      
      <Header />
      <Volunteer />
      <Areas />
      <ImpactCounter targetValue={10000} />
      <CustomCarousel />
      
    </div>
  );
}
