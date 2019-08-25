import * as React from 'react';
import styled from 'styled-components';

interface IBookButton{
    isAvailable?: boolean;
    clickHandler?: () => void;
}

export const BookButton: React.FC<IBookButton> = ({isAvailable, clickHandler}) => {

    return <><BookAppointmentButton>Book</BookAppointmentButton></>;
}

const BookAppointmentButton = styled.button`
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    background-color: #58bfa9;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 15px;
    outline: none;
`;

// const mapStateToProps = (state: any) => {

//     userId: Int The user's ID that this appointment is for.
//  dateTime: The user's selected time slot as a Date ISO 8601.
// notes: String Any notes the user added when booking. note: not required, can be null.
// type: String The type of the appointment like GP appointment or Physio appointment.
//     const appointmentTypes = _.get(state, 'appointmentType', []);
//     const appointmentTypeOptions = [
//       "audio",
//       "video"
//     ];
//     return { appointmentTypeOptions, appointmentTypes }
//   }
  
//   const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//       setSelected: (isSelected: boolean, appointmentType: string) => () => {
//           dispatch(isSelected? unsetAppointmentType(appointmentType) :setAppointmentType(appointmentType))
//       },
//     }
//   }
  
//   export const AppointmentTypes = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(AppointmentTypesUI)