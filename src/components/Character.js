import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants/constantsindex';
import styled from 'styled-components';



const StyledCharacter = styled.div`
width: 60%;
display: flex;
position: relative;

*h2 {
    font-size: 3rem;    
    display: flex;
    position: absolute;
    border: 2px solid white;
}
`

export default function Character(props) {
    const { character } = props;
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            console.log(res.data);
            setDetails(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <StyledCharacter>
            <h2>{details.name}</h2>
        </StyledCharacter>
    )
}
