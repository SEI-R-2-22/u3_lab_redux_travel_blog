const db = require('../db')
const { Review, Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const postOne = new Post({
    name: 'Place 1',
    details: 'Details 1',
    location: 'Location 1',
    image: 'url1'
  })
  await postOne.save()

  const postTwo = new Post({
    name: 'Place 2',
    details: 'Details 2',
    location: 'Location 2',
    image: 'url2'
  })
  await postTwo.save()

  const postThree = new Post({
    name: 'Place 3',
    details: 'Details 3',
    location: 'Location 3',
    image: 'url3'
  })
  await postThree.save()

  const reviews = [
    {
      post: postOne._id,
      reviewfrom: 'Anonymous',
      rating: 5,
      review: "Amazing view great staff, can't wait to go back."
    },
    {
      post: postTwo._id,
      reviewfrom: 'Anonymous',
      rating: 4,
      review: 'Fire vacation spot would recommend.'
    },
    {
      post: postThree._id,
      reviewfrom: 'AHH',
      rating: 4,
      review: 'Fire vacation spot would recommend.'
    },
    {
      post: postThree._id,
      reviewfrom: 'It works',
      rating: 4,
      review: 'Fire vacation spot would recommend.'
    }
  ]

  await Review.insertMany(reviews)
  console.log('Created posts!')

  const comments = [
    {
      post: postOne._id,
      username: 'Guillermo',
      comment: 'I would love to visit one day.'
    },
    {
      post: postTwo._id,
      username: 'DeJuan',
      comment: 'Amazing view'
    },
    {
      post: postThree._id,
      username: 'Michelle',
      comment: 'Wow! Love the place.'
    }
  ]

  await Comment.insertMany(comments)
  console.log('Created posts!')
}

const run = async () => {
  await Review.deleteMany()
  await Post.deleteMany()
  await Comment.deleteMany()
  await main()
  db.close()
}

run()
