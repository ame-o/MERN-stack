import axios from 'axios';
import React, {useEffect,useState} from 'react';


//get info from backend:
//  1. axios
//  2.state
//  3.useEffect

const ProductsForm = () => {
  const [message,setMessage] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/test`)
      .then(response=> {
        setMessage(response.data)
      })
      .catch(err=>console.log(err))
  }

  )
  return(
    <fieldset>
      <legend>
        ProductsForm.jsx
        {
          message?
          <h1> { message } </h1>:
          <h1> Loading... </h1>
        }
      </legend>
    </fieldset>
  )

    
}

export default ProductsForm