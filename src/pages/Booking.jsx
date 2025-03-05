
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Booking.css";
import Header from "../components/Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBookingUpdateId, sentBookingPdfAPI } from "../services/allAPI";
import SERVER_URL from "../services/SERVER_URL";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Booking = () => {
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null); // ✅ Store a single booking object
  // const { bookingId } = useParams(); // ✅ Correct casing
  // console.log(bookingId);
  const query = useQuery();
  const bookingId = query.get("bookingId"); // ✅ Extract bookingId from query params
  console.log("Booking ID from URL:", bookingId);

  useEffect(() => {
    getBooking();
  }, [bookingId]);

  const getBooking = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getBookingUpdateId(bookingId, reqHeader); // ✅ Pass bookingId
        if (result.status === 200) {
          setBooking(result.data); // ✅ Store fetched booking data
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const downloadBookingPDF = async (bookingId) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please log in first");

    try {
        const reqHeader = { Authorization: `Bearer ${token}` };
        const result = await sentBookingPdfAPI(bookingId,reqHeader)

        if (result.status == 200) {
            alert("Booking PDF sent to your email!");
            navigate('/')
        } else {
            alert("Failed to send booking PDF.");
        }
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
};
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <div className="checkout-summary container">
          <h2 className="text-center mb-4">Booking Summary</h2>
          {booking ? (
            <div className="summary-card p-4">
              <img
                src={`${SERVER_URL}${booking.carId.image}`}  
                alt={booking.carId.name}
                className="car-image mb-3"
              />
              <div className="summary-item">
                <strong>Car Name:</strong> {booking.carId.name}
              </div>
              <div className="summary-item">
                <strong>Rental Price:</strong> {booking.carId.pricePerDay} per day
              </div>
              <div className="summary-item">
                <strong>Rental Duration:</strong> {booking.rentalDuration} days
              </div>
              <div className="summary-item">
                <strong>Pickup Location:</strong> {booking.pickupLocation}
              </div>
              <div className="summary-item">
                <strong>Drop-off Location:</strong> {booking.dropoffLocation}
              </div>
              <div className="summary-item">
                <strong>Grand Total:</strong> ₹{booking.totalPrice}
              </div>
            </div>
          ) : (
            <p className="text-center">Loading booking details...</p>
          )}
          <button onClick={() => downloadBookingPDF(booking._id)} className="checkout-btn mt-4 mb-3">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Booking;
