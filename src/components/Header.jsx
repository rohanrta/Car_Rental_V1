import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Dropdown } from 'react-bootstrap';
import luxelogo from '../assets/luxe cars logo.png';
import Getdata from './Getdata';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ insideCarListing,bookDetails }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // ✅ Add useNavigate hook

  // 🚀 Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user"); // ✅ Remove user data
    localStorage.removeItem("token"); // ✅ Remove auth token

    navigate("/"); // ✅ Redirect to login page
  };

  return (
    <>
      <Navbar expand="lg" bg="light" className="fixed-top shadow-sm py-2 d-flex flex-column">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/">
            <img src={luxelogo} alt="Luxe Cars Logo" height="50px" width="90px" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setShowMenu(true)}
            className="border-0 d-lg-none"
          >
            <i className="fa-solid fa-bars fs-3"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end d-none d-lg-flex">
            <Nav className="d-flex flex-row align-items-center">
              <Nav.Link className="fw-5 text-dark me-4" href="#home">My Bookings</Nav.Link>
              <Nav.Link className="fw-5 text-dark me-4" href="#carpools">CarPools</Nav.Link>
              <Nav.Link className="fw-5 text-dark me-4" href="#faq">FAQ</Nav.Link>

              {/* User Profile Dropdown */}
              <Dropdown>
                <Dropdown.Toggle as="span" className="fw-5 text-dark me-4 d-flex align-items-center" style={{ cursor: 'pointer' }}>
                  <i className="fa-solid fa-user fs-5"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  
                  { localStorage.getItem("token") ?
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  :<Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>}
                  
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Getdata Component (Only on Car Listing Page) */}
        {insideCarListing && (
          <div className="w-100 bg-light py-2 px-3">
            <Container>
              <Getdata bookDetails={bookDetails} simplified={true} />
            </Container>
          </div>
        )}
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column">
            <Nav.Link className="fw-5 text-dark mb-3" href="#home">My Bookings</Nav.Link>
            <Nav.Link className="fw-5 text-dark mb-3" href="#carpools">CarPools</Nav.Link>
            <Nav.Link className="fw-5 text-dark mb-3" href="#faq">FAQ</Nav.Link>

            {/* User Profile Dropdown in Offcanvas */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="user-dropdown" className="fw-5 text-dark me-4 d-flex align-items-center border-0 bg-transparent">
                <i className="fa-solid fa-user fs-5"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                {
                  localStorage.getItem("token") ?
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item> 
                :<Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                }
                
                
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div style={{ height: insideCarListing ? '140px' : '80px' }}></div>
    </>
  );
};

export default Header;

