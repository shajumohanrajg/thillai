import { Search } from "@mui/icons-material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
//import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
//import WorkIcon from "@mui/icons-material/Work";
import WcIcon from "@mui/icons-material/Wc";
//import bgImage from "assets/images/bruce-mars.jpg";
import { IconButton, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CardContent, CardHeader, Divider, FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import Avatar from "@mui/material/Avatar";
//import React from "react";

// import { Container, Typography } from "@mui/material";

// import { travelItems } from "../../data";
// import TravelItem from "../components/travel-item";
// import SecondaryButton from "../components/secondary-button";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import MKAvatar from "components/MKAvatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React examples
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import { Padding } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import axios from "axios";
//import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
//import ImageIcon from "@mui/icons-material/Image";
//import ListItemIcon from "@mui/material/ListItemIcon";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import React, { useState } from "react";

import Footer from "./components/footer/Footer";
import Hero from "./components/hero";
import ImageGrid from "./ImageGrid";
import ParallaxImage from "./ParallaxImage";
import ProfileCard from "./ProfileCard";
import Header from "./searchcover";

//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
//import linearGradient from "assets/theme/functions/linearGradient";
//import { red } from "@mui/material/colors";
//import { Language } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    backgroundColor: "transparent", // set your desired background color
    // padding: "16px", // adjust the padding as needed
    // borderRadius: "8px", // adjust the border radius as needed
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  Button: {
    borderRadius: 8,
    backgroundColor: "#1A73E8",
    color: "white",
    "&:hover": {
      backgroundColor: "#1A73E8",
      color: "white",
    },
  },
  input: {
    borderRadius: 50,
    //padding: "0.75rem",
    //height: "1.4375em",

    animationDuration: "10ms",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //borderColor: "#ccc",
        borderRadius: 8,
        //borderColor: "black",
        //border: "2px dashed grey",
        //height: "1.4375em",
        //padding: "1rem",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "#999",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1A73E8",
      },
    },
  },
  fw: {
    fontWeight: "bold",
  },
  label: {
    //color: "red",
    "&.Mui-focused": {
      color: "#1A73E8",
    },
  },
  focusedLabel: {
    color: "#1A73E8",
  },
  select: {
    borderRadius: 10,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //borderColor: "#ccc",
        borderRadius: 8,
        //borderColor: "black",
        //border: "2px solid grey",
      },
      "&:hover fieldset": {
        borderColor: "#999",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1A73E8",
      },
      "&.Mui-focused": {
        color: "#1A73E8",
      },
    },
    "& .MuiSelect-icon": {
      color: "#333",
    },
  },
  accordion: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 200,
    marginTop: theme.spacing(2),
  },
}));
const casteOptions = [{ id: 1, name: "Mudaliyar" }];

const subcasteOptions = {
  1: [
    { id: 1, name: "Sengunthar" },
    // { id: 2, name: "Iyengar" },
    // { id: 3, name: "Namboodiri" },
  ],
  // 2: [
  //   { id: 4, name: "Rajput" },
  //   { id: 5, name: "Maratha" },
  //   { id: 6, name: "Jat" },
  // ],
  // 3: [
  //   { id: 7, name: "Agarwal" },
  //   { id: 8, name: "Gupta" },
  //   { id: 9, name: "Jain" },
  // ],
  // 4: [
  //   { id: 10, name: "Yadav" },
  //   { id: 11, name: "Kurmi" },
  //   { id: 12, name: "Jatav" },
  // ],
};

function Information() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const profilesPerPage = 10;
  const isSmallScreen = useMediaQuery("(min-width:993px)");
  const [filterValues, setFilterValues] = useState({
    gender: "",
    Caste: "",
    Sub_Caste: "",
    Mother_Tongue: "",
    Marital_Status: "",
    ageRange: "",
    //age: "",
  });
  const [profiles, setProfiles] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/register")
      .then((response) => {
        const updatedProfiles = response.data.map((profile) => {
          // Calculate age based on the DOB
          const dobDate = new Date(profile.date_of_birth);
          const today = new Date();
          const age = today.getFullYear() - dobDate.getFullYear();
          // Set the calculated age to the profile object
          return { ...profile, age };
        });
        setProfiles(updatedProfiles);
        // setProfiles(response.data);
        console.log(response.data);
        setFilteredProfiles(response.data);
        console.log(profiles);
        console.log(filteredProfiles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [showProfiles, setShowProfiles] = useState(true);
  const numPages = Math.ceil(filteredProfiles.length / profilesPerPage);
  const startIndex = (page - 1) * profilesPerPage;
  const endIndex = startIndex + profilesPerPage;
  const currentProfiles = profiles.slice(startIndex, endIndex);
  //const currentProfiles1 = filteredProfiles.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleAgeRangeChange = (event) => {
    setFilterValues({
      ...filterValues,
      ageRange: event.target.value, // Update ageRange state with selected value
    });
  };
  const handleApplyFilter = () => {
    const filtered = profiles.filter((profile) => {
      const dob = new Date(profile.date_of_birth);
      const age = calculateAge(dob);
      const ageRange = filterValues.ageRange;

      if (ageRange === "18-23") {
        return (
          (!filterValues.gender || profile.gender === filterValues.gender) &&
          (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
          (!filterValues.Sub_Caste ||
            profile.Sub_Caste === filterValues.Sub_Caste) &&
          (!filterValues.Mother_Tongue ||
            profile.Mother_Tongue === filterValues.Mother_Tongue) &&
          (!filterValues.Marital_Status ||
            profile.Marital_Status === filterValues.Marital_Status) &&
          age >= 18 &&
          age <= 23
        );
      } else if (ageRange === "23-27") {
        return (
          (!filterValues.gender || profile.gender === filterValues.gender) &&
          (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
          (!filterValues.Sub_Caste ||
            profile.Sub_Caste === filterValues.Sub_Caste) &&
          (!filterValues.Mother_Tongue ||
            profile.Mother_Tongue === filterValues.Mother_Tongue) &&
          (!filterValues.Marital_Status ||
            profile.Marital_Status === filterValues.Marital_Status) &&
          age >= 23 &&
          age <= 27
        );
      } else if (ageRange === "27-30") {
        return (
          (!filterValues.gender || profile.gender === filterValues.gender) &&
          (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
          (!filterValues.Sub_Caste ||
            profile.Sub_Caste === filterValues.Sub_Caste) &&
          (!filterValues.Mother_Tongue ||
            profile.Mother_Tongue === filterValues.Mother_Tongue) &&
          (!filterValues.Marital_Status ||
            profile.Marital_Status === filterValues.Marital_Status) &&
          age >= 27 &&
          age <= 30
        );
      } else if (ageRange === "30-above") {
        return (
          (!filterValues.gender || profile.gender === filterValues.gender) &&
          (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
          (!filterValues.Sub_Caste ||
            profile.Sub_Caste === filterValues.Sub_Caste) &&
          (!filterValues.Mother_Tongue ||
            profile.Mother_Tongue === filterValues.Mother_Tongue) &&
          (!filterValues.Marital_Status ||
            profile.Marital_Status === filterValues.Marital_Status) &&
          age >= 30
        );
      }

      return true; // If no age range selected, include all profiles
    });

    setFilteredProfiles(filtered);
    setShowProfiles(false);
  };

  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  };

  // const handleApplyFilter = () => {
  //   const filtered = profiles.filter((profile) => {
  //     return (
  //       (!filterValues.gender || profile.gender === filterValues.gender) &&
  //       (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
  //       (!filterValues.Sub_Caste ||
  //         profile.Sub_Caste === filterValues.Sub_Caste) &&
  //       (!filterValues.Mother_Tongue ||
  //         profile.Mother_Tongue === filterValues.Mother_Tongue) &&
  //         (!filterValues.Marital_Status || profile.Marital_Status === filterValues.Marital_Status)
  //       // (!filterValues.age || profile.age === parseInt(filterValues.age))
  //     );
  //   });
  //   setProfiles();

  //   setFilteredProfiles(filtered);

  //   setShowProfiles(false);
  // };
  const currentProfiles1 = filteredProfiles.slice(startIndex, endIndex);
  const handleResetFilter = () => {
    setFilterValues({
      gender: "",
      Caste: "",
      Sub_Caste: "",
      Mother_Tongue: "",
      Marital_Status: "",
      //age: "",
    });
    setFilteredProfiles(profiles);
    setShowProfiles(true);
  };

  const data = {
    caste: "Some Caste",
    age: 30,
    income: "$50,000",
    location: "City Name",
    image:
      "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=",
    name: "John Doe",
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA83LgMlYCp_mSDd1LQWDQbg8qktqOsZ1lfUKtSOsfA&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKEk6IcX2DFlbQ4SpyWlyhaVhGp3zL5_874PI26UzQ&usqp=CAU&ec=48665701",
    "data:image/jpeg;base64,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",
    // Add more image URLs here
  ];

  return (
    <>
      {" "}
      <Header />
      <Box component="section" py={12}>
        <Container sx={{ mt: 3 }} maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} md={12} sm={12}>
              <Card>
                <Box
                  p={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Search Profiles
                    </Typography>
                  </Box>
                </Box>
                <Divider />
               
                <Box sx={{ p: 1 }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} md={6} xl={3}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        size="small"
                        className={classes.select}
                      >
                        <InputLabel className={classes.label} id="Caste-label">
                          Caste
                        </InputLabel>
                        <Select
                          id="Caste"
                          labelId="Caste-label"
                          value={filterValues.Caste}
                          //onChange={(e) => setCaste(e.target.value)}
                          onChange={(e) =>
                            setFilterValues({
                              ...filterValues,
                              Caste: e.target.value,
                            })
                          }
                          label="Caste"
                        >
                          {/* <MenuItem value="Mudaliyar">Mudaliyar</MenuItem> */}
                          {casteOptions.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* <FormControl
                fullWidth
                variant="outlined"
                style={{ marginRight: "10px" }}
                size="small"
                className={classes.select}
                id="photo2"
              >
                <InputLabel className={classes.label} id="caste">
                  Caste
                </InputLabel>
                <Select
                  labelId="caste"
                  label="Caste"
                  value={filterValues.Caste}
                  className={classes.select}
                  onChange={(e) => setFilterValues({ ...filterValues, Caste: e.target.value })}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Sengunthar">Sengunthar</MenuItem>
                </Select>
              </FormControl> */}
                    </Grid>
                    {/* <Grid item xs={12} md={6} xl={3}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  size="small"
                  className={classes.select}
                >
                  <InputLabel id="subcaste-label" className={classes.label}>
                    Subcaste
                  </InputLabel>
                  <Select
                    labelId="subcaste-label"
                    id="Sub_Caste"
                    value={filterValues.Sub_Caste}
                    label="Subcaste"
                    onChange={(e) =>
                      setFilterValues({
                        ...filterValues,
                        Sub_Caste: e.target.value,
                      })
                    }
                  >
                    {subcasteOptions[filterValues.Caste].map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Grid> */}
                    {filterValues.Caste && (
                      <Grid item xs={12} md={6} xl={3}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          size="small"
                          className={classes.select}
                        >
                          <InputLabel
                            id="subcaste-label"
                            className={classes.label}
                          >
                            Subcaste
                          </InputLabel>
                          <Select
                            labelId="subcaste-label"
                            id="Sub_Caste"
                            value={filterValues.Sub_Caste}
                            label="Subcaste"
                            onChange={(e) =>
                              setFilterValues({
                                ...filterValues,
                                Sub_Caste: e.target.value,
                              })
                            }
                          >
                            {subcasteOptions[filterValues.Caste].map(
                              (option) => (
                                <MenuItem key={option.id} value={option.id}>
                                  {option.name}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>

                        {/* <FormControl
                fullWidth
                variant="outlined"
                style={{ marginRight: "10px" }}
                size="small"
                className={classes.select}
              >
                <InputLabel className={classes.label} id="subcaste">
                  Subcaste
                </InputLabel>
                <Select
                  labelId="subcaste"
                  label="Subcaste"
                  value={filterValues.Sub_Caste}
                  className={classes.select}
                  onChange={(e) => setFilterValues({ ...filterValues, Sub_Caste: e.target.value })}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Mudaliyar">Mudaliyar</MenuItem>
                </Select>
              </FormControl> */}
                      </Grid>
                    )}
                    <Grid item xs={12} md={6} xl={3}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        size="small"
                        className={classes.select}
                      >
                        <InputLabel className={classes.label} id="language">
                          Language
                        </InputLabel>
                        <Select
                          labelId="language"
                          value={filterValues.Mother_Tongue}
                          label="Language"
                          className={classes.select}
                          onChange={(e) =>
                            setFilterValues({
                              ...filterValues,
                              Mother_Tongue: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="Hindi">Hindi</MenuItem>
                          <MenuItem value="Tamil">Tamil</MenuItem>
                          <MenuItem value="Telugu">Telugu</MenuItem>
                          <MenuItem value="Malayalam">Malayalam</MenuItem>
                          <MenuItem value="Kannada">Kannada</MenuItem>
                          <MenuItem value="Others">Others</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* <TextField
            label="Minimum Age"
            variant="outlined"
            type="number"
            style={{ marginRight: "10px" }}
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          />

          <TextField
            label="Maximum Age"
            variant="outlined"
            type="number"
            style={{ marginRight: "10px" }}
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          /> */}
                    <Grid item xs={12} md={6} xl={3}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        size="small"
                        className={classes.select}
                      >
                        <InputLabel className={classes.label} id="gender">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="gender"
                          value={filterValues.gender}
                          className={classes.select}
                          label="Gender"
                          onChange={(e) =>
                            setFilterValues({
                              ...filterValues,
                              gender: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        size="small"
                        className={classes.select}
                      >
                        <InputLabel className={classes.label} id="mstatus">
                          Marital Status
                        </InputLabel>
                        <Select
                          labelId="mstatus"
                          value={filterValues.Marital_Status}
                          className={classes.select}
                          label="Marital Status"
                          onChange={(e) =>
                            setFilterValues({
                              ...filterValues,
                              Marital_Status: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="Unmarried">Unmarried</MenuItem>
                          <MenuItem value="Married">Married</MenuItem>
                          <MenuItem value="Divorced">Divorced</MenuItem>
                          <MenuItem value="Widowed">Widowed</MenuItem>
                          <MenuItem value="Waiting for Divorce">
                            Waiting for Divorce
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        style={{ marginRight: "10px" }}
                        size="small"
                        className={classes.select}
                      >
                        <InputLabel className={classes.label} id="age">
                          Age
                        </InputLabel>
                        <Select
                          labelId="age"
                          value={filterValues.ageRange}
                          onChange={handleAgeRangeChange}
                          className={classes.select}
                          label="Age"
                        >
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="18-23">Age 18 to 23</MenuItem>
                          <MenuItem value="23-27">Age 23 to 27</MenuItem>
                          <MenuItem value="27-30">Age 27 to 30</MenuItem>
                          <MenuItem value="30-above">Age 30 and above</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="gradient"
                          color="primary"
                          onClick={handleApplyFilter}
                        >
                          Apply
                        </Button>

                        <Button
                          variant="gradient"
                          color="primary"
                          onClick={handleResetFilter}
                        >
                          Reset
                        </Button>
                      </Stack>
                    </Grid>
                    {/* <Button variant="contained" color="primary" onClick={handleApplyFilter}>
              Apply
            </Button>
            <Button variant="contained" color="primary" onClick={handleResetFilter}>
              Reset
            </Button> */}
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        

          {showProfiles && (
            <Grid
              container
              spacing={6}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {" "}
                {currentProfiles.map((profile) => (
                  <Grid
                    item
                    sm={12}
                    xs={12}
                    md={6}
                    lg={6}
                    xl={6}
                    key={profile.id}
                  >
                    <Link
                      href="/myprofile"
                      underline="none"
                      sx={{ textTransform: "none" }}
                    >
                      <Card
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                          height: "auto",
                          boxShadow: 2,
                          //borderBottom: "2px solid grey",
                          borderBottomStyle: "inset",
                          borderTopRight: "2px solid black",
                          borderRightColor: "black",
                          position: "relative",
                          overflow: "hidden",

                          "&:hover": {
                            transform: "scale(1.01)", // Adjust the scale factor as per your preference
                            transition: "transform 0.1s ease-in-out", // Smooth transition on hover
                            background:
                              "linear-gradient(to bottom , #ccc, #ffffff 10%)",
                            opacity: 1,
                          },
                          // '&:hover': {
                          //   background: 'rgba(0, 0, 0, 0.5)',
                          //   opacity:10,
                          //   color:'white' // Adjust the opacity value as needed
                          // },
                          // transition: 'background 0.3s ease-in-out',
                        }}
                      >
                        {/* {isHovered && (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={5.5}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <IconButton variant="contained" color="primary">
          <ControlCameraIcon />
          </IconButton>
        </Grid>
      )} */}
                        {/* {isHovered && (
                    <Grid item xs={12}>
                      <Button variant="outlined" fullWidth>
                        View More
                      </Button>
                    </Grid>
                  )} */}
                        <Grid
                          container
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                          // sx={{
                          //   position: 'relative',
                          //   overflow: 'hidden',
                          //   '&:hover .zoom-effect': {
                          //     transform: 'scale(1.1)', // Increase the scale for desired zoom effect
                          //   },
                          // }}
                          sx={{
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              transform: "scale(1.01)", // Adjust the scale factor as per your preference
                              transition: "transform 0.3s ease-in-out", // Smooth transition on hover
                            },
                            // '&:hover': {
                            //   //background: 'linear-gradient(to bottom, #ff9900 0%, rgba(255, 255, 255, 1) 20%)',
                            //   background: 'linear-gradient(to bottom , #ffcc80, #ffffff 10%)',
                            //   opacity:1
                            //   //color:'#ff9900' // Replace with your desired colors
                            // },
                            transition: "background 0.3s ease-in-out", // Smooth transition on hover
                          }}
                          // sx={{
                          //   '&:hover': {
                          //     background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 1) 20%)',
                          //     color:'black' // White linear gradient
                          //   },
                          //   transition: 'background 0.3s ease-in-out', // Smooth transition on hover
                          // }}
                          // sx={{
                          //   '&:hover': {
                          //     background: 'rgba(0, 0, 0, 0.5)',
                          //     opacity:3,
                          //     color:'white' // Adjust the opacity value as needed
                          //   },
                          //   transition: 'background 0.3s ease-in-out', // Smooth transition on hover
                          // }}
                        >
                          <Grid item xs={12} sm={6} md={5} lg={5} xl={5.5}>
                            <Stack
                              direction="column"
                              justifyContent={{
                                xs: "center",
                                md: "flex-start",
                              }}
                              alignItems={{ xs: "center", md: "flex-start" }}
                              spacing={1}
                            >
                              <ListItem>
                                <ListItemText
                                  primaryTypographyProps={{
                                    align: "center",
                                    variant: "h6",
                                    fontWeight: "bold",
                                  }}
                                  primary={profile.name}
                                  sx={{
                                    overflowWrap: "break-word",
                                    color: "Highlight",
                                  }}
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar sx={{ bgcolor: "#fff" }}>
                                    <WcIcon color="primary" />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Caste"
                                  secondary="Your caste"
                                  sx={{
                                    align: { xs: "left", md: "right" },
                                    overflowWrap: "break-word",
                                  }}
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar sx={{ bgcolor: "#fff" }}>
                                    <TodayOutlinedIcon color="primary" />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Age"
                                  secondary={profile.age}
                                  sx={{ align: { xs: "left", md: "right" } }}
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar sx={{ bgcolor: "#fff" }}>
                                    <AccountBalanceWalletOutlinedIcon color="primary" />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Income"
                                  secondary={profile.income_per_month}
                                  sx={{ align: { xs: "left", md: "right" } }}
                                />
                              </ListItem>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar sx={{ bgcolor: "#fff" }}>
                                    <LocationOnOutlinedIcon color="primary" />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary="Location"
                                  secondary={profile.district}
                                  sx={{ align: { xs: "left", md: "right" } }}
                                />
                              </ListItem>
                            </Stack>
                          </Grid>

                          <Grid item xs={12} sm={6} md={6} lg={6} xl={5.5}>
                            {/* <Grid
                       direction="column"
                       justifyContent="center"
                       alignItems="center"
                       spacing={1}
                     > */}
                            <Stack
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              spacing={1}
                            >
                              {" "}
                              <Box textAlign="center">
                                {" "}
                                {/* <ImageGrid
                            photo1={profile.photo1} /> */}
                                <ImageGrid
                                  photo1="data:image/jpeg;base64,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"
                                  photo2="data:image/jpeg;base64,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"
                                  photo3="data:image/jpeg;base64,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"
                                />
                              </Box>
                              {/* <img
                     variant="square"
                     alt="Profile"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKEk6IcX2DFlbQ4SpyWlyhaVhGp3zL5_874PI26UzQ&usqp=CAU&ec=48665701"
                     //sx={{ width: '200px', height: '300px' }}
                     width='200px'
                     height="300px"
                     //sx={{ objectFit: "cover", width:"200px", height: "250px" }}
                   /> */}
                            </Stack>
                            {/* </Grid> */}
                          </Grid>

                          {/* <Grid item xs={12}>
                      <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                        >
                      <Button variant="outlined" size="small">
                        View More
                      </Button>
                      </Stack>
                    </Grid> */}
                        </Grid>
                      </Card>
                    </Link>
                  </Grid>
                ))}
                <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                  {/* <Pagination
    count={numPages}
    page={page}
    onChange={handleChangePage}
    variant="outlined"
    color="primary"
  /> */}
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Pagination
                      count={numPages}
                      page={page}
                      onChange={handleChangePage}
                      variant="outlined"
                      color="primary"
                      showFirstButton
                      showLastButton
                    />{" "}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          )}
          {!showProfiles && (
            <Grid
              container
              spacing={6}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* <Pagination
                count={numPages}
                page={page}
                onChange={handleChangePage}
              /> */}
              {currentProfiles1.map((profile) => (
                // <div key={profile.id}>
                //   <h2>{profile.name}</h2>
                //   <p>Age: {profile.age}</p>
                //   {/* <p>Date of Birth: {profile.dob}</p> */}
                //   <p>Gender: {profile.gender}</p>
                //   <p>Caste: {profile.Caste}</p>
                //   <p>Subcaste: {profile.Sub_Caste}</p>
                //   <p>Language: {profile.Mother_Tongue}</p>
                //   <hr />
                <Grid
                  item
                  sm={12}
                  xs={12}
                  md={6}
                  lg={6}
                  xl={6}
                  key={profile.id}
                >
                  <Card
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      height: "auto",
                      boxShadow: 2,
                      //borderBottom: "2px solid grey",
                      borderBottomStyle: "inset",
                      borderTopRight: "2px solid black",
                      borderRightColor: "black",
                      position: "relative",
                      overflow: "hidden",

                      "&:hover": {
                        transform: "scale(1.01)", // Adjust the scale factor as per your preference
                        transition: "transform 0.1s ease-in-out", // Smooth transition on hover
                        background:
                          "linear-gradient(to bottom , #ccc, #ffffff 10%)",
                        opacity: 1,
                      },
                      // '&:hover': {
                      //   background: 'rgba(0, 0, 0, 0.5)',
                      //   opacity:10,
                      //   color:'white' // Adjust the opacity value as needed
                      // },
                      // transition: 'background 0.3s ease-in-out',
                    }}
                  >
                    {/* {isHovered && (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={5.5}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <IconButton variant="contained" color="primary">
          <ControlCameraIcon />
          </IconButton>
        </Grid>
      )} */}
                    {/* {isHovered && (
                    <Grid item xs={12}>
                      <Button variant="outlined" fullWidth>
                        View More
                      </Button>
                    </Grid>
                  )} */}
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                      // sx={{
                      //   position: 'relative',
                      //   overflow: 'hidden',
                      //   '&:hover .zoom-effect': {
                      //     transform: 'scale(1.1)', // Increase the scale for desired zoom effect
                      //   },
                      // }}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "scale(1.01)", // Adjust the scale factor as per your preference
                          transition: "transform 0.3s ease-in-out", // Smooth transition on hover
                        },
                        // '&:hover': {
                        //   //background: 'linear-gradient(to bottom, #ff9900 0%, rgba(255, 255, 255, 1) 20%)',
                        //   background: 'linear-gradient(to bottom , #ffcc80, #ffffff 10%)',
                        //   opacity:1
                        //   //color:'#ff9900' // Replace with your desired colors
                        // },
                        transition: "background 0.3s ease-in-out", // Smooth transition on hover
                      }}
                      // sx={{
                      //   '&:hover': {
                      //     background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 1) 20%)',
                      //     color:'black' // White linear gradient
                      //   },
                      //   transition: 'background 0.3s ease-in-out', // Smooth transition on hover
                      // }}
                      // sx={{
                      //   '&:hover': {
                      //     background: 'rgba(0, 0, 0, 0.5)',
                      //     opacity:3,
                      //     color:'white' // Adjust the opacity value as needed
                      //   },
                      //   transition: 'background 0.3s ease-in-out', // Smooth transition on hover
                      // }}
                    >
                      <Grid item xs={12} sm={6} md={5} lg={5} xl={5.5}>
                        <Stack
                          direction="column"
                          justifyContent={{ xs: "center", md: "flex-start" }}
                          alignItems={{ xs: "center", md: "flex-start" }}
                          spacing={1}
                        >
                          <ListItem>
                            <ListItemText
                              primaryTypographyProps={{
                                align: "center",
                                variant: "h6",
                                fontWeight: "bold",
                              }}
                              primary={profile.name}
                              sx={{
                                overflowWrap: "break-word",
                                color: "Highlight",
                              }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <WcIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Caste"
                              secondary="Your caste"
                              sx={{
                                align: { xs: "left", md: "right" },
                                overflowWrap: "break-word",
                              }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <TodayOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Age"
                              secondary={profile.age}
                              sx={{ align: { xs: "left", md: "right" } }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <AccountBalanceWalletOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Income"
                              secondary={profile.income_per_month}
                              sx={{ align: { xs: "left", md: "right" } }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <LocationOnOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Location"
                              secondary={profile.district}
                              sx={{ align: { xs: "left", md: "right" } }}
                            />
                          </ListItem>
                        </Stack>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} lg={6} xl={5.5}>
                        {/* <Grid
                       direction="column"
                       justifyContent="center"
                       alignItems="center"
                       spacing={1}
                     > */}
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                        >
                          {" "}
                          <Box textAlign="center">
                            {" "}
                            <ImageGrid
                              photo1="data:image/jpeg;base64,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"
                              photo2="data:image/jpeg;base64,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"
                              photo3="data:image/jpeg;base64,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"
                            />
                          </Box>
                          {/* <img
                     variant="square"
                     alt="Profile"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKEk6IcX2DFlbQ4SpyWlyhaVhGp3zL5_874PI26UzQ&usqp=CAU&ec=48665701"
                     //sx={{ width: '200px', height: '300px' }}
                     width='200px'
                     height="300px"
                     //sx={{ objectFit: "cover", width:"200px", height: "250px" }}
                   /> */}
                        </Stack>
                        {/* </Grid> */}
                      </Grid>

                      {/* <Grid item xs={12}>
                      <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                        >
                      <Button variant="outlined" size="small">
                        View More
                      </Button>
                      </Stack>
                    </Grid> */}
                    </Grid>
                  </Card>
                </Grid>
              ))}
              <br></br>
              <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Pagination
                    count={numPages}
                    page={page}
                    onChange={handleChangePage}
                    variant="outlined"
                    color="primary"
                    showFirstButton
                    showLastButton
                  />{" "}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Information;
