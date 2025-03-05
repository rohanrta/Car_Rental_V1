import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../assets/luxe cars logo.png'
const Footer = () => {
  return (
    <Container fluid className="mt-5 py-4 border-top">
      <Row className="text-center">
        <Col md={4} className="d-flex flex-column align-items-center">
          <img src={logo} alt="Kerala Map" className="mb-2" style={{ width: "110px" }} />
          <p>Made with lots of ❤️ in Luminar</p>
        </Col>

        <Col md={4}>
          <Row>
            <Col md={6} className="text-start">
              <p>Home</p>
              <p>About Us</p>
              <p>Affiliate</p>
            </Col>
            <Col md={6} className="text-start">
              <p>Contact Us</p>
              <p>My Account</p>
              <p>Logout</p>
            </Col>
          </Row>
        </Col>

        <Col md={4} className="text-start">
          <h5 className="fw-bold">Luxe Cars</h5>
          <p>Email: support@luxecars.com</p>
          <p>Phone: +91 790 281 0000</p>
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Col>
          <p>&copy; 2025 LuxeCars All rights reserved.</p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <FaInstagram className="mx-2" size={24} />
          <FaLinkedin className="mx-2" size={24} />
          <FaFacebook className="mx-2" size={24} />
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Col>
          <p className="d-inline mx-2">Privacy Policy</p>
          <p className="d-inline mx-2">Terms & Conditions</p>
          <p className="d-inline mx-2">Refund Policy</p>
          <p className="d-inline mx-2">Cancellation Policy</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Footer;
