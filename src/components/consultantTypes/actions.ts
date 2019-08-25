export const SET_CONSULTANT_TYPE = 'SET_CONSULTANT_TYPE'

export function setConsultantType(consultantType: string) {
  return { type: SET_CONSULTANT_TYPE, consultantType }
}