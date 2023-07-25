import React from 'react';
import Paper from '@mui/material/Paper';

const ImageThumbnail = ({ image, onClick }) => {
  return (
    <Paper
      elevation={3}
      onClick={onClick}
      style={{
        width: '100%',
        height: '100px',
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
      }}
    />
  );
};


export default ImageThumbnail ;
