import { Box, Container, Typography } from "@mui/material";
import React from "react";

import bgImage from "./assets/main/bgblk.png";
import btnGlobalIcon from "./assets/main/btn-global-icon.svg";
// import bgImage from "../../assets/main/bgred.jpg";
import MainButton from "./components/main-button/MainButton";
import Navbar from "./components/navbar";
import SearchNav from "./components/search-nav/SearchNav";

const Hero = () => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: {
          xs: 2,
          sm: 5,
          md: 2,
        },
        background: `url(${bgImage}) center center/cover`,
        minHeight: "800px",
        borderRadius: {
          xs: "0px 0px 27px 27px",
          md: "0px 0px 54px 54px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Typography
          sx={{
            color: "#fff",
            marginTop: "196.5px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: {
              xs: "38px",
              md: "48px",
            },
            lineHeight: "62px",
            mb: 4,
          }}
        >
          Discover Love and Lifelong Happiness!!<br></br>Your Journey Starts Here..
        </Typography>
        <MainButton text="Find Your Future" iconImg={btnGlobalIcon} />
        <SearchNav />
      </Box>
    </Container>
  );
};

export default Hero;
