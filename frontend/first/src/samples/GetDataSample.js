import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router'

function GetDataSample() {
  //FETCH İLE DATA ÇEKME
  const getData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const responseToJson = await response.json()
      console.log(responseToJson)
    } catch (error) {
      console.log("Get Characters Error", error)
    }
  }

  //AXIOS İLE DATA ÇEKME
  const [data, setData] = useState([])
  const getDataAxios = async () => {
    try {
      console.log("çalıştım")
      const response = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(response.data)
      setData(response.data.results)
      console.log(data.length)
    } catch (error) {
      console.log("Get Characters Error", error)
    }
  }


  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getDataAxios()
    return () => {
      //Component'ten çıkılırken(ölürken) yapılacak iler buraya yazılır
    }
  },[])




  //MAP ÖRNEK
  // data.map((element) => {
  //   console.log(element)
  // })




  return (
    <div>
      <Link to={"/counter"}>Go To Counter</Link> 
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {/* <button onClick={getDataAxios}>Get Data</button> */}
      {
        data.map((character, key) => (
          <div key={key}>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default GetDataSample