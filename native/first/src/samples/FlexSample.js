import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexSample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <Text>FlexSample</Text>
      </View>
      <View style={styles.innerContainer2}>
        <Text>FlexSample</Text>
      </View>
      <View style={styles.innerContainer3}>
        <Text>FlexSample</Text>
      </View>
    </View>
  )
}

export default FlexSample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  innerContainer1: {
    flex: 2,
    backgroundColor: "red"
  },
  innerContainer2 : {
    flex: 1,
    backgroundColor: "yellow"
  },
  innerContainer3 : {
    flex: 2,
    backgroundColor: "pink"
  }
})