// View.js
import React from 'react';
import CarCard from './CarCard';
import './View.css'

const View = ({ cars }) => {
  console.log(cars);
  
  return (<>
    
    
    <div className="car-grid">
    
      {cars?.length > 0 ?
      cars.map(car => (
        <CarCard key={car._id} car={car} />
      )):<div>No Cars are listed</div>}
    </div>
    </>
  );
};

export default View;
