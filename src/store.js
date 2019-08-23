import { createStore } from 'redux'
import rootReducer from './rootReducer'

const defaultStore = {
  userID: 1,
}

const store = createStore(rootReducer, defaultStore)

export default store
