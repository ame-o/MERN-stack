import React from 'react'
import { useParams } from "react-router-dom"

const Keyword = () => {
    const { keyword, colorParam}  = useParams()

    return (
        <div>
            <p style={{backgroundColor: keyword,
            color: colorParam}}> Hello </p>
        </div>
            )
}

export default Keyword