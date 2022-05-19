import React, {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {id} = useParams()
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
        const product = response.data
        setTitle(product.title)
        setPrice(product.price)
        setDescription(product.description)
    })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products/${id}`,{title, price, description})
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
    const handleDelete =()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(response=>navigate(`/products`))
          .catch()
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <div>
                    <label> Title </label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price </label>
                    <input type="number" name="price" value={price}
                        onChange={e=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description </label>
                    <input type="text" name="description" value={description}
                        onChange={e=>setDescription(e.target.value)} />
                </div>
                <button type="submit"> Update </button>
        </form>
                <button onClick={handleDelete}> Delete</button>
    </div>
  )
}

export default Update