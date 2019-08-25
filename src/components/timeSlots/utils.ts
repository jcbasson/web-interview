import _ from 'lodash';
import { TimeSlots } from './types';
import moment from 'moment';

export const formatTimeSlotTimes: TimeSlots.Utils.FormatTimeSlotTimes = (timeSlots) => {

    return _.isEmpty(timeSlots)? []: timeSlots.map(formatTime)

};

const formatTime: TimeSlots.Utils.FormatTime = (timeSlot) => {

    const time = _.get(timeSlot, 'time');
    const formattedTime = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");

    return {
        ...timeSlot,
        time: formattedTime,
    }
}