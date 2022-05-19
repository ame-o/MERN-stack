import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [products,setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const handleDelete =(deleteId) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response=>{
                const filteredList = products.filter((product, i)=>product._id !== deleteId)
                setProducts(filteredList)
            })
            .catch(err=>console.log(err))
    }
    return (
    <div> 
        Dashboard
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product,i)=>(
                    <tr key ={i}>
                        <td> <Link to={`/products/${product._id}`}>{product.title}</Link> </td>
                        <td> {product.price}</td>
                        <td> {product.description} </td>
                        <td> <Link to={`/products/${product._id}/edit`}>Update</Link> </td>
                        <td> <button onClick={()=>handleDelete(product._id)}>Delete</button></td>
            </tr>
                ))

            }
        </tbody>
    </table>

    </div>
    )
}

export default Dashboard