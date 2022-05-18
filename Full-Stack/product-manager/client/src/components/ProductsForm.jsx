import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    // const [errors, setErrors] = useState([])
    const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(`http://localhost:8000/api/products`,{title,price,description})
    .then(response=>(`/products`))
    .catch(err=>console.log(err.response.data))
}

  
  return(
    <fieldset>
      <legend>ProductsForm.jsx</legend>
<form onSubmit={handleSubmit}>
  <div>
  <label> Title</label>
<input name="title" value={title} onChange ={e=>setTitle(e.target.value)}/>
  </div>
  <div>
<label>Price</label>
<input type="number" name="price" value={price} onChange ={e=>setPrice(e.target.value)}/>
  </div>
  <div>
<label>Description</label>
<input type="textarea"
 name="description" value={description} onChange ={e=>setDescription(e.target.value)}/>
 </div>
 <div>
   <button type='submit'>Create New Product</button>
  </div>
</form>
    </fieldset>
  )

    
}

export default ProductsForm