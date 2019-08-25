import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { setTimeSlot } from './actions';
import { Title, TimeSlotsContainer, TimeSlot } from './styled';
import { formatTimeSlotTimes } from './utils';

export const GET_TIME_SLOTS_QUERY = gql`
  query AvailableSlots($consultantType: String!){
    availableSlots(consultantType: $consultantType) {
      id, 
      time
    }
  }
`

interface ITimeSlots {
    consultantType: string
    selectedTimeSlot: string;
    setSelected: (timeSlot: string) => () => void;
}

export const TimeSlotsUI: React.FC<ITimeSlots> = ({
    consultantType,
    setSelected,
    selectedTimeSlot
}) => {
  const { loading, error, data } = useQuery(GET_TIME_SLOTS_QUERY, {
    variables: { consultantType },
  });

  if (loading) return null
  if (error) return <h2>Error!</h2>

  const availableSlots = formatTimeSlotTimes(_.get(data, 'availableSlots', []));

  return (
    <>
      <Title>Date & Time</Title>
      <TimeSlotsContainer>
        {availableSlots.map((as: any) => (
          <TimeSlot key={as.id} onClick={setSelected(as.time)} isSelected={selectedTimeSlot === as.time}>{as.displayTime}</TimeSlot>
        ))}
      </TimeSlotsContainer>
    </>
  )
}

function mapStateToProps(state: any) {
  const consultantType = _.get(state, 'consultantType', '');
  const selectedTimeSlot =  _.get(state, 'timeSlot');
  return { consultantType, selectedTimeSlot }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      setSelected: (timeSlot: string) => () => dispatch(setTimeSlot(timeSlot))
    }
  }

export const TimeSlots = connect(mapStateToProps, mapDispatchToProps)(TimeSlotsUI)
