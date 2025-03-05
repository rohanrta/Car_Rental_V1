import React, { useEffect, useState } from "react";
import { getUserBookingAPI } from "../services/allAPI";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch user bookings on component mount
  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("User not authenticated!");
        return;
      }

      const reqHeader = { Authorization:`Bearer ${token}` };
      const result = await getUserBookingAPI(reqHeader);

      if (result.status === 200) {
        setBookings(result.data);
      } else {
        alert("Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Handle booking cancellation
  // const handleCancelBooking = async (bookingId) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("User not authenticated!");
  //       return;
  //     }

  //     const reqHeader = { Authorization: `Bearer ${token}` };
  //     const result = await cancelBookingAPI(bookingId, reqHeader);

  //     if (result.status === 200) {
  //       alert("Booking cancelled successfully!");
  //       fetchUserBookings(); // Refresh bookings after cancellation
  //     } else {
  //       alert("Failed to cancel booking");
  //     }
  //   } catch (error) {
  //     console.error("Error cancelling booking:", error);
  //   }
  // };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Your Bookings</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Car</th>
              <th>Pickup Location</th>
              <th>Dropoff Location</th>
              <th>Pickup Date & Time</th>
              <th>Dropoff Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>{booking.carName}</td>
                  <td>{booking.pickupLocation}</td>
                  <td>{booking.dropoffLocation}</td>
                  <td>
                    {booking.dateofPickup} {booking.timeofPickup}
                  </td>
                  <td>
                    {booking.dateofDropoff} {booking.timeofDropoff}
                  </td>
                  <td>
                    <span className={`badge ${booking.status === "Confirmed" ? "bg-success" : "bg-warning"}`}>
                      {booking.status}
                    </span>
                  </td>
                  {/* <td>
                    {booking.status !== "Cancelled" ? (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancelBooking(booking._id)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <span className="text-muted">Cancelled</span>
                    )}
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
