import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import '../styles/global.css';


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <div className="social-icons">
              <IconButton color="inherit" href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body1">Email: info@recipeapp.com</Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
            <Typography variant="body1">Address: 123 Recipe St, Food City</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;