import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

const Signin = () => {
  return (
    
    <>
        <NavBar/>
        <section className="align-content-center shadow-sm" style={{height:"100dvh"}}>

            <div className="container  col-md-5 border border-danger py-2" >

                <h3 className="text-center text-danger my-3">Login</h3>
                <input type="email" className="form-control border shadow-none mb-2" placeholder="Email"/>
                <input type="password" className="form-control border shadow-none mb-2 " placeholder="Password"/>
                <button className="mb-2 btn btn-danger w-100">Login</button>
                <div className="d-flex justify-content-between mb-2">
                    <p><Link className="text-decoration-none text-danger">Don&apos;t have an account?</Link></p>
                    <p><Link className="text-decoration-none text-danger">Forgot Password?</Link></p>
                
                </div>
            </div>
        </section>
    </>
  )
}

export default Signin