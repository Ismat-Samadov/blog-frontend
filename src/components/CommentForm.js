// CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://blog-api-bf5g.onrender.com/posts/${postId}/comments`, {
                text: comment
            });
            console.log('Comment added:', response.data);
            // Handle success (e.g., update comments section)
        } catch (error) {
            console.error('Error adding comment:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
