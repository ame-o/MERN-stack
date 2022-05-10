import React from 'react';


const DisplayForm = (props) => {
    return (
<div>
    <h2>Your Form Data</h2>
    <p>First Name:{props.firstName}</p><br />
    <p>Last Name:{props.lastName}</p><br />
    <p>Email:{props.email}</p><br />
    <p>Password:{props.password}</p><br />
    <p>Confirmation Password:{props.confirmation}</p><br />
</div>
)};
export default DisplayForm;