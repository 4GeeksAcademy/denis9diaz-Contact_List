import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const individualForm = ({ contactInfo = [], setContactInfo }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setContact(data);
            })
            .catch(err => err)
    }, [url]);


    const saveContact = () => {
        const newContact = {
            id: id,
            title: fullName,
            image: "",
            address: address,
            phone: phone,
            email: email,
        };

        setContactInfo([...contactInfo, newContact]);
    };

    return (
        <div className="container form-body">
            <h1 className="title">Add a new contact</h1>
            <div className="input-group">
                <p>Full name</p>
                <input
                    type="text"
                    className="full-name"
                    placeholder="Full name"
                    aria-label="Full name"
                    aria-describedby="basic-addon1"
                    value="Denis Diaz"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <p>E-mail</p>
                <input
                    type="text"
                    className="email"
                    placeholder="Enter e-mail"
                    aria-label="Enter e-mail"
                    aria-describedby="basic-addon1"
                    value="deedo@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Phone</p>
                <input
                    type="text"
                    className="phone"
                    placeholder="Enter phone"
                    aria-label="Enter phone"
                    aria-describedby="basic-addon1"
                    value="745555656"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <p>Address</p>
                <input
                    type="text"
                    className="address"
                    placeholder="Enter address"
                    aria-label="Enter address"
                    aria-describedby="basic-addon1"
                    value="47568 NW 3ddf4ST, 5555 FL, USA"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <Link to="/contactos">
                <button type="button" className="btn btn-primary" onClick={saveContact}>
                    Save
                </button>
            </Link>
            <Link to="/contactos">
                <p>or get back to contacts</p>
            </Link>
        </div>
    );
};

export default individualForm;
