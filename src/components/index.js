import { App } from './app'
import { Header } from './header'
import { consultantTypesReducer } from './consultantTypes'
import { defaultStore } from './state'
import { setUserID } from './user'
import { timeSlotReducer } from './timeSlots'

const reducers = {
  consultantType: consultantTypesReducer,
  timeSlot: timeSlotReducer,
  userID: setUserID,
}
export { App, Header, reducers, defaultStore }
