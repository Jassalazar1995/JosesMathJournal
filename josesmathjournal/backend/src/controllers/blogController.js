const BlogPost = require('../models/BlogPost');
const User = require('../models/User');

// Create a new blog post
exports.createPost = async (req, res) => {
    try {
        console.log(req.user)
        const { title, content } = req.body;
        const newPost = await BlogPost.create({
            title,
            content,
            author: req.id // The id is attached in authMiddleware
        });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
};

// Get all blog posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error: error.message });
    }
};

// Like a blog post
exports.likePost = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Toggle like
        if (post.likes.includes(req.id)) {
            post.likes.pull(req.id);
        } else {
            post.likes.push(req.id);
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error liking post', error: error.message });
    }
};
