import { ToastContainer } from 'react-toastify'
import './App.css'
import LoginPage from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { RecoilRoot } from 'recoil'
import UpdateCake from './pages/updatecake'

function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cake/update/:id' element={<UpdateCake />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer />
    </>
  )
}

export default App
