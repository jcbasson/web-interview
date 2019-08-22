const query = require('./queries')
const mutation = require('./mutations')
const graphql = require('graphql')
const { GraphQLSchema } = graphql

module.exports = new GraphQLSchema({
  query,
  mutation,
})
