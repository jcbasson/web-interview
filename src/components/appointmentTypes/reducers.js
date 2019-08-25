import _ from 'lodash'
import {
  SET_APPOINTMENT_TYPE,
  UNSET_APPOINTMENT_TYPE,
  CLEAR_APPOINTMENT_TYPE,
} from './actions'

export const appointmentTypesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENT_TYPE:
      const { appointmentType } = action
      return [...state, appointmentType]
    case UNSET_APPOINTMENT_TYPE:
      const { appointmentTypeToRemove } = action
      return _.remove(state, at => at !== appointmentTypeToRemove)
    case CLEAR_APPOINTMENT_TYPE:
      return []
    default:
      return state
  }
}
