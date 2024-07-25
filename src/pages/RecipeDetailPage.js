import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem } from '@mui/material';
import CommentSection from '../components/CommentSection';
import { fetchRecipeDetails } from '../SpoonacularAPI';
import '../styles/App.css'; // Ensure the styles are imported

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    getRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h4">{recipe.title}</Typography>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <Typography variant="h6">Ingredients</Typography>
      <List>
        {recipe.extendedIngredients.map((ingredient) => (
          <ListItem key={ingredient.id}>
            <Typography variant="body1">{ingredient.original}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="body1">{recipe.instructions}</Typography>
      <Button variant="contained" color="primary">
        Add to Favorites
      </Button>
      <CommentSection recipeId={id} />
    </Container>
  );
}

export default RecipeDetailPage;