import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
	const { id } = useParams();
	return (
		<div>
			<h2>This is Booking: {id}</h2>
		</div>
	);
};

export default Booking;
