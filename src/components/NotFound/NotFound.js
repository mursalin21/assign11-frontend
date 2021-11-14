import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../Assets/NotFound/notFound.jpg";
import "./NotFound.css";

const NotFound = () => {
	return (
		<div className="not-found-container">
			<img style={{ width: "75%" }} src={notFound} alt="notFoundImage" />
			<Link style={{ textDecoration: "none", marginTop: "10px" }} to="/">
				<Button variant="secondary">Go Back</Button>
			</Link>
		</div>
	);
};

export default NotFound;
