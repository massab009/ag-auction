
import { Container, Row, Col, Carousel, Nav, Tab, Sonnet, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { useState } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


// images
import caricon from './images/carsicon2.png';
import proIcon from './images/proIcon2.png';
import machine from './images/machine.png';


import ScrollToTop from './Views/ScrollToTop/Index';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      
      <section className='ctgr-sec'>
        <Row>

           <Col md={3}>
            <Link to={'/'}>
            <div className='ar-space'>
             <div className='ctgr-blk'>
             <div className='ctgr-blk-img'>
                <span className=''>2</span>
               <img src={caricon} alt='' />
             </div>
             <span className='prod-urd'>کاروں کی نیلامی</span>
             <span className='prod-eng'>Cars Auction</span>
             </div>
             </div>
            </Link>
            </Col> 

            <Col md={3}>
            <Link to={'/'}>
            <div className='ar-space'>
             <div className='ctgr-blk'>
             <div className='ctgr-blk-img'>
                <span className=''>10</span>
               <img src={proIcon} alt='' />
             </div>
             <span className='prod-urd'>پراپرٹی</span>
             <span className='prod-eng'>Property</span>
             </div>
             </div>
             </Link>
            </Col> 

            <Col md={3}>
            <Link to={'/'}>
            <div className='ar-space'>
             <div className='ctgr-blk'>
             <div className='ctgr-blk-img'>
                <span className=''>5</span>
               <img src={machine} alt='' />
             </div>
             <span className='prod-urd'>مشینری</span>
             <span className='prod-eng'>Machinery</span>
             </div>
             </div>
             </Link>
            </Col> 

        </Row>
      </section>

    </div>
  )
}

export default App