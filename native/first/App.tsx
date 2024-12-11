import React from 'react'
import { Text, View } from 'react-native'
import StyleSample from './src/samples/StyleSample'
import FlexSample from './src/samples/FlexSample'
import Home from './src/screens/Home'
import { Provider } from 'react-redux'
import store from './src/store/store'
import { NavigationContainer } from '@react-navigation/native'
import Router from "./src/Router"

const App = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
  )
}

export default App

//rnfe