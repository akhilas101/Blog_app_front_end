import React, { useState } from 'react'


import axios from 'axios'
import AddHeader from './AddHeader'
// import { useNavigate } from 'react-router-dom'

export const MyPost = () => {
    // const navigate = useNavigate()
    const [inputField, changeinputField] = useState(
        {
            "userid": ""

        }
    )




    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value })
    }
    const [result, changeResult] = useState(
        []
    )

    const readValue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/ViewMy/", inputField).then(
            (response) => {
                changeResult(response.data)

            }
        )


    }

   
    return (

        <div>
            <AddHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>My Post  </h1>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">userid </label>
                                <input type="text" name="userid" value={inputField.userid} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>View My post Details</h1>
                {result.map((value, index) => {
                    return <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="card">
                                        {/* <img class="card-img-top" src={value.image} alt="Card image cap"></img> */}
                                        <div className="card-body">
                                            <h5 className="card-title">userid: {value.userid}</h5>
                                            <p className="card-text">title: {value.title}</p>
                                            <p className="card-text">message: {value.message}</p>
                                           </div>
                                    </div>
                                </div>

                })}
            </div>
            </div>
            
        </div>  </div>
                        </div>
    )
}

export default MyPost