import React from "react";
import { Link } from "react-router-dom";

const SingleContact = (props) => {
  return (
    <div className="contact mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="contact-image-container">
            <img src={props.image} className="img" alt="..."/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact-body">
            <h5 className="contact-name">{props.title}</h5>
            <p className="contact-address"><i className="fa-solid fa-location-dot"></i> {props.address}</p>
            <p className="contact-phone"><i className="fa-solid fa-phone"></i> {props.phone}</p>
            <p className="contact-email">
              <small className="text-body-secondary"><i className="fa-solid fa-envelope"></i> {props.email}</small>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <Link to={`/contacto/${props.id}`}>
            <button className="edit-button">
              <i className="fa-solid fa-pencil"></i>
            </button>
          </Link>
          <button className="delete-button" onClick={props.onDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
