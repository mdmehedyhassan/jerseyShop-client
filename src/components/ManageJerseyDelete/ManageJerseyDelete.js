import React from 'react';
import './ManageJerseyDelete.css'

const ManageJerseyDelete = (props) => {
    const { name, price, country, _id } = props.manage;
    return (
        <div>
            <table style={{ width: '100%' }}>
                <tr>
                    <td style={{ width: '20%' }}>{name}</td>
                    <td style={{ width: '20%' }}>{country}</td>
                    <td style={{ width: '20%' }}>${price}</td>
                </tr>
            </table>

        </div>
    );
};

export default ManageJerseyDelete;