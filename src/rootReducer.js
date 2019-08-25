import { combineReducers } from 'redux'
import { reducers, defaultStore } from './components'

const rootReducer = combineReducers(reducers, defaultStore)

export default rootReducer
