const { Router } = require('express')
const controllers = require('../controllers/PostControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/posts', controllers.allPosts)

router.get('/posts/:id', controllers.postId)

router.get('/reviews', controllers.allReviews)

router.get('/posts/:id/review', controllers.getReviewByPost)

module.exports = router
