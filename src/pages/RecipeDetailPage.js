import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, List, ListItem, Paper } from '@mui/material';
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

  const renderInstructions = (instructions) => {
    return instructions.split('\n').map((instruction, index) => (
      <Typography variant="body1" paragraph key={index}>
        {instruction}
      </Typography>
    ));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        
        {recipe.title}
        
      </Typography>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <Typography variant="h6" gutterBottom>
        Ingredients
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <List>
          {recipe.extendedIngredients.map((ingredient) => (
            <ListItem key={ingredient.id}>
              <Typography variant="body1">{ingredient.original}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Instructions
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        {renderInstructions(recipe.instructions)}
      </Paper>
    </Container>
  );
}

export default RecipeDetailPage;