
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getProduct } from './app/productSlicer'
import Signin from './pages/Signin'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Loading...');
    
    const url = "https://e-commerce-8kbb.onrender.com/product/all-product"
    axios.get(url)
    .then((response)=>{
      console.log(response.data)
      let result = response.data
      dispatch(getProduct(result.data))
    })
    .catch((err)=>{
      console.log(err)
    })
  
   
  }, [])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App
