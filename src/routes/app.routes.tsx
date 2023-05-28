import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Exercise } from '../screens/Exercise'
import { History } from '../screens/History'
import { Profile } from '../screens/Profile'

type AuthRoutesTypes = {
  home: undefined
  history: undefined
  profile: undefined
  exercise: undefined
}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AuthRoutesTypes>

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesTypes>()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}
