import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleViewRecipeClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="80"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ margin: '10px 0' }}>
          {recipe.description}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;