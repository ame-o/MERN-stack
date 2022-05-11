import React, { useState } from 'react'

const FormBox = (props) =>{
    // STATE
    const[newColor,setNewColor] = useState("");

    const submitHandler = event =>{
        event.preventDefault();
        const newBox = {color:newColor}
        props.addBox(newBox);
    }
    return (
        <div>
            <label>Color:</label>
            <form onSubmit={submitHandler}>
            <input onChange={(e) => setNewColor(e.target.value)} value={newColor} />
            <button>Add Color</button>
            </form>
        </div>
    )
};


export default FormBox;