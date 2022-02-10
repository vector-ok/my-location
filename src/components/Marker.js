import React from 'react';
import { Card } from 'react-bootstrap';

const Marker = ({ text }) => {
  const customStyles = {
    marker: {
      width: '120px',
    },
  };
  return (
    <div className="" style={customStyles.marker}>
      <Card body> {text} </Card>
    </div>
  );
};

export default Marker;
