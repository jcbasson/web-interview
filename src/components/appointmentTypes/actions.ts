export const SET_APPOINTMENT_TYPE = 'SET_APPOINTMENT_TYPE'
export const UNSET_APPOINTMENT_TYPE = 'UNSET_APPOINTMENT_TYPE'
export const CLEAR_APPOINTMENT_TYPE = 'CLEAR_APPOINTMENT_TYPE'

export const setAppointmentType = (appointmentType: string) => {
  return { type: SET_APPOINTMENT_TYPE, appointmentType }
}

export const clearAppointmentType = () => {
  return {type: CLEAR_APPOINTMENT_TYPE}
}

export const unsetAppointmentType = (appointmentTypeToRemove: string) => {
  return { type: UNSET_APPOINTMENT_TYPE, appointmentTypeToRemove }
}