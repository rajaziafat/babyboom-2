import React from 'react'
import {Box,Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Time from './Time'
import { styled } from "@mui/material/styles"

const ProfileSection = styled('div')(({ theme }) => ({

    [theme.breakpoints.down('xl')]: {
        
        '& .btn-discoard':{
          width:"161px",
          height:"40px",
          fontSize:"19px",
        },
      },
}))

export default function Timer() {
  
    return (
        <>
        <ProfileSection>
        <Box pt={20} >
           <Typography variant="h1" color="secondary"  textAlign="center" component="div" gutterBottom>
           WHITELIST
      </Typography> 
      </Box>
      <Box textAlign="center" >
      <Time/>
      </Box>
      <Box textAlign="center" ><Button color="inherit" variant="contained" sx={{
             width:"177px",
             height:"47px",
             background:"#171827",
             boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
             borderRadius:"10px",
             fontFamily:"Semplicita-Bold",
             color:"#FFFFFF",   
             fontSize:"30px", 

          }}  className="btn-discoard" > Mint</Button></Box>
            </ProfileSection>
        </>
    )
}
