import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiSelector from './ApiSelector';
import PostDataInput from './PostDataInput';
import ApiChainDisplay from './ApiChainDisplay';

const ApiChainBuilder = () => {
    const [apiChain, setApiChain] = useState([]);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (err) {
                setError('Error fetching users');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const addApiCall = async (apiType, params) => {
        if (apiType === 'Create Post') {
            const newPost = await axios.post('http://localhost:5000/api/posts', params);
            setPosts(prev => [...prev, newPost.data]);
            setApiChain([...apiChain, { type: 'Post', data: newPost.data }]);
        } else if (apiType === 'Get Comments') {
            const comments = await axios.get(`http://localhost:5000/api/comments?postId=${params.postId}`);
            setApiChain([...apiChain, { type: 'Comments', data: comments.data }]);
        }
    };

    return (
        <div className="max-w-4xl mx-auto container p-4">
            <div className="posts-container">
                <h1 className="text-2xl font-bold mb-4">API Chain Builder</h1>
                {loading ? <p>Loading...</p> : error && <p>{error}</p>}
                <ApiSelector users={users} addApiCall={addApiCall} />
                <PostDataInput addApiCall={addApiCall} />
            </div>
            <div className='result-container'>
                <ApiChainDisplay apiChain={apiChain} />
            </div>
        </div>
    );
};

export default ApiChainBuilder;
