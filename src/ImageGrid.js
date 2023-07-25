import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import MainImage from "./MainImage";
// import ImageThumbnail from "./ImageThumbnail";

const ImageGrid = ({ photo1, photo2, photo3 }) => {
  const images = [photo1, photo2, photo3];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
    <Grid container justifyContent="center" alignItems="center" pr={1}>
   
      <Grid item xs={12} md={12} mt={2}>
   
        {/* <img src={selectedImage} alt="sfdf" width="200px" height="300px" sx={{ borderRadius: '10%'}} ></img>  */}
        <Paper
      elevation={12}
      // onClick={() => handleThumbnailClick(image)}
      sx={{
        width: "200px",
        height: "300px",
        background: `url(${selectedImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat !important",
        cursor: "pointer",
      }}
    />
      </Grid>
     
      
    </Grid>
      <Grid container spacing={1} mb={2} mt={1}>
      {images.map((image, index) => (
        <Grid item key={index}>
          <Paper
            elevation={3}
            onClick={() => handleThumbnailClick(image)}
            style={{
              width: "50px",
              height: "50px",
              background: `url(${image}) no-repeat center / cover`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              transformOrigin: "center",
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.transform = "scale(1.1)"
              // }},
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.transform = "scale(1)"
              // }}
            }}
          />
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default ImageGrid;
