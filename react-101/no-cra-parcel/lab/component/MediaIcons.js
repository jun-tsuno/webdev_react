import React from "react";

const medias = [
	{ id: 1, icon: "fa fa-instagram", text: "Instagram" },
	{ id: 2, icon: "fa fa-facebook-f", text: "Facebook" },
	{ id: 3, icon: "fa fa-twitter", text: "Twitter" },
	{ id: 4, icon: "fa fa-youtube", text: "YouTube" },
	{ id: 5, icon: "fa fa-github", text: "GitHub" },
];

const MediaIcons = () => {
	return (
		<>
			{medias.map((media) => {
				return (
					<div key={media.id} className="button">
						<div className="icon">
							<i className={media.icon}></i>
						</div>
						<span>{media.text}</span>
					</div>
				);
			})}
		</>
	);
};

export default MediaIcons;
