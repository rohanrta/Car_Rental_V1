// // import React, { useEffect, useState } from 'react';
// // import Filter from '../components/Filter';
// // import View from '../components/View';
// // import './CarListing.css';
// // import Header from '../components/Header';
// // import { useLocation } from 'react-router-dom';
// // import { allcarsAPI } from '../services/allAPI';

// // const CarListing = () => {
// //   const [searchKey, setsearchKey] = useState(""); // Store search input
// //   const [allProjects, setallProjects] = useState([]);
// //   const [filteredCars, setFilteredCars] = useState([]);
// //   const location = useLocation(); 

// //   useEffect(() => {
// //     getallCars();
// //   }, [searchKey]); // Fetch when searchKey changes

// //   const getallCars = async () => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       const reqHeader = { "Authorization": `Bearer ${token}` };
// //       try {
// //         // ✅ Pass searchKey as an argument
// //         const result = await allcarsAPI(searchKey, reqHeader);
// //         if (result.status === 200) {
// //           setallProjects(result.data);
// //           setFilteredCars(result.data); // Update filtered list
// //         }
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }
// //   };

// //   const handleFilterChange = (filters) => {
// //     const filtered = allProjects.filter((car) => {
// //       return (
// //         (!filters.bodyType.length || filters.bodyType.includes(car.bodyType)) &&
// //         (!filters.transmission.length || filters.transmission.includes(car.transmission)) &&
// //         (!filters.fuelType.length || filters.fuelType.includes(car.fuelType)) &&
// //         (!filters.brands.length || filters.brands.includes(car.brand))
// //       );
// //     });
// //     setFilteredCars(filtered);
// //   };

// //   return (
// //     <>
// //       <Header insideCarListing={true} />
// //       <div className="car-listing-container">
// //         <div className="filter-section">
// //           <Filter searchKey={searchKey} setsearchKey={setsearchKey} onFilterChange={handleFilterChange} />
// //         </div>
// //         <div className="view-section">
// //           <View cars={filteredCars} />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CarListing;
// import React, { useEffect, useState } from "react";
// import Filter from "../components/Filter";
// import View from "../components/View";
// import "./CarListing.css";
// import Getdata from "../components/Getdata";
// import Header from "../components/Header";
// import { useLocation } from "react-router-dom";
// import { allcarsAPI } from "../services/allAPI";

// const CarListing = () => {
//   const [searchKey, setSearchKey] = useState(""); // ✅ For search
//   const [allProjects, setAllProjects] = useState([]); // ✅ Stores all cars
//   const [filteredCars, setFilteredCars] = useState([]); // ✅ Stores cars after filtering

//   const location = useLocation(); // Get URL parameters

//   const [filters, setFilters] = useState({
//     bodyType: [],
//     transmission: [],
//     fuelType: [],
//     brands: [],
//   });

//   // Fetch Cars when the page loads OR when searchKey changes
//   useEffect(() => {
//     getAllCars();
//   }, [searchKey]);

//   // ✅ Fetch all cars based on searchKey
//   const getAllCars = async () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const reqHeader = {
//         Authorization: `Bearer ${token}`,
//       };
//       try {
//         const result = await allcarsAPI(searchKey, reqHeader); // ✅ Pass searchKey to API
//         if (result.status === 200) {
//           setAllProjects(result.data); // ✅ Update full car list
//           applyFilters(result.data); // ✅ Apply filters to updated car list
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   // ✅ Apply filters to the car data
//   const applyFilters = () => {
//     // ✅ Always start from the full list of cars (allProjects)
//     const filtered = allProjects.filter((car) => {
//       return (
//         (!filters.bodyType.length || filters.bodyType.includes(car.bodyType)) &&
//         (!filters.transmission.length || filters.transmission.includes(car.transmission)) &&
//         (!filters.fuelType.length || filters.fuelType.includes(car.fuelType)) &&
//         (!filters.brands.length || filters.brands.includes(car.brand))
//       );
//     });
  
//     // ✅ If no filters are selected, show all cars
//     setFilteredCars(filtered.length > 0 ? filtered : allProjects);
//   };
  


//   // ✅ Update filters dynamically
//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//     applyFilters(); // ✅ Use the latest full dataset (allProjects)
//   };

//   return (
//     <>
//       <Header insideCarListing={true} />
//       <div className="car-listing-container">
//         <div className="filter-section">
//           <Filter onFilterChange={handleFilterChange} setSearchKey={setSearchKey} />
//         </div>
//         <div className="view-section">
//           <View cars={filteredCars} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CarListing;
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import View from "../components/View";
import "./CarListing.css";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { allcarsAPI } from "../services/allAPI";

const CarListing = () => {

  const [searchKey, setSearchKey] = useState(""); // ✅ For search input
  const [allProjects, setAllProjects] = useState([]); // ✅ Stores all cars from DB
  const [filteredCars, setFilteredCars] = useState([]); // ✅ Stores cars after filtering

  // Get URL parameters
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const pickuplocation = queryParams.get("pickupLocation")
const dropofflocation = queryParams.get("dropoffLocation")
const pickupDate = queryParams.get("pickupDate");
const pickupTime = queryParams.get("pickupTime");
const dropoffDate = queryParams.get("dropoffDate");
const dropoffTime = queryParams.get("dropoffTime");

const [bookDetails,setBookDetails] = useState({
  pickuplocation,
  dropofflocation,
  pickupDate,
  pickupTime,
  dropoffDate,
  dropoffTime

})

  const [filters, setFilters] = useState({
    bodyType: [],
    transmission: [],
    fuelType: [],
    brands: [],
  });

  // ✅ Fetch Cars when the page loads OR when searchKey changes
  useEffect(() => {
    getAllCars();
  }, [searchKey]);

  // ✅ Fetch all cars based on searchKey
  const getAllCars = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await allcarsAPI(searchKey, reqHeader); // ✅ Pass searchKey to API
        if (result.status === 200) {
          setAllProjects(result.data); // ✅ Update full car list
          setFilteredCars(result.data); // ✅ Reset filtered list to full dataset
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ✅ Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // ✅ Apply filters when `filters` or `allProjects` change
  useEffect(() => {
    const filtered = allProjects.filter((car) => {
      return (
        (!filters.bodyType.length || filters.bodyType.includes(car.bodyType)) &&
        (!filters.transmission.length || filters.transmission.includes(car.transmission)) &&
        (!filters.fuelType.length || filters.fuelType.includes(car.fuelType)) &&
        (!filters.brands.length || filters.brands.includes(car.brand))
      );
    });

    // ✅ If no filters are selected, show all cars
    setFilteredCars(filtered.length > 0 ? filtered : allProjects);
  }, [filters, allProjects]); // ✅ Runs whenever filters OR allProjects change

  return (
    <>
      <Header insideCarListing={true} bookDetails={bookDetails} />
      <div className="car-listing-container">
        <div className="filter-section">
          <Filter onFilterChange={handleFilterChange} setSearchKey={setSearchKey} />
        </div>
        <div className="view-section">
          <View cars={filteredCars} />
        </div>
      </div>
    </>
  );
};

export default CarListing;

