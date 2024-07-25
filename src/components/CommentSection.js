import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Typography } from '@mui/material';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        label="Add a comment"
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Post Comment
      </Button>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index}>
            <Typography variant="body1">{comment.text}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CommentSection;