import React from "react";
import benefits1 from "../../../Assets/Benefits/benefits1.jpg";
import benefits2 from "../../../Assets/Benefits/benefits2.jpeg";
import benefits3 from "../../../Assets/Benefits/benefits3.png";
import "./Benefits.css";

const Benefits = () => {
	return (
		<React.Fragment>
			<h2 id="benefits" className="benefits-header">
				Vac Planner Benefits
			</h2>
			<div className="benefits-row">
				<img
					style={{ width: "400px", marginRight: "20px" }}
					src={benefits1}
					alt="benefits1"
				/>
				<div>
					<h1>Research bot that works for you</h1>
					<h5>
						Matches your travel preferences with over 230,000,000 data points:
					</h5>
					<ul>
						<li>Best places & time to visit</li>
						<li>Reviews</li>
						<li>Transportation options</li>
						<li>Hidden gems</li>
					</ul>
				</div>
			</div>

			<div style={{ marginTop: "20px" }} className="benefits-row">
				<div>
					<h1>Planning engine that helps you see & do more</h1>
					<h5>Optimizes your itinerary:</h5>
					<ul>
						<li>Minimizes travel time</li>
						<li>Checks when attractions are open</li>
						<li>Recommends how much time to spend</li>
					</ul>
				</div>
				<img
					style={{ width: "400px", marginLeft: "20px" }}
					src={benefits2}
					alt="benefits2"
				/>
			</div>

			<div style={{ marginTop: "20px" }} className="benefits-row">
				<img
					style={{ width: "400px", marginRight: "20px" }}
					src={benefits3}
					alt="benefits3"
				/>
				<div>
					<h1>Your complete trip in one place</h1>
					<h5>Unmatched efficiency in one place:</h5>
					<ul>
						<li>Share and collaborate with co-travellers</li>
						<li>Say hi to your new travel hub!</li>
						<li>Hidden gems</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Benefits;
