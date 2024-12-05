import React, { useState } from 'react'

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


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <h1>{fullName}</h1>
      <button onClick={changeName2}>Change Name</button>
    </div>
  )
}

export default CounterSample