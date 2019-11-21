import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from 'app/redux/middleware/saga'
import Reactotron from 'reactotron-react-native'

import auth from './reducers/auth'

// Debug state on Redux DevTools Extension (React Native Debugger)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create Root Reducer
const rootReducer = combineReducers({
  auth
})

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

// Create Store
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

// Run sagas
sagaMiddleware.run(saga)

export default store
