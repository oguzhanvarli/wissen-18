import { ActivityIndicator, Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

const Home = () => {

  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    if(pageNumber !== 1){
      getNextPage() 
    }
  }, [pageNumber])

  useEffect(() => {
    getData()
  }, [])

  
  

  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data.results)
      // console.log(response.data)
    } catch (error) {
      console.log("Get Character Error")
    }
  }

  const getNextPage = async() => { 
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      setData([...data, ...response.data.results])
    } catch (error) {
      console.log("Get Next Page Error")
    }
  }
  return (
    <View>
     
    <FlatList
      data={data}
      renderItem={({item}) => <CharacterCard item={item} />}
      ListHeaderComponent={
        <Text>Tüm Karakterler</Text>
      }
      onEndReached={() => setPageNumber(pageNumber + 1)}
      ListFooterComponent={
        <View style={{margin: 20}}>
          <ActivityIndicator color={"blue"} size={"large"}/>
        </View>
      }
      onEndReachedThreshold={3}
    />


      {/* {
        data && data.results.map((item) => (
          <>
            <Text style={{ fontSize: 30 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.status}</Text>
            <Button onPress={() => console.log(item.name)} title='Detail'>Detay</Button>
          </>
        ))
      } */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})