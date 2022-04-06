const { GET_POSTS, POST_LOADING_TYPE } = require('../types')

const iState = {
  posts: [],
  postsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case POST_LOADING_TYPE:
      return { ...state, postsLoading: action.payload }
    case GET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
