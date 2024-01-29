const Comment = require('../models/Comment');
const BlogPost = require('../models/BlogPost');

// Create a new comment on a blog post
exports.createComment = async (req, res) => {
    try {
        const { content } = req.body;
        const postId = req.params.postId;

        const post = await BlogPost.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const newComment = await Comment.create({
            content,
            post: postId,
            author: req.id
        });

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error: error.message });
    }
};
