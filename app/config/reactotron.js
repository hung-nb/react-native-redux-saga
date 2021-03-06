import Reactotron, { networking, trackGlobalErrors } from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(trackGlobalErrors())
  .use(networking({
    ignoreUrls: /\/(logs|symbolicate)$/
  }))
  .connect() // let's connect!

export default reactotron
