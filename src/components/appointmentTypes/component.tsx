import * as React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setAppointmentType, unsetAppointmentType } from './actions'
import { Title, AppointmentTypesContainer, AppointmentType } from './styled'

interface IAppointmentTypes {
  appointmentTypes: string[];
  setSelected: (isSelected: boolean, consultantType: string) => () => void;
  appointmentTypeOptions: string[];
}

export const AppointmentTypesUI: React.FC<IAppointmentTypes> = ({
  appointmentTypeOptions,
  setSelected,
  appointmentTypes
}) => {
  
  return (
    <>
      <Title>Appointment Type</Title>
      <AppointmentTypesContainer>
        {appointmentTypeOptions.map((at: string) => (
          <AppointmentType
            key={at}
            onClick={setSelected(appointmentTypes.includes(at), at)}
            isSelected={appointmentTypes.includes(at)}
          >
            {at}
          </AppointmentType>
        ))}
      </AppointmentTypesContainer>
    </>
  )
}

const mapStateToProps = (state: any) => {
  const appointmentTypes = _.get(state, 'appointmentType', []);
  const appointmentTypeOptions = [
    "audio",
    "video"
  ];
  return { appointmentTypeOptions, appointmentTypes }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSelected: (isSelected: boolean, appointmentType: string) => () => {
        dispatch(isSelected? unsetAppointmentType(appointmentType) :setAppointmentType(appointmentType))
    },
  }
}

export const AppointmentTypes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypesUI)
