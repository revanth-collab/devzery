import React from 'react';
import "./index.css"

const ApiSelector = ({ users, addApiCall }) => {
    const handleAddPost = () => {
        const title = prompt('Enter post title');
        const body = prompt('Enter post body');
        const userId = prompt('Select user ID', users[0]?.id);
        addApiCall('Create Post', { title, body, userId });
    };

    const handleGetComments = () => {
        const postId = prompt('Enter post ID for comments');
        addApiCall('Get Comments', { postId });
    };

    return (
        <div className='button-container'>
            <button onClick={handleAddPost} className="btn button">Add Post</button>
            <button onClick={handleGetComments} className="btn button">Get Comments</button>
        </div>
    );
};

export default ApiSelector;
