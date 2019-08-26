import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import 'normalize.css'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: errors => {
    /*TODO: Do logging of different error types*/
    console.log(errors);
  },
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </ApolloProvider>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
