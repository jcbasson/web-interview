const axios = require('axios')
const _ = require('lodash')

const API_ENDPOINT = 'http://localhost:3000'

const getUser = id =>
  axios
    .get(`${API_ENDPOINT}/users/${id}`)
    .then(response => _.get(response, 'data'))

const getAvailableSlots = () =>
  axios
    .get(`${API_ENDPOINT}/availableSlots`)
    .then(response => _.get(response, 'data'))

const getConsultantTypes = () =>
  axios
    .get(`${API_ENDPOINT}/availableSlots`)
    .then(response => _.get(response, 'data'))

const makeAppointment = appointment =>
  axios
    .post(`${API_ENDPOINT}/appointments`, { ...appointment })
    .then(response => _.get(response, 'data'))

module.exports = {
  getUser,
  getAvailableSlots,
  getConsultantTypes,
  makeAppointment,
}
