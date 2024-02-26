import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Contact from "./component/Contact";
import Form from "./component/Form"
import SingleContact from "./component/SingleContact"

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/contactos" element={<Contact />} />
						<Route path="/formulario" element={<Form />} />
						<Route path="/formulario/:id" element={<Form />} />
						<Route path="/contacto" element={<SingleContact />} />

						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
