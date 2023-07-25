import { Button, Grid, Paper, Stack, TextField, Link } from "@mui/material";
import { Box, Divider, Typography } from "@mui/material";
// react-router-dom components
//import { Link } from "react-router-dom";

// @mui material components
//import Switch from "@mui/material/Switch";
//import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React from "react";

import bgImage from "./assets/main/logincover.jpg";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Extract the reset token from the URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    // Send the password update request to the backend
    // You can make an API call here to update the password using the token and the new password.
    // Replace the alert with appropriate success/failure handling.
    alert('Password update successful.');

    // Redirect to the login page or any other appropriate page after successful password update.
    navigate('/login');
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
            >  <Typography sx={{color:'black'}}>Reset Password</Typography></Box>
       
          <Box pt={2} pb={3} px={3}>
            
            <Box component="form" role="form">
              <Box mb={2}>
              <TextField
          fullWidth
          label="New Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          margin="normal"
          required
          size="small"
        />
              </Box>
              <Box mb={2}>
              <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          variant="outlined"
          margin="normal"
          required
          error={!!passwordError}
          helperText={passwordError}
          size="small"
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
                Update
                </Button>
                
              </Box>
              <br></br>
              <Divider></Divider>
              {/* <Typography variant="caption" sx={{color:'black'}}>You Don't have an account please <Link href="/register3" sx={{color:'info'}}>Register with us.</Link></Typography> */}
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
