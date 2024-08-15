import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Card, CardContent, CardMedia } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

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
          alt="Chef"
          src="/static/images/avatar/chef.jpg" // Replace with your image path
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
          Featured Recipes
        </Typography>
        <Grid container spacing={4}>
          {/* Recipe Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/recipes/recipe1.jpg" // Replace with your image path
                alt="Recipe 1"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Recipe 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of Recipe 1.
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
                image="/static/images/recipes/recipe2.jpg" // Replace with your image path
                alt="Recipe 2"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Recipe 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of Recipe 2.
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
                image="/static/images/recipes/recipe3.jpg" // Replace with your image path
                alt="Recipe 3"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Recipe 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A brief description of Recipe 3.
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