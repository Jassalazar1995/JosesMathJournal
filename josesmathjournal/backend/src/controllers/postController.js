const Posts = require('../models/postModel')
const Comment = require('../models/commentModel')


module.exports.index = async (req, res) => {
    const posts = await Posts.find().sort({ createdAt: -1 })
    res.status(200).json(posts)
}

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