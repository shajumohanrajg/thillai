import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { InputAdornment } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Alert from "@mui/material/Alert";
import Axios from "axios";

import { OutlinedInput } from "@mui/material";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import bgImage from "./blog2.jpg";
//import MKBox from "components/MKBox";

// import Button from "components/Button";
// import MKTypography from "components/MKTypography";

// Images
//import bgImage from "assets/images/examples/blog2.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

//import Accordion from '@mui/material/Accordion';
//import AccordionDetails from '@mui/material/AccordionDetails';
//import AccordionSummary from '@mui/material/AccordionSummary';
//import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Contact from "pages/LandingPages/Author/sections/Contact";

import {
  //TextField,
  //Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  //Button,
  //Input,
  //FormGroup,
  //FormControlLabel,
  Grid,
  //Box,
  //Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordionSummary: {
    display: "flex",
    //alignItems: "center",
    //backgroundColor: "transparent",
  },
  accordion: {
    backgroundColor: "transparent",
  },
  textFieldRoot: {
    "& .MuiInput-underline:after": {
      borderBottom: "none", // Hide the bottom line
    },
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
  underline: {
    "&::before": {
      borderBottom: "1px solid #7b809a !important", // Specify your desired color here
    },
    "&::after": {
      borderBottom: "2px solid red", // Specify your desired color here
    },
    "&:hover:not(.Mui-disabled)::before": {
      borderBottom: "2px solid green", // Specify your desired color here
    },
  },

  input: {
    borderRadius: 50,
    //padding: "0.75rem",
    //height: "1.4375em",
    color: "#7b809a",
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
    backgroundColor: "transparent",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        //borderColor: "#ccc",
        borderRadius: 8,
        //borderColor: "black",
        //border: "2px solid grey",
      },
      "&:hover fieldset": {
        //borderColor: "#999",
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
    "&:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 2,
    },
  },
  select1: {
    "& .MuiSelect-select": {
      padding: "none", // Adjust padding as needed
    },
  },
  // accordion: {
  //   marginTop: theme.spacing(2),
  // },
  formControl: {
    minWidth: 200,
    marginTop: theme.spacing(2),
  },
}));
const styles = {
  select: {
    "& .MuiSelect-select": {
      padding: "8px 16px", // Adjust padding as needed
    },
  },
};

function getSteps() {
  return [
    "Personal Information",
    "Physical Information",
    "Family Information",
    "Education & Job",
    "Background",
    "Communication",
    "Expectation",
  ];
}

const Stepform = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const [messageError, setMessageError] = React.useState("");
  const steps = getSteps();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [birthTime, setBirthTime] = useState(null);
  const [motherTongue, setMotherTongue] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  //const [image, setImage] = useState(null);
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);
  const [photo5, setPhoto5] = useState(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physicalStatus, setPhysicalStatus] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [complexion, setComplexion] = useState("");
  const [foodHabit, setFoodHabit] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherJob, setMotherJob] = useState("");
  const [noOfBrother, setNoOfBrother] = useState("");
  const [brotherMarried, setBrotherMarried] = useState("");
  const [noOfSister, setNoOfSister] = useState("");
  const [sisterMarried, setSisterMarried] = useState("");
  const [educationalQualification, setEducationalQualification] = useState("");
  const [job, setJob] = useState("");
  const [incomePerMonth, setIncomePerMonth] = useState("");
  const [religious, setReligious] = useState("");
  const [caste, setCaste] = useState("");
  const [subcaste, setSubcaste] = useState("");
  const [gothram, setGothram] = useState("");
  const [Lagnam, setLagnam] = useState("");
  const [raasi, setRaasi] = useState("");
  const [star, setStar] = useState("");
  const [dosa, setDosa] = useState("");
  const [raasi_image, setRaasiImg] = useState("");
  const [navamsam_image, setNavamsamImg] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const [expage, setExpage] = useState("");
  const [explanguage, setExplanguage] = useState("");
  const [expmaritalStatus, setExpMaritalStatus] = useState("");
  const [expeducationalQualification, setExpEducationalQualification] =
    useState("");
  const [expjob, setExpJob] = useState("");
  const [expincomePerMonth, setExpIncomePerMonth] = useState("");
  const [expcaste, setExpCaste] = useState("");
  const [expsubcaste, setExpSubcaste] = useState("");
  const [expgothram, setExpGothram] = useState("");
  const [expstar, setExpStar] = useState("");

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleCasteChange = (event) => {
    setCaste(event.target.value);
    setSubcaste("");
  };

  const handleImageChange1 = (event) => {
    setPhoto1(event.target.files[0]);
  };
  const handleImageChange2 = (event) => {
    setPhoto2(event.target.files[0]);
  };

  const handleImageChange3 = (event) => {
    setPhoto3(event.target.files[0]);
  };

  const handleImageChange4 = (event) => {
    setPhoto4(event.target.files[0]);
  };
  const handleImageChange5 = (event) => {
    setPhoto5(event.target.files[0]);
  };
  const handleImageChange6 = (event) => {
    setRaasiImg(event.target.files[0]);
  };
  const handleImageChange7 = (event) => {
    setNavamsamImg(event.target.files[0]);
  };
  // const handleFocus = () => {
  //   setMessageError("");
  // };
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //setMessageError("You need to fill out all fields to continue.");
  };

  // Calculate percentage completed
  const calculateProgress = () => {
    const progress = (activeStep / steps.length) * 100;
    return progress.toFixed(0);
  };

  const handleNext2 = () => {
    if (
      name.length !== 0 &&
      gender.length !== 0 &&
      dateOfBirth.length !== 0 &&
      birthTime.length !== 0 &&
      motherTongue.length !== 0 &&
      maritalStatus.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("gender", gender);
      sessionStorage.setItem("dateOfBirth", dateOfBirth);
      sessionStorage.setItem("birthTime", birthTime);
      sessionStorage.setItem("motherTongue", motherTongue);
      sessionStorage.setItem("dateOfBirth", dateOfBirth);
      sessionStorage.setItem("maritalStatus", maritalStatus);
      sessionStorage.setItem("gender", gender);
      //sessionStorage.setItem("photo1", photo1.name);

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };
  const handleNext3 = () => {
    if (
      height.length !== 0 &&
      weight.length !== 0 &&
      physicalStatus.length !== 0 &&
      bodyType.length !== 0 &&
      complexion.length !== 0 &&
      foodHabit.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem("height", height);
      sessionStorage.setItem("weight", weight);
      sessionStorage.setItem("physicalStatus", physicalStatus);
      sessionStorage.setItem("bodyType", bodyType);
      sessionStorage.setItem("complexion", complexion);
      sessionStorage.setItem("foodHabit", foodHabit);

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };
  const handleNext4 = () => {
    if (
      fatherName.length !== 0 &&
      fatherJob.length !== 0 &&
      motherName.length !== 0 &&
      motherJob.length !== 0 &&
      noOfBrother.length !== 0 &&
      noOfSister.length !== 0 &&
      brotherMarried.length !== 0 &&
      sisterMarried.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem("fatherName", fatherName);
      sessionStorage.setItem("fatherJob", fatherJob);
      sessionStorage.setItem("motherName", motherName);
      sessionStorage.setItem("motherJob", motherJob);
      sessionStorage.setItem("noOfBrother", noOfBrother);
      sessionStorage.setItem("brotherMarried", brotherMarried);
      sessionStorage.setItem("noOfSister", noOfSister);
      sessionStorage.setItem("sisterMarried", sisterMarried);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };

  const handleNext5 = () => {
    if (
      educationalQualification.length !== 0 &&
      job.length !== 0 &&
      incomePerMonth.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem(
        "educationalQualification",
        educationalQualification
      );
      sessionStorage.setItem("job", job);
      sessionStorage.setItem("incomePerMonth", incomePerMonth);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };
  const handleNext6 = () => {
    if (
      religious.length !== 0 &&
      caste.length !== 0 &&
      subcaste.length !== 0 &&
      gothram.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem("religious", religious);
      sessionStorage.setItem("caste", caste);
      sessionStorage.setItem("subcaste", subcaste);
      sessionStorage.setItem("gothram", gothram);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };
  const handleNext7 = () => {
    if (
      contactPerson.length !== 0 &&
      contactNo.length !== 0 &&
      whatsApp.length !== 0 &&
      address.length !== 0 &&
      city.length !== 0 &&
      district.length !== 0 &&
      state.length !== 0
    ) {
      // Save values as session storage and send user to step 2
      sessionStorage.setItem("contactPerson", contactPerson);
      sessionStorage.setItem("contactNo", contactNo);
      sessionStorage.setItem("whatsApp", whatsApp);
      sessionStorage.setItem("address", address);
      sessionStorage.setItem("city", city);
      sessionStorage.setItem("district", district);
      sessionStorage.setItem("state", state);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setMessageError("");
    } else {
      setMessageError("Please Fill Mandatory Fields ");
    }
  };
  // const handleNext8 = () => {
  //   if (
  //     expage.length !== 0 &&
  //     explanguage.length !== 0 &&
  //     expmaritalStatus.length !== 0 &&
  //     expeducationalQualification.length !== 0 &&
  //     expjob.length !== 0 &&
  //     expincomePerMonth.length !== 0 &&
  //     expcaste.length !== 0 &&
  //     expsubcaste.length !== 0 &&
  //     expgothram.length !== 0 &&
  //     expstar.length !== 0
  //   ) {
  //     // Save values as session storage and send user to step 2
  //     sessionStorage.setItem("expage", expage);
  //     sessionStorage.setItem("explanguage", explanguage);
  //     sessionStorage.setItem("expmaritalStatus", expmaritalStatus);
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setMessageError("");
  //   } else {
  //     setMessageError("Please Fill Mandatory Fields ");
  //   }
  // };
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  const handleSubmit3 = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("birth_time", birthTime);
    formData.append("Mother_Tongue", motherTongue);
    formData.append("photo1", photo1);
    formData.append("photo2", photo2);
    formData.append("photo3", photo3);
    formData.append("photo4", photo4);
    formData.append("photo5", photo5);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("phisical_Status", physicalStatus);
    formData.append("body_type", bodyType);
    formData.append("complexion", complexion);
    formData.append("food_habit", foodHabit);
    formData.append("father_name", fatherName);
    formData.append("father_job", fatherJob);
    formData.append("mother_name", motherName);
    formData.append("mother_job", motherJob);
    formData.append("no_of_brother", noOfBrother);
    formData.append("brother_married", brotherMarried);
    formData.append("no_of_sister", noOfSister);
    formData.append("sister_married", sisterMarried);
    formData.append("educational_qualification", educationalQualification);
    formData.append("job", job);
    formData.append("income_per_month", incomePerMonth);
    formData.append("Religious", religious);
    formData.append("Caste", caste);
    formData.append("Sub_Caste", subcaste);
    formData.append("Gothram", gothram);
    formData.append("Lagnam", Lagnam);
    formData.append("Raasi", raasi);
    formData.append("Star", star);
    formData.append("Dosa", dosa);
    formData.append("Raasi_Image", raasi_image);
    formData.append("Navamsam_Image", navamsam_image);
    formData.append("contact_person", contactPerson);
    formData.append("contact_No", contactNo);
    formData.append("whatsApp", whatsApp);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("district", district);
    formData.append("state", state);

    try {
      const response = await Axios.post(
        "http://127.0.0.1:8000/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function getStepContent(steps) {
    switch (steps) {
      case 0:
        return (
          <Box component="section" py={{ xs: 0, lg: 6 }}>
            <Container>
              <Grid container item>
                <Box
                  width="100%"
                  bgColor="white"
                  
                  boxShadow="10"
                  mb={6}
                  sx={{ overflow: "hidden",borderRadius:3 }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      lg={5}
                      position="relative"
                      px={0}
                      sx={{
                        //backgroundImage: `url(${bgImage})`,
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                        backgroundSize: "cover",
                        opacity:2
                        //backgroundColor: "rgba(0, 0, 0, 0.8)",
                        //borderRadius:4
                      }}
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        height="100%"
                      >
                        <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                          <Typography
                            variant="h5"
                            color="white"
                            mb={1}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "bold",
                            }}
                          >
                            Contact Information
                          </Typography>
                          <Typography
                            variant="body2"
                            color="white"
                            opacity={0.8}
                            mb={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            Fill up the form and our Team will get back to you
                            within 24 hours.
                          </Typography>
                          <Box display="flex" p={1}>
                            <Typography variant="button" color="white">
                              <PhoneInTalkIcon />
                            </Typography>
                            <Typography
                              component="span"
                              variant="button"
                              color="white"
                              opacity={0.8}
                              ml={2}
                              fontWeight="regular"
                              // sx={{
                              //     fontFamily: "Poppins",}}
                            >
                              (+91) 98765 54321
                            </Typography>
                          </Box>
                          <Box display="flex" color="white" p={1}>
                            <Typography variant="button" color="white">
                              {/* <i className="fas fa-envelope" /> */}
                              <EmailIcon />
                            </Typography>
                            <Typography
                              component="span"
                              variant="button"
                              color="white"
                              opacity={0.8}
                              ml={2}
                              fontWeight="regular"
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              hello@thillai.com
                            </Typography>
                          </Box>
                          <Box display="flex" color="white" p={1}>
                            <Typography variant="button" color="white">
                              <LocationOnIcon />
                            </Typography>
                            <Typography
                              component="span"
                              variant="button"
                              color="white"
                              opacity={0.8}
                              ml={2}
                              fontWeight="regular"
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Cheyyar
                            </Typography>
                          </Box>
                          <Box mt={3}>
                            <IconButton
                              variant="text"
                              color="white"
                              size="large"
                            >
                              {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                              <FacebookOutlinedIcon color="white" />
                            </IconButton>
                            <IconButton
                              variant="text"
                              color="white"
                              size="large"
                              iconOnly
                            >
                              <i
                                className="fab fa-twitter"
                                style={{ fontSize: "1.25rem" }}
                              />
                            </IconButton>
                            <IconButton
                              variant="text"
                              color="white"
                              size="large"
                              iconOnly
                            >
                              <i
                                className="fab fa-dribbble"
                                style={{ fontSize: "1.25rem" }}
                              />
                            </IconButton>
                            <IconButton
                              variant="text"
                              color="white"
                              size="large"
                              iconOnly
                            >
                              <i
                                className="fab fa-instagram"
                                style={{ fontSize: "1.25rem" }}
                              />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                      <Box component="form" p={2} method="post">
                        <Box px={3} py={{ xs: 2, sm: 6 }}>
                          <Typography
                            variant="h4"
                            mb={1}
                            sx={{
                              fontFamily: "Poppins",
                              color: "#344767",
                              fontWeight: "bold",
                            }}
                          >
                            Say Hi!
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text"
                            //Qmb={2}
                            sx={{
                              fontFamily: "Poppins",
                              color: "#7b809a",
                            }}
                          >
                            We&apos;d like to talk with you.
                          </Typography>
                        </Box>
                        <Box
                          pt={0.5}
                          pb={3}
                          px={3}
                          sx={{
                            fontFamily: "Poppins",
                          }}
                        >
                          <Grid container>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              <TextField
                                label="Name"
                                value={name}
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                variant="standard"
                                size="small"
                                className={classes.input}
                                InputProps={{
                                  classes: { underline: classes.underline },
                                }}
                                //placeholder="Full Name"
                                InputLabelProps={{
                                  shrink: true,
                                  //classes: {
                                  //                                    //focused: classes.label,
                                  //                                 },
                                }}
                                sx={{
                                  fontFamily: "Poppins",
                                  color: "#7b809a",
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              <FormControl
                                fullWidth
                                variant="standard"
                                size="small"
                                //className={classes.select}
                              >
                                <InputLabel id="gender-label">
                                  Gender
                                </InputLabel>
                                <Select
                                  id="gender"
                                  labelId="gender-label"
                                  value={gender}
                                  className={classes.underline}
                                  placeholder="Full Name"
                                  onChange={(e) => setGender(e.target.value)}
                                  //InputProps={{ classes: { underline: classes.underline } }}
                                  label="Gender"
                                  //sx={styles.select}
                                >
                                  <MenuItem value="Male">Male</MenuItem>
                                  <MenuItem value="Female">Female</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              <TextField
                                size="small"
                                label="Date of Birth"
                                type="date"
                                id="date_of_birth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                fullWidth
                                variant="standard"
                                //value={fromdate}
                                format="DD-MM-YYYY"
                                //className={classes.input}
                                InputLabelProps={{
                                  shrink: true,
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              <TextField
                                size="small"
                                id="birth_time"
                                label="Birth Time"
                                value={birthTime}
                                type="time"
                                onChange={(e) => setBirthTime(e.target.value)}
                                fullWidth
                                variant="standard"
                                //className={classes.input}
                                InputLabelProps={{
                                  shrink: true,
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              {" "}
                              <FormControl
                                fullWidth
                                variant="standard"
                                size="small"
                                //className={classes.select}
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                              >
                                <InputLabel id="mother-tongue-label">
                                  Mother Tongue
                                </InputLabel>
                                <Select
                                  id="Mother_Tongue"
                                  labelId="mother-tongue-label"
                                  value={motherTongue}
                                  onChange={(e) =>
                                    setMotherTongue(e.target.value)
                                  }
                                  label="Mother Tongue"
                                  //className={classes.select}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                >
                                  <MenuItem value="Tamil">Tamil</MenuItem>
                                  <MenuItem value="Telugu">Telugu</MenuItem>
                                  <MenuItem value="Malayalam">
                                    Malayalam
                                  </MenuItem>
                                  <MenuItem value="Kannada">Kannada</MenuItem>
                                  <MenuItem value="Hindi">Hindi</MenuItem>
                                  <MenuItem value="Others">Others</MenuItem>
                                  {/* add more options here */}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              {" "}
                              <FormControl
                                fullWidth
                                variant="standard"
                                size="small"
                                //className={classes.select}
                              >
                                <InputLabel id="Maritual-Status">
                                  Maritual Status
                                </InputLabel>
                                <Select
                                  labelId="Maritual-Status"
                                  id="Marital_Status"
                                  value={maritalStatus}
                                  onChange={(e) =>
                                    setMaritalStatus(e.target.value)
                                  }
                                  label="Mother Tongue"
                                >
                                  <MenuItem value="Unmarried">
                                    Unmarried
                                  </MenuItem>
                                  <MenuItem value="Divorced">Divorced</MenuItem>
                                  <MenuItem value="Widowed">Widowed</MenuItem>
                                  <MenuItem value="Waiting For Divorce">
                                    Waiting For Divorce
                                  </MenuItem>

                                  {/* add more options here */}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} pr={1} mb={3} md={10}>
                              {" "}
                              <Accordion
                                sx={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  boxShadow: "none",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel-content"
                                  id="panel-header"
                                  //className={classes.accordionSummary}
                                >
                                  <Typography
                                    variant="caption"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    Add Photos
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <TextField
                                    type="file"
                                    name="photo1"
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleImageChange1}
                                    fullWidth
                                    variant="standard"
                                    label="Photo 1"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                    //classes={{ root: classes.textFieldRoot }}
                                    InputProps={{
                                      disableUnderline: true,

                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhotoCameraIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                  <br></br>
                                  <br></br>
                                  <TextField
                                    type="file"
                                    name="photo2"
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleImageChange2}
                                    fullWidth
                                    variant="standard"
                                    label="Photo 2"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                    //classes={{ root: classes.textFieldRoot }}
                                    InputProps={{
                                      disableUnderline: true,

                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhotoCameraIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                  <br></br>
                                  <br></br>
                                  <TextField
                                    type="file"
                                    name="photo3"
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleImageChange3}
                                    fullWidth
                                    variant="standard"
                                    label="Photo 3"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                    //classes={{ root: classes.textFieldRoot }}
                                    InputProps={{
                                      disableUnderline: true,

                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhotoCameraIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                  <br></br>
                                  <br></br>
                                  <TextField
                                    type="file"
                                    name="photo4"
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleImageChange4}
                                    fullWidth
                                    variant="standard"
                                    label="Photo 4"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                    //classes={{ root: classes.textFieldRoot }}
                                    InputProps={{
                                      disableUnderline: true,

                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhotoCameraIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                  <br></br>
                                  <br></br>
                                  <TextField
                                    type="file"
                                    name="photo5"
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleImageChange5}
                                    fullWidth
                                    variant="standard"
                                    label="Photo 5"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                    //classes={{ root: classes.textFieldRoot }}
                                    InputProps={{
                                      disableUnderline: true,

                                      startAdornment: (
                                        <InputAdornment position="start">
                                          <PhotoCameraIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </AccordionDetails>
                              </Accordion>
                            </Grid>
                          </Grid>
                          {messageError && (
                            <Stack sx={{ width: "100%" }} spacing={2}>
                              <Alert severity="error">
                                {/* <AlertTitle>Error</AlertTitle> */}
                                {messageError}
                                <strong>. Click Continue!</strong>
                              </Alert>
                            </Stack>
                          )}
                          <br></br>
                          <Grid
                            container
                            item
                            xs={12}
                            md={6}
                            justifyContent="flex-end"
                            textAlign="right"
                            ml="auto"
                          >
                            <Button
                              variant="contained"
                              sx={{ bgcolor: "#1A73E8" }}
                              onClick={handleNext2}
                            >
                              {activeStep === steps.length - 1
                                ? "Finish"
                                : "Continue"}
                            </Button>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Container>
          </Box>
        );
      case 1:
        return (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="height-label">
                                    Height
                                  </InputLabel>
                                  <Select
                                    id="height"
                                    labelId="height-label"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    label="Height"
                                  >
                                    <MenuItem value="< 4 feet">
                                      less than 4 feet
                                    </MenuItem>
                                    <MenuItem value="4 feet 0 inch">
                                      4 feet 0 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 1 inch">
                                      4 feet 1 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 2 inch">
                                      4 feet 2 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 3 inch">
                                      4 feet 3 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 4 inch">
                                      4 feet 4 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 5 inch">
                                      4 feet 5 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 6 inch">
                                      4 feet 6 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 7 inch">
                                      4 feet 7 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 8 inch">
                                      4 feet 8 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 9 inch">
                                      4 feet 9 inch
                                    </MenuItem>
                                    <MenuItem value="4 feet 10 inch">
                                      4 feet 10 inch
                                    </MenuItem>
                                    <MenuItem value="4-11">
                                      4 feet 11 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 0 inch">
                                      5 feet 0 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 1 inch">
                                      5 feet 1 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 2 inch">
                                      5 feet 2 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 3 inch">
                                      5 feet 3 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 4 inch">
                                      5 feet 4 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 5 inch">
                                      5 feet 5 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 6 inch">
                                      5 feet 6 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 7 inch">
                                      5 feet 7 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 8 inch">
                                      5 feet 8 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 9 inch">
                                      5 feet 9 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 10 inch">
                                      5 feet 10 inch
                                    </MenuItem>
                                    <MenuItem value="5 feet 11 inch">
                                      5 feet 11 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 0 inch">
                                      6 feet 0 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 1 inch">
                                      6 feet 1 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 2 inch">
                                      6 feet 2 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 3 inch">
                                      6 feet 3 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 4 inch">
                                      6 feet 4 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 5 inch">
                                      6 feet 5 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 6 inch">
                                      6 feet 6 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 7 inch">
                                      6 feet 7 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 8 inch">
                                      6 feet 8 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 9 inch">
                                      6 feet 9 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 10 inch">
                                      6 feet 10 inch
                                    </MenuItem>
                                    <MenuItem value="6 feet 11 inch">
                                      6 feet 11 inch
                                    </MenuItem>
                                    <MenuItem value="7 feet >">
                                      {" "}
                                      Greater than 7 feet
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Weight"
                                  id="weight"
                                  value={weight}
                                  onChange={(e) => setWeight(e.target.value)}
                                  fullWidth
                                  type="number"
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="physical-status-label">
                                    Physical Status
                                  </InputLabel>
                                  <Select
                                    id="phisical_Status"
                                    labelId="physical-status-label"
                                    value={physicalStatus}
                                    onChange={(e) =>
                                      setPhysicalStatus(e.target.value)
                                    }
                                    label="Physical Status"
                                  >
                                    <MenuItem value="Normal">Normal</MenuItem>
                                    <MenuItem value="Physically Challanged">
                                      Physically Challenged
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="body-type-label">
                                    Body Type
                                  </InputLabel>
                                  <Select
                                    id="body_type"
                                    labelId="body-type-label"
                                    value={bodyType}
                                    onChange={(e) =>
                                      setBodyType(e.target.value)
                                    }
                                    label="Body Type"
                                  >
                                    <MenuItem value="Slim">Slim</MenuItem>
                                    <MenuItem value="Athletic">
                                      Athletic
                                    </MenuItem>
                                    <MenuItem value="Average">Average</MenuItem>
                                    <MenuItem value="Heavy">Heavy</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="complexion-label">
                                    Complexion
                                  </InputLabel>
                                  <Select
                                    id="complexion"
                                    labelId="complexion-label"
                                    value={complexion}
                                    onChange={(e) =>
                                      setComplexion(e.target.value)
                                    }
                                    label="Complexion"
                                  >
                                    <MenuItem value="Fair">Fair</MenuItem>
                                    <MenuItem value="Very Fair">Fair</MenuItem>
                                    <MenuItem value="Average">Average</MenuItem>
                                    <MenuItem value="Below Average">
                                      Below Average
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="food-habit-label">
                                    Food Habit
                                  </InputLabel>
                                  <Select
                                    id="food_habit"
                                    labelId="food-habit-label"
                                    value={foodHabit}
                                    onChange={(e) =>
                                      setFoodHabit(e.target.value)
                                    }
                                    label="Food Habit"
                                  >
                                    <MenuItem value="Veg">Vegetarian</MenuItem>
                                    <MenuItem value="Non Veg">
                                      Non-Vegetarian
                                    </MenuItem>
                                    <MenuItem value="Eggetarian">
                                      Eggetarian
                                    </MenuItem>
                                    <MenuItem value="Vegan">Vegan</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              {" "}
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext3}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>
                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                            {/* <br></br>
                          <Grid
                            container
                            item
                            xs={12}
                            md={6}
                            justifyContent="flex-end"
                            textAlign="right"
                            ml="auto"
                          >
                            <Button variant="gradient" color="info" onClick={handleNext2}>
                              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                            </Button>
                          </Grid> */}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );
      case 2:
        return (
          <div>
            <br></br>

            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Father's Name"
                                  value={fatherName}
                                  id="father_name"
                                  onChange={(e) =>
                                    setFatherName(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  id="father_job"
                                  size="small"
                                  label="Father's Job"
                                  value={fatherJob}
                                  onChange={(e) => setFatherJob(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  id="mother_name"
                                  size="small"
                                  label="Mother's Name"
                                  value={motherName}
                                  onChange={(e) =>
                                    setMotherName(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  id="mother_job"
                                  size="small"
                                  label="Mother's Job"
                                  value={motherJob}
                                  onChange={(e) => setMotherJob(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  id="no_of_brother"
                                  label="Number of Brothers"
                                  value={noOfBrother}
                                  onChange={(e) =>
                                    setNoOfBrother(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  id="no_of_sister"
                                  label="Number of Sisters"
                                  value={noOfSister}
                                  onChange={(e) =>
                                    setNoOfSister(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  id="brother_married"
                                  label="Brother's Married"
                                  value={brotherMarried}
                                  onChange={(e) =>
                                    setBrotherMarried(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  id="sister_married"
                                  label="Sister's Married"
                                  value={sisterMarried}
                                  onChange={(e) =>
                                    setSisterMarried(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext4}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>

                            {/* <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        {" "}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        >
                          <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="gradient" color="info" onClick={handleNext3}>
                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                        </Stack>
                      </Grid> */}
                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                            {/* <br></br>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <Button variant="gradient" color="info" onClick={handleNext2}>
                        {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    </Grid> */}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );
      case 3:
        return (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  id="educational_qualification"
                                  label="Educational Qualification"
                                  value={educationalQualification}
                                  onChange={(e) =>
                                    setEducationalQualification(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  id="job"
                                  label="Job"
                                  value={job}
                                  onChange={(e) => setJob(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  id="income_per_month"
                                  label="Income per Month"
                                  value={incomePerMonth}
                                  onChange={(e) =>
                                    setIncomePerMonth(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext5}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>

                            {/* <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        {" "}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        >
                          <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="gradient" color="info" onClick={handleNext3}>
                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                        </Stack>
                      </Grid> */}
                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );
      case 4:
        return (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="religious-label">
                                    Religious
                                  </InputLabel>
                                  <Select
                                    labelId="religious-label"
                                    id="Religious"
                                    value={religious}
                                    onChange={(e) =>
                                      setReligious(e.target.value)
                                    }
                                    label="Religious"
                                  >
                                    <MenuItem value="hindu">Hindu</MenuItem>
                                    <MenuItem value="muslim">Muslim</MenuItem>
                                    <MenuItem value="christian">
                                      Christian
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Caste-label">
                                    Caste
                                  </InputLabel>
                                  <Select
                                    id="Caste"
                                    labelId="Caste-label"
                                    value={caste}
                                    //onChange={(e) => setCaste(e.target.value)}
                                    onChange={handleCasteChange}
                                    label="Caste"
                                  >
                                    {/* <MenuItem value="Mudaliyar">Mudaliyar</MenuItem> */}
                                    {casteOptions.map((option) => (
                                      <MenuItem
                                        key={option.id}
                                        value={option.id}
                                      >
                                        {option.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {caste && (
                                  <FormControl
                                    fullWidth
                                    variant="standard"
                                    size="small"
                                    //className={classes.select}
                                  >
                                    <InputLabel id="subcaste-label">
                                      Subcaste
                                    </InputLabel>
                                    <Select
                                      labelId="subcaste-label"
                                      id="Sub_Caste"
                                      value={subcaste}
                                      label="Subcaste"
                                      onChange={(e) =>
                                        setSubcaste(e.target.value)
                                      }
                                    >
                                      {subcasteOptions[caste].map((option) => (
                                        <MenuItem
                                          key={option.id}
                                          value={option.id}
                                        >
                                          {option.name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                )}
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  id="Gothram"
                                  label="Gothram"
                                  value={gothram}
                                  onChange={(e) => setGothram(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="lagnam-label">
                                    Lagnam
                                  </InputLabel>
                                  <Select
                                    labelId="lagnam-label"
                                    id="Lagnam"
                                    value={Lagnam}
                                    onChange={(e) => setLagnam(e.target.value)}
                                    label="Lagnam"
                                  >
                                    <MenuItem value="Mesam">Mesam</MenuItem>
                                    <MenuItem value="Rishabam">
                                      Rishabam
                                    </MenuItem>
                                    <MenuItem value="Mithunam">
                                      Mithunam
                                    </MenuItem>
                                    <MenuItem value="Kadagam">Kadagam</MenuItem>
                                    <MenuItem value="Simmam">Simmam</MenuItem>
                                    <MenuItem value="Kanni">Kanni</MenuItem>
                                    <MenuItem value="Thulam">Thulam</MenuItem>
                                    <MenuItem value="Viruchagam">
                                      Viruchagam
                                    </MenuItem>
                                    <MenuItem value="Dhanusu">Dhanusu</MenuItem>
                                    <MenuItem value="Magaram">Magaram</MenuItem>
                                    <MenuItem value="Kumbam">Kumbam</MenuItem>
                                    <MenuItem value="Meenam">Meenam</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="raasi-label">
                                    Raasi
                                  </InputLabel>
                                  {/* <Select
                    labelId="raasi-label"
                    id="Raasi"
                    value={raasi}
                    onChange={(e) => setRaasi(e.target.value)}
                    label="Raasi"
                  >
                    <MenuItem value="hindu">Hindu</MenuItem>
                    <MenuItem value="muslim">Muslim</MenuItem>
                  </Select> */}
                                  <Select
                                    labelId="raasi-label"
                                    id="Raasi"
                                    value={raasi}
                                    onChange={(e) => setRaasi(e.target.value)}
                                    label="Raasi"
                                  >
                                    <MenuItem value="Mesam">Mesam</MenuItem>
                                    <MenuItem value="Rishabam">
                                      Rishabam
                                    </MenuItem>
                                    <MenuItem value="Mithunam">
                                      Mithunam
                                    </MenuItem>
                                    <MenuItem value="Kadagam">Kadagam</MenuItem>
                                    <MenuItem value="Simmam">Simmam</MenuItem>
                                    <MenuItem value="Kanni">Kanni</MenuItem>
                                    <MenuItem value="Thulam">Thulam</MenuItem>
                                    <MenuItem value="Viruchagam">
                                      Viruchagam
                                    </MenuItem>
                                    <MenuItem value="Dhanusu">Dhanusu</MenuItem>
                                    <MenuItem value="Magaram">Magaram</MenuItem>
                                    <MenuItem value="Kumbam">Kumbam</MenuItem>
                                    <MenuItem value="Meenam">Meenam</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="star-label">Star</InputLabel>
                                  <Select
                                    labelId="star-label"
                                    id="Star"
                                    value={star}
                                    onChange={(e) => setStar(e.target.value)}
                                    label="Star"
                                  >
                                    <MenuItem value="Ashwini">Ashwini</MenuItem>
                                    <MenuItem value="Bharani">Bharani</MenuItem>
                                    <MenuItem value="Krittika">
                                      Krittika
                                    </MenuItem>
                                    <MenuItem value="Rohini">Rohini</MenuItem>
                                    <MenuItem value="Mrighasira">
                                      Mrighasira
                                    </MenuItem>
                                    <MenuItem value="Thiruvadhirai">
                                      Thiruvadhirai
                                    </MenuItem>
                                    <MenuItem value="Punarpoosam">
                                      Punarpoosam
                                    </MenuItem>
                                    <MenuItem value="Poosam">Poosam</MenuItem>
                                    <MenuItem value="Ayilyam">Ayilyam</MenuItem>
                                    <MenuItem value="Magam">Magam</MenuItem>
                                    <MenuItem value="Pooram">Pooram</MenuItem>
                                    <MenuItem value="Uthiram">Uthiram</MenuItem>
                                    <MenuItem value="Astham">Astham</MenuItem>
                                    <MenuItem value="Chitrai">Chitrai</MenuItem>
                                    <MenuItem value="Swathi">Swathi</MenuItem>
                                    <MenuItem value="Visagam">Visagam</MenuItem>
                                    <MenuItem value="Ausham">Ausham</MenuItem>
                                    <MenuItem value="Kettai">Kettai</MenuItem>
                                    <MenuItem value="Moolam">Moolam</MenuItem>
                                    <MenuItem value="Pooradam">
                                      Pooradam
                                    </MenuItem>
                                    <MenuItem value="Uthradam">
                                      Uthradam
                                    </MenuItem>
                                    <MenuItem value="Thiruvonam">
                                      Thiruvonam
                                    </MenuItem>
                                    <MenuItem value="Avittam">Avittam</MenuItem>
                                    <MenuItem value="Sathayam">
                                      Sathayam
                                    </MenuItem>
                                    <MenuItem value="Poorattathi">
                                      Poorattathi
                                    </MenuItem>
                                    <MenuItem value="Utharattadhi">
                                      Utharattadhi
                                    </MenuItem>
                                    <MenuItem value="Revathi">Revathi</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Raasi_Image">
                                    Raasi
                                  </InputLabel>
                                  <OutlinedInput
                                    labelId="Raasi_Image"
                                    id="Raasi_Image"
                                    type="file"
                                    name="Raasi_Image"
                                    //className={classes.select}
                                    inputProps={{ accept: "image/*" }}
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <PhotoCameraIcon />
                                      </InputAdornment>
                                    }
                                    onChange={handleImageChange6}
                                    fullWidth
                                    //margin="normal"
                                    variant="standard"
                                    label="Raasi"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Navamsam_Image">
                                    Navamsam Image
                                  </InputLabel>
                                  <OutlinedInput
                                    labelId="Navamsam_Image"
                                    id="Navamsam_Image"
                                    type="file"
                                    name="Navamsam_Image"
                                    //className={classes.select}
                                    inputProps={{ accept: "image/*" }}
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <PhotoCameraIcon />
                                      </InputAdornment>
                                    }
                                    onChange={handleImageChange7}
                                    fullWidth
                                    //margin="normal"
                                    variant="standard"
                                    label="Navamsam Image"
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                  />
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Dosa"
                                  id="Dosa"
                                  value={dosa}
                                  onChange={(e) => setDosa(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext6}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>

                            {/* <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        {" "}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        >
                          <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="gradient" color="info" onClick={handleNext3}>
                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                        </Stack>
                      </Grid> */}
                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );
      case 5:
        return (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Contact Person"
                                  value={contactPerson}
                                  onChange={(e) =>
                                    setContactPerson(e.target.value)
                                  }
                                  fullWidth
                                  id="contact_person"
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Contact Number"
                                  id="contact_No"
                                  value={contactNo}
                                  onChange={(e) => setContactNo(e.target.value)}
                                  fullWidth
                                  type="tel"
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  id="whatsApp"
                                  label="WhatsApp Number"
                                  value={whatsApp}
                                  onChange={(e) => setWhatsApp(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  type="tel"
                                  InputLabelProps={{
                                    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Address"
                                  id="address"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="City"
                                  id="city"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="District"
                                  id="district"
                                  value={district}
                                  onChange={(e) => setDistrict(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="state-label">
                                    State
                                  </InputLabel>
                                  <Select
                                    labelId="state-label"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    label="State"
                                  >
                                    <MenuItem value="Andhra Pradesh">
                                      Andhra Pradesh
                                    </MenuItem>
                                    <MenuItem value="Arunachal Pradesh">
                                      Arunachal Pradesh
                                    </MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhattisgarh">
                                      Chhattisgarh
                                    </MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">
                                      Himachal Pradesh
                                    </MenuItem>
                                    <MenuItem value="Jharkhand">
                                      Jharkhand
                                    </MenuItem>
                                    <MenuItem value="Karnataka">
                                      Karnataka
                                    </MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">
                                      Madhya Pradesh
                                    </MenuItem>
                                    <MenuItem value="Maharashtra">
                                      Maharashtra
                                    </MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalaya">
                                      Meghalaya
                                    </MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">
                                      Nagaland
                                    </MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">
                                      Rajasthan
                                    </MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">
                                      Tamil Nadu
                                    </MenuItem>
                                    <MenuItem value="Telangana">
                                      Telangana
                                    </MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttar Pradesh">
                                      Uttar Pradesh
                                    </MenuItem>
                                    <MenuItem value="Uttarakhand">
                                      Uttarakhand
                                    </MenuItem>
                                    <MenuItem value="West Bengal">
                                      West Bengal
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              {" "}
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext7}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>

                            {/* <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        {" "}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        >
                          <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                          </Button>
                          <Button variant="gradient" color="info" onClick={handleNext3}>
                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                        </Stack>
                      </Grid> */}
                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                            {/* <br></br>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <Button variant="gradient" color="info" onClick={handleNext2}>
                        {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                    </Grid> */}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );
      case 6:
        return (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Contact Information
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Say Hi!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Age"
                                  id="age"
                                  value={expage}
                                  onChange={(e) => setExpage(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                >
                                  <InputLabel id="mother-tongue-label">
                                    Mother Tongue
                                  </InputLabel>
                                  <Select
                                    labelId="mother-tongue-label"
                                    value={explanguage}
                                    onChange={(e) =>
                                      setExplanguage(e.target.value)
                                    }
                                    label="Mother Tongue"
                                    //className={classes.select}
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                  >
                                    <MenuItem value="Tamil">Tamil</MenuItem>
                                    <MenuItem value="Telugu">Telugu</MenuItem>
                                    <MenuItem value="Malayalam">
                                      Malayalam
                                    </MenuItem>
                                    <MenuItem value="Kannada">Kannada</MenuItem>
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="Others">Others</MenuItem>
                                    {/* add more options here */}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Maritual-Status">
                                    Maritual Status
                                  </InputLabel>
                                  <Select
                                    labelId="Maritual-Status"
                                    value={expmaritalStatus}
                                    onChange={(e) =>
                                      setExpMaritalStatus(e.target.value)
                                    }
                                    label="Mother Tongue"
                                  >
                                    <MenuItem value="Unmarried">
                                      Unmarried
                                    </MenuItem>
                                    <MenuItem value="Divorced">
                                      Divorced
                                    </MenuItem>
                                    <MenuItem value="Widowed">Widowed</MenuItem>
                                    <MenuItem value="Waiting For Divorce">
                                      Waiting For Divorce
                                    </MenuItem>

                                    {/* add more options here */}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Educational Qualification"
                                  value={expeducationalQualification}
                                  onChange={(e) =>
                                    setExpEducationalQualification(
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Job"
                                  value={expjob}
                                  onChange={(e) => setExpJob(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Income per Month"
                                  value={expincomePerMonth}
                                  onChange={(e) =>
                                    setExpIncomePerMonth(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Caste-label">
                                    Caste
                                  </InputLabel>
                                  <Select
                                    labelId="Caste-label"
                                    value={expcaste}
                                    onChange={(e) =>
                                      setExpCaste(e.target.value)
                                    }
                                    label="Caste"
                                  >
                                    <MenuItem value="Mudaliyar">
                                      Mudaliyar
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Subcaste-label">
                                    SubCaste
                                  </InputLabel>
                                  <Select
                                    labelId="Subcaste-label"
                                    value={expsubcaste}
                                    onChange={(e) =>
                                      setExpSubcaste(e.target.value)
                                    }
                                    label="Caste"
                                  >
                                    <MenuItem value="Sengunthar">
                                      Sengunthar
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Gothram"
                                  value={expgothram}
                                  onChange={(e) =>
                                    setExpGothram(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Star-label">State</InputLabel>
                                  <Select
                                    labelId="Star"
                                    value={expstar}
                                    onChange={(e) => setExpStar(e.target.value)}
                                    label="Star"
                                  >
                                    <MenuItem value="Aayilyam">
                                      Aayilyam
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleNext}
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                              </Stack>
                            </Grid>

                            {messageError && (
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="error">
                                  {/* <AlertTitle>Error</AlertTitle> */}
                                  {messageError}
                                  <strong>. Click Continue!</strong>
                                </Alert>
                              </Stack>
                            )}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        );

      default:
        return "Unknown step";
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      {/* <Stepper
        //className={classes.stepper}
        activeStep={activeStep}
        //alternativeLabel={!isMobile}
        orientation={isMobile ? "vertical" : "horizontal"}
        style={{ visibility: "hidden" }}
      >
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}

      <div>
        {activeStep === steps.length ? (
          <div>
            <Box component="section" py={{ xs: 0, lg: 6 }}>
              <Container>
                <Grid container item>
                  <Box
                    width="100%"
                    bgColor="white"
                    borderRadius="10"
                    boxShadow="10"
                    mb={6}
                    sx={{ overflow: "hidden" }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        position="relative"
                        px={0}
                        sx={{
                          //backgroundImage: `url(${bgImage})`,
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
                          backgroundSize: "cover",
                          //backgroundColor: "rgba(0, 0, 0, 0.8)",
                          //borderRadius:4
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                            <Typography
                              variant="h5"
                              color="white"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              All Steps Are completed
                            </Typography>
                            <Typography
                              variant="body2"
                              color="white"
                              opacity={0.8}
                              mb={3}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Typography>
                            <Box display="flex" p={1}>
                              <Typography variant="button" color="white">
                                <PhoneInTalkIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                // sx={{
                                //     fontFamily: "Poppins",}}
                              >
                                (+91) 98765 54321
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                {/* <i className="fas fa-envelope" /> */}
                                <EmailIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                hello@thillai.com
                              </Typography>
                            </Box>
                            <Box display="flex" color="white" p={1}>
                              <Typography variant="button" color="white">
                                <LocationOnIcon />
                              </Typography>
                              <Typography
                                component="span"
                                variant="button"
                                color="white"
                                opacity={0.8}
                                ml={2}
                                fontWeight="regular"
                                sx={{
                                  fontFamily: "Poppins",
                                }}
                              >
                                Cheyyar
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                              >
                                {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                                <FacebookOutlinedIcon color="white" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-twitter"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-dribbble"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="white"
                                size="large"
                                iconOnly
                              >
                                <i
                                  className="fab fa-instagram"
                                  style={{ fontSize: "1.25rem" }}
                                />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={7}>
                        <Box component="form" p={2} method="post">
                          <Box px={3} py={{ xs: 2, sm: 6 }}>
                            <Typography
                              variant="h2"
                              mb={1}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              Completed!
                            </Typography>
                            <Typography
                              variant="body1"
                              color="text"
                              mb={2}
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              We&apos;d like to talk with you.
                            </Typography>
                            {activeStep > 0 && (
                              <div>
                                <p
                                  style={{ color: "green" }}
                                >{`${calculateProgress()}% completed`}</p>
                              </div>
                            )}
                          </Box>
                          <Box
                            pt={0.5}
                            pb={3}
                            px={3}
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            <Grid container>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Age"
                                  id="age"
                                  value={expage}
                                  onChange={(e) => setExpage(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                >
                                  <InputLabel id="mother-tongue-label">
                                    Mother Tongue
                                  </InputLabel>
                                  <Select
                                    labelId="mother-tongue-label"
                                    value={explanguage}
                                    onChange={(e) =>
                                      setExplanguage(e.target.value)
                                    }
                                    label="Mother Tongue"
                                    //className={classes.select}
                                    InputLabelProps={{
                                      classes: {
                                        //root: classes.label,
                                        //focused: classes.label,
                                      },
                                    }}
                                  >
                                    <MenuItem value="Tamil">Tamil</MenuItem>
                                    <MenuItem value="Telugu">Telugu</MenuItem>
                                    <MenuItem value="Malayalam">
                                      Malayalam
                                    </MenuItem>
                                    <MenuItem value="Kannada">Kannada</MenuItem>
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="Others">Others</MenuItem>
                                    {/* add more options here */}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Maritual-Status">
                                    Maritual Status
                                  </InputLabel>
                                  <Select
                                    labelId="Maritual-Status"
                                    value={expmaritalStatus}
                                    onChange={(e) =>
                                      setExpMaritalStatus(e.target.value)
                                    }
                                    label="Mother Tongue"
                                  >
                                    <MenuItem value="Unmarried">
                                      Unmarried
                                    </MenuItem>
                                    <MenuItem value="Divorced">
                                      Divorced
                                    </MenuItem>
                                    <MenuItem value="Widowed">Widowed</MenuItem>
                                    <MenuItem value="Waiting For Divorce">
                                      Waiting For Divorce
                                    </MenuItem>

                                    {/* add more options here */}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                <TextField
                                  size="small"
                                  label="Educational Qualification"
                                  value={expeducationalQualification}
                                  onChange={(e) =>
                                    setExpEducationalQualification(
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Job"
                                  value={expjob}
                                  onChange={(e) => setExpJob(e.target.value)}
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Income per Month"
                                  value={expincomePerMonth}
                                  onChange={(e) =>
                                    setExpIncomePerMonth(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Caste-label">
                                    Caste
                                  </InputLabel>
                                  <Select
                                    labelId="Caste-label"
                                    value={expcaste}
                                    onChange={(e) =>
                                      setExpCaste(e.target.value)
                                    }
                                    label="Caste"
                                  >
                                    <MenuItem value="Mudaliyar">
                                      Mudaliyar
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Subcaste-label">
                                    SubCaste
                                  </InputLabel>
                                  <Select
                                    labelId="Subcaste-label"
                                    value={expsubcaste}
                                    onChange={(e) =>
                                      setExpSubcaste(e.target.value)
                                    }
                                    label="Caste"
                                  >
                                    <MenuItem value="Sengunthar">
                                      Sengunthar
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <TextField
                                  size="small"
                                  label="Gothram"
                                  value={expgothram}
                                  onChange={(e) =>
                                    setExpGothram(e.target.value)
                                  }
                                  fullWidth
                                  variant="standard"
                                  //className={classes.input}
                                  InputLabelProps={{
                                    classes: {
                                      //root: classes.label,
                                      //focused: classes.label,
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} pr={1} mb={3} md={10}>
                                {" "}
                                <FormControl
                                  fullWidth
                                  variant="standard"
                                  size="small"
                                  //className={classes.select}
                                >
                                  <InputLabel id="Star-label">State</InputLabel>
                                  <Select
                                    labelId="Star"
                                    value={expstar}
                                    onChange={(e) => setExpStar(e.target.value)}
                                    label="Star"
                                  >
                                    <MenuItem value="Aayilyam">
                                      Aayilyam
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              item
                              xs={12}
                              md={6}
                              justifyContent="flex-end"
                              textAlign="right"
                              ml="auto"
                            >
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                              >
                                <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Back
                                </Button>
                                <Button onClick={handleReset}>Reset</Button>
                                <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleSubmit3}
                                  type="submit"
                                >
                                  Check Preview
                                </Button>
                                {/* <Button
                                  variant="contained"
                                  sx={{ bgcolor: "#1A73E8" }}
                                  onClick={handleSubmit3}
                                  type="submit"
                                >
                                  Submit
                                </Button> */}
                                {/* <Button variant="contained" sx={{bgcolor:'#1A73E8'}} onClick={handleNext}>
                                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                                </Button> */}
                              </Stack>
                            </Grid>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Box>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box component="section" >
              <Container
                sx={{ boxShadow: "10" }}
                //borderRadius="20"
                //boxShadow="10"
              >
                <form onSubmit={handleSubmit3}>
                  <br></br>
                 <Box sx={{p:5,boxShadow:2}}>
                      <List sx={{ width: "100%", maxWidth: 360,p:'none',m:'none' }}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                  <br></br>
                   
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            label="Name"
                            value={name}
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            variant="standard"
                            size="small"
                            className={classes.input}
                            InputProps={{
                              classes: { underline: classes.underline },
                            }}
                            //placeholder="Full Name"
                            InputLabelProps={{
                              shrink: true,
                              //classes: {
                              //                                    //focused: classes.label,
                              //                                 },
                            }}
                            sx={{
                              fontFamily: "Poppins",
                              color: "#7b809a",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                              id="gender"
                              labelId="gender-label"
                              value={gender}
                              className={classes.underline}
                              placeholder="Full Name"
                              onChange={(e) => setGender(e.target.value)}
                              //InputProps={{ classes: { underline: classes.underline } }}
                              label="Gender"
                              //sx={styles.select}
                            >
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Date of Birth"
                            type="date"
                            id="date_of_birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            fullWidth
                            variant="standard"
                            //value={fromdate}
                            format="DD-MM-YYYY"
                            //className={classes.input}
                            InputLabelProps={{
                              shrink: true,
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="birth_time"
                            label="Birth Time"
                            value={birthTime}
                            type="time"
                            onChange={(e) => setBirthTime(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              shrink: true,
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          >
                            <InputLabel id="mother-tongue-label">
                              Mother Tongue
                            </InputLabel>
                            <Select
                              id="Mother_Tongue"
                              labelId="mother-tongue-label"
                              value={motherTongue}
                              onChange={(e) => setMotherTongue(e.target.value)}
                              label="Mother Tongue"
                              //className={classes.select}
                              InputLabelProps={{
                                classes: {
                                  //root: classes.label,
                                  //focused: classes.label,
                                },
                              }}
                            >
                              <MenuItem value="Tamil">Tamil</MenuItem>
                              <MenuItem value="Telugu">Telugu</MenuItem>
                              <MenuItem value="Malayalam">Malayalam</MenuItem>
                              <MenuItem value="Kannada">Kannada</MenuItem>
                              <MenuItem value="Hindi">Hindi</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                              {/* add more options here */}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Maritual-Status">
                              Maritual Status
                            </InputLabel>
                            <Select
                              labelId="Maritual-Status"
                              id="Marital_Status"
                              value={maritalStatus}
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              label="Mother Tongue"
                            >
                              <MenuItem value="Unmarried">Unmarried</MenuItem>
                              <MenuItem value="Divorced">Divorced</MenuItem>
                              <MenuItem value="Widowed">Widowed</MenuItem>
                              <MenuItem value="Waiting For Divorce">
                                Waiting For Divorce
                              </MenuItem>

                              {/* add more options here */}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <Accordion
                            sx={{
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel-content"
                              id="panel-header"
                              //className={classes.accordionSummary}
                            >
                              <Typography
                                variant="caption"
                                sx={{ fontWeight: "bold" }}
                              >
                                Add Photos
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TextField
                                type="file"
                                name="photo1"
                                inputProps={{ accept: "image/*" }}
                                onChange={handleImageChange1}
                                fullWidth
                                variant="standard"
                                label="Photo 1"
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                                //classes={{ root: classes.textFieldRoot }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <PhotoCameraIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <br></br>
                              <br></br>
                              <TextField
                                type="file"
                                name="photo2"
                                inputProps={{ accept: "image/*" }}
                                onChange={handleImageChange2}
                                fullWidth
                                variant="standard"
                                label="Photo 2"
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                                //classes={{ root: classes.textFieldRoot }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <PhotoCameraIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <br></br>
                              <br></br>
                              <TextField
                                type="file"
                                name="photo3"
                                inputProps={{ accept: "image/*" }}
                                onChange={handleImageChange3}
                                fullWidth
                                variant="standard"
                                label="Photo 3"
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                                //classes={{ root: classes.textFieldRoot }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <PhotoCameraIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <br></br>
                              <br></br>
                              <TextField
                                type="file"
                                name="photo4"
                                inputProps={{ accept: "image/*" }}
                                onChange={handleImageChange4}
                                fullWidth
                                variant="standard"
                                label="Photo 4"
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                                //classes={{ root: classes.textFieldRoot }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <PhotoCameraIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <br></br>
                              <br></br>
                              <TextField
                                type="file"
                                name="photo5"
                                inputProps={{ accept: "image/*" }}
                                onChange={handleImageChange5}
                                fullWidth
                                variant="standard"
                                label="Photo 5"
                                InputLabelProps={{
                                  classes: {
                                    //root: classes.label,
                                    //focused: classes.label,
                                  },
                                }}
                                //classes={{ root: classes.textFieldRoot }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <PhotoCameraIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                   
             </Box>
             <br></br>
             <Box sx={{border:'1px solid gray',p:5,boxShadow:2}}>
                      <List sx={{ width: "100%", maxWidth: 360 }}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                  
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="height-label">Height</InputLabel>
                            <Select
                              id="height"
                              labelId="height-label"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                              label="Height"
                            >
                              <MenuItem value="< 4 feet">
                                less than 4 feet
                              </MenuItem>
                              <MenuItem value="4 feet 0 inch">
                                4 feet 0 inch
                              </MenuItem>
                              <MenuItem value="4 feet 1 inch">
                                4 feet 1 inch
                              </MenuItem>
                              <MenuItem value="4 feet 2 inch">
                                4 feet 2 inch
                              </MenuItem>
                              <MenuItem value="4 feet 3 inch">
                                4 feet 3 inch
                              </MenuItem>
                              <MenuItem value="4 feet 4 inch">
                                4 feet 4 inch
                              </MenuItem>
                              <MenuItem value="4 feet 5 inch">
                                4 feet 5 inch
                              </MenuItem>
                              <MenuItem value="4 feet 6 inch">
                                4 feet 6 inch
                              </MenuItem>
                              <MenuItem value="4 feet 7 inch">
                                4 feet 7 inch
                              </MenuItem>
                              <MenuItem value="4 feet 8 inch">
                                4 feet 8 inch
                              </MenuItem>
                              <MenuItem value="4 feet 9 inch">
                                4 feet 9 inch
                              </MenuItem>
                              <MenuItem value="4 feet 10 inch">
                                4 feet 10 inch
                              </MenuItem>
                              <MenuItem value="4-11">4 feet 11 inch</MenuItem>
                              <MenuItem value="5 feet 0 inch">
                                5 feet 0 inch
                              </MenuItem>
                              <MenuItem value="5 feet 1 inch">
                                5 feet 1 inch
                              </MenuItem>
                              <MenuItem value="5 feet 2 inch">
                                5 feet 2 inch
                              </MenuItem>
                              <MenuItem value="5 feet 3 inch">
                                5 feet 3 inch
                              </MenuItem>
                              <MenuItem value="5 feet 4 inch">
                                5 feet 4 inch
                              </MenuItem>
                              <MenuItem value="5 feet 5 inch">
                                5 feet 5 inch
                              </MenuItem>
                              <MenuItem value="5 feet 6 inch">
                                5 feet 6 inch
                              </MenuItem>
                              <MenuItem value="5 feet 7 inch">
                                5 feet 7 inch
                              </MenuItem>
                              <MenuItem value="5 feet 8 inch">
                                5 feet 8 inch
                              </MenuItem>
                              <MenuItem value="5 feet 9 inch">
                                5 feet 9 inch
                              </MenuItem>
                              <MenuItem value="5 feet 10 inch">
                                5 feet 10 inch
                              </MenuItem>
                              <MenuItem value="5 feet 11 inch">
                                5 feet 11 inch
                              </MenuItem>
                              <MenuItem value="6 feet 0 inch">
                                6 feet 0 inch
                              </MenuItem>
                              <MenuItem value="6 feet 1 inch">
                                6 feet 1 inch
                              </MenuItem>
                              <MenuItem value="6 feet 2 inch">
                                6 feet 2 inch
                              </MenuItem>
                              <MenuItem value="6 feet 3 inch">
                                6 feet 3 inch
                              </MenuItem>
                              <MenuItem value="6 feet 4 inch">
                                6 feet 4 inch
                              </MenuItem>
                              <MenuItem value="6 feet 5 inch">
                                6 feet 5 inch
                              </MenuItem>
                              <MenuItem value="6 feet 6 inch">
                                6 feet 6 inch
                              </MenuItem>
                              <MenuItem value="6 feet 7 inch">
                                6 feet 7 inch
                              </MenuItem>
                              <MenuItem value="6 feet 8 inch">
                                6 feet 8 inch
                              </MenuItem>
                              <MenuItem value="6 feet 9 inch">
                                6 feet 9 inch
                              </MenuItem>
                              <MenuItem value="6 feet 10 inch">
                                6 feet 10 inch
                              </MenuItem>
                              <MenuItem value="6 feet 11 inch">
                                6 feet 11 inch
                              </MenuItem>
                              <MenuItem value="7 feet >">
                                {" "}
                                Greater than 7 feet
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Weight"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            fullWidth
                            type="number"
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="physical-status-label">
                              Physical Status
                            </InputLabel>
                            <Select
                              id="phisical_Status"
                              labelId="physical-status-label"
                              value={physicalStatus}
                              onChange={(e) =>
                                setPhysicalStatus(e.target.value)
                              }
                              label="Physical Status"
                            >
                              <MenuItem value="Normal">Normal</MenuItem>
                              <MenuItem value="Physically Challanged">
                                Physically Challenged
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="body-type-label">
                              Body Type
                            </InputLabel>
                            <Select
                              id="body_type"
                              labelId="body-type-label"
                              value={bodyType}
                              onChange={(e) => setBodyType(e.target.value)}
                              label="Body Type"
                            >
                              <MenuItem value="Slim">Slim</MenuItem>
                              <MenuItem value="Athletic">Athletic</MenuItem>
                              <MenuItem value="Average">Average</MenuItem>
                              <MenuItem value="Heavy">Heavy</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="complexion-label">
                              Complexion
                            </InputLabel>
                            <Select
                              id="complexion"
                              labelId="complexion-label"
                              value={complexion}
                              onChange={(e) => setComplexion(e.target.value)}
                              label="Complexion"
                            >
                              <MenuItem value="Fair">Fair</MenuItem>
                              <MenuItem value="Very Fair">Fair</MenuItem>
                              <MenuItem value="Average">Average</MenuItem>
                              <MenuItem value="Below Average">
                                Below Average
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="food-habit-label">
                              Food Habit
                            </InputLabel>
                            <Select
                              id="food_habit"
                              labelId="food-habit-label"
                              value={foodHabit}
                              onChange={(e) => setFoodHabit(e.target.value)}
                              label="Food Habit"
                            >
                              <MenuItem value="Veg">Vegetarian</MenuItem>
                              <MenuItem value="Non Veg">
                                Non-Vegetarian
                              </MenuItem>
                              <MenuItem value="Eggetarian">Eggetarian</MenuItem>
                              <MenuItem value="Vegan">Vegan</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                   </Box>
              
                      <List sx={{ width: "100%", maxWidth: 360 }}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                 
                      <Grid container spacing={3}>
                        {" "}
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Father's Name"
                            value={fatherName}
                            id="father_name"
                            onChange={(e) => setFatherName(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            id="father_job"
                            size="small"
                            label="Father's Job"
                            value={fatherJob}
                            onChange={(e) => setFatherJob(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            id="mother_name"
                            size="small"
                            label="Mother's Name"
                            value={motherName}
                            onChange={(e) => setMotherName(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            id="mother_job"
                            size="small"
                            label="Mother's Job"
                            value={motherJob}
                            onChange={(e) => setMotherJob(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            id="no_of_brother"
                            label="Number of Brothers"
                            value={noOfBrother}
                            onChange={(e) => setNoOfBrother(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            id="no_of_sister"
                            label="Number of Sisters"
                            value={noOfSister}
                            onChange={(e) => setNoOfSister(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            id="brother_married"
                            label="Brother's Married"
                            value={brotherMarried}
                            onChange={(e) => setBrotherMarried(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            id="sister_married"
                            label="Sister's Married"
                            value={sisterMarried}
                            onChange={(e) => setSisterMarried(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                   

                 
                      <List sx={{ width: "100%", maxWidth: 360 }}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                  
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="educational_qualification"
                            label="Educational Qualification"
                            value={educationalQualification}
                            onChange={(e) =>
                              setEducationalQualification(e.target.value)
                            }
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="job"
                            label="Job"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="income_per_month"
                            label="Income per Month"
                            value={incomePerMonth}
                            onChange={(e) => setIncomePerMonth(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    

               
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                  
                      <Grid container spacing={3}>
                        {" "}
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="religious-label">
                              Religious
                            </InputLabel>
                            <Select
                              labelId="religious-label"
                              id="Religious"
                              value={religious}
                              onChange={(e) => setReligious(e.target.value)}
                              label="Religious"
                            >
                              <MenuItem value="hindu">Hindu</MenuItem>
                              <MenuItem value="muslim">Muslim</MenuItem>
                              <MenuItem value="christian">Christian</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Caste-label">Caste</InputLabel>
                            <Select
                              id="Caste"
                              labelId="Caste-label"
                              value={caste}
                              //onChange={(e) => setCaste(e.target.value)}
                              onChange={handleCasteChange}
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
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {caste && (
                            <FormControl
                              fullWidth
                              variant="standard"
                              size="small"
                              //className={classes.select}
                            >
                              <InputLabel id="subcaste-label">
                                Subcaste
                              </InputLabel>
                              <Select
                                labelId="subcaste-label"
                                id="Sub_Caste"
                                value={subcaste}
                                label="Subcaste"
                                onChange={(e) => setSubcaste(e.target.value)}
                              >
                                {subcasteOptions[caste].map((option) => (
                                  <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="Gothram"
                            label="Gothram"
                            value={gothram}
                            onChange={(e) => setGothram(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="lagnam-label">Lagnam</InputLabel>
                            <Select
                              labelId="lagnam-label"
                              id="Lagnam"
                              value={Lagnam}
                              onChange={(e) => setLagnam(e.target.value)}
                              label="Lagnam"
                            >
                              <MenuItem value="Mesam">Mesam</MenuItem>
                              <MenuItem value="Rishabam">Rishabam</MenuItem>
                              <MenuItem value="Mithunam">Mithunam</MenuItem>
                              <MenuItem value="Kadagam">Kadagam</MenuItem>
                              <MenuItem value="Simmam">Simmam</MenuItem>
                              <MenuItem value="Kanni">Kanni</MenuItem>
                              <MenuItem value="Thulam">Thulam</MenuItem>
                              <MenuItem value="Viruchagam">Viruchagam</MenuItem>
                              <MenuItem value="Dhanusu">Dhanusu</MenuItem>
                              <MenuItem value="Magaram">Magaram</MenuItem>
                              <MenuItem value="Kumbam">Kumbam</MenuItem>
                              <MenuItem value="Meenam">Meenam</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="raasi-label">Raasi</InputLabel>
                            {/* <Select
labelId="raasi-label"
id="Raasi"
value={raasi}
onChange={(e) => setRaasi(e.target.value)}
label="Raasi"
>
<MenuItem value="hindu">Hindu</MenuItem>
<MenuItem value="muslim">Muslim</MenuItem>
</Select> */}
                            <Select
                              labelId="raasi-label"
                              id="Raasi"
                              value={raasi}
                              onChange={(e) => setRaasi(e.target.value)}
                              label="Raasi"
                            >
                              <MenuItem value="Mesam">Mesam</MenuItem>
                              <MenuItem value="Rishabam">Rishabam</MenuItem>
                              <MenuItem value="Mithunam">Mithunam</MenuItem>
                              <MenuItem value="Kadagam">Kadagam</MenuItem>
                              <MenuItem value="Simmam">Simmam</MenuItem>
                              <MenuItem value="Kanni">Kanni</MenuItem>
                              <MenuItem value="Thulam">Thulam</MenuItem>
                              <MenuItem value="Viruchagam">Viruchagam</MenuItem>
                              <MenuItem value="Dhanusu">Dhanusu</MenuItem>
                              <MenuItem value="Magaram">Magaram</MenuItem>
                              <MenuItem value="Kumbam">Kumbam</MenuItem>
                              <MenuItem value="Meenam">Meenam</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="star-label">Star</InputLabel>
                            <Select
                              labelId="star-label"
                              id="Star"
                              value={star}
                              onChange={(e) => setStar(e.target.value)}
                              label="Star"
                            >
                              <MenuItem value="Ashwini">Ashwini</MenuItem>
                              <MenuItem value="Bharani">Bharani</MenuItem>
                              <MenuItem value="Krittika">Krittika</MenuItem>
                              <MenuItem value="Rohini">Rohini</MenuItem>
                              <MenuItem value="Mrighasira">Mrighasira</MenuItem>
                              <MenuItem value="Thiruvadhirai">
                                Thiruvadhirai
                              </MenuItem>
                              <MenuItem value="Punarpoosam">
                                Punarpoosam
                              </MenuItem>
                              <MenuItem value="Poosam">Poosam</MenuItem>
                              <MenuItem value="Ayilyam">Ayilyam</MenuItem>
                              <MenuItem value="Magam">Magam</MenuItem>
                              <MenuItem value="Pooram">Pooram</MenuItem>
                              <MenuItem value="Uthiram">Uthiram</MenuItem>
                              <MenuItem value="Astham">Astham</MenuItem>
                              <MenuItem value="Chitrai">Chitrai</MenuItem>
                              <MenuItem value="Swathi">Swathi</MenuItem>
                              <MenuItem value="Visagam">Visagam</MenuItem>
                              <MenuItem value="Ausham">Ausham</MenuItem>
                              <MenuItem value="Kettai">Kettai</MenuItem>
                              <MenuItem value="Moolam">Moolam</MenuItem>
                              <MenuItem value="Pooradam">Pooradam</MenuItem>
                              <MenuItem value="Uthradam">Uthradam</MenuItem>
                              <MenuItem value="Thiruvonam">Thiruvonam</MenuItem>
                              <MenuItem value="Avittam">Avittam</MenuItem>
                              <MenuItem value="Sathayam">Sathayam</MenuItem>
                              <MenuItem value="Poorattathi">
                                Poorattathi
                              </MenuItem>
                              <MenuItem value="Utharattadhi">
                                Utharattadhi
                              </MenuItem>
                              <MenuItem value="Revathi">Revathi</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Raasi_Image">Raasi</InputLabel>
                            <OutlinedInput
                              labelId="Raasi_Image"
                              id="Raasi_Image"
                              type="file"
                              name="Raasi_Image"
                              //className={classes.select}
                              inputProps={{ accept: "image/*" }}
                              startAdornment={
                                <InputAdornment position="start">
                                  <PhotoCameraIcon />
                                </InputAdornment>
                              }
                              onChange={handleImageChange6}
                              fullWidth
                              //margin="normal"
                              variant="standard"
                              label="Raasi"
                              InputLabelProps={{
                                classes: {
                                  //root: classes.label,
                                  //focused: classes.label,
                                },
                              }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Navamsam_Image">
                              Navamsam Image
                            </InputLabel>
                            <OutlinedInput
                              labelId="Navamsam_Image"
                              id="Navamsam_Image"
                              type="file"
                              name="Navamsam_Image"
                              //className={classes.select}
                              inputProps={{ accept: "image/*" }}
                              startAdornment={
                                <InputAdornment position="start">
                                  <PhotoCameraIcon />
                                </InputAdornment>
                              }
                              onChange={handleImageChange7}
                              fullWidth
                              //margin="normal"
                              variant="standard"
                              label="Navamsam Image"
                              InputLabelProps={{
                                classes: {
                                  //root: classes.label,
                                  //focused: classes.label,
                                },
                              }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="Dosa"
                            id="Dosa"
                            value={dosa}
                            onChange={(e) => setDosa(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                  

              
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                 
                      <Grid container spacing={3}>
                        {" "}
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Contact Person"
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                            fullWidth
                            id="contact_person"
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Contact Number"
                            id="contact_No"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            fullWidth
                            type="tel"
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            id="whatsApp"
                            label="WhatsApp Number"
                            value={whatsApp}
                            onChange={(e) => setWhatsApp(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            type="tel"
                            InputLabelProps={{
                              pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="Address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="City"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="District"
                            id="district"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                              labelId="state-label"
                              id="state"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              label="State"
                            >
                              <MenuItem value="Andhra Pradesh">
                                Andhra Pradesh
                              </MenuItem>
                              <MenuItem value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </MenuItem>
                              <MenuItem value="Assam">Assam</MenuItem>
                              <MenuItem value="Bihar">Bihar</MenuItem>
                              <MenuItem value="Chhattisgarh">
                                Chhattisgarh
                              </MenuItem>
                              <MenuItem value="Goa">Goa</MenuItem>
                              <MenuItem value="Gujarat">Gujarat</MenuItem>
                              <MenuItem value="Haryana">Haryana</MenuItem>
                              <MenuItem value="Himachal Pradesh">
                                Himachal Pradesh
                              </MenuItem>
                              <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                              <MenuItem value="Karnataka">Karnataka</MenuItem>
                              <MenuItem value="Kerala">Kerala</MenuItem>
                              <MenuItem value="Madhya Pradesh">
                                Madhya Pradesh
                              </MenuItem>
                              <MenuItem value="Maharashtra">
                                Maharashtra
                              </MenuItem>
                              <MenuItem value="Manipur">Manipur</MenuItem>
                              <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                              <MenuItem value="Mizoram">Mizoram</MenuItem>
                              <MenuItem value="Nagaland">Nagaland</MenuItem>
                              <MenuItem value="Odisha">Odisha</MenuItem>
                              <MenuItem value="Punjab">Punjab</MenuItem>
                              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                              <MenuItem value="Sikkim">Sikkim</MenuItem>
                              <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                              <MenuItem value="Telangana">Telangana</MenuItem>
                              <MenuItem value="Tripura">Tripura</MenuItem>
                              <MenuItem value="Uttar Pradesh">
                                Uttar Pradesh
                              </MenuItem>
                              <MenuItem value="Uttarakhand">
                                Uttarakhand
                              </MenuItem>
                              <MenuItem value="West Bengal">
                                West Bengal
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                  

              
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}
                            >
                              <PersonAddAltOutlinedIcon
                                sx={{ fontSize: "20px", fontWeight: "bold" }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold", color: "#344767" }}
                            >
                              Personal Information
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </List>
                    
                      <Grid container spacing={3}>
                        {" "}
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Age"
                            id="age"
                            value={expage}
                            onChange={(e) => setExpage(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          >
                            <InputLabel id="mother-tongue-label">
                              Mother Tongue
                            </InputLabel>
                            <Select
                              labelId="mother-tongue-label"
                              value={explanguage}
                              onChange={(e) => setExplanguage(e.target.value)}
                              label="Mother Tongue"
                              //className={classes.select}
                              InputLabelProps={{
                                classes: {
                                  //root: classes.label,
                                  //focused: classes.label,
                                },
                              }}
                            >
                              <MenuItem value="Tamil">Tamil</MenuItem>
                              <MenuItem value="Telugu">Telugu</MenuItem>
                              <MenuItem value="Malayalam">Malayalam</MenuItem>
                              <MenuItem value="Kannada">Kannada</MenuItem>
                              <MenuItem value="Hindi">Hindi</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                              {/* add more options here */}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Maritual-Status">
                              Maritual Status
                            </InputLabel>
                            <Select
                              labelId="Maritual-Status"
                              value={expmaritalStatus}
                              onChange={(e) =>
                                setExpMaritalStatus(e.target.value)
                              }
                              label="Mother Tongue"
                            >
                              <MenuItem value="Unmarried">Unmarried</MenuItem>
                              <MenuItem value="Divorced">Divorced</MenuItem>
                              <MenuItem value="Widowed">Widowed</MenuItem>
                              <MenuItem value="Waiting For Divorce">
                                Waiting For Divorce
                              </MenuItem>

                              {/* add more options here */}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          <TextField
                            size="small"
                            label="Educational Qualification"
                            value={expeducationalQualification}
                            onChange={(e) =>
                              setExpEducationalQualification(e.target.value)
                            }
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="Job"
                            value={expjob}
                            onChange={(e) => setExpJob(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="Income per Month"
                            value={expincomePerMonth}
                            onChange={(e) =>
                              setExpIncomePerMonth(e.target.value)
                            }
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Caste-label">Caste</InputLabel>
                            <Select
                              labelId="Caste-label"
                              value={expcaste}
                              onChange={(e) => setExpCaste(e.target.value)}
                              label="Caste"
                            >
                              <MenuItem value="Mudaliyar">Mudaliyar</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Subcaste-label">
                              SubCaste
                            </InputLabel>
                            <Select
                              labelId="Subcaste-label"
                              value={expsubcaste}
                              onChange={(e) => setExpSubcaste(e.target.value)}
                              label="Caste"
                            >
                              <MenuItem value="Sengunthar">Sengunthar</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <TextField
                            size="small"
                            label="Gothram"
                            value={expgothram}
                            onChange={(e) => setExpGothram(e.target.value)}
                            fullWidth
                            variant="standard"
                            //className={classes.input}
                            InputLabelProps={{
                              classes: {
                                //root: classes.label,
                                //focused: classes.label,
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                          {" "}
                          <FormControl
                            fullWidth
                            variant="standard"
                            size="small"
                            //className={classes.select}
                          >
                            <InputLabel id="Star-label">State</InputLabel>
                            <Select
                              labelId="Star"
                              value={expstar}
                              onChange={(e) => setExpStar(e.target.value)}
                              label="Star"
                            >
                              <MenuItem value="Aayilyam">Aayilyam</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>{" "}
                      </Grid>
                  

                  {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <List>
        <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}>
                <PersonAddAltOutlinedIcon sx={{ fontSize: "20px", fontWeight: "bold" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5" sx={{fontWeight:'bold',color:'#344767'}}>Personal Information</Typography>
            </ListItemText>
          </ListItem>
        </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <List>
        <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#1A73E8", fontWeight: "bold" }}>
                <PersonAddAltOutlinedIcon sx={{ fontSize: "20px", fontWeight: "bold" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5" sx={{fontWeight:'bold',color:'#344767'}}>Personal Information</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <br></br>

        <Grid container spacing={3}> 
        </Grid> */}
                </form>
                {/* <Grid container direction="row">
                
                <Box
                  width="100%"
                  bgColor="white"
                  borderRadius="20"
                  boxShadow="10"
                  mb={6}
                  sx={{ overflow: "hidden" }}
                >
                 
                    
                  
                      <Box component="form" p={2} method="post">
                        <Box px={3} py={{ xs: 2, sm: 6 }}>
                          <Typography
                            variant="h4"
                            mb={1}
                            sx={{
                              fontFamily: "Poppins",
                              color: "#344767",
                              fontWeight: "bold",
                            }}
                          >
                           Personal Info
                          </Typography>
                          
                        </Box>
                  
                      </Box>
                    
                 
                </Box>
              </Grid> */}
              </Container>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepform;
