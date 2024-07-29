import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { Button, Typography, Container, TextField, Grid, Card, CardContent } from '@mui/material';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import RecipeCard from '../components/RecipeCard';

const db = getFirestore();

const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setName(userData.name || '');
            setEmail(userData.email || user.email);
            setFavorites(userData.favorites || []);
          }
        } catch (err) {
          console.error('Error fetching user data:', err);
          setError('Failed to fetch user data. Please check your internet connection.');
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          name,
          email,
        });
      } catch (err) {
        console.error('Error updating profile:', err);
        setError('Failed to update profile. Please check your internet connection.');
      }
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {user && (
        <>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>
            Logout
          </Button>
          <Typography variant="h5" style={{ marginTop: '20px' }}>Favorite Recipes</Typography>
          <Grid container spacing={3}>
            {favorites.map((recipeId) => (
              <Grid item xs={12} sm={6} md={4} key={recipeId}>
                <RecipeCard recipeId={recipeId} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ProfilePage;