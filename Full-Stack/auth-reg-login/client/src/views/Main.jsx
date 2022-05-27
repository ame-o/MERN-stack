import React, { useState } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'

const Main = () => {
    const history = useHistory()
    const [registerState, setRegisterState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errorState, setErrorState] = useState({})

  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })

  const registerSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/users/register", registerState, { withCredentials: true })
      .then(res => {
          console.log(res)
          history.push(`/events`)
        })
      .catch(err => {
        console.log(err.response.data)
        const { errors } = err.response.data;
        console.log(errors)
        const errObj = {}

        for (const [key, value] of Object.entries(errors)) {
          console.log(errors[key])
          errObj[key] = value;
        }
        setErrorState(errObj)
      })
  }

  const loginSubmit = e => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/users/login", loginState, { withCredentials: true })
      .then(res => {
          console.log(res)
          history.push(`/events`)
        })
      .catch(err => console.log(err))
  }

  const registerChangeHandler = e => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value
    })
  }

  const loginChangeHandler = e => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <fieldset>
      <legend>Main.jsx</legend>
      <h1>Register</h1>

      
      <form onSubmit={registerSubmit}>
        <p>
          First Name:
          <input name="firstName" type="text" onChange={registerChangeHandler} />
          {(errorState.firstName) ? <small className="ml-1 text-danger font-weight-bold">{errorState.firstName.message}</small> : null}
        </p>
        <p>
          Last Name:
          <input name="lastName" type="text" onChange={registerChangeHandler} />
          {(errorState.lastName) ? <small className="ml-1 text-danger font-weight-bold">{errorState.lastName.message}</small> : null}
        </p>
        <p>
          Email:
          <input name="email" type="email" onChange={registerChangeHandler} />
          {(errorState.email) ? <small className="ml-1 text-danger font-weight-bold">{errorState.email.message}</small> : null}
          {(errorState.duplicate) ? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small> : null}
        </p>
        <p>
          Password:
          <input name="password" type="password" onChange={registerChangeHandler} />
          {(errorState.password) ? <small className="ml-1 text-danger font-weight-bold">{errorState.password.message}</small> : null}
        </p>
        <p>
          Confirm Password:
          <input name="confirmPassword" type="password" onChange={registerChangeHandler} />
          {(errorState.confirmPassword) ? <small className="ml-1 text-danger font-weight-bold">{errorState.confirmPassword.message}</small> : null}
        </p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <p>
          Email:
          <input name="email" type="text" onChange={loginChangeHandler} />
        </p>
        <p>
          Password:
          <input name="password" type="password" onChange={loginChangeHandler} />
        </p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        <br/>
      {/* <button onClick={getAllUsers}>GET ALL USERS</button>{(!loginState)? <small>Not Logged in</small>:null} */}
    </fieldset>
  )
}

export default Main