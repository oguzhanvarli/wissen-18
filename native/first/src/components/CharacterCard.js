import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from '@rneui/themed';

const CharacterCard = ({ item, addFavorite }) => {
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: item.image,
        }}
        resizeMode='contain'
      />
      <Text style={{ marginBottom: 10 }}>
        {`${item.status} - ${item.species}`}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="DETAIL"
          color={"success"}
        />
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="ADD FAVORITE"
          color={"error"}
          onPress={addFavorite}
        />
      </View>

    </Card>
  )
}

export default CharacterCard

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})