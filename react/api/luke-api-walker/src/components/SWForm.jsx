import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SWForm = () => {
    // STATE FOR KEEPING TRACK OF PEOPLE AND PLANETS
    const [id, setId] = useState("")
    const [category, setCategory] = useState("")

    // CALL THE useNavigate FUNCTION
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearForm()
    }
    const clearForm = () => {
        setId("")
        setCategory("")
    }

    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <p>
                Search for:
                <select className='select' name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option hidden>Choose a Category </option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                ID:
                <input className='is-link' onChange={(e) => setId(e.target.value)} type="text" name="id" value={id} />
                <button className='button is-link'>Search</button>
                </p>
            </form>
        </div>
    )
}

export default SWForm