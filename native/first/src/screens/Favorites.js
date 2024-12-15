import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, ListItem } from '@rneui/themed'
import { clearAll } from '../store/features/favoriteSlice'

const Favorites = () => {
  const {favoriteArray} = useSelector(state => state.favorite)
  const dispatch = useDispatch()


  console.log(favoriteArray.length)

  return (
    <FlatList
      data={favoriteArray}
      renderItem={({item}) => (
        <ListItem bottomDivider>
          <Avatar 
            rounded
            source={{uri: item.image}}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
      ListEmptyComponent={<Text>You Have Not Character!</Text>}
      ListFooterComponent={
        favoriteArray.length > 0 ?
        <TouchableOpacity onPress={() => dispatch(clearAll())}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity> : null
      }
    />
  )
}

export default Favorites

const styles = StyleSheet.create({
  clearText : {
    color: "red",
    textAlign: "right",
    margin: 20,
    fontSize: 20
  }
})