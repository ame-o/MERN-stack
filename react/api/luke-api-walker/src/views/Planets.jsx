import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
    const {id} = useParams()
    const [planets, setPlanets] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response =>{
                console.log(response.data)
                setPlanets(response.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
    <div>
        {
            planets?
            <div className='container is-widescreen'>
                <h2>Planet: {planets.name} </h2>
                <h4>Climate: {planets.climate} </h4>
                <h4>Terrain: {planets.terrain} </h4>
                <h4>Surface Water: {planets.surface_water}</h4>
                <h4>Population: {planets.population}</h4>
            </div>
            :
            <h3>No planet for you. </h3>
        }
    </div>
    )
}

export default Planets