import { getBookingData, isBookingAvailable } from './utils'

describe('bookingButton/utils', () => {
  describe('getBookingData', () => {
    it('should return booking data from the state', () => {
      const mockState = {
        consultantType: 'gp',
        appointmentType: ['video'],
        timeSlot: '2019-11-27T10:11:00.000Z',
        userID: 1,
        notes: 'Test text for notes',
      }
      const getBooking = getBookingData()
      const result = getBooking(mockState)

      expect(result).toEqual({
        consultantType: 'gp',
        time: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
        appointmentType: ['video'],
      })
    })
  })

  describe('isBookingAvailable', () => {
    it('should return false if user id is empty', () => {
      const mockBookingData = {
        consultantType: 'gp',
        time: '2019-11-27T10:11:00.000Z',
        userId: null,
        notes: 'Test text for notes',
        appointmentType: ['video'],
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return false if consultant type is not selected', () => {
      const mockBookingData = {
        consultantType: null,
        time: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
        appointmentType: ['video'],
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return false if date time is not selected', () => {
      const mockBookingData = {
        consultantType: 'gp',
        time: null,
        userId: 1,
        notes: 'Test text for notes',
        appointmentType: ['video'],
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return false if no appointment types were selected', () => {
      const mockBookingData = {
        consultantType: 'gp',
        time: null,
        userId: 1,
        notes: 'Test text for notes',
        appointmentType: [],
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return true if user id, consultant type, and date time are not empty', () => {
      const mockBookingData = {
        consultantType: 'gp',
        time: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
        appointmentType: ['video'],
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(true)
    })
  })
})
