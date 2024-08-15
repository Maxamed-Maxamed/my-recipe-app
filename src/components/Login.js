import React, { useState } from 'react';

import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import '../styles/global.css'; // Ensure the styles are imported

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Button, TextField, Typography } from '@mui/material';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< HEAD
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword (auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error(error);
      alert('Error logging in');
    }
  };

  const auth = getAuth();


  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
=======
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </div>
>>>>>>> origin/master
  );
};

export default Login;