const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    username: { type: String, required: true },
    comment: { type: String, required: true },
    image: { type: String, required: false }
    // image optional for user profile pic
  },
  { timestamps: true }
)

module.exports = Comment
