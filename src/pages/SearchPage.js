import React, { useState } from 'react';
import { searchRecipes } from '../SpoonacularAPI';
import RecipeCard from '../components/RecipeCard';
import { TextField, Button, Grid } from '@mui/material';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchRecipes(query);
      setResults(data.results); // Assuming the API returns a `results` array
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        value={query}
        onChange={e => setQuery(e.target.value)}
        label="Search for recipes"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Grid container spacing={2}>
        {results.map(recipe => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SearchPage;
