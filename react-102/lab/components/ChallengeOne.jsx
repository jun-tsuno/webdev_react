import React, { Component } from "react";
//import images
import LeftImage from "../assets/look-left.jpeg";
import RightImage from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
	//declare the state here
	state = {
		url: LeftImage,
		alt: "look-left",
	};

	//click left/right button handler goes here
	handleLeft = () => {
		this.setState({ url: LeftImage, alt: "look-left" });
		return;
	};

	handleRight = () => {
		this.setState({ url: RightImage, alt: "look-right" });
		return;
	};

	render() {
		return (
			<>
				<h2>Challenge 1</h2>
				<div className="msg">
					<img
						className="ch1"
						src={this.state.url}
						alt={this.state.alt}
					/>
				</div>
				<button className="btn" onClick={this.handleLeft}>
					⭠
				</button>
				<button className="btn" onClick={this.handleRight}>
					⭢
				</button>
			</>
		);
	}
}

export default ChallengeOne;
