import React, { useEffect, useState } from 'react';
import ManageJerseyDelete from '../ManageJerseyDelete/ManageJerseyDelete';

const ManageJersey = () => {
    const [manageJersey, setManageJersey] = useState([])
    useEffect(() => {
        fetch('https://rhubarb-cobbler-32242.herokuapp.com/jerseys')
            .then(res => res.json())
            .then(data => setManageJersey(data))
    }, [])
    return (
        <div className="container ">
            <table className="mb-4 bg-warning text-danger" style={{ width: '100%' }}>
                <tr >
                    <th style={{ width: '20%' }}>Jersey Name</th>
                    <th style={{ width: '20%' }}>Country</th>
                    <th style={{ width: '20%' }}>Price</th>
                    <th style={{ width: '20%' }}>Action</th>
                </tr>
            </table>
            {
                manageJersey.map(manage => <ManageJerseyDelete manage={manage} key={manage._id}></ManageJerseyDelete>)
            }
            

        </div>
    );
};

export default ManageJersey;