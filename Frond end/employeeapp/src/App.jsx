
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/view' element={<View />}></Route>

      </Routes>

    </>
  )
}

export default App
