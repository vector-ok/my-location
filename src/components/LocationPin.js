import React from 'react';

const LocationPin = ({ $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on the location pin`);
  };

  return (
    <div className={$hover ? 'circle hover' : 'circle'} onClick={handleClick}>
      <span className="circleText">pin</span>
    </div>
  );
};

export default LocationPin;
