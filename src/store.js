import { createStore } from 'redux'
import rootReducer from './rootReducer'

const defaultStore = {
  userID: 1,
  selectedGP: 'gp',
}

const store = createStore(rootReducer, defaultStore)

export default store
