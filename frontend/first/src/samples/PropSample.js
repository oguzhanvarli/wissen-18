import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function PropSample() {

  let headerText = "Merhaba ben headertext ve App.js üzerinden prop olarak geldim."
  let mainText = "Merhaba ben maintext ve App.js üzerinden prop olarak geldim."
  let footerText = "Merhaba ben footertext ve App.js üzerinden prop olarak geldim."

  return (
    <div>
      <Header yazi={headerText}  ></Header>
      <Main yazi2={mainText} />
      <Footer footerText={footerText} age={18} city={"İStanbul"} cities={["ist", "ankara", "edirne"]} isVisible={true} />
    </div>
  )
}

export default PropSample