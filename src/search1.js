

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//import React from "react";

// import { Container, Typography } from "@mui/material";

// import { travelItems } from "../../data";
// import TravelItem from "../components/travel-item";
// import SecondaryButton from "../components/secondary-button";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
//import MKAvatar from "components/MKAvatar";
import Card from "@mui/material/Card";
//import bgImage from "assets/images/bruce-mars.jpg";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
// Material Kit 2 React examples
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import List from "@mui/material/List";
import CardMedia from "@mui/material/CardMedia";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
//import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
//import ImageIcon from "@mui/icons-material/Image";
//import ListItemIcon from "@mui/material/ListItemIcon";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
//import WorkIcon from "@mui/icons-material/Work";
import WcIcon from "@mui/icons-material/Wc";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
//import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useMediaQuery } from "@mui/material";
// import { Padding } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import {
  // TextField,
  //Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  //Divider,
  //Typography,
  //CardContent,
} from "@mui/material";
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
    //age: "",
  });
  const [profiles, setProfiles] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/register")
      .then((response) => {
        setProfiles(response.data);
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
  const handleApplyFilter = () => {
    const filtered = profiles.filter((profile) => {
      return (
        (!filterValues.gender || profile.gender === filterValues.gender) &&
        (!filterValues.Caste || profile.Caste === filterValues.Caste) &&
        (!filterValues.Sub_Caste || profile.Sub_Caste === filterValues.Sub_Caste) &&
        (!filterValues.Mother_Tongue || profile.Mother_Tongue === filterValues.Mother_Tongue)
        // (!filterValues.age || profile.age === parseInt(filterValues.age))
      );
    });
    setProfiles();

    setFilteredProfiles(filtered);

    setShowProfiles(false);
  };
  const currentProfiles1 = filteredProfiles.slice(startIndex, endIndex);
  const handleResetFilter = () => {
    setFilterValues({
      gender: "",
      Caste: "",
      Sub_Caste: "",
      Mother_Tongue: "",
      //age: "",
    });
    setFilteredProfiles(profiles);
    setShowProfiles(true);
  };

  const data = {
    caste: 'Some Caste',
    age: 30,
    income: '$50,000',
    location: 'City Name',
    image: 'https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=',
    name: 'John Doe',
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box component="section" py={12}>
      <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 8,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          textAlign: {
            xs: "center",
            md: "left",
          },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "32px",
            color: "#161414",
            width: "fit-content",
          }}
        >
          Travel Tips and Advice
        </Typography>
        <Button text="View all" />
      </Box>
      <Grid container spacing={2} justifyContent="center"  alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* First Grid */}
    
              
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}  md={2} xl={2} lg={2}>
      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
       <ListItem>
          <ListItemText
            primary="Caste"
            secondary="Your caste"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Subcaste"
            secondary="Your subcaste"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Income"
            secondary="Your income"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Location"
            secondary="Your location"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          />
        </ListItem>
        </Stack>
      </Grid>



   
      <Grid
                      item
                      xs={12}
                      sm={12}
                      md={2}
                      lg={2}
                      sx={{ pb:1 }}
                    >
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
                         <img
        variant="square"
          alt="Profile"
          src="data:image/jpeg;base64,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"
          //sx={{ width: '200px', height: '300px' }}
          sx={{ objectFit: "cover",maxWidth: '100%', height: 'auto' }}
        />
                      
                      </Stack>
                    </Grid>
                    </Grid>
                  
                 
                   
                            

   
      
    </Grid>
    
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6} xl={3}>
              <FormControl fullWidth variant="outlined" size="small" className={classes.select}>
                <InputLabel className={classes.label} id="Caste-label">
                  Caste
                </InputLabel>
                <Select
                  id="Caste"
                  labelId="Caste-label"
                  value={filterValues.Caste}
                  //onChange={(e) => setCaste(e.target.value)}
                  onChange={(e) => setFilterValues({ ...filterValues, Caste: e.target.value })}
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
            {filterValues.Caste && (
              <Grid item xs={12} md={6} xl={3}>
                <FormControl fullWidth variant="outlined" size="small" className={classes.select}>
                  <InputLabel id="subcaste-label" className={classes.label}>
                    Subcaste
                  </InputLabel>
                  <Select
                    labelId="subcaste-label"
                    id="Sub_Caste"
                    value={filterValues.Sub_Caste}
                    label="Subcaste"
                    onChange={(e) =>
                      setFilterValues({ ...filterValues, Sub_Caste: e.target.value })
                    }
                  >
                    {subcasteOptions[filterValues.Caste].map((option) => (
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
                    setFilterValues({ ...filterValues, Mother_Tongue: e.target.value })
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
                  onChange={(e) => setFilterValues({ ...filterValues, gender: e.target.value })}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Stack direction="row" spacing={2}>
                <Button variant="gradient" color="primary" onClick={handleApplyFilter}>
                  Apply
                </Button>

                <Button variant="gradient" color="primary" onClick={handleResetFilter}>
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
        <br></br>
        {/* <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} /> */}
        
        {showProfiles && (
       
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        {/* First grid */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <List>
          <ListItem>
            <ListItemText primary="Caste" secondary={data.caste} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={data.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Income" secondary={data.income} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Location" secondary={data.location} />
          </ListItem>
        </List>
          </Grid>
       
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Second grid */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={12}>
          {/* <CardMedia
                          style={{ height: "100%", width: "100%" }}
                          image={data.image}
                        /> */}
            <img
              src={data.image}
              alt="Profile"
              style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}  md={12}>
            <Typography variant="h6" align="center">
              {data.name}
            </Typography>
          </Grid>
          {hovered && (
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                View More
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
        )}
        {showProfiles && (
          <Grid container spacing={6} >
 
 <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={4}>
        {/* First grid */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <List>
          <ListItem>
            <ListItemText primary="Caste" secondary={data.caste} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={data.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Income" secondary={data.income} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Location" secondary={data.location} />
          </ListItem>
        </List>
          </Grid>
       
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Second grid */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
          <CardMedia
                          style={{ height: "100px", width: "100px" }}
                          image={data.image}
                        />
            <img
              src={data.image}
              alt="Profile"
              style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              {data.name}
            </Typography>
          </Grid>
          {hovered && (
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                View More
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
   
        <Box
        sx={{
          display: "flex",
          boxShadow:4,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }} 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <Box sx={{ flex: 1 }}>
          
          <List>
          <ListItem>
            <ListItemText primary="Caste" secondary={data.caste} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={data.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Income" secondary={data.income} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Location" secondary={data.location} />
          </ListItem>
        </List>
         
          <Button text="Read more" />
        </Box>
        <Box sx={{ flex: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            
          <Grid item xs={12}>
          <CardMedia
                          style={{ height: "auto", width: "100px" }}
                          image={data.image}
                        />
            {/* <img src={data.image} alt="Profile"  style={{ width: '100%', maxWidth: '220px', height: '260px', borderRadius: '5px' }}
             /> */}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              {data.name}
            </Typography>
          </Grid>
        </Grid>
        {hovered && (
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                View More
              </Button>
            </Grid>
          )}
          
        </Box>
      </Box>
    <br></br>
    <Card>
 
    </Card>
            <Grid
              item
              sm={12}
              xs={12}
              md={12}
              lg={12}
              xl={12}
              //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
              justifyContent="center"
              alignItems="center"
            >
              <Pagination
                count={numPages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                color="primary"
              />
            </Grid>
            {currentProfiles.map((profile) => (
              <Grid
                item
                sm={12}
                xs={12}
                md={6}
                lg={6}
                xl={4}
                //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                key={profile.id}
              >
                <Card
                  sx={{
                    height: "auto",
                    //background: linearGradient(`195deg, rgb(73, 163, 241), rgb(26, 115, 232)`),
                    boxShadow: 8,
                    //borderLeft: "2px solid grey",
                    borderBottom: "2px solid grey",
                    borderBottomStyle: "inset",
                    //borderTopRightRadius: 20,
                    borderTopRight: "2px solid black",
                    borderRightColor: "black",
                  }}
                >
                  {" "}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                    >
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <CardMedia
                          style={{ height: "100px", width: "100px" }}
                          image={profile.photo1}
                        />
                        <Typography variant="h5">{profile.name}</Typography>
                        <Button variant="gradient" color="primary">
                          View More
                        </Button>
                        <br></br>
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                    >
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{ borderLeft: isSmallScreen ? "2px dashed #c5c6d0" : "none" }}
                      >
                        <List sx={{ width: "100%", padding: 2 }}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <WcIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Gender</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.gender}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <CalendarMonthOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Date Of Birth</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.date_of_birth}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <LanguageOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Language</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.Mother_Tongue}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <LocationOnOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">District</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.district}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Stack>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {!showProfiles && (
          <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center">
            <Pagination count={numPages} page={page} onChange={handleChangePage} />
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
                xl={4}
                //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                key={profile.id}
              >
                <Card
                  sx={{
                    height: "auto",
                    //background: linearGradient(`195deg, rgb(73, 163, 241), rgb(26, 115, 232)`),
                    boxShadow: 8,
                    //borderLeft: "2px solid grey",
                    borderBottom: "2px solid grey",
                    borderBottomStyle: "inset",
                    //borderTopRightRadius: 20,
                    borderTopRight: "2px solid black",
                    borderRightColor: "black",
                  }}
                >
                  {" "}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                    >
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <CardMedia
                          style={{ height: "100px", width: "100px" }}
                          image={profile.photo1}
                        />
                        <Typography variant="h5">{profile.name}</Typography>
                        <Button variant="gradient" color="primary">
                          View More
                        </Button>
                        <br></br>
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      //sx={{ ml: "auto", mt: { xs: 1, lg: 0 } }}
                    >
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{ borderLeft: isSmallScreen ? "2px dashed #c5c6d0" : "none" }}
                      >
                        <List sx={{ width: "100%", padding: 2 }}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <WcIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Gender</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.gender}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <CalendarMonthOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Date Of Birth</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.date_of_birth}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <LanguageOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">Language</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.Mother_Tongue}
                              </Typography>
                            </ListItemText>
                          </ListItem>

                          <ListItem>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: "#fff" }}>
                                <LocationOnOutlinedIcon color="primary" />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography variant="h6">District</Typography>
                              <Typography variant="body2" sx={{ fontSize: "20" }}>
                                {profile.district}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Stack>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Information;
