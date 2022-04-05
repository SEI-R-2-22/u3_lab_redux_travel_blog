import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    departmentState: DepartmentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
