import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table, Spinner } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getBookingAPI, updateBookingStatus } from "../services/allAPI";
import './Dashboard.css'
import { Link, useNavigate } from "react-router-dom";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
Link
const Dashboard = () => {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBookings()
  }, [])
  console.log(bookings);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const reqHeader = { Authorization: `Bearer ${token}` };

      const result = await getBookingAPI(reqHeader);

      setBookings(Array.isArray(result.data) ? result.data : []); // Ensures it's always an array
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setBookings([]); // Prevents undefined state
    } finally {
      setLoading(false);
    }
  };
  const updateStatusBooking = async (id, newStatus) => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {

        await updateBookingStatus(id, { status: newStatus }, reqHeader);

        // Update state to reflect the status change immediately
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === id ? { ...booking, status: newStatus } : booking
          )
        );
      } catch (error) {
        console.error("Error updating booking status:", error);
      }
    }
  };


  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bookings",
        data: [10, 20, 15, 25, 30, 22],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };
  const logout = () =>{
    localStorage.clear()
    navigate('/')
  }

  return (

    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-white p-3 ">
          <h4>Admin Panel</h4>
          <Button variant="outline-light" href="#booking" className="w-100 mb-2">MANAGE BOOKINGS</Button>
          <Link to={'/admin/updatelistcars'}><Button variant="outline-light" className="w-100 mb-2">MANAGE CARS</Button></Link>
          <Link to={'/admin/managecars'}><Button  variant="outline-light" className="w-100 mb-2">ADD CARS</Button></Link>
          <Button onClick={logout} variant="outline-light" className="w-100">Logout</Button>
        </Col>

        <Col md={10} className="p-4">
          <h3>Dashboard</h3>

          <Row>
            <Col md={12}>
              <Bar data={chartData} />
            </Col>
          </Row>

          <Row id="booking" className="mt-4">
            <Col md={12}>
              <h5>Manage Bookings</h5>

              {loading ? (
                <Spinner animation="border" />
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Car</th>
                      <th>Rental Price</th>
                      <th>Pickup Date & Time</th>
                      <th>Drop-off Date & Time</th>
                      <th>Customer Contact</th>
                      <th>Payment Status</th>
                      <th>Booking Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length > 0 ? (
                      bookings.map((booking) => (
                        <tr key={booking._id}>
                          <td>{booking.userId?.name || "N/A"}</td>
                          <td>{booking.carId?.name}</td>
                          <td>₹{booking.carId?.pricePerDay}/Day</td>
                          <td>{new Date(booking.dateofPickup).toLocaleString()}</td>
                          <td>{new Date(booking.dateofDropoff).toLocaleString()}</td>
                          <td>{booking.userId?.phone || "N/A"}</td>
                          <td>{booking.paymentStatus || "Pending"}</td>
                          <td className="text-center align-middle position-relative">
                            {booking.status === "Confirmed" || booking.status === "Cancelled" ? (
                              <span className={`badge ${booking.status === "Confirmed" ? "bg-success" : "bg-danger"}`}>
                                {booking.status}
                              </span>
                            ) : (
                              <div className="d-flex justify-content-center align-items-center">
                                <Button
                                  variant="success"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => updateStatusBooking(booking._id, "Confirmed")}
                                >
                                  Confirm
                                </Button>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => updateStatusBooking(booking._id, "Cancelled")}
                                >
                                  Cancel
                                </Button>
                              </div>
                            )}
                          </td>



                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">No bookings available</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;