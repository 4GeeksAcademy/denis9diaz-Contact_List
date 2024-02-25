import React from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";

const Contact = () => {
  let contactInfo = [
    {
      image:
        "https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg",
      title: "Sofía García",
      address: "Avenida Circular, 17",
      phone: "615522356",
      email: "sofiagarcia@gmail.com",
    },
    { image: "", title: "", address: "", phone: "", email: "" },
    { image: "", title: "", address: "", phone: "", email: "" },
    { image: "", title: "", address: "", phone: "", email: "" },
  ];

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
            image={contact.image}
            title={contact.title}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
