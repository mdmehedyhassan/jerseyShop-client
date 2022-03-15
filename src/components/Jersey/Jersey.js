import React from 'react';
import './Jersey.css';
import { useHistory } from 'react-router';

const Jersey = (props) => {
    const { name, price, country, imageURL, _id } = props.jersey;
    const history = useHistory();
    const handleJersey = id => {
        const url = `orders/${_id}`;
        history.push(url);
    }

    return (
        <div className="col-xxl-3 col-lg-4 col-sm-6">
            <div className="mt-4 p-2 jersey-shop-style" style={{borderRadius: 15, background: 'white'}}>
                <img className="w-100" src={imageURL} alt="" />
                <div className=" bd-highlight mb-3 ">
                    <div className="p-2 bd-highlight justify-content-between text-success fw-bolder">
                        <h4>{name}</h4>
                        <h6>{country}</h6>
                    </div>
                    <div className="d-flex p-2 bd-highlight justify-content-between border-top border-2 border-secondary">
                        <h3 className="text-success">${price}</h3>
                        <button onClick={handleJersey} className="btn btn-success">Bye Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jersey;