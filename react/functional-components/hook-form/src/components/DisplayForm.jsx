import React from 'react';
import UserForm from './UserForm';

const DisplayForm = (props) => {
    const {user} = props;
    return (
<div>
    <h2>Your Form Data</h2>
    <p>First Name:{user.firstName}</p><br />
    <p>Last Name:{user.lastName}</p><br />
    <p>Email:{user.email}</p><br />
    <p>Password:{user.password}</p><br />
    <p>Confirmation Password:{user.confirmation}</p><br />
</div>
)};
export default DisplayForm;