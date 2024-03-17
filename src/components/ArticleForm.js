// ArticleForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://blog-api-bf5g.onrender.com/posts', {
                title,
                content
            });
            console.log('Article created:', response.data);
            // Handle success (e.g., show success message)
        } catch (error) {
            console.error('Error creating article:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ArticleForm;
