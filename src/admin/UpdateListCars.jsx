// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// // import { getAllCarsAPI} from "../services/allAPI";
// import { useNavigate } from "react-router-dom";
// import { getAllCarsAPI, removeCarAPI } from "../services/allAPI";
// import SERVER_URL from "../services/SERVER_URL";
// SERVER_URL
// const UpdateListCars = () => {
//   const [cars, setCars] = useState([]);
//   const navigate = useNavigate();

  
//   useEffect(() => {
    
//     fetchCars();
//   }, []);
// console.log(cars);
// const fetchCars = async () => {
//     const token = localStorage.getItem("token");

// if (token) {
//   const reqHeader = {
//     Authorization: `Bearer ${token}`,
//   };

//   try {
//     const result = await getAllCarsAPI(reqHeader);
//     if (result.status === 200) {
//       setCars(result.data);
//     } else {
//       alert("Failed to fetch cars");
//     }
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//   }
// }}
//   // Handle delete
//   const handleDelete = async (carId) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//         const reqHeader = {
//           Authorization: `Bearer ${token}`,
//         };
//     if (window.confirm("Are you sure you want to delete this car?")) {
//       try {
//         const result = await removeCarAPI(carId,reqHeader);
//         if (result.status === 200) {
//           alert("Car deleted successfully");
//           fetchCars()
//           setCars(cars.filter((car) => car._id !== carId));
//         } else {
//           alert("Failed to delete car");
//         }
//       } catch (error) {
//         console.error("Error deleting car:", error);
//       }
//     }}
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="text-center mb-4">Manage Vehicles</h2>
//       <Row>
//         {cars.length > 0 ? (
//           cars.map((car) => (
//             <Col key={car._id} md={4} sm={6} xs={12} className="mb-4">
//               <Card className="shadow-lg h-100">
//                 <Card.Img variant="top" src={`${SERVER_URL}${car.image}`} alt={car.name} style={{ height: "200px", objectFit: "cover" }} />
//                 <Card.Body>
//                   <Card.Title>{car.name}</Card.Title>
//                   <Card.Text>
//                     <strong>Brand:</strong> {car.brand} <br />
//                     <strong>Type:</strong> {car.bodyType} <br />
//                     <strong>Fuel:</strong> {car.fuelType} <br />
//                     <strong>Price/Day:</strong> ₹{car.pricePerDay}
//                   </Card.Text>
//                   <div className="d-flex justify-content-between">
//                     <Button variant="primary" onClick={() => navigate(`/edit-car/${car._id}`)}>Edit</Button>
//                     <Button variant="danger" onClick={() => handleDelete(car._id)}>Delete</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           <p className="text-center">No cars available</p>
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default UpdateListCars;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { getAllCarsAPI, removeCarAPI, updateCarAPI } from "../services/allAPI";
import SERVER_URL from "../services/SERVER_URL";
updateCarAPI
const UpdateListCars = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [carImage, setCarImage] = useState(null);

  const carNames = ["Honda Amaze", "Audi A6", "Mercedes E-Class", "Jeep Compass", "Mini Cooper", "Volkswagen Polo", "Volkswagen Virtus", "Skoda Kushaq", "Volkswagen Taigun", "Mahindra Thar M5", "Suzuki Baleno"];
  const brands = ["Honda", "Mercedes", "Volkswagen", "Audi", "Jeep", "Mahindra", "Mini Cooper", "Suzuki"];
  const bodyTypes = ["Sedan", "SUV", "Coupe", "Hatchback"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const transmissions = ["Automatic", "Manual"];
  const seatingCapacities = ["4", "5", "7"];
  const locations = ["Kochi", "Kollam", "Trivandrum"];
  const featuresList = ["GPS", "Sunroof", "Bluetooth", "Backup Camera"];


  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = { Authorization: `Bearer ${token}` };
      try {
        const result = await getAllCarsAPI(reqHeader);
        if (result.status === 200) {
          setCars(result.data);
        } else {
          alert("Failed to fetch cars");
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
  };

  const handleDelete = async (carId) => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = { Authorization: `Bearer ${token}` };
      if (window.confirm("Are you sure you want to delete this car?")) {
        try {
          const result = await removeCarAPI(carId, reqHeader);
          if (result.status === 200) {
            alert("Car deleted successfully");
            fetchCars();
          } else {
            alert("Failed to delete car");
          }
        } catch (error) {
          console.error("Error deleting car:", error);
        }
      }
    }
  };

  const handleEdit = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setSelectedCar({ ...selectedCar, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCar((prevCar) => ({
      ...prevCar,
      features: checked
        ? [...prevCar.features, value]
        : prevCar.features.filter((feature) => feature !== value),
    }));
  };

  const handleFileChange = (e) => {
    setCarImage(e.target.files[0]);
  };

  const handleAvailabilityChange = () => {
    setSelectedCar({ ...selectedCar, availabilityStatus: !selectedCar.availabilityStatus });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token && selectedCar) {
      const reqHeader = { Authorization: `Bearer ${token}` };

      const formData = new FormData();
      Object.entries(selectedCar).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (carImage) {
        formData.append("image", carImage);
      }

      try {
        const result = await updateCarAPI(selectedCar._id, formData, reqHeader);
        if (result.status === 200) {
          alert("Car updated successfully");
          fetchCars();
          setShowModal(false);
        } else {
          alert("Failed to update car");
        }
      } catch (error) {
        console.error("Error updating car:", error);
      }
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Manage Vehicles</h2>
      <Row>
        {cars.length > 0 ? (
          cars.map((car) => (
            <Col key={car._id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="shadow-lg h-100">
                <Card.Img variant="top" src={`${SERVER_URL}${car.image}`} alt={car.name} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text>
                    <strong>Brand:</strong> {car.brand} <br />
                    <strong>Type:</strong> {car.bodyType} <br />
                    <strong>Fuel:</strong> {car.fuelType} <br />
                    <strong>Price/Day:</strong> ₹{car.pricePerDay}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleEdit(car)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(car._id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No cars available</p>
        )}
      </Row>

      {/* Edit Car Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Edit Car Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedCar && (
      <Form onSubmit={handleUpdate}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Car Name</Form.Label>
              <Form.Select name="name" value={selectedCar.name} onChange={handleChange} required>
                <option value="">Select Car</option>
                {carNames.map((car, index) => <option key={index} value={car}>{car}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Select name="brand" value={selectedCar.brand} onChange={handleChange} required>
                <option value="">Select Brand</option>
                {brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {[
          ["Body Type", "bodyType", bodyTypes],
          ["Fuel Type", "fuelType", fuelTypes],
          ["Transmission", "transmission", transmissions],
          ["Seating Capacity", "seatingCapacity", seatingCapacities],
          ["Location", "location", locations]
        ].map(([label, name, options]) => (
          <Form.Group className="mb-3" key={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Select name={name} value={selectedCar[name]} onChange={handleChange} required>
              <option value="">Select {label}</option>
              {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </Form.Select>
          </Form.Group>
        ))}

        {/* Per Day Rate Field */}
        <Form.Group className="mb-3">
          <Form.Label>Price Per Day (₹)</Form.Label>
          <Form.Control
            type="number"
            name="pricePerDay"
            value={selectedCar.pricePerDay}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Features Checkboxes (Pre-filled) */}
        <Form.Group className="mb-3">
          <Form.Label>Features</Form.Label>
          <div className="d-flex flex-wrap">
            {featuresList.map((feature, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={feature}
                value={feature}
                checked={selectedCar.features.includes(feature)}
                onChange={handleFeatureChange}
                className="me-3"
              />
            ))}
          </div>
        </Form.Group>

        {/* Availability Status Toggle */}
        <Form.Group className="mb-3">
          <Form.Label>Availability Status</Form.Label>
          <Form.Check
            type="switch"
            id="availability-switch"
            label={selectedCar.availabilityStatus ? "Available" : "Not Available"}
            checked={selectedCar.availabilityStatus}
            onChange={handleAvailabilityChange}
          />
        </Form.Group>

        {/* Upload Car Image */}
        <Form.Group className="mb-3">
          <Form.Label>Upload Car Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">Update</Button>
      </Form>
    )}
  </Modal.Body>
</Modal>

    </Container>
  );
};

export default UpdateListCars;

