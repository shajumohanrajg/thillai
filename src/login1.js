import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
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
              Sign in
            </Typography>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ mt: 1, mb: 2 }}
            >
              <Grid item xs={2}>
                <Typography
                  component={MuiLink}
                  href="#"
                  variant="body1"
                  color="white"
                >
                  <FacebookIcon color="inherit" />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  component={MuiLink}
                  href="#"
                  variant="body1"
                  color="white"
                >
                  <GitHubIcon color="inherit" />
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  component={MuiLink}
                  href="#"
                  variant="body1"
                  color="white"
                >
                  <GoogleIcon color="inherit" />
                </Typography>
              </Grid>
            </Grid>
          </Box>
          
     

          <Box pt={4} pb={3} px={3}>
            
            <Box component="form" role="form">
              <Box mb={2}>
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  size="medium"
                  //value={username}
                  //onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  type="password"
                  label="Password"
                  fullWidth
                  size="medium"
                  // value={password}
                  //onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
         
              {/* <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox> */}
              <Box mt={4} mb={1}>
                <Button
                  variant="contained"
                  //color="info"
                  fullWidth
                  sx={{background:"linear-gradient(90deg, #eac77b, #b48811);",}}
                  //onClick={handleSubmit}
                >
                  sign in
                </Button>
                
              </Box>
              <Divider></Divider>
              <Typography variant="caption" sx={{color:'black'}}>You Dont have an account please <span sx={{color:'info'}}>Register with us.</span></Typography>
            </Box>
          </Box>
         
        </Paper>
      </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
