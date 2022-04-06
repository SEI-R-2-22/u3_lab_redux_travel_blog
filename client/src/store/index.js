import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from './reducers/PostReducer'
import ReviewReducer from './reducers/ReviewReducer'
import CommentReducer from './reducers/CommentReducer'

const store = createStore(
  combineReducers({
    postsState: PostReducer,
    commentsState: CommentReducer,
    reviewsState: ReviewReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
