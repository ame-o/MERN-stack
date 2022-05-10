import React, { useState } from  'react';
import DisplayForm from './DisplayForm';    
    
const UserForm = (props) => {
    //STATE VARIABLES
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
	}
    };
    return (
        // INTERCEPT THE FORM WITH A FUNCTION "CREATEUSER"
    <form onSubmit={ createUser }> 
            <h3>{ formMessage() }</h3>   
        <div>
            <label>First Name: </label> 
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            {
                firstName && firstName.length < 2?
                <span style={{color:"red"}}> First Name must at least be 2 characters long</span>:""
            }
        </div>
        <div>
            <label>Last Name: </label> 
            <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            {
                lastName && lastName.length < 2?
                <span style={{color:"red"}}> Last Name must at least be 2 characters long</span>:""
            }
        </div>
        <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                {
                email && email.length < 2?
                <span style={{color:"red"}}> Email must be valid. </span>:""
            }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {
                password && password.length < 2?
                <span style={{color:"red"}}> First Name must at least be 2 characters long</span>:""
                }
            </div>
            <div>
                <label>Confirmation Password: </label>
                <input type="text" onChange={ (e) => setConfirm(e.target.value) } />
                {
                confirm && password !== confirm?
                <span style={{color:"red"}}>Password and Confirmation Password must match!</span>:""
                }
            </div>
    <input type="submit" value="Create User" />
    </form>
    );
};
    
export default UserForm;
