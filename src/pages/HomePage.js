import React, { useState, useEffect } from 'react';
import { fetchPopularRecipes } from '../SpoonacularAPI';
import RecipeCard from '../components/RecipeCard';
import { Grid } from '@mui/material';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        const data = await fetchPopularRecipes();
        setRecipes(data.results); // Assuming the API returns a `results` array
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      }
    };

    getPopularRecipes();
  }, []);

  return (
    <Grid container spacing={2}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
