const Posts = require('../models/postModel')
const Comment = require('../models/commentModel')


module.exports.index = async (req, res) => {
    try {
        // Now populating comments for each post in the list
        const posts = await Posts.find().sort({ createdAt: -1 }).populate('comments');
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

module.exports.new = async (req, res) => {
    res.render('posts/New')
}

module.exports.delete = async (req, res) => {
    await Posts.findByIdAndDelete(req.params.id)
    res.redirect('/posts')
}

module.exports.update = async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        const post = await Posts.create(req.body)
        res.status(200).json(post)
    } catch(err) {
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    const post = await Posts.findById(req.params.id)
    console.log(post)
    console.log('edit route')
    res.render('posts/Edit', { post })
}

module.exports.show = async (req, res) => {
    const post = await Posts.findById(req.params.id).populate('comments')
    console.log(post)
    res.render('posts/Show', { post })
}

module.exports.likePost = async (req,res) => {    
    try{
        const postId = req.params.id;
        const updatePost = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { likes: 1 } },
        // Return the updated document
        { new: true }
        );
        res.status(200).json(updatePost)
    }catch(err){
        res.send(err.message)
        res.status(400).send(err.message)
    }
}