import React from "react";

const FetchDisplay = (props) => {
            const {pokemon} = props;
    
        return (
        <div>
        {pokemon.map((item,index) => {
                return(
                    <ul
                    key ={index}>
                        <li> {item.name} </li>
                    </ul>
                )
            })}
        </div>
        )
    }

export default FetchDisplay;