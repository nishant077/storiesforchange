import { Route, Routes } from "react-router-dom"

import Aboutpage from "./pages/about/Aboutpage"
import Homepage from "./pages/home/Homepage"


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  )
}

export default App
