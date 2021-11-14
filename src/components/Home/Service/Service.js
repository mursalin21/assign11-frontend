import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Service = (props) => {
	const service = props.service;
	const { _id, name, price, description, img } = service;
	return (
		<React.Fragment>
			<img style={{ maxWidth: "100%" }} src={img} alt={name} />
			<h2>{name}</h2>
			<h5>Price: ${price}</h5>
			<p>{description.slice(0, 200)}...</p>
			<Link to={`/service/${_id}`}>
				<Button variant="primary">Explore</Button>
			</Link>
		</React.Fragment>
	);
};
export default Service;
