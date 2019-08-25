import * as React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setAppointmentType } from './actions'
import { Title, AppointmentTypesContainer, AppointmentType } from './styled'

interface IAppointmentTypes {
  appointmentType: string;
  setSelected: (consultantType: string) => () => void;
  appointmentTypes: string[];
}

export const AppointmentTypesUI: React.FC<IAppointmentTypes> = ({
  appointmentType,
  setSelected,
  appointmentTypes
}) => {
 
  return (
    <>
      <Title>Consultant Type</Title>
      <AppointmentTypesContainer>
        {appointmentTypes.map((at: string) => (
          <AppointmentType
            key={at}
            onClick={setSelected(at)}
            isSelected={appointmentType === at}
          >
            {at}
          </AppointmentType>
        ))}
      </AppointmentTypesContainer>
    </>
  )
}

function mapStateToProps(state: any) {
  const appointmentType = _.get(state, 'appointmentType', '');
  const appointmentTypes = [
    "audio",
    "video"
  ];
  return { appointmentType, appointmentTypes }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSelected: (appointmentType: string) => () => {
      dispatch(setAppointmentType(appointmentType))
    },
  }
}

export const AppointmentTypes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypesUI)
