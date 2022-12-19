import React from "react";
import { Grid, Typography } from "@mui/material";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <Grid container spacing={1}>
        <Grid item  md={6}></Grid>
        <Grid item md={6} className="main">
          <Typography variant="h1">
            Take Flight! The Dragon Isles Await
          </Typography>
          <Typography>
            Dragonflight is now live! Join us in the Dragon Isles and battle
            your way to level 70. Join the fray as the new Dracthyr Evoker,
            explore the ancestral home of the dragonflights of Azeroth, and
            enter a new age of adventure today!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
