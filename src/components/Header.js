import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/App.css'; // Ensure the styles are imported
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

function Header() {
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static" style={{ backgroundColor: '' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
          Recipe App
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/" style={{ color: '#fff' }}>Home</Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: '#fff' }}>About</Button>
          {user ? (
            <>
              <Button color="inherit" component={Link} to="/profile" style={{ color: '#fff' }}>Profile</Button>
              <Button color="inherit" onClick={() => auth.signOut()} style={{ color: '#fff' }}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" style={{ color: '#fff' }}>Login</Button>
              <Button color="inherit" component={Link} to="/signup" style={{ color: '#fff' }}>Signup</Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;