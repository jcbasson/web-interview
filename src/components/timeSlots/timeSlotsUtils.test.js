import { formatTimeSlotTimes } from './utils'

describe('timeSlots/utils', () => {
  describe('formatTimeSlotTimes', () => {
    it('should return no time slots if there is no data', () => {
      const result = formatTimeSlotTimes([])

      expect(result).toEqual([])
    })

    it('should return time slots with their dates formatted', () => {
      const timeSlots = [
        {
          id: 1,
          time: '2019-11-27T10:11:00.000Z',
        },
      ]
      const result = formatTimeSlotTimes(timeSlots)
      const expected = [
        {
          id: 1,
          displayTime: 'Wednesday, November 27th 2019, 9:11:00 pm',
          time: '2019-11-27T10:11:00.000Z',
        },
      ]

      expect(result).toEqual(expected)
    })

    it('should return the same amount of times slots as provided', () => {
      const timeSlots = [
        {
          id: 1,
          time: '2019-11-27T10:11:00.000Z',
        },
        {
          id: 2,
          time: '2019-11-27T11:11:00.000Z',
        },
      ]

      const expected = formatTimeSlotTimes(timeSlots).length

      expect(timeSlots.length).toEqual(expected)
    })
  })
})
