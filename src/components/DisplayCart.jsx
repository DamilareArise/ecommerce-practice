import { useDispatch, useSelector } from "react-redux"
import NavBar from "./NavBar"
import { decreaseQuantity, increaseQuantity } from "../app/cartSlicer"


const DisplayCart = () => {
    const dispatch = useDispatch()
    let carts = useSelector((state)=> state.cart.items)
    console.log(carts)

    const handleIncrease = (index)=>{
        dispatch(increaseQuantity(index))
    }

    const handleDecrease = (index) =>{
        dispatch(decreaseQuantity(index))
    }

  return (
    <>  
        <NavBar/>
        <section style={{marginTop:"10rem"}}>
            
            <div className="container">
                <div className="row">

                    {
                        carts.map((cart, index) => (


                            <div className="col-12 d-flex justify-content-between mb-4 border border-danger" style={{height:'20dvh'}} key={index}>
                                <div className="align-content-center">
                                    <img src={cart['product'].image} alt="" height={70}/>
                                </div>
                                <div className="col-3 align-content-center">
                                    <h5>{cart['product'].title}</h5>
                                    <p>#{cart.total_price.toLocaleString()}</p>
                                    <p>{cart['product'].description}</p>
                                </div>
                                <div className="align-content-center">
                                    <div className="d-flex align-items-center gap-3">
                                        <button className="btn btn-outline-danger" onClick={()=>handleDecrease(index)}>-</button>
                                        <span>{cart.quantity}</span>
                                        <button className="btn btn-outline-danger" onClick={()=>handleIncrease(index)}>+</button>
                                    </div>
                                </div>
                                <div className=" align-content-center">
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        ))
                    }


                </div>
                <button className="btn btn-danger w-100">checkout</button>
            </div>
        </section>

    </>
  )
}

export default DisplayCart