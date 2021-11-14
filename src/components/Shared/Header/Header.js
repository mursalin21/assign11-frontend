import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand>
						<Link className="navbar-logo" to="/">
							VAC PLANNER <i class="far fa-compass"></i>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={HashLink} to="/#services">
								Services
							</Nav.Link>
							<Nav.Link as={HashLink} to="/#benefits">
								Benefits
							</Nav.Link>
						</Nav>
						<Nav>
							{user?.email ? (
								<div>
									<Navbar.Text>
										Signed in as:{" "}
										<span style={{ color: "white" }}>{user.displayName}</span>
									</Navbar.Text>
									<Button onClick={logOut} style={{ marginLeft: "10px" }}>
										Log Out
									</Button>
								</div>
							) : (
								<Link to="/login">
									<Button>Log in</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
