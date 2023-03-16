export default function Button({ label, ...rest }) {
	return (
		<button className="Button" {...rest}>
			<div className="Button__Label">{label}</div>
		</button>
	);
}
