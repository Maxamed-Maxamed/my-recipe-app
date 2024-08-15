import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { signInWithEmailAndPassword } from "firebase/auth";
import '../styles/global.css'; // Ensure the styles are imported
import { auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlertMessage('Logged in successfully!');
      setAlertSeverity('success');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setAlertMessage('Error logging in');
      setAlertSeverity('error');
      setShowAlert(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {showAlert && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity={alertSeverity}>
            {alertMessage}
          </Alert>
        )}
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
  );
};

export default Login;