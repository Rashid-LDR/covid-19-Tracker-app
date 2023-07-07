import React from 'react'
import {Card,CardContent,Typography,Grid} from "@mui/material"
import styles from './Cards.module.css'
import CountUp from 'react-countup';


function Cards({data:{cases,deaths,recovered}}) {
// console.log(cases)
if(!cases)
{
  return "Loading...";
}
if(!deaths)
{
  return "Loading...";
}
if(!recovered)
{
  return "Loading...";
}

  return (
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Cases</Typography>
              <Typography  variant='h5'>
                <CountUp
                  start={0}
                  end={cases}
                  duration={2.5}
                  separator=','
                
                />
              </Typography>
              <Typography color="textSecondary">cases</Typography>
              <Typography  variant='body2'>Number of Cases of COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography  variant='h5'><CountUp
                  start={0}
                  end={deaths}
                  duration={2.5}
                  separator=','
                
                /></Typography>
              <Typography color="textSecondary">Real data</Typography>
              <Typography  variant='body2'>Number of Death of COVID-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovery</Typography>
              <Typography  variant='h5'><CountUp
                  start={0}
                  end={recovered}
                  duration={2.5}
                  separator=','
                
                /></Typography>
              <Typography color="textSecondary">Real data</Typography>
              <Typography  variant='body2'>Number of Recovery of COVID-19</Typography>
            </CardContent>
          </Grid>
        </Grid>      
    </div>
  )
}

export default Cards;
