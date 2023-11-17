import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const[inputField,changeinputField]=useState({

        "email":"",
        "password":""
    })
    const inputHandler=(event)=>{

        changeinputField({...inputField,[event.target.name]:event.target.value})
    }

    const readVal=()=>{
        console.log(inputField)
        if(inputField.email=="admin@gmail.com" && inputField.password=="1234"){
            navigate('/add')
        }else{
            alert("Invalid Credentials")
        }

    }
  return (
    <div>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="text" className="form-control"name="email" value={inputField.email} onChange={inputHandler}  />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control"name="password" value={inputField.password} onChange={inputHandler}  />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readVal} className="btn btn-success">Login</button>
                    </div>
                </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Login