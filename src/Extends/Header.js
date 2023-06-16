
import React, { Component, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from './../images/logo.png';
// LOGO
// import sitelogo from '../Assets/Logo.png';
import ScrollToTop from '../Views/ScrollToTop/Index';




function Header() {
  
  const [expanded, setExpanded] = useState(false);
  
  
  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  }
  

    return (
      <div className='main-header'>
        <div className='ar-space'>
          <Row>
            <Col md={3}>
              <div className='logo'>
                {/* <img src={logo} /> */}
                <h1>Logo</h1>
              </div>
            </Col>
            <Col md={9}>
              <div className='hdr-sec'>
                <Row>
                  <Col md={6}>
                    <div className='hdr-disp'>
                    <span className='localTime'><span id='lblpakLocal'>Pak Local Time</span><br/>10:43 pm - Thursday 24</span>
                    <span className='localDate'><span>November</span>2022</span>
                    <ul>
                      <li><Link to={'/'}>About Ag Auction</Link></li>
                      <li><Link to={'/'}>FAQ</Link></li>
                      <li><Link to={'/'}>Contact Us</Link></li>
                    </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='hdr-btns'>
                    <ul>
                      <li><Link to={'/'}>اردو</Link></li>
                      <li><Link to={'/'}>Sign In</Link></li>
                      <li className='red-btn'><Link to={'/'}>Register New User</Link></li>
                    </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
         
       </div>
           
    );
  }
  
  export default Header;
  