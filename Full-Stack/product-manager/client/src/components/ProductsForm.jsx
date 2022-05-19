import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  clearForm()
  axios.post(`http://localhost:8000/api/products`,{title, price, description})
    .then(response=>navigate(`/products`))
    .catch(err=>{
      const errArr =[]
      const errResData = err.response.data.errors
      console.log(errResData)
      for(const key in errResData){
          errArr.push(errResData[key]["message"])
      }
      setErrors(errArr)
  })
}
const clearForm = () => {
  setTitle("")
  setPrice("")
  setDescription("")
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
<input name="description" value={description} onChange ={e=>setDescription(e.target.value)}/>
 </div>
 <div>
   <button type='submit'>Create New Product</button>
  </div>
</form>
  {
    errors.map((err, i)=>(
      <p key={i} style={{color: "red"}}> {err} </p>
    ))
  }
    </fieldset>
  )

    
}

export default ProductsForm