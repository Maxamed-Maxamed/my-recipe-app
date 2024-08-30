// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebaseConfig';
// import { doc, setDoc, getFirestore, arrayUnion } from 'firebase/firestore';
// import { TextField, Button, Typography, Container } from '@mui/material';

// const db = getFirestore();

// const Review = ({ recipeId, onReviewSubmit }) => {
//   const [user] = useAuthState(auth);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleReviewSubmit = async () => {
//     if (user) {
//       const review = {
//         userId: user.uid,
//         rating,
//         comment,
//         timestamp: new Date(),
//       };
//       const recipeRef = doc(db, 'recipes', recipeId);
//       await setDoc(recipeRef, {
//         reviews: arrayUnion(review),
//       }, { merge: true });
//       setRating(0);
//       setComment('');
//       if (onReviewSubmit) {
//         onReviewSubmit(review);
//       }
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h6">Leave a Review</Typography>
//       <TextField
//         label="Rating"
//         type="number"
//         value={rating}
//         onChange={(e) => setRating(e.target.value)}
//         inputProps={{ min: 0, max: 5 }}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Comment"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         fullWidth
//         multiline
//         rows={4}
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleReviewSubmit}>
//         Submit Review
//       </Button>
//     </Container>
//   );
// };

// export default Review;


/// new one 
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { doc, setDoc, getFirestore, arrayUnion } from 'firebase/firestore';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Rating } from '@mui/material'; // Import Rating component

const db = getFirestore();

const Review = ({ recipeId, onReviewSubmit }) => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleReviewSubmit = async () => {
    if (user) {
      const review = {
        userId: user.uid,
        rating,
        comment,
        timestamp: new Date(),
      };
      const recipeRef = doc(db, 'recipes', recipeId);
      await setDoc(recipeRef, {
        reviews: arrayUnion(review),
      }, { merge: true });
      setRating(0);
      setComment('');
      if (onReviewSubmit) {
        onReviewSubmit(review);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h6">Leave a Review</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      <TextField
        label="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleReviewSubmit}>
        Submit Review
      </Button>
    </Container>
  );
};

export default Review;