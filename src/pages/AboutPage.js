import React from 'react';
import '../styles/global.css'; // Import global styles
import { Typography, Container, Grid, Paper } from '@mui/material';
import { Utensils, Heart, Users } from 'lucide-react';

const AboutPage = () => {
  const features = [
    { icon: <Utensils />, title: 'Diverse Recipes', description: 'Explore a wide variety of recipes from different cuisines.' },
    { icon: <Heart />, title: 'Save Favorites', description: 'Keep track of your favorite recipes for quick access.' },
    { icon: <Users />, title: 'Community', description: 'Share your own recipes and connect with other food enthusiasts.' },
  ];

  return (
    <Container maxWidth="md" className="py-8">
      <Typography variant="h4" className="text-center mb-6">About Our Recipe App</Typography>
      <Typography variant="body1" className="text-center mb-8">
        Welcome to our Recipe App! We're passionate about bringing delicious recipes to your kitchen.
      </Typography>
      
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper className="p-4 text-center h-full">
              <div className="text-primary mb-2">{feature.icon}</div>
              <Typography variant="h6" className="mb-2">{feature.title}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutPage;