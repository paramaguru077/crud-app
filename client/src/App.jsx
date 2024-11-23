import React from 'react'
import Home from './Compontent/Home'
import CreatePage from './Compontent/CreatePage'
import ReadPage from './Compontent/ReadPage'
import EditPage from './Compontent/EditPage'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/read/:id' element={<ReadPage/>}/>
        <Route path='/edit/:id' element={<EditPage/>}/>
      </Routes>
    </Router>
  )
}

export default App