import Client from './'

export const allPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const postId = async (id) => {
  try {
    const res = await Client.get(`/posts${id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const allReviews = async () => {
  try {
    const res = await Client.get('/reviews')
    return res.data.reviews
  } catch (error) {
    throw error
  }
}

export const getReviewByPost = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}/review`)
    return res
  } catch (error) {
    throw error
  }
}

export const getAllComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data.comments
  } catch (error) {
    throw error
  }
}

export const getCommentByPost = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}/comments`)
    return res
  } catch (error) {
    throw error
  }
}

export const createComment = async () => {
  try {
    const res = await Client.post('/comments')
    return res
  } catch (error) {
    throw error
  }
}

export const createReview = async () => {
  try {
    const res = await Client.post('/reviews')
    return res
  } catch (error) {
    throw error
  }
}
