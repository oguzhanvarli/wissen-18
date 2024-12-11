import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const FavoritiesList = () => {
  const navigation = useNavigation()
  const {value} = useSelector(state => state.favorite)
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
      <Text style={styles.textStyle}>{`Favoriler (${value})`}</Text>
    </TouchableOpacity>
  )
}

export default FavoritiesList

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "right",
    fontSize: 20,
    color: "indianred",
    marginRight: 20,
    marginTop: 20
  }
})