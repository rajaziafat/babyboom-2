import React from 'react'
import {Box,Button,Grid,Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Baby1 from '../../../assets/images/baby6 1.png'
import Baby2 from '../../../assets/images/baby1 10.17 1.png'
import Baby3 from '../../../assets/images/baby2 10.17 1.png'
import Baby4 from '../../../assets/images/baby4 10.17 1.png'
import Baby5 from '../../../assets/images/baby3 10.17 1.png'


import { styled } from "@mui/material/styles"

const ProfileSection = styled('div')(({ theme }) => ({
        '& .reconstruct':{
            fontFamily:"Semplicita-Bold",
        },
        [theme.breakpoints.down('xl')]: {
            '& .img-setting':{
                width:"140px",
                height:"140px",
            },
            
            '& .babyred':{
                top:"100px",
                left:"100px"
            },
          },
          [theme.breakpoints.down('md')]: {
          
            '& .babyred':{
                display:"none",
            },
          },
        
    
}))

export default function Welcome() {
    return (
        <ProfileSection>
            <Box py={3} >   <Typography variant="h2" color="secondary"  textAlign="center" component="div" gutterBottom>
            WELCOME !
      </Typography> </Box>
        <Container>
            <Grid container  >
            <Grid item lg={8} md={7} sm={12} xs={12}>
            <Box py={1} >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
            Welcome to the Baby Boom Club, a family of 9999 adorables babies that can save the world.
      </Typography> </Box>
      <Box py={1} >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Following the global warming, only two humans survived : Adam & Eve. They made a special Baby Boom and 9999 babies were born.
      </Typography> </Box>
      <Box py={1} >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Their mission :<span className="reconstruct" > reconstruct the humanity </span> 
      </Typography> </Box>
            </Grid>
            <Grid item lg={1} md={1} ></Grid>
            <Grid item lg={3} md={4} sm={12} xs={12} >
                <Box sx={{position:"relative"}} >
            <Grid container spacing={1} >
            <Grid item lg={6}  md={6} sm={3} xs={6} >
            <Box component="img" padding={1} border="1px solid #8A8A8A " className="img-setting" src={Baby1} width="190px" height="190px"  />
            </Grid>
            <Grid item lg={6}  md={6} sm={3} xs={6} >
            <Box component="img" padding={1} border="1px solid #8A8A8A " className="img-setting" src={Baby2} width="190px" height="190px"  />
            </Grid>
            
            <Grid item lg={6}  md={6} sm={3} xs={6} >
            <Box component="img" padding={1} border="1px solid #8A8A8A "   className="img-setting"src={Baby3} width="190px" height="190px"  />
            </Grid>
            <Grid item lg={6}  md={6} sm={3} xs={6} >
            <Box component="img" padding={1} border="1px solid #8A8A8A "  className="img-setting" src={Baby4} width="190px" height="190px"  />
            </Grid>
            </Grid>
            <Box sx={{position:"absolute",top:"152px",left:"152px" }} className="babyred" >
            <Box component="img" padding={1} border="1px solid #8A8A8A " className="img-green" src={Baby5} width="100px" height="100px"  />
            </Box>
            </Box>
            
            </Grid>
            </Grid>
        </Container>
        </ProfileSection>
    )
}
