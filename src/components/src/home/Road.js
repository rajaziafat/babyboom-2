import React, {useState} from 'react'
import {Box,Button,Grid,Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Baby1 from '../../../assets/images/baby1.png'
import Baby2 from '../../../assets/images/babybiberon 1.png'
import Baby3 from '../../../assets/images/baby4road 1.png'
import Baby4 from '../../../assets/images/baby party 1.png'
import { styled } from "@mui/material/styles"

 const ProfileSection = styled('div')(({ theme }) => ({
    '& .baby-img':{
       position:"sticky",
       top:0,
    },
    [theme.breakpoints.down('xl')]: {
        '& .have':{
        paddingLeft:"0px",
        },
        '& .chance-setting':{
            paddingTop:"100px",
            paddingBottom:"40px",
            },
            '& .logo':{
                width:"300px",
                height:"300px",
            },
        
        
      },
      [theme.breakpoints.down('lg')]: {
        '& .logo':{
            width:"200px",
            height:"200px",
        },
        
        '& .chance-setting':{
            paddingTop:"20px",
            paddingBottom:"30px",
            },
      },
      [theme.breakpoints.down('md')]: {
        '& .logo':{
            width:"174px",
            height:"200px",
        },
      },
      [theme.breakpoints.down('sm')]: {
        '& .logo':{
            width:"148px",
            height:"159px",
        },
      },
    
}))



export default function Road() {

const [baby1, setbaby1] = useState('activeBaby');
const [baby2, setbaby2] = useState('');
const [baby3, setbaby3] = useState('');
const [baby4, setbaby4] = useState('');

if(window.innerWidth > 800){
  window.onscroll = function() {scrollFunction()};

}


var counter = 0;

// increatement it
let downToUpCounter = 0;

function scrollFunction(){
  

  if(window.pageYOffset < 1650){
    setbaby1('activeBaby');
    setbaby2('');
    setbaby3('');
    setbaby4('');



  }

if(counter == 0){ // if counter is 1, it will not execute
     if(window.pageYOffset > 1800){
       setbaby1('');
       setbaby2('activeBaby');
       setbaby3('');
       setbaby4('');
        counter = 1; // increment the counter by 1, new value = 1
        downToUpCounter = 1;

     }
   }






   if(counter == 1){ // if counter is 1, it will not execute
    if(window.pageYOffset > 2050){
      setbaby1('');
      setbaby2('');
      setbaby3('activeBaby');
      setbaby4('');

      downToUpCounter = 2;



       counter = 2; // increment the counter by 1, new value = 1

    }
  }




  if(counter == 2){ // if counter is 1, it will not execute
    if(window.pageYOffset > 2400){
      setbaby1('');
      setbaby2('');
      setbaby3('');
      setbaby4('activeBaby');

      downToUpCounter = 3;

       counter = 3; // increment the counter by 1, new value = 1

    }
  }




  // down to up





  
  




  }



    return (
        <ProfileSection>
            <Box py={3} >   <Typography variant="h1" color="primary"  textAlign="center" component="div" gutterBottom>
            ROADMAP
      </Typography> </Box>
      <Container>
      <Grid container >
        <Grid item lg={9} md={12} xs={12} >
        <Box pt={20} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      0% : Adam et Eve gave life to 9999 cutest babies
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Have a seat, join our Discord Community and prepare baby diapers, they need to learn the world.
      </Typography> </Box></Box>
      <Box py={22} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      25% : Ready to talk
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Our babies are now able to talk, the whitelist is opened
      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      50% : VIP
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Be part of the community and participate to have a chance to premint our adorable baby

      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      75% : TO THE MOON
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Be part of the community and participate to have a chance to premint our adorable baby

      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      100% : TEDDYBEAR
      </Typography> 
      <Box py={1} paddingLeft={10} className="have"  >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Have a chance to win a teddybear
      </Typography> </Box>
      </Box>
      <Box py={1} >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      0% : Adam et Eve gave life to 9999 cutest babies
      </Typography> </Box>
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Have a seat, join our Discord Community and prepare baby diapers, they need to learn the world.
      </Typography> </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      25% : Ready to talk
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Our babies are now able to talk, the whitelist is opened
      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      50% : VIP
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Be part of the community and participate to have a chance to premint our adorable baby

      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      75% : TO THE MOON
      </Typography> 
      <Box py={1} paddingLeft={10} className="have" >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Be part of the community and participate to have a chance to premint our adorable baby

      </Typography> </Box>
      </Box>
      <Box py={12} className="chance-setting" >   <Typography variant="h2" color="secondary"   component="div" gutterBottom>
      100% : TEDDYBEAR
      </Typography> 
      <Box py={1} paddingLeft={10} className="have"  >   <Typography variant="h4" color="secondary"   component="div" gutterBottom>
      Have a chance to win a teddybear
      </Typography> </Box>
      </Box>
        </Grid>
        <Grid item lg={3} md={12} xs={12} className="position-test"  >
            <Box className="baby-img" >
        <Box component="img"  src={Baby1} width="420px"  height="420px"  className={`${baby1} putar`}/>
        <Box component="img" src={Baby2} width="420px"  height="420px"  className={`${baby2} putar`}/>
        <Box component="img" src={Baby3} width="420px"  height="420px"  className={`${baby3} putar`}/>
        <Box component="img" src={Baby4} width="420px"  height="420px" className={`${baby4} putar`} />
        </Box>
        </Grid>
      </Grid>
      </Container>
        </ProfileSection>
    )
}
