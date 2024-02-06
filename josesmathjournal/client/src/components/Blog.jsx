import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../Api';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [newComment, setNewComment] = useState('');
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/blogs', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };
        fetchBlogPosts();
    }, []);

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('/api/blogs', newPost, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs([...blogs, response.data]);
            setNewPost({ title: '', content: '' });
        } catch (error) {
            console.error('Error adding new post:', error);
        }
    };

    const handleLike = async (postId) => {
        const token = localStorage.getItem('token');
        try {
            await axios.put(`/api/blogs/${postId}/like`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs(blogs.map(blog => {
                if (blog._id === postId) {
                    return { ...blog, likes: [...blog.likes, 'newLike'] }; 
                }
                return blog;
            }));
        } catch (error) {
            console.error('Error liking the post:', error);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`/api/blogs/${selectedPostId}/comments`, { content: newComment }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs(blogs.map(blog => {
                if (blog._id === selectedPostId) {
                    return { ...blog, comments: [...blog.comments, response.data] };
                }
                return blog;
            }));
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div style={{ marginTop: '180px' }} className="flex flex-col justify-center items-center space-y-8">
            <form onSubmit={handlePostSubmit} className="w-full max-w-xl p-4 space-y-4 bg-white shadow-md rounded-lg">
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                <textarea
                    placeholder="Content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md h-40"
                ></textarea>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add Post
                </button>
            </form>
            {blogs.map((post) => (
                <div key={post._id} className="w-full max-w-xl p-4 bg-white shadow-md rounded-lg space-y-2">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.content}</p>
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => handleLike(post._id)}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Like
                        </button>
                        <form onSubmit={handleCommentSubmit} className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="New comment"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded-md"
                            />
                            <button
                                type="submit"
                                onClick={() => setSelectedPostId(post._id)}
                                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                            >
                                Add Comment
                            </button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );    
};

export default Blog;
