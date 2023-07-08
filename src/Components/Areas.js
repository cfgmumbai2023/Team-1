import React from 'react';
import { useState } from 'react';
import health from "./Assets/health.jpg";
import education from "./Assets/education.jpg";
import livelihood from "./Assets/livelihood.jpg";
import disaster from "./Assets/disaster-relif.jpg"; 


export default function Areas() {
    const [hoveredCard1, setHoveredCard1] = useState('');
    const [hoveredCard2, setHoveredCard2] = useState('');
    const [hoveredCard3, setHoveredCard3] = useState('');
    const [hoveredCard4, setHoveredCard4] = useState('');


  return (
        <div className='pb-5' style={{backgroundColor: "rgba(0, 0, 0,0.5)"}}>

    </div>

  );
}
