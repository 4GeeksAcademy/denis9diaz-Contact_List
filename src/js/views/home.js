import React from "react";
import GoogleContacts from "../../img/GoogleContacts.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact List Home</h1>
		<p>
			Proyect by Denis Díaz
		</p>
		<img src={GoogleContacts} alt="Google Contacts" />
	</div>
);
