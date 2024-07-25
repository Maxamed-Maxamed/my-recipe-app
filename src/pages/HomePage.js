import React, { useState, useEffect } from 'react';
import { fetchPopularRecipes } from '../SpoonacularAPI';
import RecipeCard from '../components/RecipeCard';
import { Grid, Container, Typography, CircularProgress } from '@mui/material';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        const data = await fetchPopularRecipes();
        setRecipes(data.results); // Assuming the API returns a `results` array
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    getPopularRecipes();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Popular Recipes
      </Typography>
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {recipes.map(recipe => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default HomePage;