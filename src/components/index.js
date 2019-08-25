import { App } from './app'
import { Header } from './header'
import { setConsultantType } from './consultantTypes'
import { defaultStore } from './state'
import { setUserID } from './user'

const reducers = {
  consultantType: setConsultantType,
  userID: setUserID,
}
export { App, Header, reducers, defaultStore }
