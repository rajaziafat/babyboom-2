import React from 'react'
import {Box,Button,Grid,Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Baby1 from '../../../assets/images/baby 7.png'
import verified from '../../../assets/images/verified 1.png'
import { styled } from "@mui/material/styles"
import FormControlLabel from '@mui/material/FormControlLabel';
import TwitterIcon from '@mui/icons-material/Twitter';
const ProfileSection = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('xl')]: {
        '& .verified':{
            width:"50px",
            height:"75px",
        },
        '& .logo':{
            width:"277px",
            height:"277px",
        },
    
  },
  [theme.breakpoints.down('sm')]: {
    '& .babyimg':{
        textAlign:"center"
    },
    

},
  
    
}))

export default function Footer() {
    return (
        <div>
             <ProfileSection>
                <Box bgcolor="#D6C52E" py={6} >
                    <Container>
                        <Grid container >
                        <Grid item lg={5} md={5} sm={6} xs={12} >
                            <Box className="babyimg" >
                        <Box component="img"  src={Baby1} width="296px"  height="325px" className="logo" />
                        </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12} >
                        <Typography variant="h4" fontFamily="Semplicita-Medium" textAlign="center"  color="secondary"   component="div" gutterBottom>
                        All right Reserved 2021
                </Typography>
                <Typography variant="h5" fontFamily="Semplicita-Medium" textAlign="center"  color="secondary"   component="div" gutterBottom>
                Terms and conditions
                </Typography>
                <FormControlLabel control={<Box component="img"  src={verified} width="60px"  height="90px" className="verified" />} 
                label={<Typography variant="h6" fontFamily="Poppins-Light"  color="secondary"   component="div" gutterBottom>
                Terms and conditions
              </Typography>} />
                    <Box>
                    <TwitterIcon fontSize="large" sx={{ color:"#FFFFFF",fontSize:"55px"}} />
                    <TwitterIcon fontSize="large" sx={{ color:"#FFFFFF",marginLeft:"10px",fontSize:"55px"}} />
                    <TwitterIcon fontSize="large" sx={{ color:"#FFFFFF",marginLeft:"10px",fontSize:"55px"}} />
                    </Box>
                        </Grid>
                        </Grid>
                    
                    </Container>
                </Box>
                </ProfileSection>
        </div>
    )
}
