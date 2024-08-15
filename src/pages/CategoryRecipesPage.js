import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipesByCategory } from '../SpoonacularAPI';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

const CategoryRecipesPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategoryRecipes = async () => {
      try {
        const data = await fetchRecipesByCategory(category);
        setRecipes(data.results); // Assuming the API returns a `results` array
      } catch (error) {
        console.error('Error fetching category recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    getCategoryRecipes();
  }, [category]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        {category} Recipes
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
};

export default CategoryRecipesPage;