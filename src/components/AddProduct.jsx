

const AddProduct = () => {
  return (
    <>
    <div className="container">
        <h3 className='text-center py-3 text-danger'>Add Product</h3>
        <div className="border rounded col-md-6 m-auto p-3">
            <form className="">
                <input type="text" placeholder="Product Name" className="form-control mb-2 shadow-none border "/>
                <input type="text" placeholder="Product Image" className="form-control mb-2 shadow-none border"/>
                <input type="text" placeholder="Product Description" className="form-control mb-2 shadow-none border"/>
                <input type="number" placeholder="Product Price" className="form-control mb-2 shadow-none border"/>
                <button className="w-100 btn btn-danger">Add</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default AddProduct