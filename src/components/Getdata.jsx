

// import React, { useState, useRef, useEffect } from "react";

// const Getdata = ({ simplified }) => {
//     const [bookingDetail, setBookingDetail] = useState({
//         pickupLocation: "",
//         dropoffLocation: "",
//         dateofPickup: "",
//         timeofPickup: "",
//         dateofDropoff: "",
//         timeofDropoff: ""
//     });
//     console.log(bookingDetail);


//     const [showPickupDropdown, setShowPickupDropdown] = useState(false);
//     const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);

//     const locations = ["Kochi", "Trivandrum", "Kollam"];

//     const pickupRef = useRef(null);
//     const dropoffRef = useRef(null);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (pickupRef.current && !pickupRef.current.contains(event.target)) {
//                 setShowPickupDropdown(false);
//             }
//             if (dropoffRef.current && !dropoffRef.current.contains(event.target)) {
//                 setShowDropoffDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className='getdata-container'>
//             <div className={`w-100 ${simplified ? '' : ' py-3'}`} style={{ borderRadius: simplified ? '0' : '20px' }}>
//                 <div className={`container ${simplified ? '' : 'border shadow bg-white p-4 rounded'}`} style={{ zIndex: '1' }}>
//                     {!simplified && <h3 className="text-center mb-4" style={{ fontFamily: 'Roboto' }}>Book Your Ride</h3>}
//                     <div className="row g-3 align-items-center justify-content-center">

//                         {/* Pick-Up Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={pickupRef}>
//                             {!simplified && (
//                                 <h4 style={{ fontFamily: 'Roboto', marginBottom: '0.5rem' }}>
//                                     <span className="text-primary me-2">
//                                         <i className="fa-solid fa-circle-dot"></i>
//                                     </span>
//                                     Pick Up
//                                 </h4>
//                             )}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label htmlFor="pickup-location" className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             id="pickup-location"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.pickupLocation}
//                                             onFocus={() => setShowPickupDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showPickupDropdown && (
//                                             <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2"
//                                                 style={{ top: "100%", zIndex: 10, whiteSpace: "nowrap" }}>
//                                                 {locations.map((loc, index) => (
//                                                     <div key={index} 
//                                                         className="px-3 py-2 border rounded bg-light cursor-pointer"
//                                                         onClick={() => {
//                                                             setBookingDetail({ ...bookingDetail, pickupLocation: loc });
//                                                             setShowPickupDropdown(false);
//                                                         }}
//                                                         style={{ cursor: "pointer" }}>
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label htmlFor="pickup-date" className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             id="pickup-date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label htmlFor="pickup-time" className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             id="pickup-time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="col-12 col-md-1 text-center fs-4">
//                             <i className="fa-solid fa-repeat"></i>
//                         </div>

//                         {/* Drop-Off Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={dropoffRef}>
//                             {!simplified && (
//                                 <h4 style={{ fontFamily: 'Roboto', marginBottom: '0.5rem' }}>
//                                     <span className="text-primary me-2">
//                                         <i className="fa-solid fa-circle-dot"></i>
//                                     </span>
//                                     Drop-Off
//                                 </h4>
//                             )}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label htmlFor="dropoff-location" className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             id="dropoff-location"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.dropoffLocation}
//                                             onFocus={() => setShowDropoffDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showDropoffDropdown && (
//                                             <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2"
//                                                 style={{ top: "100%", zIndex: 10, whiteSpace: "nowrap" }}>
//                                                 {locations.map((loc, index) => (
//                                                     <div key={index} 
//                                                         className="px-3 py-2 border rounded bg-light cursor-pointer"
//                                                         onClick={() => {
//                                                             setBookingDetail({ ...bookingDetail, dropoffLocation: loc });
//                                                             setShowDropoffDropdown(false);
//                                                         }}
//                                                         style={{ cursor: "pointer" }}>
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label htmlFor="dropoff-date" className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             id="dropoff-date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label htmlFor="dropoff-time" className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             id="dropoff-time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {!simplified && (
//                         <div className="row mt-3">
//                             <div className="col-12 text-center">
//                                 <button className="btn btn-primary px-4 py-2">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Getdata;
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { createBookingAPI } from "../services/allAPI";

// const Getdata = ({ simplified,bookDetails }) => {
//     const initialState = {
//         pickupLocation: "",
//         dropoffLocation: "",
//         dateofPickup: "",
//         timeofPickup: "",
//         dateofDropoff: "",
//         timeofDropoff: ""
//     };

//     const [bookingDetail, setBookingDetail] = useState(initialState || bookDetails);
//     const [showPickupDropdown, setShowPickupDropdown] = useState(false);
//     const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);
//     const locations = ["Kochi", "Trivandrum", "Kollam"];

//     const pickupRef = useRef(null);
//     const dropoffRef = useRef(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (pickupRef.current && !pickupRef.current.contains(event.target)) {
//                 setShowPickupDropdown(false);
//             }
//             if (dropoffRef.current && !dropoffRef.current.contains(event.target)) {
//                 setShowDropoffDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     const handleBooking = async () => {
//         if (
//             bookingDetail.pickupLocation &&
//             bookingDetail.dropoffLocation &&
//             bookingDetail.timeofPickup &&
//             bookingDetail.timeofDropoff &&
//             bookingDetail.dateofPickup &&
//             bookingDetail.dateofDropoff
//         ) {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     alert("User not authenticated!");
//                     return;
//                 }

//                 const reqBody = { ...bookingDetail };
//                 const reqHeader = {
//                     Authorization: `Bearer ${token}`
//                 };

//                 const result = await createBookingAPI(reqBody, reqHeader);

//                 if (result.status == 200) {
//                     alert("Booking created successfully!");

//                     // ✅ Reset the state
//                     setBookingDetail(initialState);

//                     // ✅ Navigate to Car Listing Page with query params
//                     navigate(
//                         `/carlisting?pickupLocation=${bookingDetail.pickupLocation}&dropoffLocation=${bookingDetail.dropoffLocation}&dateofPickup=${bookingDetail.dateofPickup}&timeofPickup=${bookingDetail.timeofPickup}&dateofDropoff=${bookingDetail.dateofDropoff}&timeofDropoff=${bookingDetail.timeofDropoff}`
//                     );
//                 } else {
//                     alert("Failed to create booking");
//                 }
//             } catch (error) {
//                 console.error("Error creating booking:", error);
//                 alert("Error creating booking. Please try again.");
//             }
//         } else {
//             alert("Please fill the form completely");
//         }
//     };

//     return (
//         <div className='getdata-container'>
//             <div className={`w-100 ${simplified ? '' : ' py-3'}`} style={{ borderRadius: simplified ? '0' : '20px' }}>
//                 <div className={`container ${simplified ? '' : 'border shadow bg-white p-4 rounded'}`} style={{ zIndex: '1' }}>
//                     {!simplified && <h3 className="text-center mb-4">Book Your Ride</h3>}
//                     <div className="row g-3 align-items-center justify-content-center">

//                         {/* Pick-Up Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={pickupRef}>
//                             {!simplified && <h4>Pick Up</h4>}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.pickupLocation}
//                                             onFocus={() => setShowPickupDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showPickupDropdown && (
//                                             <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2" style={{ top: "100%", zIndex: 10 }}>
//                                                 {locations.map((loc, index) => (
//                                                     <div key={index} className="px-3 py-2 border rounded bg-light" onClick={() => {
//                                                         setBookingDetail({ ...bookingDetail, pickupLocation: loc });
//                                                         setShowPickupDropdown(false);
//                                                     }} style={{ cursor: "pointer" }}>
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="col-12 col-md-1 text-center fs-4">
//                             <i className="fa-solid fa-repeat"></i>
//                         </div>

//                         {/* Drop-Off Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={dropoffRef}>
//                             {!simplified && <h4>Drop-Off</h4>}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.dropoffLocation}
//                                             onFocus={() => setShowDropoffDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showDropoffDropdown && (
//                                             <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2" style={{ top: "100%", zIndex: 10 }}>
//                                                 {locations.map((loc, index) => (
//                                                     <div key={index} className="px-3 py-2 border rounded bg-light" onClick={() => {
//                                                         setBookingDetail({ ...bookingDetail, dropoffLocation: loc });
//                                                         setShowDropoffDropdown(false);
//                                                     }} style={{ cursor: "pointer" }}>
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {!simplified && (
//                         <div className="row mt-3">
//                             <div className="col-12 text-center">
//                                 <button className="btn btn-primary px-4 py-2" onClick={handleBooking}>
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Getdata;
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { createBookingAPI } from "../services/allAPI";

// const Getdata = ({ simplified, bookDetails }) => {
//     const initialState = {
//         pickupLocation: "",
//         dropoffLocation: "",
//         dateofPickup: "",
//         timeofPickup: "",
//         dateofDropoff: "",
//         timeofDropoff: ""
//     };

//     const [bookingDetail, setBookingDetail] = useState(initialState);
//     console.log(bookingDetail);

//     const [showPickupDropdown, setShowPickupDropdown] = useState(false);
//     const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);
//     const locations = ["Kochi", "Trivandrum", "Kollam"];
//     const pickupRef = useRef(null);
//     const dropoffRef = useRef(null);
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current route

//     // 🔹 Check if the page is Car Listing
//     const isCarListingPage = location.pathname.includes("carlisting");
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (pickupRef.current && !pickupRef.current.contains(event.target)) {
//                 setShowPickupDropdown(false);
//             }
//             if (dropoffRef.current && !dropoffRef.current.contains(event.target)) {
//                 setShowDropoffDropdown(false);
//             }
//         }
    
//         document.addEventListener("mousedown", handleClickOutside);
        
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);
    

//     // 🔹 Sync state with `bookDetails` ONLY if we're on Car Listing Page
//     useEffect(() => {
//         if (isCarListingPage && bookDetails) {
//             setBookingDetail(prev => ({
//                 pickupLocation: prev.pickupLocation || bookDetails.pickupLocation,
//                 dropoffLocation: prev.dropoffLocation || bookDetails.dropoffLocation,
//                 dateofPickup: prev.dateofPickup || bookDetails.dateofPickup,
//                 timeofPickup: prev.timeofPickup || bookDetails.timeofPickup,
//                 dateofDropoff: prev.dateofDropoff || bookDetails.dateofDropoff,
//                 timeofDropoff: prev.timeofDropoff || bookDetails.timeofDropoff
//             }));
//         }
//     }, [bookDetails, isCarListingPage]);

//     // const handleBooking = async () => {
//     //     if (
//     //         bookingDetail.pickupLocation &&
//     //         bookingDetail.dropoffLocation &&
//     //         bookingDetail.timeofPickup &&
//     //         bookingDetail.timeofDropoff &&
//     //         bookingDetail.dateofPickup &&
//     //         bookingDetail.dateofDropoff
//     //     ) {
//     //         try {
//     //             const token = localStorage.getItem("token");
//     //             if (!token) {
//     //                 alert("User not authenticated!");
//     //                 return;
//     //             }

//     //             const reqBody = { ...bookingDetail };
//     //             const reqHeader = {
//     //                 Authorization: `Bearer ${token}`
//     //             };

//     //             const result = await createBookingAPI(reqBody, reqHeader);

//     //             if (result.status === 200) {
//     //                 alert("Booking created successfully!");
//     //                 setBookingDetail(initialState);
//     //                 navigate(
//     //                     `/carlisting?pickupLocation=${bookingDetail.pickupLocation}&dropoffLocation=${bookingDetail.dropoffLocation}&dateofPickup=${bookingDetail.dateofPickup}&timeofPickup=${bookingDetail.timeofPickup}&dateofDropoff=${bookingDetail.dateofDropoff}&timeofDropoff=${bookingDetail.timeofDropoff}`
//     //                 );
//     //             } else {
//     //                 alert("Failed to create booking");
//     //             }
//     //         } catch (error) {
//     //             console.error("Error creating booking:", error);
//     //             alert("Error creating booking. Please try again.");
//     //         }
//     //     } else {
//     //         alert("Please fill the form completely");
//     //     }
//     // };
//     const handleBooking = async () => {
//         if (
//             bookingDetail.pickupLocation &&
//             bookingDetail.dropoffLocation &&
//             bookingDetail.timeofPickup &&
//             bookingDetail.timeofDropoff &&
//             bookingDetail.dateofPickup &&
//             bookingDetail.dateofDropoff
//         ) {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     alert("User not authenticated!");
//                     return;
//                 }

//                 const reqBody = { ...bookingDetail };
//                 const reqHeader = {
//                     Authorization: `Bearer ${token}`
//                 };

//                 const result = await createBookingAPI(reqBody, reqHeader);

//                 if (result.status === 200) {
//                     alert("Booking created successfully!");
//                     setBookingDetail(initialState);

//                     // ✅ Extract bookingId from API response
//                     const bookingId = result.data.booking._id;

//                     // ✅ Navigate to Car Listing Page with bookingId as URL param
//                     navigate(
//                         `/carlisting/${bookingId}?pickupLocation=${bookingDetail.pickupLocation}&dropoffLocation=${bookingDetail.dropoffLocation}&dateofPickup=${bookingDetail.dateofPickup}&timeofPickup=${bookingDetail.timeofPickup}&dateofDropoff=${bookingDetail.dateofDropoff}&timeofDropoff=${bookingDetail.timeofDropoff}`
//                     );
//                 } else {
//                     alert("Failed to create booking");
//                 }
//             } catch (error) {
//                 console.error("Error creating booking:", error);
//                 alert("Error creating booking. Please try again.");
//             }
//         } else {
//             alert("Please fill the form completely");
//         }
//     };


//     return (
//         <div className='getdata-container'>
//             <div className={`w-100 ${simplified ? '' : ' py-3'}`} style={{ borderRadius: simplified ? '0' : '20px' }}>
//                 <div className={`container ${simplified ? '' : 'border shadow bg-white p-4 rounded'}`} style={{ zIndex: '1' }}>
//                     {!simplified && <h3 className="text-center mb-4">Book Your Ride</h3>}
//                     <div className="row g-3 align-items-center justify-content-center">

//                         {/* Pick-Up Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={pickupRef}>
//                             {!simplified && <h4>Pick Up</h4>}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.pickupLocation}
//                                             onFocus={() => setShowPickupDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showPickupDropdown && (
//                                             <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2" style={{ top: "100%", zIndex: 10 }}>
//                                                 {locations.map((loc, index) => (
//                                                     <div key={index} className="px-3 py-2 border rounded bg-light" onClick={() => {
//                                                         setBookingDetail({ ...bookingDetail, pickupLocation: loc });
//                                                         setShowPickupDropdown(false);
//                                                     }} style={{ cursor: "pointer" }}>
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofPickup}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofPickup: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="col-12 col-md-1 text-center fs-4">
//                             <i className="fa-solid fa-repeat"></i>
//                         </div>

//                         {/* Drop-Off Section */}
//                         <div className="col-12 col-md-5 border p-3 rounded position-relative" ref={dropoffRef}>
//                             {!simplified && <h4>Drop-Off</h4>}
//                             <form>
//                                 <div className="row g-2">
//                                     <div className="col-12 col-sm-4 position-relative">
//                                         <label className="form-label fw-bold">Location</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Select location"
//                                             value={bookingDetail.dropoffLocation}
//                                             onFocus={() => setShowDropoffDropdown(true)}
//                                             readOnly
//                                         />
//                                         {showDropoffDropdown && (
//                                             <div
//                                                 className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2"
//                                                 style={{ top: "100%", zIndex: 10 }}
//                                             >
//                                                 {locations.map((loc, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className="px-3 py-2 border rounded bg-light"
//                                                         onClick={() => {
//                                                             setBookingDetail({ ...bookingDetail, dropoffLocation: loc });
//                                                             setShowDropoffDropdown(false); // ✅ Close dropdown after selection
//                                                         }}
//                                                         style={{ cursor: "pointer" }}
//                                                     >
//                                                         {loc}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Date</label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             value={bookingDetail.dateofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, dateofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                     <div className="col-6 col-sm-4">
//                                         <label className="form-label fw-bold">Time</label>
//                                         <input
//                                             type="time"
//                                             className="form-control"
//                                             value={bookingDetail.timeofDropoff}
//                                             onChange={e => setBookingDetail({ ...bookingDetail, timeofDropoff: e.target.value })}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     {!simplified && (
//                         <div className="text-center mt-3">
//                             <button className="btn btn-primary px-4 py-2" onClick={handleBooking}>
//                                 Book Now
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Getdata;
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createBookingAPI } from "../services/allAPI";

const Getdata = ({ simplified, bookDetails }) => {
    const initialState = {
        pickupLocation: "",
        dropoffLocation: "",
        dateofPickup: "",
        timeofPickup: "",
        dateofDropoff: "",
        timeofDropoff: ""
    };

    const [bookingDetail, setBookingDetail] = useState(initialState);
    const [showDropdown, setShowDropdown] = useState({ pickup: false, dropoff: false });
    const locations = ["Kochi", "Trivandrum", "Kollam"];
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isCarListingPage = location.pathname.includes("carlisting");

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown({ pickup: false, dropoff: false });
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Sync state with `bookDetails` ONLY if on Car Listing Page
    // useEffect(() => {
    //     if (isCarListingPage && bookDetails) {
    //         setBookingDetail(prev => ({
    //             pickupLocation: prev.pickupLocation || bookDetails.pickupLocation,
    //             dropoffLocation: prev.dropoffLocation || bookDetails.dropoffLocation,
    //             dateofPickup: prev.dateofPickup || bookDetails.dateofPickup,
    //             timeofPickup: prev.timeofPickup || bookDetails.timeofPickup,
    //             dateofDropoff: prev.dateofDropoff || bookDetails.dateofDropoff,
    //             timeofDropoff: prev.timeofDropoff || bookDetails.timeofDropoff
    //         }));
    //     }
    // }, [bookDetails, isCarListingPage]);
    useEffect(() => {
        if (isCarListingPage && bookDetails) {
            setBookingDetail(prev => ({
                pickupLocation: prev.pickupLocation || bookDetails.pickuplocation,
                dropoffLocation: prev.dropoffLocation || bookDetails.dropofflocation,
                dateofPickup: prev.dateofPickup || bookDetails.pickupDate,
                timeofPickup: prev.timeofPickup || bookDetails.pickupTime,
                dateofDropoff: prev.dateofDropoff || bookDetails.dropoffDate,
                timeofDropoff: prev.timeofDropoff || bookDetails.dropoffTime
            }));
        }
    }, [bookDetails,isCarListingPage]); // Only update when `bookDetails` changes
    

    // Handle "Book Now" click
    const handleBookNow = async() => {
        if (!bookingDetail.pickupLocation || !bookingDetail.dropoffLocation || !bookingDetail.dateofPickup || !bookingDetail.timeofPickup || !bookingDetail.dateofDropoff || !bookingDetail.timeofDropoff) {
            alert("Please fill in all the details.");
            return;
        }
        
                        try {
                            const token = localStorage.getItem("token");
                            if (!token) {
                                alert("User not authenticated!");
                                return;
                            }
            
                            const reqBody = { ...bookingDetail };
                            const reqHeader = {
                                Authorization: `Bearer ${token}`
                            };
            
                            const result = await createBookingAPI(reqBody, reqHeader);
            
                            if (result.status === 200) {
                                // alert("Booking created successfully!");
                                setBookingDetail(initialState);
            
                                // ✅ Extract bookingId from API response
                                const bookingId = result.data.booking._id;
                                const queryParams = new URLSearchParams({
                                    pickupLocation:bookingDetail.pickupLocation,
                                    dropoffLocation:bookingDetail.dropoffLocation,
                                    pickupDate: bookingDetail.dateofPickup,
                                    pickupTime: bookingDetail.timeofPickup,
                                    dropoffDate: bookingDetail.dateofDropoff,
                                    dropoffTime: bookingDetail.timeofDropoff
                                }).toString();
            
                                // ✅ Navigate to Car Listing Page with bookingId as URL param
                                navigate(`/carlisting/${bookingId}?${queryParams}`, { state: bookingDetail });
                            } else {
                                alert("Failed to create booking");
                            }
                        } catch (error) {
                            console.error("Error creating booking:", error);
                            alert("Error creating booking. Please try again.");
                        }
                   
        
    };

    return (
        <div className='getdata-container' ref={dropdownRef}>
            <div className={`w-100 ${simplified ? '' : ' py-3'}`} style={{ borderRadius: simplified ? '0' : '20px' }}>
                <div className={`container ${simplified ? '' : 'border shadow bg-white p-4 rounded'}`} style={{ zIndex: '1' }}>
                    {!simplified && <h3 className="text-center mb-4">Book Your Ride</h3>}
                    <div className="row g-3 align-items-center justify-content-center">

                        {/* Pick-Up Section */}
                        <div className="col-12 col-md-5 border p-3 rounded position-relative">
                            {!simplified && <h4>Pick Up</h4>}
                            <form>
                                <div className="row g-2">
                                    <div className="col-12 col-sm-4 position-relative">
                                        <label className="form-label fw-bold">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select location"
                                            value={bookingDetail.pickupLocation}
                                            onFocus={() => setShowDropdown({ pickup: true, dropoff: false })}
                                            readOnly
                                        />
                                        {showDropdown.pickup && (
                                            <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2" style={{ top: "100%", zIndex: 10 }}>
                                                {locations.map((loc, index) => (
                                                    <div key={index} className="px-3 py-2 border rounded bg-light" onClick={() => {
                                                        setBookingDetail({ ...bookingDetail, pickupLocation: loc });
                                                        setShowDropdown({ pickup: false, dropoff: false });
                                                    }} style={{ cursor: "pointer" }}>
                                                        {loc}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <label className="form-label fw-bold">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={bookingDetail.dateofPickup}
                                            onChange={e => setBookingDetail({ ...bookingDetail, dateofPickup: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <label className="form-label fw-bold">Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={bookingDetail.timeofPickup}
                                            onChange={e => setBookingDetail({ ...bookingDetail, timeofPickup: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 col-md-1 text-center fs-4">
                            <i className="fa-solid fa-repeat"></i>
                        </div>

                        {/* Drop-Off Section */}
                        <div className="col-12 col-md-5 border p-3 rounded position-relative">
                            {!simplified && <h4>Drop-Off</h4>}
                            <form>
                                <div className="row g-2">
                                    <div className="col-12 col-sm-4 position-relative">
                                        <label className="form-label fw-bold">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select location"
                                            value={bookingDetail.dropoffLocation}
                                            onFocus={() => setShowDropdown({ pickup: false, dropoff: true })}
                                            readOnly
                                        />
                                        {showDropdown.dropoff && (
                                            <div className="position-absolute bg-white border rounded shadow p-2 d-flex gap-2" style={{ top: "100%", zIndex: 10 }}>
                                                {locations.map((loc, index) => (
                                                    <div key={index} className="px-3 py-2 border rounded bg-light" onClick={() => {
                                                        setBookingDetail({ ...bookingDetail, dropoffLocation: loc });
                                                        setShowDropdown({ pickup: false, dropoff: false });
                                                    }} style={{ cursor: "pointer" }}>
                                                        {loc}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <label className="form-label fw-bold">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={bookingDetail.dateofDropoff}
                                            onChange={e => setBookingDetail({ ...bookingDetail, dateofDropoff: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <label className="form-label fw-bold">Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={bookingDetail.timeofDropoff}
                                            onChange={e => setBookingDetail({ ...bookingDetail, timeofDropoff: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Book Now Button */}
                    {!simplified && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary px-5 py-2 fw-bold" onClick={handleBookNow}>
                                Book Now
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Getdata;












