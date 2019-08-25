import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { defaultStore } from './components'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, defaultStore, composeWithDevTools())

export default store
