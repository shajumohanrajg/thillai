import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Grid, Paper, Stack, TextField, Link } from "@mui/material";
import { Box, Divider, Typography } from "@mui/material";
// react-router-dom components
//import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
//import Switch from "@mui/material/Switch";
//import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import Axios from "axios";
import React from "react";

import bgImage from "./assets/main/logincover.jpg";
import {Password} from '@mui/icons-material';
import  { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
  },
  paper: {
    padding: theme.spacing(4),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Perform basic email validation
    if (emailValue === '') {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate the API call for the "Forgot Password" request.
    // Replace this with an actual API call to your backend.
    console.log('Forgot Password Request:', email);

    // Simulate a successful response after 1.5 seconds
    setTimeout(() => {
      alert(`A reset password link has been sent to ${email}.`);
    }, 1500);
  };

  return (
    <div className={classes.root}>
      <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
        <Paper
          elevation={3}
          className={classes.paper}
          sx={{ color: "white", borderRadius: 3 }}
        >
          <Box
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            //coloredShadow="info"
            mx={2}
            mt={-7}
            p={2}
            mb={1}
            textAlign="center"
            sx={{
              //background: "linear-gradient(195deg, #49a3f1, #1A73E8)",
              background:"linear-gradient(90deg, #eac77b, #b48811);",
              color: "white",
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="medium"
              color="white"
              mt={1}
              sx={{ color: "" }}
            >
             TMS
            </Typography>
          
          </Box>
          <Box
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            //coloredShadow="info"
           
            p={1}
            
            textAlign="center"
            >  <Typography sx={{color:'black'}}>Forgot Password?</Typography></Box>
       
          <Box pt={2} pb={3} px={3}>
            
            <Box component="form" role="form">
              <Box mb={2}>
              <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          margin="normal"
          required
          error={!!emailError}
          helperText={emailError}
        />
              </Box>
              
         
              <Box mt={4} mb={1}>
                <Button
                  variant="contained"
                  onSubmit={handleSubmit}
                  //color="info"
                  type="submit"
                  fullWidth
                  sx={{background:"linear-gradient(90deg, #eac77b, #b48811);",}}
                  //onClick={handleSubmit}
                >
                  Submit
                </Button>
                
              </Box>
              <br></br>
              <Divider></Divider>
              <Typography variant="caption" sx={{color:'black'}}>You Don't have an account please <Link href="/register3" sx={{color:'info'}}>Register with us.</Link></Typography>
              <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
                {/* <Link variant="standard" >Register Here.</Link> */}
                <Link variant="standard" href="/login"><Typography variant="caption" sx={{textDecoration:'none'}}>Login?</Typography></Link>
              </Stack>
             
            </Box>
          </Box>
         
        </Paper>
      </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
