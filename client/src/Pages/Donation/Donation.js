import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Donation = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const { user } = useAuth();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:8000/donation", {
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
            <div className="container my-4 ">
                <h2 className="my-4 text-center">DONATION</h2>
                <div className="col-12 d-flex flex-column align-items-start justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">

                        <input className="mb-2" placeholder="Enter the UserName" defaultValue={user?.displayName} {...register("donorName", { required: true, maxLength: 100 })} />

                        <input className="mb-2" placeholder="Enter Your Address" {...register("address", { required: true })} />


                        <input className="mb-2" type="email" placeholder="Enter Your email" defaultValue={user?.email} {...register("email", { required: true, maxLength: 100 })} />

                        <input className="mb-2" placeholder="Enter date" defaultValue={date} type="date"  {...register("donationDate", { required: true })} />

                        <input className="mb-2" type="amount" placeholder="Enter your donating amount" {...register("amount", { required: true, maxLength: 100 })}
                        />



                        <label for="cars">Choose a Payment Method:</label>
                        <select name="methods" id="methods">
                            <option value="volvo">bKash</option>
                            <option value="saab">Nagad</option>
                            <option value="opel">Rocket</option>
                            <option value="audi">U-CASH</option>
                        </select>
                        <input className="mb-2" type="number" placeholder="Enter Your Account No" {...register("accountNo", { required: true, maxLength: 100 })} />
                        <input className="mb-2" type="password" placeholder="Enter Your password" />

                        <input className="btn btn-warning text-white" type="Submit" />
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Donation;