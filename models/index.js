const mongoose = require('mongoose')
const PostSchema = require('./Post')
const ReviewSchema = require('./Review')
const CommentSchema = require('./Comment')

const Post = mongoose.model('posts', PostSchema)
const Review = mongoose.model('reviews', ReviewSchema)
const Comment = mongoose.model('comments', CommentSchema)

module.exports = {
  Review,
  Post,
  Comment
}
