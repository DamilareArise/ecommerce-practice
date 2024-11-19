import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const NavBar = () => {
  let  carts = useSelector((state)=>state.cart.items) 

  return (
    <>
        <header className='bg-white w-100 position-fixed top-0 z-3'>
            <nav className="navbar navbar-expand-lg col-md-9 m-auto bg-white py-4">
                <div className="container-fluid">
                    <a className="navbar-brand col-md-12 text-center fs-2 fw-medium text-danger mb-sm-2" href="#">STORE</a>
                    <button className="navbar-toggler border shadow-sm mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link to={'/display-cart'} className="nav-link bg-danger text-white px-4 d-flex align-items-center rounded-pill fw-medium gap-3"  href="#">
                                <i className="fa-solid fa-cart-shopping position-relative">
                                    <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-black">
                                        {carts.length}
                                    </span>
                                </i> 
                                
                                <span>Cart</span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default NavBar