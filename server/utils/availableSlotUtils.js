const _ = require('lodash')

const consultantTypesAccumulator = (consultantTypes, availableSlot) => {
  return _.uniq([
    ...consultantTypes,
    ..._.get(availableSlot, 'consultantType', []),
  ])
}

const getUniqueConsultantTypes = availableSlots => {
  return availableSlots.reduce(consultantTypesAccumulator, [])
}

const slotsByConsultantTypeAccumulator = consultantType => (
  slots,
  availableSlot
) => {
  return _.get(availableSlot, 'consultantType', []).includes(consultantType)
    ? [...slots, availableSlot]
    : [...slots]
}

const getSlotsByConsultantType = (consultantType, availableSlots) => {
  return availableSlots.reduce(
    slotsByConsultantTypeAccumulator(consultantType),
    []
  )
}

module.exports = {
  getUniqueConsultantTypes,
  getSlotsByConsultantType,
}
