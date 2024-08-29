// import React, { useState, useEffect } from 'react';
// import { fetchPopularRecipes, searchRecipes } from '../SpoonacularAPI';
// import RecipeCard from '../components/RecipeCard';
// import HeroSection from '../components/HeroSection';
// import SearchBar from '../components/SearchBar';
// import { Grid, Container, Typography, CircularProgress } from '@mui/material';
// import '../styles/global.css'; // Ensure the styles are imported

// function HomePage() {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getPopularRecipes = async () => {
//       try {
//         const data = await fetchPopularRecipes();
//         setRecipes(data.results); // Assuming the API returns a `results` array
//       } catch (error) {
//         console.error('Error fetching popular recipes:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getPopularRecipes();
//   }, []);

//   const handleSearch = async (query) => {
//     setLoading(true);
//     try {
//       const data = await searchRecipes(query);
//       setRecipes(data.results); // Assuming the API returns a `results` array
//     } catch (error) {
//       console.error('Error searching recipes:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <HeroSection />
//       <SearchBar onSearch={handleSearch} />
//       <Container>
//         <Typography variant="h3" gutterBottom align="center">
//           {loading ? 'Loading...' : 'Popular Recipes'}
//         </Typography>
//         {loading ? (
//           <Grid container justifyContent="center">
//             <CircularProgress />
//           </Grid>
//         ) : (
//           <Grid container spacing={3}>
//             {recipes.map(recipe => (
//               <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                 <RecipeCard recipe={recipe} />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </>
//   );
// }

// export default HomePage;


import React, { useState, useEffect } from 'react';
import { fetchPopularRecipes, searchRecipes } from '../SpoonacularAPI';
import RecipeCard from '../components/RecipeCard';
// import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import { Grid, Container, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import '../styles/global.css'; // Ensure the styles are imported
 // Assuming you have a logo image in the assets folder

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        const data = await fetchPopularRecipes();
        setRecipes(data.results); // Assuming the API returns a `results` array
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    getPopularRecipes();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = await searchRecipes(query);
      setRecipes(data.results); // Assuming the API returns a `results` array
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <img src={require('../img/logo.jpg')} alt="Logo" style={{ display: 'block', 
        margin: '1 auto', 
        width: '240px', // Significantly increased from 300px
        height: 'auto', // Maintain aspect ratio
        maxWidth: '100%', // Ensure it doesn't overflow on smaller screens
         }} />
        {/* <HeroSection /> */}
        <SearchBar onSearch={handleSearch} />
        <Typography variant="h3" gutterBottom align="center">
          {loading ? 'Loading...' : 'Popular Recipes'}
        </Typography>
        {loading ? (
          <Grid container spacing={3}>
            {[...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            ))}
          </Grid>
        ) : recipes.length > 0 ? (
          <Grid container spacing={3}>
            {recipes.map(recipe => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            No results found.
          </Typography>
        )}
      </Container>
    </>
  );
}

export default HomePage;