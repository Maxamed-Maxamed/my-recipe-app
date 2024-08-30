// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
// import RecipeForm from '../components/RecipeForm';
// import '../styles/global.css'; // Ensure the styles are imported

// const ManageRecipesPage = () => {
//   const [user] = useAuthState(auth);
//   const [recipes, setRecipes] = useState([]);
//   const [editingRecipeId, setEditingRecipeId] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   }, [user]);

//   const handleDelete = async (recipeId) => {
//     await deleteDoc(doc(db, 'recipes', recipeId));
//     setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
//   };

//   const handleSave = () => {
//     setEditingRecipeId(null);
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Manage Recipes</Typography>
//       {editingRecipeId !== null ? (
//         <RecipeForm recipeId={editingRecipeId} onSave={handleSave} />
//       ) : (
//         <>
//           <Button variant="contained" color="primary" onClick={() => setEditingRecipeId('')}>
//             Add Recipe
//           </Button>
//           <Grid container spacing={3} style={{ marginTop: '20px' }}>
//             {recipes.map(recipe => (
//               <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h5">{recipe.title}</Typography>
//                     <Typography variant="body2">{recipe.description}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" onClick={() => setEditingRecipeId(recipe.id)}>
//                       Edit
//                     </Button>
//                     <Button size="small" color="secondary" onClick={() => handleDelete(recipe.id)}>
//                       Delete
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}
//     </Container>
//   );
// };

// export default ManageRecipesPage;

// image upload  

// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
// import RecipeForm from '../components/RecipeForm';
// import '../styles/global.css'; // Ensure the styles are imported

// const ManageRecipesPage = () => {
//   const [user] = useAuthState(auth);
//   const [recipes, setRecipes] = useState([]);
//   const [editingRecipeId, setEditingRecipeId] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   }, [user]);

//   const handleDelete = async (recipeId) => {
//     await deleteDoc(doc(db, 'recipes', recipeId));
//     setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
//   };

//   const handleSave = () => {
//     setEditingRecipeId(null);
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Manage Recipes</Typography>
//       {editingRecipeId !== null ? (
//         <RecipeForm recipeId={editingRecipeId} onSave={handleSave} />
//       ) : (
//         <>
//           <Button variant="contained" color="primary" onClick={() => setEditingRecipeId('')}>
//             Add Recipe
//           </Button>
//           <Grid container spacing={3} style={{ marginTop: '20px' }}>
//             {recipes.map(recipe => (
//               <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                 <Card>
//                   {recipe.imageUrl && (
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={recipe.imageUrl}
//                       alt={recipe.title}
//                     />
//                   )}
//                   <CardContent>
//                     <Typography variant="h5">{recipe.title}</Typography>
//                     <Typography variant="body2">{recipe.description}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" onClick={() => setEditingRecipeId(recipe.id)}>
//                       Edit
//                     </Button>
//                     <Button size="small" color="secondary" onClick={() => handleDelete(recipe.id)}>
//                       Delete
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}
//     </Container>
//   );
// };

// export default ManageRecipesPage;

// new one 

// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
// import RecipeForm from '../components/RecipeForm';
// import '../styles/global.css'; // Ensure the styles are imported

// const ManageRecipesPage = () => {
//   const [user] = useAuthState(auth);
//   const [recipes, setRecipes] = useState([]);
//   const [editingRecipeId, setEditingRecipeId] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   }, [user]);

//   const handleDelete = async (recipeId) => {
//     await deleteDoc(doc(db, 'recipes', recipeId));
//     setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
//   };

//   const handleSave = () => {
//     setEditingRecipeId(null);
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Manage Recipes</Typography>
//       {editingRecipeId !== null ? (
//         <RecipeForm recipeId={editingRecipeId} onSave={handleSave} />
//       ) : (
//         <>
//           <Button variant="contained" color="primary" onClick={() => setEditingRecipeId('')}>
//             Add Recipe
//           </Button>
//           <Grid container spacing={3} style={{ marginTop: '20px' }}>
//             {recipes.map(recipe => (
//               <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                 <Card>
//                   {recipe.imageUrl && (
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={recipe.imageUrl}
//                       alt={recipe.title}
//                     />
//                   )}
//                   <CardContent>
//                     <Typography variant="h5">{recipe.title}</Typography>
//                     <Typography variant="body2">{recipe.description}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" onClick={() => setEditingRecipeId(recipe.id)}>
//                       Edit
//                     </Button>
//                     <Button size="small" color="secondary" onClick={() => handleDelete(recipe.id)}>
//                       Delete
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}
//     </Container>
//   );
// };

// export default ManageRecipesPage;



// import React, { useState, useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
// import RecipeForm from '../components/RecipeForm';
// import '../styles/global.css'; // Ensure the styles are imported

// const ManageRecipesPage = () => {
//   const [user] = useAuthState(auth);
//   const [recipes, setRecipes] = useState([]);
//   const [editingRecipeId, setEditingRecipeId] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   }, [user]);

//   const handleDelete = async (recipeId) => {
//     await deleteDoc(doc(db, 'recipes', recipeId));
//     setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
//   };

//   const handleSave = () => {
//     setEditingRecipeId(null);
//     if (user) {
//       const fetchRecipes = async () => {
//         const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setRecipes(userRecipes);
//       };
//       fetchRecipes();
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Manage Recipes</Typography>
//       {editingRecipeId !== null ? (
//         <RecipeForm recipeId={editingRecipeId} onSave={handleSave} />
//       ) : (
//         <>
//           <Button variant="contained" color="primary" onClick={() => setEditingRecipeId('')}>
//             Add Recipe
//           </Button>
//           <Grid container spacing={3} style={{ marginTop: '20px' }}>
//             {recipes.map(recipe => (
//               <Grid item xs={12} sm={6} md={4} key={recipe.id}>
//                 <Card>
//                   {recipe.imageUrl && (
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       image={recipe.imageUrl}
//                       alt={recipe.title}
//                     />
//                   )}
//                   <CardContent>
//                     <Typography variant="h5">{recipe.title}</Typography>
//                     <Typography variant="body2">{recipe.description}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" onClick={() => setEditingRecipeId(recipe.id)}>
//                       Edit
//                     </Button>
//                     <Button size="small" color="secondary" onClick={() => handleDelete(recipe.id)}>
//                       Delete
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}
//     </Container>
//   );
// };

// export default ManageRecipesPage;

// new one 


import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import RecipeForm from '../components/RecipeForm';
import '../styles/global.css'; // Ensure the styles are imported

const ManageRecipesPage = () => {
  const [user] = useAuthState(auth);
  const [recipes, setRecipes] = useState([]);
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchRecipes = async () => {
        const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecipes(userRecipes);
      };
      fetchRecipes();
    }
  }, [user]);

  const handleDelete = async (recipeId) => {
    await deleteDoc(doc(db, 'recipes', recipeId));
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  };

  const handleSave = () => {
    setEditingRecipeId(null);
    if (user) {
      const fetchRecipes = async () => {
        const q = query(collection(db, 'recipes'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecipes(userRecipes);
      };
      fetchRecipes();
    }
  };

  return (
    <Container>
      <Typography variant="h4">Manage Recipes</Typography>
      {editingRecipeId !== null ? (
        <RecipeForm recipeId={editingRecipeId} onSave={handleSave} />
      ) : (
        <>
          <Button variant="contained" color="primary" onClick={() => setEditingRecipeId('')}>
            Add Recipe
          </Button>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {recipes.map(recipe => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <Card>
                  {recipe.imageUrl && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={recipe.imageUrl}
                      alt={recipe.title}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h5">{recipe.title}</Typography>
                    <Typography variant="body2">{recipe.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => setEditingRecipeId(recipe.id)}>
                      Edit
                    </Button>
                    <Button size="small" color="secondary" onClick={() => handleDelete(recipe.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ManageRecipesPage;