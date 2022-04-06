import {
  allPosts,
  postId,
  allReviews,
  getReviewByPost,
  getAllComments,
  getCommentsByPost,
  createComment,
  createReview
} from '../../services/TravelService'
import { GET_COMMENTS, GET_REVIEWS, GET_POSTS } from '../types'

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
