import { Container, Row, Col, Nav, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
// import Navigation from "../../Extends/Nav";
import React from "react";

const index = () => {
  return (
    <div className="car-details">
      <div className="cardetailstop">
        <div className="car-title">
          <h3>Peugeot 407 2002</h3>
        </div>
        <div className="lot-number-sec">
          <div className="left">
            <div className="curr-price-heading"></div>
            <div className="curr-price">
              <span style={{"font-size": "14px"}}>AED</span>{" "}
              <span
                style={{"font-size": "24px;", "font-weight": "bold;"}}
                itemprop="price"
              >
                300
              </span>{" "}
              (AED<span style={{"font-size": "18px"}}>100</span> Min. Increment)
            </div>
          </div>
          <div className="right">
            <p>Lot#</p>
            <p className="no">372909</p>
          </div>
        </div>
        <div className="Bid-sec"></div>
      </div>
    </div>
  );
};

export default index;
