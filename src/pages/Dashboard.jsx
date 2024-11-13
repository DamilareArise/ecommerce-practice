import { useState } from "react";
import ViewProduct from "../components/ViewProduct";
import AddProduct from "../components/AddProduct";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  const [active, setactive] = useState("view-product");

  const renderContent = () => {
    if (active == "add-product") {
      return <AddProduct/>;
    } else if (active == "view-product") {
      return <ViewProduct/>;
    }
  };

  return (
    <>
      <NavBar/>
      <div className="container-fluid" style={{marginTop:"8rem"}}>
        <div className="row dashboard">
          <div className="col-md-2 shadow-sm">
            <h3 className="text-center py-3 text-danger">Admin Dashboard</h3>
            <div className="">
              <button
                className="btn btn-danger text-start p-2 rounded w-100 mb-2 "
                onClick={()=>setactive("view-product")}
              >
                <i className="fa-brands fa-product-hunt"></i> View Product
              </button>
              <button
                className="btn btn-danger text-start p-2 rounded w-100 mb-2 "
                onClick={()=>setactive("add-product")}
              >
                <i className="fa-solid fa-cart-plus"></i> Add Product
              </button>
              <button
                className="btn btn-danger text-start p-2 rounded w-100 mb-2 "
                onClick={()=>setactive("settings")}
              >
                <i className="fa-solid fa-gears"></i> Settings
              </button>
            </div>
          </div>
          <div className="col-md-10 border border-danger">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
