import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/images/logo copy 1.png'
import Discord from '../../../assets/images/logo-discord 1.png'

import { styled } from "@mui/material/styles"

const ProfileSection = styled('div')(({ theme }) => ({
  '& .Discord':{
    marginRight:"18px",
  },
[theme.breakpoints.down('xl')]: {
  '& .logo':{
    width:"200px"
  },
  '& .btn-discoard':{
    width:"161px",
    height:"40px",
  },
},
[theme.breakpoints.down('sm')]: {
  '& .logo':{
    width:"150px"
  },
  '& .btn-discoard':{
    width:"130px",
    height:"40px",
    fontSize:"13px"
  },
  '& .Discord':{
    marginRight:"10px",
    height:"23px"
  },
},
}))


export default function ButtonAppBar() {
  return (
    <ProfileSection>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background:"transparent",
        boxShadow:"none",
      }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box component="img" src={Logo} width="300px" className="logo" />
          
          </IconButton>
          <Box marginLeft="auto"  ><Button color="inherit" variant="contained" sx={{
             width:"177px",
             height:"47px",
             background:"#171827",
             boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
             borderRadius:"10px",
             fontFamily:"Semplicita-Bold",
             color:"#FFFFFF", 
             
            
          }} className="btn-discoard" > <img src={Discord} height="31px" width="31px" className="Discord"  /> DISCORD</Button></Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ProfileSection>
  );
}
