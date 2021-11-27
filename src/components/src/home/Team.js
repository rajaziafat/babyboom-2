import React,{useState} from 'react'

import {Box,Button,Grid,Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Baby1 from '../../../assets/images/babyceo copy 1.png'
import Baby2 from '../../../assets/images/babydev 1.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from "@mui/material/styles"


const ProfileSection = styled('div')(({ theme }) => ({
    '& .baby-img':{
       postion:"fixed"
    },
    '& .position-setting':{
        display:"none"
    },
    '& img:hover + .position-setting':{
        display:"block",
        position: "absolute",
    top: 0,
    background: "rgba(0, 155, 219, 0.7)",
    height: "98%",
    width: "80%",
    padding:"96px",
    bottom:"0",
    left:0,
    right:0,
    },
    [theme.breakpoints.down('xl')]: {
            '& .logo':{
                width:"260px",
                height:"260px",
            },
            '& .twittericon':{
                marginLeft:"0px",
                marginTop:"0px",
            },
            '& img:hover + .position-setting':{
          
               
                marginLeft: "30px",
          
                
                },
                '& .therat':{
                    textAlign:"center"
                },
           
        
      },
      [theme.breakpoints.down('lg')]: {
        '& .logo':{
            width:"200px",
            height:"200px",
        },
        '& .twittericon':{
            marginLeft:"0px",
            marginTop:"5px",
        },
       
        '& img:hover + .position-setting':{
          
        padding:"66px",
        
        },
       
      },
      [theme.breakpoints.down('md')]: {
        '& .logo':{
            width:"174px",
            height:"200px",
    
        },
        '& .therat':{
            textAlign:"center"
        },
        '& img:hover + .position-setting':{
          
            padding:"58px",
            height: "98%",
            width: "47%",
            marginLeft: "93px",
      
            
            },
            '& .twittericon':{
                
                marginTop:"0px",
            },
      },
      [theme.breakpoints.down('sm')]: {
        '& .logo':{
            width:"148px",
            height:"159px",
        },
        '& img:hover + .position-setting':{
          
            padding:"36px",
            height: "95%",
            width: "81%",
            marginLeft: "20px",
      
            
            },
      },
    
}))

export default function Team() {
     const [state, setstate] = useState(false)
    return (
        <div>
             <ProfileSection>
            <Box py={3} >  
            <Box py={3} >  
             <Typography variant="h1" sx={{color:"#4F97EB"}}  textAlign="center" component="div" gutterBottom>
            TEAM
            </Typography>
            </Box> 
            <Container >
            <Grid container >
            <Grid item lg={3} md={3} sm={6} xs={6} >
             
                <Box  sx={{ position:"relative"}} className="therat  "  >
            <Box component="img" border="7px solid #4F97EB "  src={Baby1} width="385px"  height="385px" className="logo" />
            <Box className="position-setting">
            <Typography variant="h6" color="secondary"   component="div" gutterBottom  >
            TOMMY PICKLES
             </Typography>
            </Box>
             </Box>
             
            <Typography variant="h4" fontFamily="Semplicita-Bold" textAlign="center"  color="secondary"   component="div" gutterBottom>
            THE BRAT  <TwitterIcon fontSize="large" className="twittericon" sx={{position:"absolute",marginTop:"10px",  marginLeft:"20px", color:"#4F97EB"}} />  
            </Typography> 
            
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6} >
            <Box  sx={{ position:"relative"}} className="therat"  >
            <Box component="img" border="7px solid #4F97EB "  src={Baby1} width="385px"  height="385px" className="logo" />
            <Box className="position-setting">
            <Typography variant="h6" color="secondary"   component="div" gutterBottom  >
            TOMMY PICKLES
             </Typography>
            </Box>
             </Box>
             
            <Typography variant="h4" fontFamily="Semplicita-Bold" textAlign="center"  color="secondary"   component="div" gutterBottom>
            THE BRAT  <TwitterIcon fontSize="large" className="twittericon" sx={{position:"absolute",marginTop:"10px",  marginLeft:"20px", color:"#4F97EB"}} />  
            </Typography> 
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6} >
            <Box  sx={{ position:"relative"}} className="therat"  >
            <Box component="img" border="7px solid #FFEE00 "  src={Baby1} width="385px"  height="385px" className="logo" />
            <Box className="position-setting">
            <Typography variant="h6" color="secondary"   component="div" gutterBottom  >
            TOMMY PICKLES
             </Typography>
            </Box>
             </Box>
             
            <Typography variant="h4" fontFamily="Semplicita-Bold" textAlign="center"  color="secondary"   component="div" gutterBottom>
            THE BRAT  <TwitterIcon fontSize="large" className="twittericon" sx={{position:"absolute",marginTop:"10px",  marginLeft:"20px", color:"#4F97EB"}} />  
            </Typography> 
            </Grid>
            <Grid item lg={3}md={3} sm={6} xs={6} >
            <Box  sx={{ position:"relative"}} className="therat"  >
            <Box component="img" border="7px solid #4F97EB "  src={Baby2} width="385px"  height="385px" className="logo" />
            <Box className="position-setting">
            <Typography variant="h6" color="secondary"   component="div" gutterBottom  >
            TOMMY PICKLES
             </Typography>
            </Box>
             </Box>
             
            <Typography variant="h4" fontFamily="Semplicita-Bold" textAlign="center"  color="secondary"   component="div" gutterBottom>
            THE DEVELOPPER  <TwitterIcon fontSize="large" className="twittericon" sx={{position:"absolute",marginTop:"10px",  marginLeft:"20px", color:"#4F97EB"}} />  
            </Typography> 
            </Grid>
            </Grid>
            </Container>
            </Box>
            </ProfileSection>
        </div>
    )
}
