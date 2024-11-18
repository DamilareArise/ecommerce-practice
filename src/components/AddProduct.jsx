import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const token = localStorage.token;


  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_price: "",
      product_description: "",
      product_image: "",
      product_quantity: "",
    },
    onSubmit: (values) => {
      console.log(values);
      let url = "https://e-commerce-8kbb.onrender.com/product/add-product";
      axios
        .post(
          url,
          {
            title: values.product_name,
            price: values.product_price,
            description: values.product_description,
            image: values.product_image,
            quantity: values.product_quantity,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          let result = response.data;
          if(result.status){
            alert("Product Added Successfully");
            window.location.reload()
          }else{
            alert("Failed to Add Product");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    validationSchema: Yup.object({
      product_name: Yup.string().required("Product name required"),
      product_price: Yup.number().required("Product price required"),
      product_description: Yup.string().required(
        "Product description required"
      ),
      product_image: Yup.string().required("Product image required"),
      product_quantity: Yup.number().required("Product quantity required"),
    }),
  });

  return (
    <>
      <div className="container">
        <h3 className="text-center py-3 text-danger">Add Product</h3>
        <div className="border rounded col-md-6 m-auto p-3">
          <form className="" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              className="form-control mb-2 shadow-none border "
              name="product_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.product_name && formik.errors.product_name ? (
              <div className="text-danger">{formik.errors.product_name}</div>
            ) : null}
            <input
              type="text"
              placeholder="Product Image"
              className="form-control mb-2 shadow-none border"
              name="product_image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.product_image && formik.errors.product_image ? (
              <div className="text-danger">{formik.errors.product_image}</div>
            ) : null}
            <input
              type="text"
              placeholder="Product Description"
              className="form-control mb-2 shadow-none border"
              name="product_description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.product_description &&
            formik.errors.product_description ? (
              <div className="text-danger">
                {formik.errors.product_description}
              </div>
            ) : null}
            <input
              type="number"
              placeholder="Product Price"
              className="form-control mb-2 shadow-none border"
              name="product_price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.product_price && formik.errors.product_price ? (
              <div className="text-danger">{formik.errors.product_price}</div>
            ) : null}

            <input
              type="number"
              placeholder="Product Quantity"
              className="form-control mb-2 shadow-none border"
              name="product_quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.product_quantity &&
            formik.errors.product_quantity ? (
              <div className="text-danger">
                {formik.errors.product_quantity}
              </div>
            ) : null}
            <button type="submit" className="w-100 btn btn-danger">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
