import React from 'react'

function Footer({footerText, age, city}) {
  return (
    // <h1>Merhaba ben Footer Componentim</h1>
    <>
      <h1>{footerText}</h1>
      <h1>{age}</h1>
      <h1>{city}</h1>
    </>
  )
}

export default Footer