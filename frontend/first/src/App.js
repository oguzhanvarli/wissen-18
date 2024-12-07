import { Fragment } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import CounterSample from "./samples/CounterSample"
import GetDataSample from "./samples/GetDataSample"
import { BrowserRouter, Route, Routes } from "react-router"
import PropSample from "./samples/PropSample"



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetDataSample/>} />
        <Route path="/counter" element={<CounterSample />}/>
        <Route path="/props" element={<PropSample/>} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App