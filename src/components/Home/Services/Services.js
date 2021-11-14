import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
		setIsLoading(false);
	}, [loading]);
	return (
		<React.Fragment>
			<h2 className="service-header">Our Services</h2>
			<div id="services" className="service-container">
				<Container fluid className="services">
					{services &&
						services.map((service, i) => (
							<div key={i} className="service">
								<Service service={service} />
							</div>
						))}
				</Container>
			</div>
		</React.Fragment>
	);
};

export default Services;
