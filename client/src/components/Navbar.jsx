import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';
import logo from '../assets/images/logo.png';  // Import the logo

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="PW Studio Logo" style={{ height: '40px' }} />
            </Link>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black' }}>Home</Button>
            </Link>
            <Link to="/roadmap" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black' }}>Roadmap</Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black' }}>Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;