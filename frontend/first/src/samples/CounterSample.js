import React, { useState } from 'react'
import { Link } from 'react-router'

function CounterSample() {

  const [fullName, setFullName] = useState("Oğuz")


  let name = "Oğuzhan"

  const changeName = () => {
    console.log("worked")
    name = "Oğuzhan Varlı"
    console.log(name)
  }

  function changeName2() {
    setFullName("Oğuzhan Varlı")
  }


  //COUNTER

  const [counter, setCounter] = useState(0)

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if(counter > 0) setCounter(counter - 1)
  }
  const selamla = () => {
    console.log("Merhaba")
  }

  const selamlaIsimle = (value) => {
    console.log("Merhaba" + value)
  }

  return (
    <div>
      {/* <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <h1>{fullName}</h1>
      <button onClick={changeName2}>Change Name</button> */}
      <Link to={"/props"}>Go To Props</Link> 

      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={selamla}> Selam Gönder </button>
      <button onClick={() => selamla()}> Selam Gönder İkincisi</button>
      <button onClick={() => selamlaIsimle("Ali2")}> Selam Gönder Isimle2</button>
      <button onClick={selamlaIsimle("Ali")}> Selam Gönder Isimle</button>    {/*BURASI YANLIŞ PARAMETRELİ FONKİSYON GÖNDERİRKEN BÖYLE GÖNDERİM YAPILAMAZ */}
    </div>
  )
}

export default CounterSample