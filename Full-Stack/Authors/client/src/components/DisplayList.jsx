import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const DisplayList = () => {
    const [authors,setAuthors] = useState([]);
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(response=>{setAuthors(response.data)
            })
            .catch(err=>console.log(err))
    }, [refresh])
    
    const reload = () => {
        setRefresh(!refresh)
    }

    const handleDelete =(deleteId) =>{
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response=>{
                const filteredList = authors.filter((author, i)=>author._id !== deleteId)
                setAuthors(filteredList)
            })
            .catch(err=>console.log(err))
    }

  return (
    <div>
        
    <Link to="/new">| Create New | </Link>
    <h3>We have quotes by: </h3>
        <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {
                authors.map((author,i)=>(
                    <tr key ={i}>
                        <td>{author.name}</td>
                        {/* <td> <Link to={`/${author._id}`}>{author.name}</Link> </td> */}
                        <td> <Link to={`/${author._id}/edit`}>Update</Link> </td>
                        <td> <button onClick={()=>handleDelete(author._id)}>Delete</button></td>
                    </tr>
                ))

            }
        </tbody>
    </table>
    </div>
  )
}

export default DisplayList