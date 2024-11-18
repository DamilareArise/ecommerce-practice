import NavBar from "./NavBar"


const DisplayCart = () => {
  return (
    <>  
        <NavBar/>
        <section style={{marginTop:"10rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between mb-4 border border-danger" style={{height:'20dvh'}}>
                        <div className="align-content-center">
                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" height={70}/>
                        </div>
                        <div className="col-3 align-content-center">
                            <h5>Card title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                        </div>
                        <div className="align-content-center">
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-outline-danger">-</button>
                                <span>1</span>
                                <button className="btn btn-outline-danger">+</button>
                            </div>
                        </div>
                        <div className=" align-content-center">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between mb-4 border border-danger" style={{height:'20dvh'}}>
                        <div className="align-content-center">
                            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" height={70}/>
                        </div>
                        <div className="col-3 align-content-center">
                            <h5>Card title</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                        </div>
                        <div className="align-content-center">
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-outline-danger">-</button>
                                <span>1</span>
                                <button className="btn btn-outline-danger">+</button>
                            </div>
                        </div>
                        <div className=" align-content-center">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger w-100">checkout</button>
            </div>
        </section>

    </>
  )
}

export default DisplayCart