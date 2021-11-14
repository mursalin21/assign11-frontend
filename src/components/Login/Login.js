import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	return (
		<div className="login-container">
			<h2 style={{ textAlign: "center", paddingTop: "100px", color: "white" }}>
				Sign Up Using Google
			</h2>
			<div className="text-center">
				<Button
					onClick={signInUsingGoogle}
					style={{ marginTop: "10px" }}
					variant="warning"
				>
					Google Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Login;
