import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Jersey from '../Jersey/Jersey';

const Home = () => {
    const [jerseys, setJerseys] = useState([])

    useEffect(() => {
        fetch('https://rhubarb-cobbler-32242.herokuapp.com/jerseys')
            .then(res => res.json())
            .then(data => setJerseys(data))
    }, [])

    return (
        <div className="row">
            {jerseys.map(jersey => <Jersey jersey={jersey} key={jersey._id} ></Jersey>)}
        </div>
    );
};

export default Home;