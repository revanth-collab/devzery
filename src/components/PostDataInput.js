import React from 'react';
import "./index.css"

const PostDataInput = ({ addApiCall }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const userId = e.target.userId.value;
        addApiCall('Create Post', { title, body, userId });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className='input-container'>
                <label htmlFor='title' className='label-element'>Title:</label>
                <input name="title" placeholder="Title" required className="input" id="title" />
            </div>
            <div className='input-container'>
                <label htmlFor='body' className='label-element'>Body:</label>
                <input name="body" placeholder="Body" required className="input" id="body"/>
            </div>
            <div className='input-container'>
                <label htmlFor='userid' className='label-element'>UserID:</label>
                <input name="userId" placeholder="User ID" required className="input" id="userid" />
            </div>

            <button type="submit" className="btn button">Create Post</button>
        </form>
    );
};

export default PostDataInput;
