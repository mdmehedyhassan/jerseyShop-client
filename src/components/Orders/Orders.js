import React from 'react';

const Orders = () => {
    return (
        <div className="container">
            <h1>Checkout</h1>
            <table className="mb-4 bg-secondary text-light" style={{ width: '100%' }}>
                <tr >
                    <th style={{ width: '30%' }}>Description</th>
                    <th style={{ width: '30%' }}>Quantity</th>
                    <th style={{ width: '30%' }}>Price</th>
                </tr>
            </table>
            <div className="text-center">
                <button className="btn btn-success">Checkout</button>
            </div>

        </div>
    );
};

export default Orders;