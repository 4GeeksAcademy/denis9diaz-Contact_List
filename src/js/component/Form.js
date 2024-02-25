import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <div className="container form-body">
            <h1 className="title">Add a new contact</h1>
            <div className="input-group">
                <p>Full name</p>
                <input type="text" className="full-name" placeholder="Full name" aria-label="Full name" aria-describedby="basic-addon1" />
                <p>E-mail</p>
                <input type="text" className="email" placeholder="Enter e-mail" aria-label="Enter e-mail" aria-describedby="basic-addon1" />
                <p>Phone</p>
                <input type="text" className="phone" placeholder="Enter phone" aria-label="Enter phone" aria-describedby="basic-addon1" />
                <p>Address</p>
                <input type="text" className="address" placeholder="Enter address" aria-label="Enter address" aria-describedby="basic-addon1" />
            </div>
            <Link to="/contactos">
                <button type="button" className="btn btn-primary">Save</button>
                <p>or get back to contacts</p>
            </Link>
        </div>
    );
};

export default Form
