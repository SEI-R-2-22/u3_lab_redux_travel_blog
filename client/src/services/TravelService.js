import Client from './'

export const allPosts = async () => {
  try {
    console.log('AllPosts Function')
    const res = await Client.get('/posts')
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const postId = async (id) => {
  try {
    const res = await Client.geT(`/departments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const allReviews = async () => {
  try {
    const res = await Client.get('/reviews')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getReviewByPost = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}/review`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getCommentsByPost = async (id) => {
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
    const res = await Client.post('/review')
    return res
  } catch (error) {
    throw error
  }
}
