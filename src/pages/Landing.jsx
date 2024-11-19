
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../app/cartSlicer"


const Landing = () => {
  const dispatch = useDispatch()
  let products = useSelector((state)=> state.product.products)
  
  const handleAddToCart = (index) =>{
    let item = {
        product: products[index],
        quantity: 1,
        total_price: products[index].price
    }
    dispatch(addItem(item))
    alert('add to cart sucessfully')
  }
    
  return (
    <>
        <NavBar/>



        <main style={{marginTop:"10rem"}}>

            <div className="container py-3">
                <div className="row">
                    {
                        products.map((product, index) =>(
                            <div className="col-md-4 d-flex mb-4 justify-content-center" key={index}>
                                <div className="card h-100 border-0 shadow-sm rounded-3" style={{width: "20rem"}}>
                                    <img src={product.image} className="card-img-top" alt="..." height={200}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">#{product.price.toLocaleString()}</p>
                                        <p className="card-text">{product.description}</p>
                                        <a href="#" className="btn btn-danger" onClick={() => handleAddToCart(index)}>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className="position-fixed bottom-0 ">   
                <Link to={'/admin-dashboard'} className="btn">
                    admin page
                </Link>
            </div>
        </main>
    
    </>
  )
}

export default Landing