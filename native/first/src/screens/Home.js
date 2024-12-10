import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [data, setData] = useState()


  console.log(data)

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log("Get Character Error")
    }
  }

  return (
    <ScrollView>
      {
        data && data.results.map((item) => (
          <>
            <Text style={{ fontSize: 30 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.status}</Text>
          </>
        ))
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})