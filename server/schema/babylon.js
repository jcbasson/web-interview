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
    availableSlot: {
      type: AvailableSlotType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/availableSlots/${_.get(args, 'id')}`)
          .then(response => _.get(response, 'data'))
      },
    },
    availableSlots: {
      type: new GraphQLNonNull(new GraphQLList(AvailableSlotType)),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/availableSlots`)
          .then(response => _.get(response, 'data'))
      },
    },
  },
})
module.exports = new GraphQLSchema({
  query: RootQuery,
})
