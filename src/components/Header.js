import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/App.css'; // Ensure the styles are imported

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
          Recipe App
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/" style={{ color: '#fff' }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: '#fff' }}>About</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;