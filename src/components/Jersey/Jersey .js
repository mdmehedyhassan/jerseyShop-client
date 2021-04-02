import React from 'react';
import { useHistory } from 'react-router';

const Jersey = (props) => {
    const { name, price, country, imageURL, _id } = props.jersey;
    const history = useHistory();
    const handleJersey = id => {
        const url = `orders/${_id}`;
        history.push(url);
    }

    return (
        <div className="card bg-warning text-light overflow-hidden m-2" style={{ width: '18rem', borderRadius: '20px', border: '5px dotted blue'}}>
            <img src={imageURL}  alt="" />
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="d-flex p-2 bd-highlight justify-content-between">
                    <h2>{name}</h2>
                    <h4>{country}</h4>
                </div>
                <div className="d-flex p-2 bd-highlight justify-content-between">
                    <h1 className="text-success">${price}</h1>
                    <button onClick={handleJersey} className="btn btn-success">Bye Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jersey;