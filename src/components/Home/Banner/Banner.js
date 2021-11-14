import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Assets/Banner/banner1r.jpg";
import banner2 from "../../../Assets/Banner/banner2r.jpg";
import banner3 from "../../../Assets/Banner/banner3r.jpg";
import "./Banner.css";

const Banner = () => {
	return (
		<React.Fragment>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={banner1} alt="First slide" />
					<Carousel.Caption>
						<h3 className="text-box-shadow-banner">
							The Best Travel Agency You Can Find
						</h3>
						<p className="text-box-shadow-banner">
							Travel safe and sound. We at Vac Planner provide you with the best
							travel plans our there.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={banner2} alt="Second slide" />

					<Carousel.Caption>
						<h3 className="text-box-shadow-banner">Head to the Maldives</h3>
						<p className="text-box-shadow-banner">
							Explore the wondrous shores of the Maldives at the cheapest price
							in the market.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={banner3} alt="Third slide" />

					<Carousel.Caption>
						<h3 className="text-box-shadow-banner">
							Explore the Mysteries of Amazon
						</h3>
						<p className="text-box-shadow-banner">
							Explore the woodland with trained professionals to keep you safe
							from all harms.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</React.Fragment>
	);
};

export default Banner;
