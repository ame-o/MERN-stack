import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                console.log(response.data)
                setPeople(response.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            {
                people?
            <div>
                <h2> {people.name}</h2>
                <h4>Height: {people.height} </h4>
                <h4> Mass: {people.mass}</h4>
                <h4> Hair Color: {people.hair_color}</h4>
                <h4> Skin Color: {people.skin_color}</h4>
            </div>
            :
            <div>
                <h4>These aren't the droids you're looking for </h4>
                <img src= "https://imgs.search.brave.com/H-3BmnCE22wlPKMD7AzAlv7453cEbsqaHJ5TeLQ-oAk/rs:fit:320:240:1/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy8yNjBk/MTZmOGE1NjE1Mzcw/ZmJhODU4YTRhYWVj/MzRhNC90ZW5vci5n/aWY_aXRlbWlkPTQw/NTk0MzQ.gif"></img>
            </div>
            }
        </div>
    )
}

export default People