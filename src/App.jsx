import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Aboutus from './aboutus';
import Home from './Home';
import Login from './login';
import Myprofile from './myprofile';
import Profile from './profile';
import Register from './register3';
import Search from './search';
import Forgotpassword from './forgotpassword';
import Resetpassword from './resetpassword';

// import Contact from './Contact';
let theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'red',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
  },
});


// Make the theme responsive
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div>
    
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register3" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
