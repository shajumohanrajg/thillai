//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
//import linearGradient from "assets/theme/functions/linearGradient";
//import { red } from "@mui/material/colors";
//import { Language } from "@mui/icons-material";
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
//import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
//import WorkIcon from "@mui/icons-material/Work";
//import bgImage from "assets/images/bruce-mars.jpg";
import { Avatar, Box, Card, CardHeader, CardMedia, Divider, IconButton, styled, Tooltip, Typography, useMediaQuery } from "@mui/material";
//import Avatar from "@mui/material/Avatar";
//import React from "react";

// import { Container, Typography } from "@mui/material";

// import { travelItems } from "../../data";
// import TravelItem from "../components/travel-item";
// import SecondaryButton from "../components/secondary-button";

// Material Kit 2 React components
//import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
//import MKAvatar from "components/MKAvatar";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React examples
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { Padding } from "@mui/icons-material";
// import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import axios from "axios";
//import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
//import ImageIcon from "@mui/icons-material/Image";
//import ListItemIcon from "@mui/material/ListItemIcon";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import pattern from "./assets/main/productCurvyLines.png";
import procover from "./assets/main/profile_cover.jpg";
import Footer from "./components/footer/Footer";
import Header from "./searchcover";

const Input = styled('input')({
  display: 'none'
});

const AvatarWrapper = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
     
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
       
      }
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);
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
  const feed = [
    {
      name: "Munroe Dacks",
      jobtitle: "Senior Accountant",
      company: "Trudoo",
      avatar: "/static/images/avatars/1.jpg",
    },
    {
      name: "Gunilla Canario",
      jobtitle: "Associate Professor",
      company: "Buzzdog",
      avatar: "/static/images/avatars/2.jpg",
    },
    {
      name: "Rowena Geistmann",
      jobtitle: "Pharmacist",
      company: "Yozio",
      avatar: "/static/images/avatars/3.jpg",
    },
    {
      name: "Ede Stoving",
      jobtitle: "VP Operations",
      company: "Cogibox",
      avatar: "/static/images/avatars/4.jpg",
    },
    {
      name: "Crissy Spere",
      jobtitle: "Social Worker",
      company: "Babbleblab",
      avatar: "/static/images/avatars/5.jpg",
    },
    {
      name: "Michel Greatbanks",
      jobtitle: "Research Assistant III",
      company: "Aimbu",
      avatar: "/static/images/avatars/6.jpg",
    },
  ];

  const user = {
    savedCards: 7,
    name: "Tamil Selvi K",
    coverImg: "/static/images/placeholders/covers/5.jpg",
    avatar: "/static/images/avatars/4.jpg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: "Sengunthar",
    location: "Cheyyaru",
    followers: "22-05-1989",
  };

  const classes = useStyles();
  let { id } = useParams();
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
        // console.log(profiles);
        // console.log(filteredProfiles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [proData, setProData] = React.useState([]);
  const url = "http://127.0.0.1:8000/register/";
  React.useEffect(() => {
      
      // const id=props.match.params.id
      axios.get(url + id, {
          
      })
          .then((res) => {
              // console.log(res.data)
              setProData(res.data);
          })
          .catch((err) => console.error(err));
  }, [id]);
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

  // const data = {
  //   caste: "Some Caste",
  //   age: 30,
  //   income: "$50,000",
  //   location: "City Name",
  //   image:
  //     "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=",
  //   name: "John Doe",
  // };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // const images = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA83LgMlYCp_mSDd1LQWDQbg8qktqOsZ1lfUKtSOsfA&usqp=CAU&ec=48665701",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKEk6IcX2DFlbQ4SpyWlyhaVhGp3zL5_874PI26UzQ&usqp=CAU&ec=48665701",
  //   "data:image/jpeg;base64,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",
  //   // Add more image URLs here
  // ];

  return (
    <>
      {" "}
      <Header />
      <Box component="section" py={12} sx={{ backgroundImage: `url(${pattern})`,   overflow: "hidden",
        backgroundColor: "#f8f8f8", }}>
        <Container sx={{ mt: 3 }} maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={10}>
            <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title="Go back">
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Profile for {proData.name}
          </Typography>
          <Typography variant="subtitle2">
            Thillai Matrimony Member profile.
          </Typography>
        </Box>
      </Box>
      <CardCover>
        <CardMedia image={procover} />
        {/* <CardCoverAction>
          <Input accept="image/*" id="change-cover" multiple type="file" />
          <label htmlFor="change-cover">
            <Button
              startIcon={<UploadTwoToneIcon />}
              variant="contained"
              component="span"
            >
              Change cover
            </Button>
          </label>
        </CardCoverAction> */}
      </CardCover>
      <AvatarWrapper>
        <Avatar variant="rounded" alt="profilepic" src={proData.photo1} />
        {/* <ButtonUploadWrapper>
          <Input
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary">
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper> */}
      </AvatarWrapper>
      <Box py={2} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
        {proData.name}
        </Typography>
        <Typography variant="subtitle2">{proData.name}</Typography>
        <Typography sx={{ py: 2 }} variant="subtitle2" color="text.primary">
       Sengunthar | {proData.city} | {proData.date_of_birth}
        </Typography>
        {/* <Box
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Button size="small" variant="contained">
              Follow
            </Button>
            <Button size="small" sx={{ mx: 1 }} variant="outlined">
              View website
            </Button>
            <IconButton color="primary" sx={{ p: 0.5 }}>
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            size="small"
            variant="text"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            See all {user.followers} connections
          </Button>
        </Box> */}
      </Box>
              {/* <ProfileCover user={user} /> */}
            </Grid>
            <Grid item xs={12} md={10}>
              <Card sx={{backgroundColor:'transparent',boxShadow:0}}>
                <CardHeader title="Personal Info" />
                <Divider />
                <Box p={1}>
                  <Grid container spacing={0}>
               
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText primary="Gender" secondary={proData.gender} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Date of Birth"
                            secondary={proData.date_of_birth}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Birth Time"
                            secondary={proData.birth_time}
                          />
                        </ListItem>
                      </Grid>

                      <Grid item xs={12} md={6} xl={4}>
                        {" "}
                        <ListItem>
                          <ListItemText
                            primary="Mother Tongue"
                            secondary={proData.Mother_Tongue}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        {" "}
                        <ListItem>
                          <ListItemText
                            primary=" Maritual Status"
                            secondary={proData.Marital_Status}
                          />
                        </ListItem>
                      </Grid>
                      
                      {/* <Grid item xs={12} sm={6} md={8} lg={4}>
                        <Box p={3} display="flex" alignItems="flex-start">
                         
                          <Box pl={0}>
                         
                            <Typography variant="body1" gutterBottom sx={{fontSize:18}}>
                            Gender
                            </Typography>
                            <Typography  variant="subtitle2" color="text.primary" sx={{ pb: 0 }}>
                            {proData.gender}
                            </Typography>
                            
                           
                          </Box>
                        </Box>
                        
                      </Grid> */}
                 
                  </Grid>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={10}>
              <Card  sx={{backgroundColor:'transparent' ,boxShadow:0}}>
                <CardHeader title="Physical Info" />
                <Divider />
                <Box p={1}>
                  <Grid container spacing={0}>
                  <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText primary="Height" secondary={proData.height} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText primary="Weight" secondary={proData.weight} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary=" Physical Status"
                            secondary={proData.phisical_Status}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Body Type"
                            secondary={proData.body_type}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Complexion"
                            secondary={proData.complexion}
                          />
                        </ListItem>{" "}
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary=" Food Habit"
                            secondary={proData.food_habit}
                          />
                        </ListItem>{" "}
                      </Grid>
                      {/* <Grid item xs={12} sm={6} md={8} lg={4}>
                        <Box p={3} display="flex" alignItems="flex-start">
                       
                          <Box pl={0}>
                           
                            <Typography variant="h6" gutterBottom>
                            
                            </Typography>
                            <Typography color="text.primary" sx={{ pb: 0 }}>
                            
                            </Typography>
                            
                          </Box>
                        </Box>
                      </Grid>
                    */}
                  </Grid>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <Card  sx={{backgroundColor:'#f8f8f8' ,boxShadow:0}}> */}
              <Card  sx={{backgroundColor:'transparent' ,boxShadow:0}}>
                <CardHeader title="Education Info" />
                <Divider />
                <Box p={1}>
                  <Grid container spacing={0}>
                  <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Educational Qualification"
                            secondary={proData.educational_qualification}
                          />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText primary="Job" secondary={proData.job} />
                        </ListItem>
                      </Grid>
                      <Grid item xs={12} md={6} xl={4}>
                        <ListItem>
                          <ListItemText
                            primary="Income per Month"
                            secondary={proData.income_per_month}
                          />
                        </ListItem>
                      </Grid>
                      {/* <Grid item xs={12} sm={6} md={8} lg={4}>
                        <Box p={3} display="flex" alignItems="flex-start">
                       
                          <Box pl={0}>
                           
                            <Typography variant="h6" gutterBottom>
                            
                            </Typography>
                            <Typography color="text.primary" sx={{ pb: 0 }}>
                            
                            </Typography>
                            
                          </Box>
                        </Box>
                      </Grid>
                    */}
                  </Grid>
                  <Box sx={{mt:3}}>
          
          <Typography variant="subtitle2">
            Note: If you want to another details please contact Thillai Matrimony Service.
          </Typography>
        </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>

      </Box>
      <Footer />
    </>
  );
}

export default Information;
