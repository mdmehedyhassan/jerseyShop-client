import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const jerseyData ={
            name: data.name,
            country: data.country,
            price: data.price,
            imageURL : imageURL
        }
        const url =`https://rhubarb-cobbler-32242.herokuapp.com/admin`;
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
        <div>
            <h1>Add new jersey collection</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Enter Team Name" ref={register} />
                <br/>
                <input name="country" placeholder="Enter Country Name" ref={register} />
                <br/>
                <input type="number" name="price" placeholder="Enter Price" ref={register} />
                <br/>
                <input name="imageURL" type="file" onChange={handleImageUpload} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;