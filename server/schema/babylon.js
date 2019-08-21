const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
} = graphql
const _ = require('lodash')
const axios = require('axios')
const availableSlotUtils = require('../utils/availableSlotUtils')

const AvailableSlotType = new GraphQLObjectType({
  name: 'AvailableSlot',
  fields: {
    id: { type: GraphQLInt },
    consultantType: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    appointmentType: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    time: { type: GraphQLString },
  },
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    avatar: { type: GraphQLString },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${_.get(args, 'id')}`)
          .then(response => _.get(response, 'data'))
      },
    },
    availableSlots: {
      type: new GraphQLNonNull(new GraphQLList(AvailableSlotType)),
      args: { consultantType: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/availableSlots`)
          .then(response => _.get(response, 'data'))
          .then(availableSlots =>
            availableSlotUtils.getSlotsByConsultantType(
              _.get(args, 'consultantType'),
              availableSlots
            )
          )
      },
    },
    consultantTypes: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/availableSlots`)
          .then(response => _.get(response, 'data'))
          .then(availableSlots =>
            availableSlotUtils.getUniqueConsultantTypes(availableSlots)
          )
      },
    },
  },
})
module.exports = new GraphQLSchema({
  query: RootQuery,
})
