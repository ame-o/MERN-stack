import React from 'react'
import { useParams } from "react-router-dom"

const Number = () => {
    const { number }  = useParams()

    return (
        <div>
            <p>Your number is: {number} </p>
        </div>
            )
}

export default Number;