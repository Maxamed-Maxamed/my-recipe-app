import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { doc, setDoc, getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';

const db = getFirestore();

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [user] = useAuthState(auth);

  const handleViewRecipeClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite);
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        favorites: isFavorite ? arrayRemove(recipe.id) : arrayUnion(recipe.id)
      }, { merge: true });
    }
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
            View Recipe
          </Button>
          <IconButton onClick={handleFavoriteClick} color="secondary">
            {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'red' }} />}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;