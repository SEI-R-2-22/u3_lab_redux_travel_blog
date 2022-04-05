const db = require('../db')
const { Review, Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comment1 = await new Comment({
    username: 'Molly',
    comment: 'This is cool'
  })
  comment1.save()

  const comment2 = await new Comment({
    username: 'Michelle',
    comment: 'Wow! Love the place.'
  })
  comment2.save()

  const comment3 = await new Comment({
    username: 'DeJuan',
    comment: 'Amazing view'
  })
  comment3.save()

  const comment4 = await new Comment({
    username: 'Guillermo',
    comment: 'I would love to visit one day.'
  })
  comment4.save()

  const review1 = await new Review({
    reviewfrom: 'Anonymous',
    rating: 4,
    review: 'Fire vacation spot would recommend.'
  })
  review1.save()

  const review2 = await new Review({
    reviewfrom: 'Anonymous',
    rating: 5,
    review: "Amazing view great staff, can't wait to go back."
  })
  review2.save()

  const posts = [
    {
      name: 'Place 1',
      details: 'Details 1',
      location: 'Location 1',
      image: 'url1'
    },
    {
      name: 'Place 2',
      details: 'Details 2',
      location: 'Location 2',
      image: 'url2'
    },
    {
      name: 'Place 3',
      details: 'Details 3',
      location: 'Location 3',
      image: 'url3'
    },
    {
      name: 'Place 4',
      details: 'Details 4',
      location: 'Location 4',
      image: 'url4'
    }
  ]
  await Post.insertMany(posts)
  console.log('Created posts!')
}

const run = async () => {
  await main()
  db.close()
}

run()
