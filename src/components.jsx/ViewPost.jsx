import React, { useEffect, useState } from 'react';

import axios from 'axios';


export const ViewPost = () => {
    const [data, changedata] = useState([]);
    const [isLoading, changeLoading] = useState(true);
  
    const fetchdata = () => {
      axios.post("http://127.0.0.1:8000/api/View/").then(
        (response) => {
          changedata(response.data);
          changeLoading(false);
        }
      );
    };
  
    useEffect(() => {
      fetchdata();
    }, []);
  
    return (
      <div>
       
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <h1>Blog post </h1>
           
  
                {isLoading ? (
                  <div>
                    <div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    {/* ... (similar blocks for other colors) */}
                  </div>
                ) : (
                  data.map((value, index) => (
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                      <div className="card">
                      {/* <img class="card-img-top" src={value.image}alt="Card image cap"></img> */}
                        <div className="card-body">
                          <h5 className="card-title">userid: {value.userid}</h5>
                          <p className="card-text">title: {value.title}</p>
                          <p className="card-text">message: {value.message}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ViewPost