
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
