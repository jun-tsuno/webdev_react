import React from "react";
import ReactDOM from "react-dom";
import MediaIcons from "./component/MediaIcons";

const App = () => {
	return (
		<>
			<h1>Hello World~</h1>
			<section>
				<div className="wrapper">
					<MediaIcons />
				</div>
			</section>
		</>
	);
};

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
