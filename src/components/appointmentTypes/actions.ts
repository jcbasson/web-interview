export const SET_APPOINTMENT_TYPE = 'SET_APPOINTMENT_TYPE'
export const CLEAR_APPOINTMENT_TYPE = 'CLEAR_APPOINTMENT_TYPE'

export const setAppointmentType = (appointmentType: string) => {
  return { type: SET_APPOINTMENT_TYPE, appointmentType }
}

export const clearAppointmentType = () => {
  return {type: CLEAR_APPOINTMENT_TYPE}
}