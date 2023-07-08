import React from 'react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  return (
    <div>
      <section className="call-to-action">
    	<div className="auto-container">
            <div className="sec-title centered">
            	<h2>ARE YOU READY TO VOLUNTEER?</h2>
                <div className="separator"></div>
                <div className="desc-text p-2 mb-3">Established in 2002, Smile Foundation is an Indian development organization, impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 25 states.
                <br />
                <br />
                Smile Foundation works as a catalyst in the cycle of change, complementing and supplementing government efforts (view details) to achieve the Sustainable Development Goals. We sensitize and partner with like-minded institutions and individuals to implement high-impact programmes that enable access, enhance quality and help bring long term behavioural change at the grassroots.
                </div>
                </div>        
            <div className="links"><Link to="/volunteer" className="theme-btn btn-style-two m-3">BECOME A VOLUNTEER</Link> <Link to="/donate" className="theme-btn btn-style-one m-3">MAKE DONATION</Link></div>
        </div>
    </section>
    </div>
  );
}
