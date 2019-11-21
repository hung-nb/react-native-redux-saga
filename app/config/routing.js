import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from 'app/domains/home'

const AppNavigator = createStackNavigator(
    {
        Home: Home
    }
  )

export default createAppContainer(AppNavigator)
