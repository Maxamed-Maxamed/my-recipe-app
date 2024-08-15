import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { Container, Typography, Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const favoriteIds = userData.favorites || [];
          if (favoriteIds.length > 0) {
            const q = query(collection(db, 'recipes'), where('__name__', 'in', favoriteIds.map(String)));
            const querySnapshot = await getDocs(q);
            const favoriteRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFavorites(favoriteRecipes);
          }
        }
      };
      fetchFavorites();
    }
  }, [user]);

  return (
    <Container>
      <Typography variant="h4">Favorite Recipes</Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {favorites.map(recipe => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;