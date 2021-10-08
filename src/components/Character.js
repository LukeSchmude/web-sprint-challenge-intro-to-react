import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/constantsindex';





export default function Character(props) {
    const { character, close } = props;
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            setDetails(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [character])

    return (
        <div className='character-container'>
            <h2 className='character-name'>{details.name}</h2>
        </div>
    )
}
