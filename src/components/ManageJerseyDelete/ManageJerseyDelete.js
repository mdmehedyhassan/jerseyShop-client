import React from 'react';
import './ManageJerseyDelete.css'

const ManageJerseyDelete = (props) => {
    const deleteJersey = id => {
        console.log('delete btn press')
    }
    const { name, price, country, _id } = props.manage;
    return (
        <div>
            <table style={{ width: '100%' }}>
                <tr>
                    <td style={{ width: '20%' }}>{name}</td>
                    <td style={{ width: '20%' }}>{country}</td>
                    <td style={{ width: '20%' }}>${price}</td>
                    <td style={{ width: '20%' }}><button onClick={() =>deleteJersey(_id)} className="btn btn-danger">Delete</button></td>
                </tr>
            </table>

        </div>
    );
};

export default ManageJerseyDelete;