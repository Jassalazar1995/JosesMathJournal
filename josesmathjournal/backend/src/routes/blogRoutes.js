
const express = require('express');
const { createPost, getPosts, likePost } = require('../controllers/blogController');
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.put('/:postId/like', likePost);


module.exports = router;
