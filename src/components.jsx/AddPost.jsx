import axios from 'axios'
import React, { useState } from 'react'
import AddHeader from './AddHeader'

const AddPost = () => {
    const [inputField, changeinputField] = useState({


        "userid":"",
        "title":"",
        "message":""
       
})


const inputHandler = (event) => {
    changeinputField({ ...inputField, [event.target.name]: event.target.value })
}
const readVal = () => {
    console.log(inputField)
    axios.post("http://127.0.0.1:8000/api/post/", inputField).then(
        (response) => {
            alert(response.data.message)
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User Id</label>
                            <input type="text" className="form-control" name="userid" value={inputField.userid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" value={inputField.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea name="message" value={inputField.message} onChange={inputHandler} id="" cols="30" rows="10" className="form-control" ></textarea>
                        </div>
                        
                       
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readVal} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default AddPost