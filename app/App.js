/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import Routing from 'app/config/routing'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import store from 'app/redux'

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}

export default App
