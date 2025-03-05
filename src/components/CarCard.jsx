import React from "react";
import "./CarCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { updateBookingAPI } from "../services/allAPI";
import SERVER_URL from "../services/SERVER_URL";
import { useParams } from "react-router-dom";


const CarCard = ({ car }) => {
  const navigate = useNavigate();
    const location = useLocation();
    const { bookingId } = useParams();
    const queryParams = new URLSearchParams(location.search);
    const pickupDate = queryParams.get("pickupDate");
    const dropoffDate = queryParams.get("dropoffDate");
    const pickupTime = queryParams.get("pickupTime");
    const dropoffTime = queryParams.get("dropoffTime");
    // ✅ Extract Booking ID from URL Query Parameters
  

    // ✅ Handle Booking Update
    const handleBookingUpdate = async () => {
        if (!bookingId) {
            alert("No active booking found. Please create a booking first.");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("User not authenticated!");
                return;
            }

            const reqBody = {
              carId: car._id,
              pickupDate,
              dropoffDate,
              pickupTime,
              dropoffTime
          };
            const reqHeader = {
                Authorization: `Bearer ${token}`
            };

            const response = await updateBookingAPI(bookingId, reqBody, reqHeader);

            if (response.status === 200) {
                // alert("Booking updated successfully!");
                navigate(`/booking?bookingId=${bookingId}`); // ✅ Navigate to Booking Page with ID
            } else {
                alert("Failed to update booking");
            }
        } catch (error) {
            console.error("Error updating booking:", error);
            alert("Error updating booking. Please try again.");
        }
    };
  return (
    <div className="car-card">
      <span className="badge">{car.bodyType}</span>
      <h4 className="car-name">{car.name}</h4>
      <p className="brand">{car.brand}</p>

      <img src={`${SERVER_URL}${car.image}`} alt={car.name} className="car-image" />

      <div className="deal">
        <i className="fa-solid fa-tag"></i> Deal of the day
      </div>

      <div className="car-details">
        <span>
          <i className="fa-solid fa-cogs"></i> {car.transmission}
        </span>
        <span>
          <i className="fa-solid fa-gas-pump"></i> {car.fuelType}
        </span>
        <span>
          <i className="fa-solid fa-user-group"></i> {car.seatingCapacity} seater
        </span>
      </div>

      <div className="price-section">
        {/* <p className="original-price">₹{car.pricePerDay}</p> */}
        <p className="discounted-price text-center">₹{car.pricePerDay}</p>
        <p className="per-day">₹{car.pricePerDay}/Day</p>
      </div>

      {/* Button Container */}
      <div className="button-container">
        <button onClick={handleBookingUpdate} className="book-btn">Book now</button>
      </div>
    </div>
  );
};

export default CarCard;


