import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const StyleSample = () => {

  const phoneHeight = Dimensions.get("window").height
  const phoneHeightScreen = Dimensions.get("screen").height

  console.log(phoneHeight)
  console.log(phoneHeightScreen)

  return (
    <View style={{height: phoneHeight, justifyContent: "center", alignContent: "center", backgroundColor: "red"}}>
      <Text style={styles.textStyle}>StyleSample</Text>
    </View>
  )
}

export default StyleSample

const styles = StyleSheet.create({
  textStyle : {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  }
})