const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = graphql
const _ = require('lodash')
const httpService = require('../service/httpService')

const AppointmentType = new GraphQLObjectType({
  name: 'Appointments',
  fields: () => ({
    id: { type: GraphQLInt },
    notes: { type: GraphQLString },
    userId: { type: GraphQLInt },
    consultantType: { type: GraphQLString },
    appointmentType: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    time: { type: GraphQLString },
  }),
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    bookAppointment: {
      type: AppointmentType,
      args: {
        notes: { type: GraphQLString },
        userId: { type: new GraphQLNonNull(GraphQLInt) },
        consultantType: { type: new GraphQLNonNull(GraphQLString) },
        appointmentType: {
          type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        },
        time: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parentValue, args) => {
        const newAppointment = await httpService.makeAppointment(args)
        return newAppointment
      },
    },
  }),
})

module.exports = mutation
