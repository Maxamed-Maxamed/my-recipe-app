import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Card, CardContent, CardMedia } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

// Import all images at the top of the file
import logoIn from '../img/logo-in.jpg';
import roastChicken from '../img/Roast-chicken.jpg';
import pastaBake from '../img/pasta-bake.jpg';
import friedRice from '../img/fried-rice.jpg';

const About = () => {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box mt={5} mb={5} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" component="p">
          Welcome to our cooking website! Discover delicious recipes and cooking tips.
        </Typography>
      </Box>
      
      {/* Avatar Section */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
        <Avatar
          alt="Our Logo"
          src={logoIn}
          sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}
        />
        <Box ml={3}>
          <Typography variant="h5" component="h2">
            Our Mission
          </Typography>
          <Typography variant="body1" component="p">
            Our goal is to inspire and empower home cooks to create delicious meals with ease.
          </Typography>
        </Box>
      </Box>
      
      {/* Recipes Section */}
      <Box mb={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          My Favorite Recipes
        </Typography>
        <Grid container spacing={4}>
          {/* Recipe Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={roastChicken}
                alt="Roast Chicken"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Roast Chicken
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tender, juicy chicken with crispy golden skin,
                  seasoned with herbs and roasted to perfection.
                  A classic comfort food that's both simple and delicious.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Recipe Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={pastaBake}
                alt="Pasta Bake"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Pasta Bake
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A creamy pasta bake with a rich and flavorful sauce,
                  topped with a crispy golden crust.
                  A comforting and satisfying dish that's perfect for a family dinner.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Recipe Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={friedRice}
                alt="Fried Rice"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Fried Rice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A simple and flavorful fried rice dish,
                  made with rice, vegetables, and a choice of protein.
                  A quick and easy meal that's perfect for a busy weeknight.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;