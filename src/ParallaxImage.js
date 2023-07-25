import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  parallaxContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '400px', // Adjust this height as per your requirement
  },
  parallaxImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
    zIndex: '-1',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translate(-50%, -50%) scale(1.1)', // Adjust the scale value for desired zoom effect
    },
  },
}));

const ParallaxImage = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} className={classes.parallaxContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA83LgMlYCp_mSDd1LQWDQbg8qktqOsZ1lfUKtSOsfA&usqp=CAU&ec=48665701"
          alt="Parallax mage"
          className={classes.parallaxImage}
        />
        
      </Grid>
      <Grid item xs={12} className={classes.parallaxContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA83LgMlYCp_mSDd1LQWDQbg8qktqOsZ1lfUKtSOsfA&usqp=CAU&ec=48665701"
          alt="Parallax mage"
          className={classes.parallaxImage}
        />
        
      </Grid>
    </Grid>
  );
};

export default ParallaxImage;
