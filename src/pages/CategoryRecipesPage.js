import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipesByCategory } from '../SpoonacularAPI';
import { Container, Typography, Grid, CircularProgress, Pagination } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

const CategoryRecipesPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCategoryRecipes = async () => {
      try {
        const data = await fetchRecipesByCategory(category, page);
        setRecipes(data.results); // Assuming the API returns a `results` array
        setTotalPages(Math.ceil(data.totalResults / data.number)); // Assuming the API returns `totalResults` and `number` per page
      } catch (error) {
        console.error('Error fetching category recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    getCategoryRecipes();
  }, [category, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
        <>
          <Grid container spacing={3}>
            {recipes.map(recipe => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
          />
        </>
      )}
    </Container>
  );
};

export default CategoryRecipesPage;