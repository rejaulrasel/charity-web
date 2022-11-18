import React from 'react';
import "./service.css"
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Service = ({ service, handleDelete ,admin}) => {

    const { _id, name, img, amount } = service;


    // const { admin } = useAuth();

    return (

        <div className="col-12 col-md-4  my-3 ">
            <div class="card container ">
                <img src={img} class="img-fluid " alt="..." />
                <div class="card-body">
                    <h4 class="card-title text-center   ">{name}</h4>
                    <h5 class='text-center'> Donation needed <span style={{ color: "blue" }}>{amount}$</span></h5>

                        <Link to='/donation' >
                            <button className="btn btn-danger">DONATE</button>
                        </Link>
                    

                </div>
            </div>
        </div>
    );
};

export default Service;