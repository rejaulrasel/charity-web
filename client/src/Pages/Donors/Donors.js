import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';

const Donors = () => {
    const [donors, setDonors] = useState([])
    const {donorName, address, email, donationDate, amount, accountNo} = donors;
    useEffect( () => {
        fetch('http://localhost:8000/donors')
        .then(res => res.json())
        .then(data => setDonors(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container-fluid">
            <h2>ALL DONOR</h2>

            <Table striped bordered>
                <thead>
                    <tr>
                        <th scope="col">NO.</th>
                        <th scope="col">Donor Name</th>
                        <th scope="col">Donor Address</th>
                        <th scope="col">Donor Email</th>
                        <th scope="col">Donation Date</th>
                        <th scope="col">Donation Amount</th>
                        <th scope="col">Account No</th>


                    </tr>
                </thead>
                {
                    donors.map((donor, index) => (
                        <tbody key={donor?._id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{donor.donorName}</td>
                                <td>{donor.address}</td>
                    
                                <td>{donor.email}</td>
                                <td>{donor.donationDate}</td>
                                <td>{donor.amount}</td>
                                <td>{donor.accountNo}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </div>
        </div>
    );
};

export default Donors;