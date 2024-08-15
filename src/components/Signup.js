import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Button, TextField, Typography } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful');
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div>
      <Typography variant="h4">SignUp</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSignUp}>SignUp</Button>
    </div>
  );
};

export default SignUp;