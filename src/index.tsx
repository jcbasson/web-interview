import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'normalize.css'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
