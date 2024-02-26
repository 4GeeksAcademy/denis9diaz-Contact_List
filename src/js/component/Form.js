import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ contactInfo = [], setContactInfo }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveContact = () => {
    const newContact = {
      id: (contactInfo.length + 1),
      title: fullName,
      image: "",
      address: address,
      phone: phone,
      email: email,
    };

    console.log("Antes de guardar:", contactInfo);
    setContactInfo([...contactInfo, newContact]);
    console.log("Después de guardar:", contactInfo);
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
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <p>E-mail</p>
        <input
          type="text"
          className="email"
          placeholder="Enter e-mail"
          aria-label="Enter e-mail"
          aria-describedby="basic-addon1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Phone</p>
        <input
          type="text"
          className="phone"
          placeholder="Enter phone"
          aria-label="Enter phone"
          aria-describedby="basic-addon1"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Address</p>
        <input
          type="text"
          className="address"
          placeholder="Enter address"
          aria-label="Enter address"
          aria-describedby="basic-addon1"
          value={address}
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

export default Form;
