import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()
    const [planet, setPlanet] = useState({})
    const [species, setSpecies] = useState({})

    const getSpecies = (urlS) => {
        axios.get(urlS)
        .then(response => {
            setSpecies(response.data)
        })
        .catch(err => console.log(err))
    }

    const getPlanet = (urlP) => {
        axios.get(urlP)
        .then(response => {
            setPlanet(response.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                console.log(response.data)
                setPeople(response.data)
                getSpecies(response.data.species)
                getPlanet(response.data.homeworld)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <div >
            <hr/>
            {
                people?
            <div className='container is-widescreen p'>
                <h2 className='title'> {people.name}</h2>
                <h4 className='subtitle'> Species: {species.name}
                </h4>
                <h4 className='subtitle'> Homeworld: {planet.name}</h4>
                <h4 className='subtitle'> Birth Year: {people.birth_year}</h4>
                <h4 className='subtitle'>Height: {people.height} cm </h4>
            </div>
            :
            <div>
                <h4 className='title is-3'>These aren't the droids you're looking for </h4>
                <img src= "https://imgs.search.brave.com/H-3BmnCE22wlPKMD7AzAlv7453cEbsqaHJ5TeLQ-oAk/rs:fit:320:240:1/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy8yNjBk/MTZmOGE1NjE1Mzcw/ZmJhODU4YTRhYWVj/MzRhNC90ZW5vci5n/aWY_aXRlbWlkPTQw/NTk0MzQ.gif"></img>
            </div>
            }
        </div>
    )
}

export default People