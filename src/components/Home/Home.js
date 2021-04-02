import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Jersey from '../Jersey/Jersey ';

const Home = () => {
    const [jerseys, setJerseys] = useState([])

    useEffect(() => {
        fetch('https://rhubarb-cobbler-32242.herokuapp.com/jerseys')
            .then(res => res.json())
            .then(data => setJerseys(data))
    }, [])

    return (
        <div >
            {
                <div className='justify-content-center'>
                    <div className="d-flex flex-wrap p-5 justify-content-around">
                        {jerseys.map(jersey => <Jersey jersey={jersey} key={jersey._id} ></Jersey>)}
                    </div>
                </div>
            }

        </div>
    );
};

export default Home;