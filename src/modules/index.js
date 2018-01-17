import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import ranger from './ranger'

export default combineReducers({
  router: routerReducer,
  ranger,
  counter
})
