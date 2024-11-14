import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const Signin = () => {

  const navigate = useNavigate()
  const [loading, setloading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setloading(true)
      console.log(values);
      axios.post("https://e-commerce-8kbb.onrender.com/account/login", values)
      .then((response)=>{
        console.log(response.data);
        let user = response.data
        localStorage.token = user.token
        setloading(false)

        if (user.status){
          navigate('/admin-dashboard')
          window.location.reload()

        }else{
          alert('Invalid credentials')
        }
      })
      .catch((error)=>{
        console.log(error);
        setloading(false)
      })
        
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be atleast 8 characters"),
    }),
  });

  return (
    <>
      <NavBar />
      <section
        className="align-content-center shadow-sm"
        style={{ height: "100dvh" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="container  col-md-5 border border-danger py-2">
            <h3 className="text-center text-danger my-3">Login</h3>
            <input
              type="email"
              className="form-control border shadow-none mb-2"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger mb-2">{formik.errors.email}</div>
              ) 
              : null
            }

            <input
              type="password"
              className="form-control border shadow-none mb-2 "
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger mb-2">{formik.errors.password}</div>
              ) 
              : null
            }
            <button type="submit" className="mb-2 btn btn-danger w-100">
              {loading ? 'Loading...': 'Login'}
            </button>

            <div className="d-flex justify-content-between mb-2">
              <p>
                <Link className="text-decoration-none text-danger">
                  Don&apos;t have an account?
                </Link>
              </p>
              <p>
                <Link className="text-decoration-none text-danger">
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signin;
