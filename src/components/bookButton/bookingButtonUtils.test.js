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
        type: 'gp',
        dateTime: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
      })
    })
  })

  describe('isBookingAvailable', () => {
    it('should return false if user id is empty', () => {
      const mockBookingData = {
        type: 'gp',
        dateTime: '2019-11-27T10:11:00.000Z',
        userId: null,
        notes: 'Test text for notes',
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return false if consultant type is not selected', () => {
      const mockBookingData = {
        type: null,
        dateTime: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return false if date time is not selected', () => {
      const mockBookingData = {
        type: 'gp',
        dateTime: null,
        userId: 1,
        notes: 'Test text for notes',
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(false)
    })

    it('should return true if user id, consultant type, and date time are not empty', () => {
      const mockBookingData = {
        type: 'gp',
        dateTime: '2019-11-27T10:11:00.000Z',
        userId: 1,
        notes: 'Test text for notes',
      }

      const result = isBookingAvailable(mockBookingData)

      expect(result).toEqual(true)
    })
  })
})
