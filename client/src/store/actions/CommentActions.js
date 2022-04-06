import { GetComments } from '../../services/TravelServices'
import { GET_COMMENTS } from '../types'

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}
