import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from 


const store = createStore(
  combineReducers({
    postsState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
