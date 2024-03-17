import React from 'react';
import CommentForm from './CommentForm';

const ArticleDetailPage = ({ article }) => {
    const { title, content, _id } = article;

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <h2>Add Comment</h2>
            <CommentForm postId={_id} />
        </div>
    );
};

export default ArticleDetailPage;
