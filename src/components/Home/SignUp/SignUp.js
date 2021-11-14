import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	return (
		<div className="sign-up-container-home">
			<h2>Try the travel app that keeps up with you</h2>
			<p>
				So many trips, so little time. Let Vac Planner worry about the details,
				so you don't have to.
			</p>
			<Link to="/login">
				<Button>
					<h5>Sign Up - It's Free</h5>
				</Button>
			</Link>
		</div>
	);
};

export default SignUp;
