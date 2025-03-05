import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Checkout = () => {
  return (
    <> 
      <Header/>
      <div style={{paddingTop:'100px'}}></div>
      <Container className="mt-4">
        <Row>
          {/* Image Section */}
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCqYdd6GplzifH1wF3iwwtC3GjFhNwUGz3A&s"
              alt="Fare Details"
              className="img-fluid rounded"
              width={'100%'}
              height={'500px'}
            />
          </Col>

          {/* Fare Details Section */}
          <Col md={6}>
            <Card className="p-3 shadow-lg mt-2">
              <Card.Body>
                <Card.Title className="fw-bold fs-4">Fare Details</Card.Title>
                <hr />
                <Row>
                  <Col>Base Rent</Col>
                  <Col className="text-end">₹10,102.00</Col>
                </Row>
                <Row>
                  <Col>CGST</Col>
                  <Col className="text-end">₹909.18</Col>
                </Row>
                <Row>
                  <Col>SGST</Col>
                  <Col className="text-end">₹909.18</Col>
                </Row>
                <Row>
                  <Col className="fw-bold">Total Rent Amount</Col>
                  <Col className="text-end fw-bold">₹11,920.36</Col>
                </Row>
                <Row>
                  <Col>Deposit Amount</Col>
                  <Col className="text-end">₹5,000.00</Col>
                </Row>
                <Row>
                  <Col>Fastag Deposit</Col>
                  <Col className="text-end">₹1,000.00</Col>
                </Row>
                <hr />
                <Row>
                  <Col className="fw-bold">Sub Total</Col>
                  <Col className="text-end fw-bold">₹17,920.36</Col>
                </Row>
                <hr />
                <Row>
                  <Col className="fw-bold fs-5">Total Amount</Col>
                  <Col className="text-end fw-bold fs-5">₹17,920.36</Col>
                </Row>
                <div className="d-grid mt-3">
                  <Button variant="primary" size="lg">Pay Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout;
