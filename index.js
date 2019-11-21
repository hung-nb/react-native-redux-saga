/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './app/App'
import { name as appName } from './app.json'
import StorybookUI from './storybook'

if (__DEV__) {
  import('./app/config/reactotron').then(() =>
    console.log('Reactotron Configured'),
  )
}

let app = App

if (process.env.SHOW_STORYBOOK) {
  app = StorybookUI
}

AppRegistry.registerComponent(appName, () => app)
