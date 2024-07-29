import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { Button, Typography, Container } from '@mui/material';

const ProfilePage = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      {user && (
        <>
          <Typography variant="h6">Email: {user.email}</Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;