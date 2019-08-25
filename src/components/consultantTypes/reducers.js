import { SET_CONSULTANT_TYPE } from './actions'

export const consultantTypesReducer = (state = 'gp', action) => {
  switch (action.type) {
    case SET_CONSULTANT_TYPE:
      const { consultantType } = action
      return consultantType
    default:
      return state
  }
}
