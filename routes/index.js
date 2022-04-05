const { Router } = require('express')
const controllers = require('../controllers/PostControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/posts')

const exports = router
