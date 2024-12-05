
function Header(prop) {
  // console.log(prop.yazi)
  return (
    <div className="main">
      {/* <h1 style={{fontSize: 40, textDecoration: "underline"}}>Merhaba ben Header Componentim</h1> */}
      <h1>{prop.yazi}</h1>
    </div>
  )
}
export default Header