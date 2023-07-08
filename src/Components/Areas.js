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
        <div className='pb-5' style={{backgroundColor: "rgba(38, 2, 243, 0.747)"}}>
    <div className='container-fluid pt-5 mb-5'>
        <h1 className='text-center'>Our Focus Areas</h1>
    </div>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 pb-5 px-2'>
        <div className='col' onMouseEnter={() => setHoveredCard1('health')} onMouseLeave={() => setHoveredCard1('')}>
        <div className="card" style={{ width: "16rem" }}>
            <img src={health} className="card-img-top" alt="..." />
            <div className="card-body bg-success">
            <h5 className="card-title text-center">{hoveredCard1 === 'health' ? 'Health' : ''}</h5>
            <p className="card-text"></p>
            </div>
        </div>
        </div>

        <div className='col mt-5' onMouseEnter={() => setHoveredCard2('education')} onMouseLeave={() => setHoveredCard2('')}>
        <div className="card" style={{ width: "16rem" }}>
            <img src={education} className="card-img-top" alt="..." />
            <div className="card-body bg-success">
            <h5 className="card-title text-center">{hoveredCard2 === 'education' ? 'Education' : ''}</h5>
            <p className="card-text"></p>
            </div>
        </div>
        </div>

        <div className='col' onMouseEnter={() => setHoveredCard3('livelihood')} onMouseLeave={() => setHoveredCard3('')}>
        <div className="card" style={{ width: "16rem" }}>
            <img src={livelihood} className="card-img-top" alt="..." />
            <div className="card-body bg-success">
            <h5 className="card-title text-center">{hoveredCard3 === 'livelihood' ? 'Livelihood' : ''}</h5>
            <p className="card-text"></p>
            </div>
        </div>
        </div>

        <div className='col mt-5' onMouseEnter={() => setHoveredCard4('disaster')} onMouseLeave={() => setHoveredCard4('')}>
        <div className="card" style={{ width: "16rem" }}>
            <img src={disaster} className="card-img-top" alt="..." />
            <div className="card-body bg-success">
            <h5 className="card-title text-center">{hoveredCard4 === 'disaster' ? 'Disaster-Relief' : ''}</h5>
            <p className="card-text"></p>
            </div>
        </div>
        </div>
    </div>
    </div>

  );
}
