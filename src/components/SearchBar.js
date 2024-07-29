import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <TextField
        label="Search Recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        style={{ marginRight: '10px', flex: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
