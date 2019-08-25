import { App } from './app'
import { Header } from './header'
import { consultantTypesReducer } from './consultantTypes'
import { defaultStore } from './state'
import { setUserID } from './user'
import { timeSlotReducer } from './timeSlots'
import { appointmentTypesReducer } from './appointmentTypes'

const reducers = {
  consultantType: consultantTypesReducer,
  appointmentType: appointmentTypesReducer,
  timeSlot: timeSlotReducer,
  userID: setUserID,
}
export { App, Header, reducers, defaultStore }
