import React, {useEffect,useState} from 'react'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import DisplayList from '../components/DisplayList'
import {Link} from 'react-router-dom'

const Main = () => {
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
  return (
    <div>
        <DisplayList authors={authors} reloadList = {reload}/>
    </div>
  )
}

export default Main