const { Schema } = require('mongoose')

const Post = new Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Post
