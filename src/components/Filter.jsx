// import React, { useState } from "react";
// import "./Filter.css";

// const Filter = ({ onFilterChange, searchKey, setsearchKey }) => {
//   const [filters, setFilters] = useState({
//     bodyType: [],
//     transmission: [],
//     fuelType: [],
//     brands: [],
//   });

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setsearchKey(e.target.value); // Pass searchKey to CarListing.js
//   };

//   const handleCheckboxChange = (category, value) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       if (updatedFilters[category].includes(value)) {
//         updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
//       } else {
//         updatedFilters[category].push(value);
//       }
//       onFilterChange(updatedFilters);
//       return updatedFilters;
//     });
//   };

//   // Filter options based on search input
//   const filterOptions = (options) => {
//     return options.filter((option) => option.toLowerCase().includes(searchKey));
//   };

//   return (
//     <div className="filter-container">
//       {/* 🔍 Search Bar */}
//       <input
//         type="text"
//         className="filter-search"
//         placeholder="Search filters..."
//         value={searchKey}
//         onChange={handleSearchChange}
//       />

//       {/* Body Type */}
//       <h4>Body Type</h4>
//       {filterOptions(["SUV", "Sedan", "Hatchback"]).map((type) => (
//         <label key={type}>
//           <input type="checkbox" onChange={() => handleCheckboxChange("bodyType", type)} />
//           {type}
//         </label>
//       ))}

//       {/* Transmission */}
//       <h4>Transmission</h4>
//       {filterOptions(["Automatic", "Manual"]).map((type) => (
//         <label key={type}>
//           <input type="checkbox" onChange={() => handleCheckboxChange("transmission", type)} />
//           {type}
//         </label>
//       ))}

//       {/* Fuel Type */}
//       <h4>Fuel Type</h4>
//       {filterOptions(["Petrol", "Diesel", "Electric"]).map((type) => (
//         <label key={type}>
//           <input type="checkbox" onChange={() => handleCheckboxChange("fuelType", type)} />
//           {type}
//         </label>
//       ))}

//       {/* Brands */}
//       <h4>Brands</h4>
//       {filterOptions(["Toyota", "Honda", "Ford", "BMW"]).map((brand) => (
//         <label key={brand}>
//           <input type="checkbox" onChange={() => handleCheckboxChange("brands", brand)} />
//           {brand}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default Filter;
import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ onFilterChange, setSearchKey }) => {
  const [filters, setFilters] = useState({
    bodyType: [],
    transmission: [],
    fuelType: [],
    brands: [],
  });

  // ✅ Handles search input for car names
  const handleSearchChange = (e) => {
    setSearchKey(e.target.value.toLowerCase());
  };

  // ✅ Handles checkbox selection for filters
  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        updatedFilters[category].push(value);
      }
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="filter-container">
      {/* 🔍 Car Search Bar */}
      <input
        type="text"
        className="filter-search"
        placeholder="Search cars..."
        onChange={handleSearchChange}
      />

      {/* Body Type */}
      <h4>Body Type</h4>
      {["SUV", "Sedan", "Hatchback"].map((type) => (
        <label className="me-3 mb-3" key={type}>
          <input
            type="checkbox"
            checked={filters.bodyType.includes(type)}
            onChange={() => handleCheckboxChange("bodyType", type)}
          />
          {type}
        </label>
      ))}

      {/* Transmission */}
      <h4>Transmission</h4>
      {["Automatic", "Manual"].map((type) => (
        <label className="me-3 mb-3" key={type}>
          <input
            type="checkbox"
            checked={filters.transmission.includes(type)}
            onChange={() => handleCheckboxChange("transmission", type)}
          />
          {type}
        </label>
      ))}

      {/* Fuel Type */}
      <h4>Fuel Type</h4>
      {["Petrol", "Diesel", "Hybrid"].map((type) => (
        <label className="me-3 mb-3" key={type}>
          <input
            type="checkbox"
            checked={filters.fuelType.includes(type)}
            onChange={() => handleCheckboxChange("fuelType", type)}
          />
          {type}
        </label>
      ))}

      {/* Brands */}
      <h4>Brands</h4>
      {["Toyota", "Honda", "Ford", "BMW"].map((brand) => (
        <label className="me-3" key={brand}>
          <input
            type="checkbox"
            checked={filters.brands.includes(brand)}
            onChange={() => handleCheckboxChange("brands", brand)}
          />
          {brand}
        </label>
      ))}
    </div>
  );
};

export default Filter;

