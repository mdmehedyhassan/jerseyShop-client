import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Jersey from '../Jersey/Jersey ';

const Home = () => {
    const [jerseys, setJerseys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jerseys')
        .then(res => res.json())
        .then(data => setJerseys(data))
    }, [])

    return (
        <div className="row">
            {
                jerseys.map(jersey => <Jersey jersey={jersey} key={jersey._id} ></Jersey>)
            }
            
        </div>
    );
};

export default Home;