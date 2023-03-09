import React, { Component } from "react";

const studentList = [
	"Randall Malfoy",
	"Kvothe Black",
	"Chun Zorander",
	"Leomund Ridcully",
	"Rary Stibbons",
	"Gandalf Dresden",
	"Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
	//declare the states
	state = {
		arr: [],
	};

	//componentDidMount will execute when the page has loaded (this will only run once)
	componentDidMount() {
		//display the student list after 3 seconds
		setTimeout(() => {
			this.setState({ arr: [...this.state.arr, ...studentList] });
		}, 3000);
	}

	// function for shuffle arr
	shuffle = (arr) => {
		for (let i = arr.length - 1; 0 < i; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	//random button handler
	randomize = () => {
		//shuffle the array and set the state
		this.setState({
			arr: [...this.shuffle(this.state.arr)],
		});
	};

	render() {
		return (
			<>
				<h2>Challenge 2</h2>
				<div className="msg">
					<ul>
						{/* display the list of students by iterating through the array */}
						{this.state.arr.length > 0 &&
							this.state.arr.map((stu) => {
								return <li key={stu}>{stu}</li>;
							})}
					</ul>
				</div>
				<button className="btn large" onClick={this.randomize}>
					Randomize
				</button>
			</>
		);
	}
}
