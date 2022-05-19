import axios from 'axios'
import React, { useEffect } from 'react'
import ProductForm from '../components/ProductsForm'
import DisplayAll from '../components/DisplayAll'

const Main = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
            .then(response=>{setProducts(response.data)
            })
            .catch(err=>console.log(err))
    }, [refresh])
    const reload = () => {
        setRefresh(!refresh)
    }
  return (
    <div>
        <ProductForm reloadList ={reload} />
        <DisplayAll products={products} />
    </div>
  )
}

export default Main