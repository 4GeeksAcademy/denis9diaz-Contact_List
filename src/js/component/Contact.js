import React, { useState } from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([
    {
      id: "1",
      image:
        "https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg",
      title: "Sofía García",
      address: "Avenida Circular, 17",
      phone: "615522356",
      email: "sofiagarcia@gmail.com",
    },
    { id: "", image: "", title: "", address: "", phone: "", email: "" },
    { id: "", image: "", title: "", address: "", phone: "", email: "" },
    { id: "", image: "", title: "", address: "", phone: "", email: "" },
  ]);

  const deleteContact = (id) => {
    setContactInfo(contactInfo.filter(contact => contact.id !== id));
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
