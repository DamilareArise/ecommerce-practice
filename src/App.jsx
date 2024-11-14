
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getProduct } from './app/productSlicer'
import Signin from './pages/Signin'
import DisplayCart from './components/DisplayCart'


const App = () => {

  const token = localStorage.token

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
        <Route path='/admin-dashboard' element={token ? <Dashboard/> : <Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/display-cart' element={<DisplayCart/>}/>
      </Routes>
    </>
  )
}

export default App
