import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/App.css'; // Ensure the styles are imported

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000000' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#ffff' }}>
          The Chronicles of Carlson
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/" style={{ color: '#fff' }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: '#fff' }}>About</Button>
          <Button color="inherit" component={Link} to="/signup" style={{ color: '#fff' }}>Sign Up</Button>
          <Button color="inherit" component={Link} to="/login" style={{ color: '#fff' }}>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;