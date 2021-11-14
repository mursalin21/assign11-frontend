import React from "react";
import Banner from "./Banner/Banner";
import Benefits from "./Benefits/Benefits";
import Services from "./Services/Services";
import SignUp from "./SignUp/SignUp";

const Home = () => {
	return (
		<React.Fragment>
			<Banner />
			<Services />
			<Benefits />
			<SignUp />
		</React.Fragment>
	);
};

export default Home;
