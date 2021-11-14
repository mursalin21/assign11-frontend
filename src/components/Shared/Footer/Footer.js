import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="info-column">
				<div className="footer-main">
					<img
						style={{ width: "20px" }}
						src="https://t4.ftcdn.net/jpg/00/62/30/63/360_F_62306382_MW4tMWYzv180CGxc2L5j8bAJFkvWGfWS.jpg"
						alt="main-icon"
					/>
					<h5 style={{ display: "inline" }} className="text-light">
						VAC PLANNER
					</h5>
				</div>
				<div className="main-description">
					<p className="text-white">
						We at Vac Planner provide you with the best possible travel and
						vacation plans in the country. Be ensured that we will spend every
						means possible to give you a fair and affordable deals with the best
						guides and experienced guards to accompany in adventurous lands.
					</p>
				</div>
			</div>
			<div className="our-hospital text-white">
				<h5>Our Agency</h5>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Home
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					The Agency
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Our Customers
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Our Partners
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Terms and Conditions
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Legal Disclaimer
				</Link>
			</div>
			<div className="our-departments">
				<h5 className="text-white">Our Services</h5>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Book Planes
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Plan Your Vacation
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Book Hotels
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Hire Security for Risk-Prone Zones
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Book a Bus
				</Link>
				<Link style={{ textDecoration: "none", color: "white" }} to="/home">
					Meet our Experts
				</Link>
			</div>
			<div className="mail-post">
				<h5 className="text-white">Vac Planner Newsletter Widget</h5>
				<Form>
					<InputGroup className="mb-3 mt-3">
						<FormControl
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
						<Button variant="light" id="button-addon2">
							Submit
						</Button>
					</InputGroup>
				</Form>
			</div>
		</div>
	);
};

export default Footer;
