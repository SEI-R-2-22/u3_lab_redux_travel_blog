const { Schema } = require('mongoose')

const Review = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'posts' },
    reviewfrom: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review
