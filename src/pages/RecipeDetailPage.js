import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../SpoonacularAPI';
import { Container, Typography, Paper, List, ListItem } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Review from '../components/Review';

const db = getFirestore();

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);

        const recipeRef = doc(db, 'recipes', id);
        const recipeDoc = await getDoc(recipeRef);
        if (recipeDoc.exists()) {
          const recipeData = recipeDoc.data();
          setReviews(recipeData.reviews || []);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    getRecipeDetails();
  }, [id]);

  const handleReviewSubmit = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        {recipe.title}
      </Typography>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <Typography variant="h6" gutterBottom align="center">
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
      <Typography variant="h6" gutterBottom align="center">
        Instructions
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <List>
          {recipe.instructions.split('\n').map((instruction, index) => (
            <ListItem key={index}>
              <Typography variant="body1">{instruction}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Review recipeId={id} onReviewSubmit={handleReviewSubmit} />
      <Typography variant="h6" gutterBottom align="center">
        Reviews
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <List>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <Typography variant="body1">
                {review.rating} stars - {review.comment}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default RecipeDetailPage;