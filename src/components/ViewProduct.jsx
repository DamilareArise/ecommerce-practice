

const ViewProduct = () => {
  return (
    <>
    
        <h3 className='text-center py-3 text-danger'>Product List</h3>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><button className='btn'><i className="fa-regular fa-pen-to-square"></i></button></td>
                <td><button className='btn'><i className="fa-solid fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ViewProduct