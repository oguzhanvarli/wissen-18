import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Favorites from './screens/Favorites'
import Detail from './screens/Detail'


const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default Router