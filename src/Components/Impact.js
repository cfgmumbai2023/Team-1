import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

function ImpactCounter({ targetValue }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers once when component enters the viewport
    threshold: 0.2, // Adjust the threshold value as needed
  });

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setInterval(() => {
        setCurrentValue(prevValue => prevValue + 1);
      }, 10); // Adjust the interval time (in milliseconds) as per your requirement
    }

    const timeout = setTimeout(() => {
      setCurrentValue(targetValue);
      clearInterval(timer);
    }, 5000); // Adjust the delay time (in milliseconds) before setting the value to targetValue

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [inView]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div ref={ref} style={animation} className='container-fluid our-reach'>
      <div className='row'>
        <div className='col'>
          <h1 className='d-flex justify-content-center align-items-center text-white reach-text' data-aos='fade-up'>Our Reach</h1>
        </div>
        <div className='col right-side-reach'>
          <h2 className='reach-value d-flex justify-content-center align-items-center text-white' data-aos='fade-up'data-aos-delay='3000'>{currentValue}+</h2>
          <h1 className='text-white font-weight-bolder impacts-text'data-aos='fade-up'data-aos-delay='2500'>Impacts we have made!</h1>
        </div>
      </div>
    </animated.div>
  );
}

export default ImpactCounter;
