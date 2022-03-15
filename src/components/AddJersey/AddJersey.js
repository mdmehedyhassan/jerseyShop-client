import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddJersey = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const jerseyData = {
            name: data.name,
            country: data.country,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://rhubarb-cobbler-32242.herokuapp.com/admin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jerseyData)
        })
            .then(res => console.log('server site response', res))
    };

    const handleImageUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a1ba3e13fdbd038c280ff0ec734e059f');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="bg-secondary text-light">
            <h1>Add new jersey</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex  mt-5">
                    <div className="d-flex flex-column m-2">
                        <h5 >Add Team Name</h5>
                        <input className="form-control" name="name" placeholder="Enter Team Name" ref={register} />
                    </div>
                    <div className="d-flex flex-column m-2">
                        <h5 >Add Country Name</h5>
                        <input className="form-control" name="country" placeholder="Enter Country Name" ref={register} />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-flex flex-column m-2">
                        <h5 >Add Price</h5>
                        <input className="form-control" type="number" name="price" placeholder="Enter Price" ref={register} />
                    </div>
                    <div className="d-flex flex-column  m-2">
                        <h5 >Add Photo</h5>
                        <input name="imageURL" type="file" onChange={handleImageUpload} />
                    </div>
                </div>
                <div className="p-2">
                    <input type="submit" className="btn btn-success" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default AddJersey;