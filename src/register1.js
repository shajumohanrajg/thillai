import React from "react";

import { Box, Container, Typography,Grid, TextField,Select,MenuItem,FormControl,InputLabel, IconButton} from "@mui/material";

import SecondaryButton from "./components/secondary-button/SecondaryButton";
import aboutUsImg from "./assets/main/about-us-img.svg";
import bgImage from "./blog2.jpg";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const AboutUs = () => {
  return (
    <Box component="section" py={{ xs: 0, lg: 6 }}>
      <Container
        // disableGutters
        // maxWidth="lg"
        // sx={{
        //   px: {
        //     xs: 2,
        //     sm: 5,
        //     md: 3.5,
        //   },
        //   my: 15,
        //   borderRadius: 5,
        //   boxShadow: 2,
        // }}
      >
        <Grid container item>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              gap: 4,
              alignItems: "center",
            }}
          > */}
            <Box
            width="100%"
            bgColor="white"
            borderRadius="10"
            boxShadow="10"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
             <Grid container spacing={2}>
             {/* <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}

                sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.dark.main, 0.8),
                        rgba(gradients.dark.state, 0.8)
                      )}, url(${bgImage})`,
                    backgroundSize: "cover",
                  }}
              
              >  */}
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
                <Typography variant="h5" color="white" mb={1}  sx={{
                  fontFamily: "Poppins",}}>
                  Contact Information
                </Typography>
                <Typography variant="body2" color="white" opacity={0.8} mb={3} sx={{
                  fontFamily: "Poppins",}}>
                  Fill up the form and our Team will get back to you within 24 hours.
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
                        fontFamily: "Poppins",}}
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
                        fontFamily: "Poppins",}}
                  >
                   Cheyyar
                  </Typography>
                </Box>
                <Box mt={3}>
                      <IconButton variant="text" color="white" size="large">
                        {/* <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /> */}
                        <FacebookOutlinedIcon color="white"/>
                      </IconButton>
                      <IconButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </IconButton>
                      <IconButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </IconButton>
                      <IconButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </IconButton>
                    </Box>
                </Box>
                </Box></Grid>
                <Grid item xs={12} lg={7}>
                <Box component="form" p={2} method="post">
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h2" mb={1} sx={{
                        fontFamily: "Poppins",}}>
                      Say Hi!
                    </Typography>
                    <Typography variant="body1" color="text" mb={2} sx={{
                        fontFamily: "Poppins",}}>
                      We&apos;d like to talk with you.
                    </Typography>
                  </Box>
                  <Box pt={0.5} pb={3} px={3} sx={{
                        fontFamily: "Poppins",}}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <TextField sx={{
                        fontFamily: "Poppins",}}
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <TextField
                          variant="standard"
                          label="I'm looking for"
                          placeholder="What you love"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={4} md={10}>
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
                                  //value={gender}
                                  //className={classes.select1}
                                  placeholder="Full Name"
                                  //onChange={(e) => setGender(e.target.value)}
                                  label="Gender"
                                  //sx={styles.select}
                                >
                                  <MenuItem value="Male">Male</MenuItem>
                                  <MenuItem value="Female">Female</MenuItem>
                                </Select>
                              </FormControl>
                           
                            </Grid>
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
};

export default AboutUs;
