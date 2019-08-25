import { SET_APPOINTMENT_TYPE, CLEAR_APPOINTMENT_TYPE } from './actions'

export const appointmentTypesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_APPOINTMENT_TYPE:
      const { appointmentType } = action
      return appointmentType

    case CLEAR_APPOINTMENT_TYPE:
      return null
    default:
      return state
  }
}
