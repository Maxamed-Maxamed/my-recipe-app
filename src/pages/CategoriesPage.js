import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Breakfast', image: 'breakfast.jpg' },
  { name: 'Lunch', image: 'lunch.jpg' },
  { name: 'Dinner', image: 'dinner.jpg' },
  { name: 'Desserts', image: 'desserts.jpg' },
];

const CategoriesPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Recipe Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Card>
              <CardContent>
                <Typography variant="h5" component={Link} to={`/category/${category.name}`}>
                  {category.name}
                </Typography>
                <img src={category.image} alt={category.name} style={{ width: '100%' }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;