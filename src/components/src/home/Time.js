import React from 'react';
import { useTimer } from 'react-timer-hook';
import {Box,Button,Grid,Container} from '@mui/material';
import { styled } from "@mui/material/styles"
import Typography from '@mui/material/Typography';

const ProfileSection = styled('div')(({ theme }) => ({
    '& .time':{
        color:"white",
        fontSize: '100px',
      },
    [theme.breakpoints.down('xl')]: {
        
        '& .time':{
          color:"white",
          fontSize: '70px',
        },
      },
}))


function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <ProfileSection> 
      
      <Grid container justifyContent="center" >
        <Grid item lg={1} md={1} sm={2} xs={3} >
        <Typography variant="h6" color="secondary"  textAlign="center" component="div" gutterBottom>
            Days
            </Typography>
            <Typography variant="h4" className="time" color="secondary"  textAlign="center" component="div" gutterBottom>
            {days} <span style={{ float:"right"}} >:</span>
            </Typography>
        </Grid>

        <Grid item lg={1} md={1} sm={2} xs={3} >
        <Typography variant="h6" color="secondary"  textAlign="center" component="div" gutterBottom>
        Hours
            </Typography>
            <Typography variant="h4" className="time" color="secondary"  textAlign="center" component="div" gutterBottom>
            {hours} <span style={{ float:"right"}} >:</span>
            </Typography>
        </Grid>
        <Grid item lg={1} md={1} sm={2} xs={3} >
        <Typography variant="h6" color="secondary"  textAlign="center" component="div" gutterBottom>
        Minutes
            </Typography>
            <Typography variant="h4" className="time" color="secondary"  textAlign="center" component="div" gutterBottom>
            {minutes} <span style={{ float:"right"}} >:</span>
            </Typography>
        </Grid>
        <Grid item lg={1}  md={1} sm={2} xs={3} >
        <Typography variant="h6" color="secondary"  textAlign="center" component="div" gutterBottom>
            Seconds
            </Typography>
            <Typography variant="h4" className="time" color="secondary"  textAlign="center" component="div" gutterBottom>
            {seconds} 
            </Typography>
        </Grid>      </Grid>
    
    </ProfileSection>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 155200); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}