import React, { useState } from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";


const Contact = () => {

const [contactInfo, setContactInfo] = useState([])

const urlContactList = "https://playground.4geeks.com/apis/fake/contact/agenda/denis9diaz"

fetch(urlContactList)
.then(response => response.json())
.then(data => {
  setContactInfo(data)
})
.catch(err => err)

const urlDeleteContact = "https://playground.4geeks.com/apis/fake/contact/"

  const deleteContact = (id) => {
    fetch(urlDeleteContact + id, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => err)
  };

  return (
    <div className="container">
      <div className="add-contact-button-container">
        <Link to="/formulario">
          <button type="button" className="btn btn-success add-contact-button">
            Add new contact
          </button>
        </Link>
      </div>
      <div className="contact-list">
        {contactInfo.map((contact, index) => (
          <SingleContact
            key={index}
            id={contact.id}
            image={contact.image}
            title={contact.title}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
            onDelete={() => deleteContact(contact.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
