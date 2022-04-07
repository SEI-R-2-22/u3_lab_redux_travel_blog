const { Post, Review, Comment } = require('../models/index')

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

const getAllComments = async (req, res) => {
  try {
    let comments = await Comment.find()
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentsByPost = async (req, res) => {
  try {
    let comments = await Comment.find({ post: req.params.id }).exec()
    return res.status(201).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  allPosts,
  postId,
  allReviews,
  getReviewByPost,
  getAllComments,
  getCommentsByPost,
  createComment,
  createReview
}
