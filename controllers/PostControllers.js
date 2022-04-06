const { Post, Review } = require('../models/index')

const allPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    console.log(reviews)
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewByPost = async (req, res) => {
  try {
    let reviews = await Review.find({ post: req.params.id }).exec()
    return res.status(201).json(reviews)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  allPosts,
  postId,
  allReviews,
  getReviewByPost
}
