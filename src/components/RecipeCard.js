// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, CardMedia, Button, IconButton } from '@mui/material';
// import { Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebaseConfig';
// import { doc, setDoc, getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';
// import { fetchRecipeDetails } from '../SpoonacularAPI';

// const db = getFirestore();

// function RecipeCard({ recipe, recipeId }) {
//   const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [user] = useAuthState(auth);
//   const [recipeData, setRecipeData] = useState(recipe);

//   useEffect(() => {
//     if (!recipe && recipeId) {
//       const getRecipe = async () => {
//         const data = await fetchRecipeDetails(recipeId);
//         setRecipeData(data);
//       };
//       getRecipe();
//     }
//   }, [recipe, recipeId]);

//   const handleViewRecipeClick = () => {
//     navigate(`/recipe/${recipeData.id}`);
//   };

//   const handleFavoriteClick = async () => {
//     setIsFavorite(!isFavorite);
//     if (user) {
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         favorites: isFavorite ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
//       }, { merge: true });
//     }
//   };

//   if (!recipeData) return null;

//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="100"
//         image={recipeData.image}
//         alt={recipeData.title}
//       />
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {recipeData.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" style={{ margin: '10px 0' }}>
//           {recipeData.description}
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
//             View Recipe
//           </Button>
//           <IconButton onClick={handleFavoriteClick} color="secondary">
//             {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'red' }} />}
//           </IconButton>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default RecipeCard;






// // 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, CardMedia, Button, IconButton } from '@mui/material';
// import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt } from '@mui/icons-material';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebaseConfig';
// import { doc, setDoc, getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';
// import { fetchRecipeDetails } from '../SpoonacularAPI';

// const db = getFirestore();

// function RecipeCard({ recipe, recipeId }) {
//   const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [user] = useAuthState(auth);
//   const [recipeData, setRecipeData] = useState(recipe);

//   useEffect(() => {
//     if (!recipe && recipeId) {
//       const getRecipe = async () => {
//         const data = await fetchRecipeDetails(recipeId);
//         setRecipeData(data);
//       };
//       getRecipe();
//     }
//   }, [recipe, recipeId]);

//   const handleViewRecipeClick = () => {
//     navigate(`/recipe/${recipeData.id}`);
//   };

//   const handleFavoriteClick = async () => {
//     setIsFavorite(!isFavorite);
//     if (user) {
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         favorites: isFavorite ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
//       }, { merge: true });
//     }
//   };

//   const handleDislikeClick = async () => {
//     setIsDisliked(!isDisliked);
//     if (user) {
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         dislikes: isDisliked ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
//       }, { merge: true });
//     }
//   };

//   if (!recipeData) return null;

//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="100"
//         image={recipeData.image}
//         alt={recipeData.title}
//       />
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {recipeData.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" style={{ margin: '10px 0' }}>
//           {recipeData.description}
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
//             View Recipe
//           </Button>
//           <div>
//             <IconButton onClick={handleFavoriteClick} color="secondary">
//               {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'red' }} />}
//             </IconButton>
//             <IconButton onClick={handleDislikeClick} color="secondary">
//               {isDisliked ? <ThumbDown style={{ color: 'blue' }} /> : <ThumbDownOffAlt style={{ color: 'blue' }} />}
//             </IconButton>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default RecipeCard;


// //new one 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, CardMedia, Button, IconButton } from '@mui/material';
// import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt } from '@mui/icons-material';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebaseConfig';
// import { doc, setDoc, getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';
// import { fetchRecipeDetails } from '../SpoonacularAPI';

// const db = getFirestore();

// function RecipeCard({ recipe, recipeId }) {
//   const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);
//   const [user] = useAuthState(auth);
//   const [recipeData, setRecipeData] = useState(recipe);

//   useEffect(() => {
//     if (!recipe && recipeId) {
//       const getRecipe = async () => {
//         const data = await fetchRecipeDetails(recipeId);
//         setRecipeData(data);
//       };
//       getRecipe();
//     }
//   }, [recipe, recipeId]);

//   const handleViewRecipeClick = () => {
//     navigate(`/recipe/${recipeData.id}`);
//   };

//   const handleFavoriteClick = async () => {
//     setIsFavorite(!isFavorite);
//     if (user) {
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         favorites: isFavorite ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
//       }, { merge: true });
//     }
//   };

//   const handleDislikeClick = async () => {
//     setIsDisliked(!isDisliked);
//     if (user) {
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         dislikes: isDisliked ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
//       }, { merge: true });
//       if (!isDisliked) {
//         await setDoc(userRef, {
//           favorites: arrayRemove(recipeData.id)
//         }, { merge: true });
//       }
//     }
//   };

//   if (!recipeData) return null;

//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="100"
//         image={recipeData.image}
//         alt={recipeData.title}
//       />
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {recipeData.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" style={{ margin: '10px 0' }}>
//           {recipeData.description}
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
//             View Recipe
//           </Button>
//           <div>
//             <IconButton onClick={handleFavoriteClick} color="secondary">
//               {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'red' }} />}
//             </IconButton>
//             <IconButton onClick={handleDislikeClick} color="secondary">
//               {isDisliked ? <ThumbDown style={{ color: 'blue' }} /> : <ThumbDownOffAlt style={{ color: 'blue' }} />}
//             </IconButton>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default RecipeCard;


// new one  raing and review 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { doc, setDoc, getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';
import { fetchRecipeDetails } from '../SpoonacularAPI';

const db = getFirestore();
function RecipeCard({ recipe, recipeId }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [user] = useAuthState(auth);
  const [recipeData, setRecipeData] = useState(recipe);

  useEffect(() => {
    if (!recipe && recipeId) {
      const getRecipe = async () => {
        const data = await fetchRecipeDetails(recipeId);
        setRecipeData(data);
      };
      getRecipe();
    }
  }, [recipe, recipeId]);

  const handleViewRecipeClick = () => {
    navigate(`/recipe/${recipeData.id}`);
  };

  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite);
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        favorites: isFavorite ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
      }, { merge: true });
    }
  };

  const handleDislikeClick = async () => {
    setIsDisliked(!isDisliked);
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        dislikes: isDisliked ? arrayRemove(recipeData.id) : arrayUnion(recipeData.id)
      }, { merge: true });
      if (!isDisliked) {
        await setDoc(userRef, {
          favorites: arrayRemove(recipeData.id)
        }, { merge: true });
      }
    }
  };
  if (!recipeData) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={recipeData.image}
        alt={recipeData.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {recipeData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ margin: '10px 0' }}>
          {recipeData.description}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleViewRecipeClick}>
            View Recipe
          </Button>
          <div>
            <IconButton onClick={handleFavoriteClick} color="secondary">
              {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'red' }} />}
            </IconButton>
            <IconButton onClick={handleDislikeClick} color="secondary">
              {isDisliked ? <ThumbDown style={{ color: 'blue' }} /> : <ThumbDownOffAlt style={{ color: 'blue' }} />}
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;