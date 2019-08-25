import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { defaultStore } from './components'

const store = createStore(rootReducer, defaultStore)

export default store
