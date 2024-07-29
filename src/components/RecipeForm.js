import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { TextField, Button, Container, Typography } from '@mui/material';

const RecipeForm = ({ recipeId, onSave }) => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipeId) {
      const fetchRecipe = async () => {
        const recipeRef = doc(db, 'recipes', recipeId);
        const recipeDoc = await getDoc(recipeRef);
        if (recipeDoc.exists()) {
          const recipeData = recipeDoc.data();
          setTitle(recipeData.title);
          setDescription(recipeData.description);
          setIngredients(recipeData.ingredients);
          setInstructions(recipeData.instructions);
        }
      };
      fetchRecipe();
    }
  }, [recipeId]);

  const handleSave = async () => {
    if (user) {
      const recipeRef = recipeId ? doc(db, 'recipes', recipeId) : doc(db, 'recipes', new Date().getTime().toString());
      const recipeData = {
        userId: user.uid,
        title,
        description,
        ingredients,
        instructions,
        timestamp: new Date(),
      };
      await setDoc(recipeRef, recipeData, { merge: true });
      onSave();
    }
  };

  return (
    <Container>
      <Typography variant="h4">{recipeId ? 'Edit Recipe' : 'Add Recipe'}</Typography>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
      <TextField label="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} fullWidth margin="normal" multiline rows={4} />
      <TextField label="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
};

export default RecipeForm;