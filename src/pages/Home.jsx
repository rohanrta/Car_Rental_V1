
import React from 'react';
import Getdata from '../components/Getdata';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ad1 from '../assets/ad1.png';
import bmw from '../assets/bmw.png';
import skoda from '../assets/skoda.png';
import vw from '../assets/vw.png';
import innova from '../assets/innova.png';
import './Home.css';
import Header from '../components/Header';
import { FaQuoteLeft } from 'react-icons/fa';
import bannerCar from '../assets/Banner car.png'

const Home = () => {
  const reviews = [
    {
      text: "I had an amazing experience with LUXE CARS during my recent holiday trip in Kerala. I rented a Skoda Slavia from them, and it was in excellent condition. The car provided a comfortable ride and had all the modern amenities I needed. The staff was super friendly, professional, and...",
      name: "HARISH KANDRAGULA",
      role: "Travel Guide",
    },
    {
      text: "I recently rented a car from LUXE CARS and I couldn't be happier with my experience. From start to finish, everything was top-notch. Customer Service: The customer service I received was exceptional. The staff was friendly, knowledgeable, and efficient. They made th...",
      name: "SAIPRASAD REDDY",
      role: "Avid Traveller",
    },
    {
      text: "If you are looking for a self-drive car in Kerala, then look no further than LUXE CARS. They are a top-notch professional car rental firm. I am saying from personal experience. I landed in Calicut and the car I booked was delivered to me at the airport itself. After tanking ...",
      name: "LERIN ZACHARIA",
      role: "",
    },
  ];
  return (
    <>
      <Header />
      <div >
      <img src={bannerCar} style={{width:'100%'}} alt="" />
      </div>
      
      <div style={{}}>
        <Getdata />
       <Container className='mb-4 mt-5'>
  <h3 className='mb-4 text-dark' style={{ fontWeight: '600' }}>
    Special Offers and Discounts
  </h3>
  <div className="marquee-container">
    <div className="marquee-content">
      {[...Array(4)].map((_, index) => (
        <Card key={index} className="marquee-card">
          <Card.Img variant="top" src={ad1} className="marquee-image" />
        </Card>
      ))}
    </div>
  </div>
</Container>

        <Container className='border-top pt-5 mt-5' style={{marginBottom:'100px',marginTop:'100px'}}>
          <h3 className='mb-4 text-dark' style={{ fontWeight: '600' }}>Featured Cars</h3>
          <Row className='justify-content-center'>
            {[{ src: vw, name: 'VOLKSWAGEN' }, { src: bmw, name: 'BMW' }, { src: skoda, name: 'SKODA' }, { src: innova, name: 'TOYOTA' }].map((car, index) => (
              <Col key={index} xs={12} sm={6} md={3} className='d-flex justify-content-center'>
                <Card style={{ width: '20rem', borderRadius: '10px' }} className='shadow p-3 mt-3'>
                  <Card.Img style={{ backgroundColor: 'rgb(236, 240, 241)', height: '220px' }} variant='top' src={car.src} />
                  <Card.Body>
                    <Card.Title className='text-center'>{car.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className='mt-5 px-4'>
          <Row className='text-start mb-3'>
            <Col>
              <h2 className='fw-bold text-uppercase'>Rent a Car from Best</h2>
              <h4 className='text-secondary text-uppercase'>Car Rental in India</h4>
              <div className='border-bottom border-warning mt-2' style={{ width: '120px', height: '4px' }}></div>
            </Col>
          </Row>
          {[...Array(2)].map((_, rowIndex) => (
            <Row key={rowIndex} className='mt-4'>
              {[...Array(3)].map((_, colIndex) => (
                <Col key={colIndex} xs={12} sm={6} md={4} className='text-justify'>
                  <p>
                    {[
                      "Whether you're planning a solo trip or traveling with friends and family, LUXE CARS is here to provide you with the best car rental experience in South India. Our wide range of vehicles ensures that you'll find the perfect fit for your needs and preferences.",
                      "With LUXE CARS, you can enjoy the freedom to explore at your own pace. No more relying on public transportation schedules or expensive taxi fares. Our self-drive cars and bikes give you the flexibility to go wherever you want, whenever you want.",
                      "Discover the freedom of South India with LUXE CARS! Explore our premium fleet of self-drive cars and bikes for your next adventure. Affordable, convenient, and reliable rentals to make your journey unforgettable. Book now and hit the road with LUXE CARS.",
                      "We understand the importance of affordability, which is why our rental rates are designed to suit every budget. Whether you're looking for a budget-friendly option or a luxurious ride, we have something for everyone.",
                      "Convenience is key when it comes to renting a vehicle, and LUXE CARS has got you covered. Our booking process is quick and easy, allowing you to reserve your car or bike in just a few clicks.",
                      "When you choose LUXE CARS, you can rest assured that you're getting a reliable vehicle. We regularly maintain and service our fleet to ensure that you have a smooth and hassle-free journey.",
                    ][rowIndex * 3 + colIndex]}
                  </p>
                </Col>
              ))}
            </Row>
          ))}
          <Row className='mt-4'>
            <Col>
              <p className='text-start'>
                So why wait? Book your car or bike now and embark on an unforgettable adventure with LUXE CARS. Whether you're planning to explore the vibrant cities, serene beaches, or breathtaking landscapes of South India, our reliable rentals will be your perfect companion.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
