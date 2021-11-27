import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import './index.css'
// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#D951CB',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
});
theme.typography.h1 = {
  fontSize: "60px",
  fontFamily:"Semplicita-Bold",
  lineheight:"70px",
  [theme.breakpoints.down('xl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
    
  },

};
theme.typography.h2 = {
  fontSize: "45px",
  fontFamily:"Semplicita-Bold",
  lineheight:"41px",
  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
    
  },
};
theme.typography.h3 = {
  fontSize: "35px",
  fontFamily:"GeneralSans-Bold",
  lineheight:"41px",
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    
  },
 
};
theme.typography.h4 = {
  fontSize: "30px",
  fontFamily:"Poppins-Light",
  lineheight:"27px",
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
  },
 
};
// theme.typography.h5 = {
//   fontSize: "18px",
//   fontFamily:"GeneralSans-Light",
//   lineheight:"24px",
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '12px',
//   },
 
// };
// theme.typography.h6 = {
//   fontSize: "15px",
//   fontFamily:"GeneralSans-Light",
//   lineheight:"24px",
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '10px',
//   },
 
// };

export default theme;
