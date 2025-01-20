import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Gallery from "./pages/Gallery"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/gallery" element={<Gallery/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
