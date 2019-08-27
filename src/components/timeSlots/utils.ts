import _ from 'lodash';
import { TimeSlotsTypes } from './types';
import moment from 'moment';

export const formatTimeSlotTimes: TimeSlotsTypes.Utils.FormatTimeSlotTimes = (timeSlots) => {

    return _.isEmpty(timeSlots)? []: timeSlots.map(formatTime)

};

const formatTime: TimeSlotsTypes.Utils.FormatTime = (timeSlot) => {

    const time = _.get(timeSlot, 'time');
    const formattedTime = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");

    return {
        ...timeSlot,
        displayTime: formattedTime,
    }
}