import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const AskingFund = () => {
    const { user } = useAuth();
    const history = useHistory  ();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://polar-savannah-62685.herokuapp.com/addEvent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        history.push('/home')
        swal("Congratulation!", "You have added successfully", "success");
        reset();
    };

    return (
        <div>
            <Header></Header>
            <div className="container my-4">
                <h2 className="my-4 text-center">DONATION</h2>
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">

                            <input className="mb-2" placeholder="Enter Your Address" {...register("address", { required: true })} />

                            <input className="mb-2" placeholder="Enter the UserName" defaultValue={user?.displayName} {...register("userName", { required: true, maxLength: 100 })} />
                            <input className="mb-2" type="email" placeholder="Enter Your email" defaultValue={user?.email} {...register("email", { required: true, maxLength: 100 })} />
                            <input className="mb-2" type="number" placeholder="Enter Your Phone No" {...register("phone", { required: true, maxLength: 100 })} />
                            <input className="mb-2" placeholder="Travel date" type="date"  {...register("deliverDate", { required: true })} />

                            <input className="btn btn-warning text-white" type="Submit" />
                        </form>
                    </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default AskingFund;