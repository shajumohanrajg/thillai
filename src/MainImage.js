import React from 'react';
import Paper from '@mui/material/Paper';



const MainImage = ({ image }) => {
  return (
    <Paper
    elevation={3}
    style={{
      width: '100%',
      height: '400px',
      background: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat !important',
      backgroundPosition: 'center',
    }}
  />
  );
};

export default MainImage ;
