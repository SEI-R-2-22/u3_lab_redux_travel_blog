import {
  allPosts,
  postId,
  allReviews,
  getReviewByPost,
  getAllComments,
  getCommentByPost,
  createComment,
  createReview
} from '../../services/TravelService'
import { GET_COMMENTS, GET_POSTS, GET_REVIEWS } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const postList = await allPosts()
      dispatch({
        type: GET_POSTS,
        payload: postList
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await getAllComments()
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}
