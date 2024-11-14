import axios from "axios";
import { useSelector } from "react-redux"


const ViewProduct = () => {
  let products = useSelector((state)=> state.product.products)
  console.log(products);


  const handleDelete = (product_id)=>{
    let proceed = confirm('Are you sure?')
    if(proceed){
      let url = `https://e-commerce-8kbb.onrender.com/product/delete-product/${product_id}`
      let token = localStorage.token
      axios.delete(url, {
        headers: {
          "Authorization": `Bearer ${token}`

        }
      })
      .then((response)=>{
        let result = response.data
        alert(result.message)
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      console.log('cancelled')
    }
  }
  

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
            {
              products ? (
                <tbody>
                  {
                    products.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img src={product.image} alt={product.title} style={{width: 50}}/>
                        </td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>#{product.price}</td>
                        <td>{product.quantity}</td>
                        <td><button className='btn'><i className="fa-regular fa-pen-to-square"></i></button></td>
                        <td><button onClick={()=>handleDelete(product._id)} className='btn'><i className="fa-solid fa-trash"></i></button></td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              ) :
              (
                <tbody>
                
                  <p className="text-center">Loading...</p>
                
                </tbody>
              )
            }

           
        </table>
    </>
  )
}

export default ViewProduct