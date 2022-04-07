const { Router } = require('express')
const controllers = require('../controllers/PostControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/posts', controllers.allPosts)

router.get('/posts/:id', controllers.postId)

router.get('/reviews', controllers.allReviews)

router.get('/posts/:id/review', controllers.getReviewByPost)

router.get('/comments', controllers.getAllComments)

router.get('/posts/:id/comments', controllers.getCommentsByPost)

router.post('/comments', controllers.createComment)

router.post('/reviews', controllers.createReview)

module.exports = router
