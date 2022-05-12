import React, {useState} from 'react'

const FetchButton = (props) => {
    const {setPokemon} = props
    //set error
    const [error, setError] = useState("");

    //hook to fetch api
    const fetchApi = async() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?offset=807&limit=807") //fetch with await
        .then(response => {
            return response.json();
        }).then(response => {
            setPokemon(response.results); // update pokemon to json
            console.log(response);
        }).catch(err=>{
            setError("Error, Rejection");
            setPokemon();
            console.log(err);
        });
    }
    return (
        <div>
            <button onClick ={fetchApi}>Fetch Pokemon</button>
        {error}
        </div>
    )
}
export default FetchButton;
