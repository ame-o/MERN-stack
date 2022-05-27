import React, { useState } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'
// import { useAppContext } from '../contextLib'

const Main = () => {
  // const { setLoggedUser } = useAppContext();
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
        // localStorage.setItem("loggedUser", JSON.stringify(res.data.user))
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
    <div className="section">
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-6">
            <div className="tile is-child box">
              <p className="title">Register</p>
              <form onSubmit={registerSubmit}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">

                    <input className="input" type="text" placeholder="First Name" name="firstName" onChange={registerChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>

                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                  {(errorState.firstName) ? <small className="ml-1 text-danger font-weight-bold">{errorState.firstName.message}</small> : null}
                </div>

                <div className="field">
                  <p className="control has-icons-left has-icons-right">

                    <input className="input" name="lastName" type="text" placeholder="Last Name" onChange={registerChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                  {(errorState.lastName) ? <small className="ml-1 text-danger font-weight-bold">{errorState.lastName.message}</small> : null}
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">

                    <input className="input" name="email" type="email" placeholder="Email" onChange={registerChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                  {(errorState.email) ? <small className="ml-1 text-danger font-weight-bold">{errorState.email.message}</small> : null}
                  {(errorState.duplicate) ? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small> : null}
                </div>

                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" name="password" onChange={registerChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                  {(errorState.password) ? <small className="ml-1 text-danger font-weight-bold">{errorState.password.message}</small> : null}
                </div>

                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Confirm Password" name="confirmPassword" onChange={registerChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                  {(errorState.confirmPassword) ? <small className="ml-1 text-danger font-weight-bold">{errorState.confirmPassword.message}</small> : null}
                </div>

                <div className="field">
                  <p className="control">
                    <button type="submit" className="button is-success">
                      Register
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          <div className="tile is-parent is-6">
            <div className="tile is-child box">
              <p className="title">Login</p>
              <form onSubmit={loginSubmit}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" name="email" onChange={loginChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" name="password" onChange={loginChangeHandler} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button type="submit" className="button is-success">
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main