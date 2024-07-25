import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/global.css'; // Import global styles

function AboutPage() {
  return (
    <Container className="container">
      <Typography variant="h4" className="text-center">About Us</Typography>
      <Typography variant="body1" className="text-center">
        Welcome to our Recipe App! Here, you can find a variety of recipes, save your favorites, and more.
      </Typography>
    </Container>
  );
}

export default AboutPage;