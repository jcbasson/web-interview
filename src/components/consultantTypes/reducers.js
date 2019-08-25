import { SET_CONSULTANT_TYPE } from './actions'

export const setConsultantType = (state = { selected: 'gp' }, action) => {
  switch (action.type) {
    case SET_CONSULTANT_TYPE:
      const { consultantType } = action
      return {
        ...state,
        selected: consultantType,
      }
    default:
      return state
  }
}
