import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Dashboard = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/products`)
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
    <div>Dashboard
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product,i)=>{
                    <tr key ={i}>
                        <td> {product.title} </td>
                        <td> {product.price}</td>
                        <td> {product.description} </td>
            </tr>
                })

            }
        </tbody>
    </table>

    </div>
    )
}

export default Dashboard