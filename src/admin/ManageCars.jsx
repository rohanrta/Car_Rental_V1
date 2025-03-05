import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { addCarAPI } from "../services/allAPI";

const ManageCars = () => {
  // State for form data
  const [carData, setCarData] = useState({
    name: "",
    brand: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    seatingCapacity: "",
    pricePerDay: "",
    location: "",
    availabilityStatus: true,
    image: null,
    features: [],
  });
  console.log(carData);
  

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setCarData({ ...carData, image: e.target.files[0] });
  };

  // Handle feature selection (checkbox)
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      features: checked
        ? [...prevData.features, value]
        : prevData.features.filter((feature) => feature !== value),
    }));
  };

  // Handle availability toggle
  const handleAvailabilityChange = () => {
    setCarData((prevData) => ({
      ...prevData,
      availabilityStatus: !prevData.availabilityStatus,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, brand, bodyType, fuelType, transmission, seatingCapacity, pricePerDay, location, image, features } = carData;

    if (!name || !brand || !bodyType || !fuelType || !transmission || !seatingCapacity || !pricePerDay || !location || !image || features.length === 0) {
      alert("Please fill out all required fields.");
      return;
    }

    const reqBody = new FormData();
    reqBody.append("name", name);
    reqBody.append("brand", brand);
    reqBody.append("bodyType", bodyType);
    reqBody.append("fuelType", fuelType);
    reqBody.append("transmission", transmission);
    reqBody.append("seatingCapacity", seatingCapacity);
    reqBody.append("pricePerDay", pricePerDay);
    reqBody.append("location", location);
    reqBody.append("availabilityStatus", carData.availabilityStatus);
    reqBody.append("image", image);
    features.forEach((feature) => reqBody.append("features", feature));

    const token = localStorage.getItem("token");

    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const result = await addCarAPI(reqBody, reqHeader);
        if (result.status === 200) {
          alert("Car added successfully!");
          setCarData({
            name: "",
            brand: "",
            bodyType: "",
            fuelType: "",
            transmission: "",
            seatingCapacity: "",
            pricePerDay: "",
            location: "",
            availabilityStatus: true,
            image: null,
            features: [],
          });
        } else {
          alert(result.response?.data || "Error adding car");
        }
      } catch (error) {
        console.error("Error adding car:", error);
        alert("Failed to add car.");
      }
    }
  };

  // Dropdown options
  const carNames = ["Honda Amaze", "Audi A6", "Mercedes E-Class", "Jeep Compass", "Mini Cooper", "Volkswagen Polo", "Volkswagen Virtus", "Skoda Kushaq", "Volkswagen Taigun", "Mahindra Thar M5", "Suzuki Baleno"];
  const brands = ["Honda", "Mercedes", "Volkswagen", "Audi","Skoda","Jeep", "Mahindra", "Mini Cooper", "Suzuki"];
  const bodyTypes = ["Sedan", "SUV", "Coupe", "Hatchback"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const transmissions = ["Automatic", "Manual"];
  const seatingCapacities = ["4", "5", "7"];
  const locations = ["Kochi", "Kollam", "Trivandrum"];
  const featuresList = ["GPS", "Sunroof", "Bluetooth", "Backup Camera"];

  return (
    <Container className="d-flex justify-content-center align-items-center mb-3">
      <Card className="p-4 shadow-lg" style={{ width: "600px" }}>
        <h2 className="text-center mb-4">Manage Cars</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Car Name</Form.Label>
                <Form.Select name="name" value={carData.name} onChange={handleChange} required>
                  <option value="">Select Car</option>
                  {carNames.map((car, index) => <option key={index} value={car}>{car}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select name="brand" value={carData.brand} onChange={handleChange} required>
                  <option value="">Select Brand</option>
                  {brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {[["Body Type", "bodyType", bodyTypes], ["Fuel Type", "fuelType", fuelTypes], ["Transmission", "transmission", transmissions], ["Seating Capacity", "seatingCapacity", seatingCapacities], ["Location", "location", locations]].map(([label, name, options]) => (
            <Form.Group className="mb-3" key={name}>
              <Form.Label>{label}</Form.Label>
              <Form.Select name={name} value={carData[name]} onChange={handleChange} required>
                <option value="">Select {label}</option>
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
              </Form.Select>
            </Form.Group>
          ))}

          {/* Features Checkboxes */}
          <Form.Group className="mb-3">
            <Form.Label>Features</Form.Label>
            {featuresList.map((feature, index) => (
              <Form.Check key={index} type="checkbox" label={feature} value={feature} onChange={handleFeatureChange} checked={carData.features.includes(feature)} />
            ))}
          </Form.Group>

          {/* Image Upload */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Car Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} required />
          </Form.Group>

          {/* Price Input */}
          <Form.Group className="mb-3">
            <Form.Label>Price Per Day (₹)</Form.Label>
            <Form.Control type="number" name="pricePerDay" value={carData.pricePerDay} onChange={handleChange} required min="1" />
          </Form.Group>

          {/* Availability Switch */}
          <Form.Group className="mb-3">
            <Form.Check type="switch" id="availability-switch" label={carData.availabilityStatus ? "Available" : "Not Available"} checked={carData.availabilityStatus} onChange={handleAvailabilityChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ManageCars;
